import React, { useState } from "react";
import { DataTable } from "@/components/data/table-layout";
import { Button } from "@/components/ui/button";
const months = [
  [87761, 73380, 77520],
  [81297, 87498, 77364],
  [87217, 88239, 89408],
  [91595, 73288, 87102],
  [88428, 73650, 82885],
  [91780, 88873, 85839],
  // July–December are approximate readings from the source plot, which has no second-half ledger.
  [93300, 82100, 91780],
  [78300, 74200, 93300],
  [81500, 75800, 78300],
  [80700, 84600, 81500],
  [86400, 83700, 80700],
  [87400, 77800, 86400],
];
const colors = ["#80a928", "#477dd6", "#94a3b8"];
const format = (v: number) => v.toLocaleString("zh-CN");
export function MonthlyAnalysis() {
  const [active, select] = useState(0);
  const [visible, toggle] = useState([true, true, true]);
  return (
    <>
      <section className="panel">
        <header>年同比分析 · 空压机总管表</header>
        <svg
          viewBox="0 0 660 190"
          role="img"
          aria-label="全年本期、去年同期与上月读数"
        >
          {[0, 25000, 50000, 75000, 100000].map((v) => (
            <g key={v}>
              <text x="0" y={161 - v * 0.0014}>
                {format(v)}
              </text>
              <path
                d={"M55 " + (158 - v * 0.0014) + "h585"}
                stroke="#e5e7eb"
                strokeDasharray="3 3"
              />
            </g>
          ))}
          {colors.map(
            (color, j) =>
              visible[j] && (
                <polyline
                  key={j}
                  fill="none"
                  stroke={color}
                  strokeWidth="2.4"
                  strokeDasharray={j === 2 ? "4 4" : undefined}
                  points={months
                    .map((r, i) => [60 + 52 * i, 158 - r[j] * 0.0014].join(","))
                    .join(" ")}
                />
              ),
          )}
          {months.map((r, i) => (
            <g
              key={i}
              role="button"
              tabIndex={0}
              aria-label={i + 1 + "月读数"}
              onKeyDown={(e) => {
                if (e.key === "Enter") select(i);
              }}
              onClick={() => select(i)}
            >
              <rect
                x={38 + i * 52}
                y="10"
                width="40"
                height="170"
                fill="transparent"
              />
              <circle
                visibility={visible[0] ? "visible" : "hidden"}
                cx={60 + i * 52}
                cy={158 - r[0] * 0.0014}
                r={active === i ? 5 : 3}
                fill={colors[0]}
              />
              <text x={60 + i * 52} y="182" textAnchor="middle">
                {i + 1}月
              </text>
            </g>
          ))}
        </svg>
        <div className="legend">
          {["本期", "去年同期", "上月"].map((x, i) => (
            <Button
              key={x}
              size="sm"
              aria-label={x}
              variant={visible[i] ? "secondary" : "ghost"}
              aria-pressed={visible[i]}
              onClick={() =>
                toggle(visible.map((on, j) => (j === i ? !on : on)))
              }
            >
              <span style={{ color: colors[i] }}>●</span>
              {x}
            </Button>
          ))}
        </div>
        <p className="month-reading">
          {active + 1} 月{active >= 6 ? "（趋势图约值）" : ""} · 本期{" "}
          {format(months[active][0])} kWh · 去年同期 {format(months[active][1])}{" "}
          kWh
        </p>
      </section>
      <DataTable>
        <thead>
          <tr>
            {["月份", "本期", "去年同期", "同比", "上月", "环比"].map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {months.map(([v, y, m], i) => (
            <tr key={i} data-selected={active === i}>
              <td>
                <Button size="sm" variant="link" onClick={() => select(i)}>
                  {i + 1}月{i >= 6 ? "（约）" : ""}
                </Button>
              </td>
              <td>{format(v)}</td>
              <td>{format(y)}</td>
              <td>{((v / y - 1) * 100).toFixed(1)}%</td>
              <td>{format(m)}</td>
              <td>{((v / m - 1) * 100).toFixed(1)}%</td>
            </tr>
          ))}
        </tbody>
      </DataTable>
    </>
  );
}
const branches = [
  ["车间动力电表", 6850],
  ["公用工程电表", 5100, "空压机电表", 2800],
  ["车间1电表", 12350, "1号电机", 4250],
  ["车间2电表", 10280, "2号电机", 3580],
  ["车间3电表", 8650],
] as const;
export function FlowBoard() {
  const [selected, set] = useState(1),
    [zoom, scale] = useState(1);
  const r = branches[selected];
  return (
    <>
      <div className="board-stats">
        {[
          ["总计点位", 9],
          ["厂区", 1],
          ["车间", 5],
          ["设备", 3],
          ["平衡异常", 3],
        ].map(([label, n]) => (
          <div key={label}>
            <small>{label}</small>
            <b>{n}</b>
          </div>
        ))}
      </div>
      <section className="panel">
        <header>计量平衡异常 · 3 处</header>
        <div className="warning-row">
          {branches.slice(1, 4).map((x, i) => (
            <button key={i} onClick={() => set(i + 1)}>
              {x[0]}
              <b>差额 {format(Number(x[1]) - Number(x[3]))} kWh</b>
            </button>
          ))}
        </div>
      </section>
      <section className="panel">
        <header>
          能源流向 · 电力{" "}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scale(zoom === 1 ? 1.35 : 1)}
          >
            {zoom === 1 ? "放大" : "还原"}
          </Button>
        </header>
        <div className="flow-stage">
          <svg
            viewBox="0 0 760 265"
            style={{ width: zoom * 100 + "%" }}
            aria-label="厂区、车间、设备三级电力流向"
          >
            <g stroke="#719ce0" fill="none">
              <path d="M380 55V80 M80 80H680" />
              {branches.map((_, i) => (
                <path key={i} d={"M" + (80 + 150 * i) + " 80v32"} />
              ))}
            </g>
            <rect
              x="305"
              y="6"
              width="150"
              height="49"
              rx="4"
              fill="#edf3ff"
              stroke="#719ce0"
            />
            <text x="380" y="26" textAnchor="middle">
              厂区总进线电表
            </text>
            <text x="380" y="44" textAnchor="middle">
              45,230 kWh
            </text>
            {branches.map((x, i) => (
              <g
                key={i}
                role="button"
                tabIndex={0}
                aria-label={x[0]}
                onClick={() => set(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") set(i);
                }}
              >
                <rect
                  x={15 + 150 * i}
                  y="112"
                  width="130"
                  height="47"
                  rx="4"
                  fill={i === selected ? "#f0f8da" : "white"}
                  stroke={x.length > 2 ? "#e3a35a" : "#719ce0"}
                />
                <text x={80 + 150 * i} y="132" textAnchor="middle">
                  {x[0]}
                </text>
                <text x={80 + 150 * i} y="150" textAnchor="middle">
                  {format(x[1])} kWh
                </text>
                {x.length > 2 && (
                  <>
                    <path
                      d={"M" + (80 + 150 * i) + " 159v34"}
                      stroke="#719ce0"
                    />
                    <rect
                      x={22 + 150 * i}
                      y="193"
                      width="116"
                      height="45"
                      rx="4"
                      fill="white"
                      stroke="#719ce0"
                    />
                    <text x={80 + 150 * i} y="212" textAnchor="middle">
                      {x[2]}
                    </text>
                    <text x={80 + 150 * i} y="229" textAnchor="middle">
                      {format(x[3])} kWh
                    </text>
                  </>
                )}
              </g>
            ))}
          </svg>
        </div>
        <div className="detail">
          {r[0]} · {format(r[1])} kWh{" "}
          {r.length > 2 && "／下级已计量 " + format(r[3]) + " kWh"}
        </div>
      </section>
    </>
  );
}
