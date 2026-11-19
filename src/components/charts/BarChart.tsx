import React from 'react';
import { bhsColors } from '../../data/bhsData';

/* ---------- TYPES ---------- */

interface SingleBarData {
  label: string;
  value: number;
  color?: string;
}

interface GroupedBarData {
  label: string;
  [key: string]: string | number;
}

interface SeriesConfig {
  key: string;
  label: string;
  color: string;
}

interface BarChartProps {
  data: SingleBarData[] | GroupedBarData[];
  title?: string;
  baseline?: number;
  height?: number;
  grouped?: boolean;
  series?: SeriesConfig[];
}

/* ---------- COMPONENT ---------- */

const BarChart: React.FC<BarChartProps> = ({
  data,
  title,
  baseline,
  height = 400,
  grouped = false,
  series = []
}) => {

  const chartLeft = 80;
  const chartRight = 520;
  const chartBottom = 320;
  const chartHeight = 250;
  const chartWidth = chartRight - chartLeft;

  /* ---------- VALUE CALCULATION ---------- */

  const allValues = grouped
    ? (data as GroupedBarData[]).flatMap(d =>
        series.map(s => Number(d[s.key] || 0))
      )
    : (data as SingleBarData[]).map(d => d.value);

  const maxValue = Math.max(...allValues, baseline || 0);
  const minValue = Math.min(...allValues, baseline || 0);
  const range = maxValue - minValue || 1;
  const padding = range * 0.15;

  const chartMax = maxValue + padding;
  const chartMin = Math.max(0, minValue - padding);

  return (
    <div className="w-full px-2 sm:px-0">
      {title && (
        <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4 text-gray-800 text-center sm:text-left">
          {title}
        </h3>
      )}

      {/* ---------- LEGEND (Grouped Only) ---------- */}
      {grouped && (
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 mb-4">
          {series.map(s => (
            <div key={s.key} className="flex items-center gap-2">
              <div
                className="w-3 h-3 sm:w-4 sm:h-4 rounded"
                style={{ backgroundColor: s.color }}
              />
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      )}

      <div
        className="relative bg-white rounded-xl p-3 sm:p-6 shadow-sm border border-gray-100"
        style={{ height }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 600 430"
          preserveAspectRatio="xMidYMid meet"
          className="max-w-full"
        >

          {/* ---------- GRID ---------- */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
            const y = chartBottom - ratio * chartHeight;
            const value = chartMin + (chartMax - chartMin) * ratio;

            return (
              <g key={index}>
                <line
                  x1={chartLeft}
                  y1={y}
                  x2={chartRight}
                  y2={y}
                  stroke={index === 0 ? "#d1d5db" : "#e5e7eb"}
                  strokeWidth={index === 0 ? 2 : 1}
                  strokeDasharray={index === 0 ? "0" : "4,4"}
                />
                <text
                  x={chartLeft - 10}
                  y={y + 5}
                  textAnchor="end"
                  className="text-[10px] sm:text-xs md:text-sm font-semibold fill-gray-700"
                >
                  {value.toFixed(0)}
                </text>
              </g>
            );
          })}

          {/* ---------- BARS ---------- */}

          {grouped
            ? (data as GroupedBarData[]).map((group, index) => {

                const groupWidth = chartWidth / data.length;
                const totalBarWidth = groupWidth * 0.7;
                const singleBarWidth = totalBarWidth / series.length;

                const groupStartX =
                  chartLeft +
                  index * groupWidth +
                  (groupWidth - totalBarWidth) / 2;

                return (
                  <g key={index}>
                    {series.map((s, sIndex) => {
                      const value = Number(group[s.key] || 0);

                      const barHeight =
                        ((value - chartMin) /
                          (chartMax - chartMin)) *
                        chartHeight;

                      const barY = chartBottom - barHeight;

                      const barX =
                        groupStartX +
                        sIndex * singleBarWidth;

                      return (
                        <g key={s.key}>
                          <rect
                            x={barX}
                            y={barY}
                            width={singleBarWidth - 4}
                            height={barHeight}
                            fill={s.color}
                            rx="4"
                          />
                          <text
                            x={barX + singleBarWidth / 2 - 2}
                            y={barY - 6}
                            textAnchor="middle"
                            className="text-[10px] sm:text-xs font-semibold fill-gray-800"
                          >
                            {value.toLocaleString()}
                          </text>
                        </g>
                      );
                    })}

                    {/* LABEL */}
                    <text
                      x={chartLeft + groupWidth * index + groupWidth / 2}
                      y={chartBottom + 20}
                      textAnchor="middle"
                      className="text-xs sm:text-sm font-semibold fill-gray-700"
                    >
                      {group.label}
                    </text>
                  </g>
                );
              })
            : (data as SingleBarData[]).map((item, index) => {

                const groupWidth = chartWidth / data.length;
                const barWidth = groupWidth * 0.6;

                const barX =
                  chartLeft +
                  index * groupWidth +
                  (groupWidth - barWidth) / 2;

                const barHeight =
                  ((item.value - chartMin) /
                    (chartMax - chartMin)) *
                  chartHeight;

                const barY = chartBottom - barHeight;

                const isBelowBaseline =
                  baseline && item.value < baseline;

                return (
                  <g key={index}>
                    <rect
                      x={barX}
                      y={barY}
                      width={barWidth}
                      height={barHeight}
                      fill={
                        item.color ||
                        (isBelowBaseline
                          ? bhsColors.esgGreen
                          : bhsColors.accentOrange)
                      }
                      rx="4"
                    />
                    <text
                      x={barX + barWidth / 2}
                      y={barY - 8}
                      textAnchor="middle"
                      className="text-xs sm:text-sm font-bold fill-gray-800"
                    >
                      {item.value.toLocaleString()}
                    </text>
                    <text
                      x={barX + barWidth / 2}
                      y={chartBottom + 20}
                      textAnchor="middle"
                      className="text-xs sm:text-sm font-semibold fill-gray-700"
                    >
                      {item.label}
                    </text>
                  </g>
                );
              })}

        </svg>
      </div>
    </div>
  );
};

export default BarChart;