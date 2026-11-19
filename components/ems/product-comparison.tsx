import React, { useState } from "react";
import { StatCard } from "@/components/ui/stat-card";
import { DataTable } from "@/components/data/table-layout";

const conditions = ["标准工况", "高负荷", "低负荷", "夏季", "冬季"];
const colors = ["#9fc827", "#477bd8", "#df9c34", "#d95353", "#8656d6"];
// Heights transcribed from the supplied chart. Exact readings below come from its detail ledger.
const profiles = [
  [82, 86, 73, 99, 91],
  [67, 71, 58, 73, 60],
  [105, 126, 91, 119, 108],
  [5, 5, 5, 5, 5],
  [8, 10, 7, 9, 9],
];
const detail = [
  ["标准工况", "116.39", "128.05", "128.56", "110.47", "218.5474"],
  ["高负荷", "122.50", "158.22", "127.38", "160.02", "229.6"],
  ["低负荷", "111.15", "101.06", "113.41", "116.93", "194.2"],
];
export function ProductComparison() {
  const [condition, select] = useState(-1);
  return (
    <>
      <section className="panel">
        <header>
          产品单耗对比
          <select
            aria-label="筛选图表工况"
            value={condition}
            onChange={(e) => select(Number(e.target.value))}
          >
            <option value={-1}>全部工况</option>
            {conditions.map((c, i) => (
              <option key={c} value={i}>
                {c}
              </option>
            ))}
          </select>
        </header>
        <svg
          viewBox="0 0 680 190"
          role="img"
          aria-label="五种工况下产品 A 至 E 的单耗对比，产品 C 最高"
        >
          {[0, 85, 170, 255, 340].map((v, i) => (
            <g key={v}>
              <text x="32" y={157 - i * 32} textAnchor="end">
                {v}
              </text>
              <path d={"M38 " + (154 - i * 32) + "h630"} stroke="#ececef" />
            </g>
          ))}
          {profiles.map((profile, i) => (
            <g key={i}>
              {profile.map(
                (h, j) =>
                  (condition < 0 || j === condition) && (
                    <rect
                      key={j}
                      x={50 + i * 125 + j * 19}
                      y={154 - h}
                      width="17"
                      height={h}
                      rx="2"
                      fill={colors[j]}
                    >
                      <title>
                        {"产品 " +
                          String.fromCharCode(65 + i) +
                          " · " +
                          conditions[j]}
                      </title>
                    </rect>
                  ),
              )}
              <text x={96 + i * 125} y="178" textAnchor="middle">
                产品 {String.fromCharCode(65 + i)}
              </text>
            </g>
          ))}
        </svg>
        <div className="legend">
          {conditions.map((c, i) => (
            <span key={c} style={{ color: colors[i] }}>
              ● {c}
            </span>
          ))}
        </div>
      </section>
      <div className="stats four">
        {["142.7241", "159.0397", "124.2193", "163.2447"].map((v, i) => (
          <StatCard
            key={v}
            onClick={() => select(condition === i ? -1 : i)}
            active={condition === i}
            label={conditions[i]}
            value={v}
            footer={<small>tce/件</small>}
          />
        ))}
      </div>
      <section className="panel">
        <header>产品 A · 工况明细</header>
        <DataTable bare>
          <thead>
            <tr>
              {[
                "工况",
                "压缩空气 m³",
                "电力 kWh",
                "天然气 m³",
                "氧气 m³",
                "标煤当量 tce",
              ].map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {detail.map((row) => (
              <tr key={row[0]}>
                {row.map((v, i) => (
                  <td key={i}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </DataTable>
      </section>
    </>
  );
}
