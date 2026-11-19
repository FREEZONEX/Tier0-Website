import { AlarmFilters, type AlarmFilter } from "./alarm-filters";
import { ProductComparison } from "./product-comparison";
import { MonthlyAnalysis, FlowBoard } from "./reference-boards";
import { SceneShell } from "./scene-shell";
import {
  DualAxisChart,
  StackedUsageChart,
} from "@/components/charts/board-charts";
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  PanelLeft,
  Zap,
  Boxes,
  Gauge,
  TriangleAlert,
  Workflow,
  ClipboardList,
} from "lucide-react";
import { StatCard } from "@/components/ui/stat-card";
import { DataTable } from "@/components/data/table-layout";
import { StatusBadge } from "@/components/ui/status-badge";
import { Button } from "@/components/ui/button";
import { periodData, number } from "./energy-data";
const original = [
  {
    meter: "一车间总表",
    shop: "一车间",
    priority: "高",
    day: "9/17",
    issue: "功率超过设定阈值",
    owner: "能源主管",
    check: "对齐功率曲线和开机时段，核对设定阈值。",
    note: "",
  },
  {
    meter: "二车间分表",
    shop: "二车间",
    priority: "高",
    day: "9/17",
    issue: "读数更新中断",
    owner: "仪表员",
    check: "核对仪表通信与最后更新时间，恢复采集后复查读数。",
    note: "",
  },
];
const history = [
  ["车间2蒸汽表", "二车间", "高", "9/11", "蒸汽压力超限"],
  ["1号炉燃气入口", "一车间", "中", "9/12", "燃气流量超限"],
  ["车间1天然气表", "一车间", "中", "9/13", "燃气读数异常"],
  ["厂区总电表", "动力车间", "中", "9/14", "瞬时功率超限"],
  ["动力车间天然气表", "动力车间", "中", "9/15", "读数更新中断"],
  ["三车间电表", "三车间", "中", "9/16", "峰值功率异常"],
].map(([meter, shop, priority, day, issue]) => ({
  meter,
  shop,
  priority,
  day,
  issue,
  owner: "值班员",
  check: "核对计量读数及设备运行记录。",
  note: "已复核并恢复正常。",
}));
function useAlarms() {
  const [rows, setRows] = useState(
    () => parent.emsAlarmRecords || [...original, ...history],
  );
  useEffect(() => {
    const sync = () => setRows(parent.emsAlarmRecords);
    parent.addEventListener("ems-alarm-change", sync);
    return () => parent.removeEventListener("ems-alarm-change", sync);
  }, []);
  return [
    rows,
    (next) => {
      parent.emsAlarmRecords = next;
      parent.dispatchEvent(new parent.Event("ems-alarm-change"));
    },
  ] as const;
}
function AlarmList({ filter }: { filter: AlarmFilter }) {
  const [rows, save] = useAlarms(),
    [selected, select] = useState(0),
    [note, edit] = useState("");
  const visible = rows.filter(
    (r) => !filter || r[filter.field] === filter.value,
  );
  const alarm = visible.find((r) => r === rows[selected]) || visible[0];
  return (
    <section className="panel">
      <header>
        <ClipboardList />
        能源告警记录
      </header>
      <DataTable bare>
        <thead>
          <tr>
            {["计量点", "异常", "负责人", "状态"].map((x) => (
              <th key={x}>{x}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visible.map((r) => (
            <tr key={r.meter} data-selected={r === alarm}>
              <td>
                <Button
                  size="sm"
                  variant="link"
                  onClick={() => {
                    select(rows.indexOf(r));
                    edit("");
                  }}
                >
                  {r.meter}
                </Button>
              </td>
              <td>{r.issue}</td>
              <td>{r.owner}</td>
              <td>
                <StatusBadge status={r.note ? "已关闭" : "待处理"} />
              </td>
            </tr>
          ))}
        </tbody>
      </DataTable>
      {alarm ? (
        <div className="detail">
          <h3>{alarm.meter} · 复查记录</h3>
          <p>{alarm.check}</p>
          {alarm.note ? (
            <p>{alarm.note}</p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (note.trim())
                  save(
                    rows.map((r, i) =>
                      r === alarm ? { ...r, note: note.trim() } : r,
                    ),
                  );
              }}
            >
              <label>
                处理结果
                <textarea
                  value={note}
                  onChange={(e) => edit(e.target.value)}
                  placeholder="记录原因、处理动作和复查结果"
                  required
                />
              </label>
              <Button type="submit" size="sm" disabled={!note.trim()}>
                保存并关闭告警
              </Button>
            </form>
          )}
        </div>
      ) : (
        <p className="detail">没有符合条件的告警。</p>
      )}
    </section>
  );
}
function Numbers({ index }: { index: number }) {
  const r = periodData[index];
  return (
    <div className="stats">
      <StatCard
        label="用电量"
        value={number(r.energy)}
        unit="kWh"
        icon={<Zap />}
      />
      <StatCard
        label="产品产量"
        value={number(r.output)}
        unit="件"
        icon={<Boxes />}
      />
      <StatCard
        label="单位产品耗电"
        value={r.energy / r.output}
        unit="kWh/件"
        icon={<Gauge />}
      />
    </div>
  );
}
function UnitLedger() {
  const [metric, selectMetric] = useState("单耗");
  const values = periodData.map((r) =>
    metric === "单耗" ? r.energy / r.output : r.output,
  );
  const unit = metric === "单耗" ? "kWh/件" : "件";
  return (
    <section className="panel">
      <header>
        <Gauge />
        产品 A · 单耗核算
      </header>
      <div className="detail">
        <nav>
          {["单耗", "产量"].map((m) => (
            <Button
              key={m}
              size="sm"
              variant={metric === m ? "secondary" : "ghost"}
              onClick={() => selectMetric(m)}
            >
              {m}
            </Button>
          ))}
        </nav>
        <div className="comparison">
          {values.map((value, i) => (
            <div key={i}>
              <span>{periodData[i].month}</span>
              <meter
                min={0}
                max={Math.max(...values)}
                value={value}
                aria-label={periodData[i].month + metric}
              />
              <strong>
                {number(value)} {unit}
              </strong>
            </div>
          ))}
        </div>
      </div>
      <DataTable bare>
        <thead>
          <tr>
            {["统计周期", "用电量", "产量", "单耗"].map((x) => (
              <th key={x}>{x}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {periodData.map((r) => (
            <tr key={r.month}>
              <td>{r.month}</td>
              <td>{number(r.energy)} kWh</td>
              <td>{number(r.output)} 件</td>
              <td>{r.energy / r.output} kWh/件</td>
            </tr>
          ))}
        </tbody>
      </DataTable>
      <div className="detail">
        <h3>8 月每件产品少用 0.5 kWh</h3>
        <p>
          按 7 月的单耗生产 1,200 件，需要 12,000 kWh。8 月实际用电 11,400
          kWh，比这个基准低 600 kWh。
        </p>
        <small>比较口径：一车间、产品 A、完整自然月。</small>
      </div>
    </section>
  );
}
const pages = [
  ["hero", "能源总览", Gauge],
  ["namespace", "计量点管理", Workflow],
  ["scenarios", "能耗分析", Zap],
  ["flow", "计量平衡", Boxes],
  ["unit", "产品单耗", ClipboardList],
  ["alarms", "能源告警", TriangleAlert],
] as const;
function Trend({ unit = false }: { unit?: boolean }) {
  return (
    <section className="panel chart-panel">
      <header>
        {unit ? "产品 A · 产量与单耗" : "一车间 · 月度用电与产量"}
      </header>
      <div className="plot">
        <DualAxisChart
          surface="card"
          title={unit ? "产量与单耗" : "月度用电与产量"}
          points={periodData.map((r) => ({
            key: r.month,
            label: r.month,
            bar: unit ? r.output : r.energy,
            line: unit ? r.energy / r.output : r.output,
          }))}
          bar={{
            name: unit ? "产量" : "用电量",
            unit: unit ? "件" : "kWh",
            color: "#96c737",
            format: number,
          }}
          line={{
            name: unit ? "单耗" : "产量",
            unit: unit ? "kWh/件" : "件",
            color: "#5181d7",
            format: number,
          }}
        />
      </div>
    </section>
  );
}
function Overview({ analysis = false }: { analysis?: boolean }) {
  const [month, setMonth] = useState(1);
  return (
    <>
      <div className="filter-row">
        <span>一车间 / 产品 A</span>
        <label>
          统计月份{" "}
          <select value={month} onChange={(e) => setMonth(+e.target.value)}>
            {periodData.map((r, i) => (
              <option key={i} value={i}>
                {r.month}
              </option>
            ))}
          </select>
        </label>
      </div>
      <Numbers index={month} />
      <div className="ems-analysis-grid">
        <Trend />
        {
          <section className="panel detail">
            <h3>{month ? "8 月变化归因" : "7 月比较基准"}</h3>
            <p>
              {month
                ? "用电增长 14%，同期产量增长 20%。核对同一产品与计量范围后，每件用电下降 5%。"
                : "以 10,000 kWh 和 1,000 件产量建立月度基准。"}
            </p>
          </section>
        }
      </div>
    </>
  );
}
const meters = [
  [
    "一车间总表",
    "累计电量",
    "electricity_total",
    "kWh",
    "按周期起止读数求差，得到车间用电量。",
  ],
  [
    "一车间总表",
    "瞬时功率",
    "power",
    "kW",
    "与设备开机时段对照，复核超限告警。",
  ],
  [
    "二车间分表",
    "仪表状态",
    "meter_status",
    "状态",
    "检查读数更新时间，再确认通信与采集状态。",
  ],
];
function MeterRegistry() {
  const [i, select] = useState(0);
  return (
    <>
      <section className="panel">
        <header>计量点台账</header>
        <DataTable bare>
          <thead>
            <tr>
              {["计量点", "采集项", "字段", "单位"].map((t) => (
                <th key={t}>{t}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {meters.map((r, n) => (
              <tr key={r[2]} data-selected={i === n}>
                <td>
                  <Button variant="link" size="sm" onClick={() => select(n)}>
                    {r[0]}
                  </Button>
                </td>
                {r.slice(1, 4).map((c) => (
                  <td key={c}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </DataTable>
      </section>
      <section className="panel detail">
        <h3>{meters[i][1]} · 字段详情</h3>
        <code>{meters[i][2]}</code>
        <p>{meters[i][4]}</p>
      </section>
    </>
  );
}
function Balance() {
  return (
    <>
      <div className="stats">
        <StatCard label="同期总表" value="10,000" unit="kWh" />
        <StatCard label="分表合计" value="8,000" unit="kWh" />
        <StatCard label="待核查差额" value="2,000" unit="kWh" />
      </div>
      <section className="panel chart-panel">
        <header>计量覆盖 · 同期读数</header>
        <StackedUsageChart
          title="总表与分表核对"
          height={190}
          points={[
            {
              key: "meter",
              label: "总表",
              values: { meter: 10000, sub: 0, gap: 0 },
            },
            {
              key: "parts",
              label: "分表核对",
              values: { meter: 0, sub: 8000, gap: 2000 },
            },
          ]}
          series={[
            { key: "meter", name: "总表", color: "#6980a3" },
            { key: "sub", name: "已覆盖", color: "#a2cd52" },
            { key: "gap", name: "待核查", color: "#e6af4c" },
          ]}
        />
      </section>
      <section className="panel detail">
        <h3>20% 差额待核查</h3>
        <p>依次核对分表覆盖范围、统计起止时间和仪表状态，再判断差额原因。</p>
      </section>
    </>
  );
}
function AlarmWorkspace() {
  const [filter, setFilter] = useState<AlarmFilter>(null);
  const [rows] = useAlarms(),
    closed = rows.filter((r) => r.note).length;
  return (
    <>
      <div className="stats four">
        <StatCard
          label="当前告警"
          value={rows.length - closed}
          icon={<TriangleAlert />}
        />
        <StatCard label="已确认" value={0} />
        <StatCard label="已解决" value={closed} />
        <StatCard label="告警总数" value={rows.length} />
      </div>
      <AlarmFilters rows={rows} filter={filter} change={setFilter} />
      <AlarmList key={filter?.field + String(filter?.value)} filter={filter} />
    </>
  );
}
function Workspace() {
  const initial =
    pages.find((p) => p[0] === location.hash.slice(1)) || pages[0];
  const [view, navigate] = useState(initial[0]);
  const current = pages.find((p) => p[0] === view)!;
  return (
    <SceneShell active={view} select={navigate}>
      <div className="ems-workbench">
        <h2>{current[1]}</h2>
        {view === "unit" ? (
          <>
            <ProductComparison />
          </>
        ) : view === "alarms" ? (
          <AlarmWorkspace />
        ) : view === "namespace" ? (
          <MeterRegistry />
        ) : view === "flow" ? (
          <FlowBoard />
        ) : view === "scenarios" ? (
          <MonthlyAnalysis />
        ) : (
          <Overview />
        )}
      </div>
    </SceneShell>
  );
}
createRoot(document.getElementById("root")!).render(<Workspace />);
