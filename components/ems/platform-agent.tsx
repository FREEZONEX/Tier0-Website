import React, { useState, useRef } from "react";
import { createRoot } from "react-dom/client";
import { IntlProvider } from "use-intl";
import { Textarea } from "@platformUI/textarea";
import { Button } from "@platformUI/button";
import { Table } from "@platformUI/table";
import { Card } from "@platformUI/card";
import { periodData, number } from "./energy-data";

import { RenderMessageSegments } from "@frontend/components/chat-panel/message-content";
import { WidgetCardHeader } from "@frontend/components/uns-canvas/widget-card-header";
import messages from "@agentMessages";

const questions = [
  [
    "用能概况",
    "用电量增加了，能效也变差了吗？",
    "一车间产品 A 的用电量增长 14%，产量增长 20%。产量增长更快，每件产品用电从 10 降至 9.5 kWh。",
    "Factory_A/Workshop_01/Metric/monthly_energy_production",
  ],
  [
    "计量差额",
    "总表与分表之间差了多少？",
    "同期总表为 10,000 kWh，分表合计 8,000 kWh。2,000 kWh 差额占总表的 20%。先核对分表覆盖、读数时间和仪表状态。",
    "Factory_A/Metric/meter_balance",
  ],
  [
    "风险排查",
    "哪些异常应先处理？",
    "一车间总表功率超过阈值，二车间分表读数中断。分别由能源主管和仪表员核对功率曲线与采集状态。",
    "Factory_A/Workshop_01/State/energy_alarms",
  ],
];
function Icon({ name }: { name: string }) {
  return (
    <img
      className="design-icon"
      src={"/assets/ems-ui/agent-icons/" + name + ".svg"}
      alt=""
    />
  );
}
function Tool({
  icon,
  label,
  onClick,
  pressed,
}: {
  icon: string;
  label: string;
  onClick: () => void;
  pressed?: boolean;
}) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      title={label}
      aria-label={label}
      aria-pressed={pressed}
      onClick={onClick}
    >
      <Icon name={icon} />
    </Button>
  );
}
function Widget({ name, icon, topics, add, children }) {
  return (
    <Card className="analysis-widget">
      <header>
        <Icon name={icon} />
        <WidgetCardHeader
          titleLabel={name}
          topics={topics}
          mqttConnected={false}
          onAddToChat={add}
        />
      </header>
      <div className="widget-data">{children}</div>
    </Card>
  );
}
function Agent() {
  const [tab, go] = useState("对话"),
    [index, choose] = useState(0),
    [input, type] = useState(""),
    [hint, notify] = useState(""),
    [pinned, pin] = useState<number[]>([]),
    [time, setTime] = useState("09:00"),
    [saved, setSaved] = useState("");
  const editor = useRef<HTMLTextAreaElement>(null),
    q = questions[index];
  function show(i: number) {
    choose(i);
    notify("");
    go("对话");
  }
  function send() {
    if (!input.trim()) return;
    const i = /差额|分表|总表/.test(input)
      ? 1
      : /风险|异常|告警/.test(input)
        ? 2
        : /能耗|用能|产量|单耗|用电/.test(input)
          ? 0
          : -1;
    if (i < 0) {
      notify("请选择用能、计量差额或风险排查相关的问题。");
      return;
    }
    show(i);
    type("");
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(q[2]);
      notify("已复制回复");
    } catch {
      notify("请选中回复文字复制。");
    }
  }
  return (
    <main className="assistant-shell">
      <header className="conversation-head">
        <strong>UNS 智能助手</strong>
        <span>能源业务分析</span>
        <Tool
          label="开始提问"
          icon="MessageSquarePlus"
          onClick={() => {
            go("对话");
            type("");
            requestAnimationFrame(() => editor.current?.focus());
          }}
        />
      </header>
      <nav className="view-tabs">
        {["对话", "分析卡片", "定时任务"].map((t) => (
          <Button
            key={t}
            variant="ghost"
            size="sm"
            aria-pressed={t === tab}
            onClick={() => {
              go(t);
              notify("");
            }}
          >
            {t}
          </Button>
        ))}
      </nav>
      <div className="scroll-region" key={tab}>
        {tab === "对话" ? (
          <>
            <div className="user-message">
              <span className="context-chip">
                <Icon name="Table2" />
                一车间
              </span>
              <RenderMessageSegments
                segments={[{ kind: "text", text: q[1] }]}
                defaultCardLabel="分析卡片"
              />
            </div>
            <details className="source">
              <summary>
                <Icon name="Check" />
                已读取计量数据
              </summary>
              <code>{q[3]}</code>
            </details>
            <p className="answer">{q[2]}</p>
            {index === 0 ? (
              <Widget
                name="月度用能明细"
                icon="Table"
                topics={[q[3]]}
                add={() => {
                  pin([...new Set([...pinned, index])]);
                  notify("已添加到分析卡片");
                }}
              >
                <Table>
                  <thead>
                    <tr>
                      {["周期", "用电量", "产量", "单耗"].map((x) => (
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
                </Table>
              </Widget>
            ) : (
              <div className="field-list">
                {(index === 1
                  ? [
                      ["总表", "10,000 kWh"],
                      ["分表合计", "8,000 kWh"],
                      ["待核差额", "2,000 kWh"],
                    ]
                  : [
                      ["功率超限", "能源主管"],
                      ["采集读数中断", "仪表员"],
                    ]
                ).map(([k, v]) => (
                  <div key={k}>
                    <strong>{k}</strong>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="reply-actions">
              <Button variant="outline" size="sm" onClick={copy}>
                <Icon name="Copy" />
                复制
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  pin([...new Set([...pinned, index])]);
                  notify("已添加到分析卡片");
                }}
              >
                {pinned.includes(index) ? "已添加到看板" : "添加到看板"}
              </Button>
            </div>
          </>
        ) : tab === "分析卡片" ? (
          <>
            <Widget
              name="能耗指标"
              icon="Metric"
              topics={[questions[0][3]]}
              add={() => show(0)}
            >
              {[
                ["用电量", "11,400", "kWh", "+14%"],
                ["单位产品耗电", "9.5", "kWh/件", "−5%"],
              ].map(([label, value, unit, delta]) => (
                <div className="kpi-row" key={label}>
                  <small>{label}</small>
                  <div>
                    <strong>{value}</strong> {unit}
                    <svg viewBox="0 0 76 26" aria-label="七月至八月变化">
                      <path
                        d={delta === "+14%" ? "M2 23L74 3" : "M2 3L74 23"}
                        fill="none"
                        stroke="#9bc900"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span>{delta}</span> 较上月
                </div>
              ))}
            </Widget>
            {(pinned.length ? pinned : [0]).map((i) => (
              <Widget
                key={i}
                name={questions[i][0]}
                icon="Table"
                topics={[questions[i][3]]}
                add={() => show(i)}
              >
                <p>{questions[i][2]}</p>
                <Button size="sm" variant="ghost" onClick={() => show(i)}>
                  查看对话
                </Button>
              </Widget>
            ))}
          </>
        ) : (
          <section className="task">
            <strong>每日用能汇总</strong>
            <p>汇总上一完整周期的用电量、产量、单耗和缺失读数。</p>
            <label>
              汇总时间{" "}
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </label>
            <Button size="sm" variant="outline" onClick={() => setSaved(time)}>
              保存预览配置
            </Button>
            {saved && <p>每日 {saved} 汇总</p>}
          </section>
        )}
      </div>
      {tab === "对话" && (
        <footer>
          <div className="suggestions">
            {questions.map(([label], i) => (
              <Button
                key={label}
                variant="ghost"
                size="sm"
                aria-pressed={index === i}
                onClick={() => show(i)}
              >
                {label}
              </Button>
            ))}
          </div>
          {hint && <small role="status">{hint}</small>}
          <form
            className="composer"
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <span className="context-chip">
              <Icon name="Table2" />
              一车间
            </span>
            <Textarea
              ref={editor}
              aria-label="继续提问"
              placeholder="继续提问…"
              value={input}
              onChange={(e) => type(e.target.value)}
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" &&
                  !e.shiftKey &&
                  !e.nativeEvent.isComposing
                ) {
                  e.preventDefault();
                  send();
                }
              }}
            />
            <div className="composer-actions">
              <span>
                <Icon name="IconMousePointer2" />
                只读
              </span>
              <Button
                type="submit"
                size="sm"
                disabled={!input.trim()}
                aria-label="发送"
              >
                <Icon name="IconArrowUp" />
              </Button>
            </div>
          </form>
        </footer>
      )}
    </main>
  );
}
createRoot(document.getElementById("root")!).render(
  <IntlProvider locale="zh-CN" messages={{ uns: messages }}>
    <Agent />
  </IntlProvider>,
);
