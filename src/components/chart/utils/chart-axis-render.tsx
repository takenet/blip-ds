import { h } from '@stencil/core';
import { formatTick } from './chart-math';
import { Margin } from './chart.types';

export const TICK_LENGTH = 6;

export interface XAxisParams {
  xLabels: Array<{ x: number; label: string }>;
  margin: Margin;
  actualHeight: number;
  showTickLine: boolean;
  tickMargin: number;
  tickFormatter?: string;
  lineColor: string;
  labelColor: string;
  hoveredIndex?: number;
}

export interface YAxisParams {
  yLabels: Array<{ y: number; label: string }>;
  margin: Margin;
  showTickLine: boolean;
  tickMargin: number;
  tickFormatter?: string;
  lineColor: string;
  labelColor: string;
}

/**
 * Renders standard bottom X-axis (category labels).
 * Uses `.chart__x-label` CSS class — styled by chart-x-axis.scss.
 */
export function renderXAxisLabels(params: XAxisParams) {
  const { xLabels, margin, actualHeight, showTickLine, tickMargin, tickFormatter, lineColor, labelColor, hoveredIndex = -1 } = params;
  return (
    <g class="chart__x-axis" style={{ pointerEvents: 'none' }}>
      {xLabels.map((label, idx) => (
        <g key={`x-axis-${idx}`}>
          {showTickLine && (
            <line
              x1={margin.left + label.x}
              y1={actualHeight - margin.bottom}
              x2={margin.left + label.x}
              y2={actualHeight - margin.bottom + TICK_LENGTH}
              stroke={lineColor}
              stroke-width="1"
            />
          )}
          <text
            text-anchor="middle"
            fill={labelColor}
            font-weight={idx === hoveredIndex ? 'bold' : 'normal'}
            x={margin.left + label.x}
            y={actualHeight - margin.bottom + TICK_LENGTH + tickMargin}
            class="chart__x-label"
          >
            {formatTick(label.label, tickFormatter)}
          </text>
        </g>
      ))}
    </g>
  );
}

/**
 * Renders standard left Y-axis (value or category labels).
 * Uses `.chart__y-label` CSS class — styled by chart-y-axis.scss.
 */
export function renderYAxisLabels(params: YAxisParams) {
  const { yLabels, margin, showTickLine, tickMargin, tickFormatter, lineColor, labelColor } = params;
  return (
    <g class="chart__y-axis" style={{ pointerEvents: 'none' }}>
      {yLabels.map((label, idx) => (
        <g key={`y-axis-${idx}`}>
          {showTickLine && (
            <line
              x1={margin.left - TICK_LENGTH}
              y1={margin.top + label.y}
              x2={margin.left}
              y2={margin.top + label.y}
              stroke={lineColor}
              stroke-width="1"
            />
          )}
          <text
            text-anchor="end"
            fill={labelColor}
            x={margin.left - (showTickLine ? TICK_LENGTH : 0) - tickMargin}
            y={margin.top + label.y + 4}
            class="chart__y-label"
          >
            {formatTick(label.label, tickFormatter)}
          </text>
        </g>
      ))}
    </g>
  );
}
