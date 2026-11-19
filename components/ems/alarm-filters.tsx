import React from "react";
import { Button } from "@/components/ui/button";

export type AlarmFilter = {
  field: "shop" | "priority" | "day";
  value: string;
} | null;
type Record = { shop: string; priority: string; day: string };
export function AlarmFilters({
  rows,
  filter,
  change,
}: {
  rows: Record[];
  filter: AlarmFilter;
  change: (value: AlarmFilter) => void;
}) {
  const count = (field: keyof Record, value: string) =>
    rows.filter((row) => row[field] === value).length;
  function choose(field: keyof Record, value: string) {
    change(
      filter?.field === field && filter.value === value
        ? null
        : { field, value },
    );
  }
  const active = (field: keyof Record, value: string) =>
    filter?.field === field && filter.value === value;
  const priorities = ["高", "中", "低"],
    colors = ["#be5147", "#cf9138", "#718f51"];
  const days = Array.from({ length: 7 }, (_, i) => "9/" + (11 + i));
  let offset = 0;
  return (
    <>
      <div className="alarm-charts">
        <section className="panel">
          <header>车间告警分布</header>
          <div className="workshop-bars">
            {["一车间", "二车间", "动力车间", "三车间"].map((shop) => (
              <Button
                key={shop}
                size="sm"
                variant="ghost"
                aria-pressed={active("shop", shop)}
                onClick={() => choose("shop", shop)}
              >
                <span>{shop}</span>
                <i
                  style={{
                    width: (count("shop", shop) / rows.length) * 100 + "%",
                  }}
                />
                <b>{count("shop", shop)}</b>
              </Button>
            ))}
          </div>
        </section>
        <section className="panel">
          <header>优先级分布</header>
          <div className="priority-chart">
            <svg viewBox="0 0 100 100" aria-label="告警优先级数量">
              {priorities.map((p, i) => {
                const share = (count("priority", p) / rows.length) * 100,
                  start = offset;
                offset += share;
                return (
                  share > 0 && (
                    <circle
                      key={p}
                      cx="50"
                      cy="50"
                      r="36"
                      fill="none"
                      stroke={colors[i]}
                      strokeWidth="14"
                      pathLength="100"
                      transform="rotate(-90 50 50)"
                      strokeDasharray={share + " " + (100 - share)}
                      strokeDashoffset={-start}
                      onClick={() => choose("priority", p)}
                    >
                      <title>
                        {p}优先级 · {count("priority", p)} 条
                      </title>
                    </circle>
                  )
                );
              })}
              <text x="50" y="54" textAnchor="middle">
                {rows.length} 条
              </text>
            </svg>
            <div>
              {priorities.map((p, i) => (
                <Button
                  key={p}
                  size="sm"
                  variant="ghost"
                  aria-pressed={active("priority", p)}
                  onClick={() => choose("priority", p)}
                >
                  <i style={{ background: colors[i] }} />
                  {p} · {count("priority", p)}
                </Button>
              ))}
            </div>
          </div>
        </section>
        <section className="panel">
          <header>近七天告警</header>
          <svg viewBox="0 0 250 110" aria-label="按日期筛选告警">
            <path
              d="M15 88H235 M15 52H235 M15 16H235"
              stroke="#e7e7e7"
              fill="none"
            />
            <polyline
              fill="none"
              stroke="#6384b0"
              strokeWidth="2"
              points={days
                .map((d, i) =>
                  [20 + i * 35, 88 - count("day", d) * 24].join(","),
                )
                .join(" ")}
            />
            {days.map((d, i) => (
              <g
                key={d}
                tabIndex={0}
                role="button"
                aria-label={d + "，" + count("day", d) + "条告警"}
                onClick={() => choose("day", d)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    choose("day", d);
                  }
                }}
              >
                <rect
                  x={4 + i * 35}
                  y="0"
                  width="32"
                  height="110"
                  fill="transparent"
                />
                <circle
                  cx={20 + i * 35}
                  cy={88 - count("day", d) * 24}
                  r={active("day", d) ? 5 : 3}
                  fill="#6384b0"
                />
                <text x={20 + i * 35} y="104" textAnchor="middle">
                  {d}
                </text>
              </g>
            ))}
          </svg>
        </section>
      </div>
      {filter && (
        <div className="filter-row">
          <span>
            {filter.field === "priority"
              ? filter.value + "优先级"
              : filter.value}{" "}
            · {count(filter.field, filter.value)} 条告警
          </span>
          <Button size="sm" variant="ghost" onClick={() => change(null)}>
            清除筛选
          </Button>
        </div>
      )}
    </>
  );
}
