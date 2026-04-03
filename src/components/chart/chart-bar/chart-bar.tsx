import { Component, Element, Host, h, Prop, State } from '@stencil/core';
import { ChartDatum, Margin } from './chart.types';
import { calculateBarChartLayout, formatTick, buildCategoryColorMap, BarSeriesConfig } from './chart-math';

type BarConfig = BarSeriesConfig & { color: string; radius: number };

const TICK_LENGTH = 6;
const FONT_SIZE = 12;
const FONT_BASELINE = 4;

@Component({
  tag: 'bds-chart-bar',
  styleUrl: 'chart-bar.scss',
  shadow: true,
})
export class ChartBar {
  @Element() private host!: HTMLElement;

  @Prop() data: ChartDatum[] | string = [];
  @Prop() color = 'var(--color-extended-green, #05b96c)';
  @Prop() barRadius = 6;
  @Prop() vertical: boolean = false;
  @Prop() align: 'left' | 'center' | 'right' = 'left';

  private xKey = 'label';
  private yKey = 'value';

  @State() private actualWidth: number = 640;
  @State() private actualHeight: number = 280;
  @State() private hoveredIndex: number = -1;
  @State() private activeLegendItem: string | null = null;

  private resizeObserver: ResizeObserver | null = null;

  componentDidLoad() {
    this.calculateActualDimensions();
    
    // Setup ResizeObserver for responsive sizing
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        this.calculateActualDimensions();
      });
      this.resizeObserver.observe(this.host);
    }
  }

  disconnectedCallback() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  private calculateActualDimensions() {
    this.actualWidth = this.host.clientWidth || 640;
    const svgEl = this.host.shadowRoot?.querySelector('svg') as unknown as HTMLElement | null;
    this.actualHeight = svgEl?.clientHeight || this.host.clientHeight || 280;
  }

  private readAxisConfig() {
    const parseBoolean = (value: any): boolean => {
      if (typeof value === 'boolean') return value;
      if (typeof value === 'string') return value === 'true';
      return !!value;
    };

    const gridElement = this.host.querySelector('bds-chart-grid') as any;
    const showVerticalGrid = parseBoolean(gridElement?.getAttribute('vertical') ?? gridElement?.vertical ?? 'false');
    const showHorizontalGrid = parseBoolean(gridElement?.getAttribute('horizontal') ?? gridElement?.horizontal ?? 'true');
    const gridStrokeStyle = gridElement?.getAttribute('strokeStyle') ?? gridElement?.strokeStyle ?? 'solid';

    const xAxisElement = this.host.querySelector('bds-x-axis') as any;
    const showXLabels = parseBoolean(xAxisElement?.getAttribute('show') ?? xAxisElement?.show ?? 'true');
    const showXTickLine = parseBoolean(xAxisElement?.getAttribute('tickLine') ?? xAxisElement?.tickLine ?? 'true');
    const xTickMargin = Number(xAxisElement?.getAttribute('tickMargin') ?? xAxisElement?.tickMargin ?? 10);
    const xTickFormatter = xAxisElement?.getAttribute('data-tick-formatter') ?? xAxisElement?.tickFormatter;

    const yAxisElement = this.host.querySelector('bds-y-axis') as any;
    const showYAxisLabels = parseBoolean(yAxisElement?.getAttribute('show') ?? yAxisElement?.show ?? 'true');
    const showYTickLine = parseBoolean(yAxisElement?.getAttribute('tickLine') ?? yAxisElement?.tickLine ?? 'true');
    const yTickMargin = Number(yAxisElement?.getAttribute('tickMargin') ?? yAxisElement?.tickMargin ?? 10);
    const yTickFormatter = yAxisElement?.getAttribute('data-tick-formatter') ?? yAxisElement?.tickFormatter;
    const yTickCount = Number(yAxisElement?.getAttribute('tickCount') ?? yAxisElement?.tickCount ?? 5);

    const barElements = Array.from(this.host.querySelectorAll('bds-bar')) as any[];
    const series: BarConfig[] = barElements.length > 0
      ? barElements.map(el => ({
          dataKey: el.getAttribute('data-data-key') ?? el.getAttribute('dataKey') ?? el.dataKey ?? this.yKey,
          color: el.getAttribute('data-color') ?? el.getAttribute('color') ?? el.color ?? this.color,
          radius: Number(el.getAttribute('data-radius') ?? el.getAttribute('radius') ?? el.radius ?? this.barRadius),
          stackId: el.getAttribute('data-stack-id') ?? el.getAttribute('stackId') ?? el.stackId ?? undefined,
        }))
      : [{ dataKey: this.yKey, color: this.color, radius: this.barRadius, stackId: undefined }];

    const legendElement = this.host.querySelector('bds-chart-legend') as any;
    const showLegend = !!legendElement;
    const legendDataKey: string | undefined = legendElement?.getAttribute('dataKey') ?? legendElement?.dataKey ?? undefined;
    const legendAlign = (legendElement?.getAttribute('align') ?? legendElement?.align ?? 'center') as 'left' | 'center' | 'right';

    return {
      showVerticalGrid, showHorizontalGrid, gridStrokeStyle,
      showXLabels, showXTickLine, xTickMargin, xTickFormatter,
      showYAxisLabels, showYTickLine, yTickMargin, yTickFormatter, yTickCount,
      series,
      showLegend, legendDataKey, legendAlign,
    };
  }

  private computeMargin(config: ReturnType<typeof this.readAxisConfig>): Margin {
    const { showXLabels, showXTickLine, xTickMargin, showYAxisLabels, showYTickLine, yTickMargin } = config;
    if (this.vertical) {
      // Horizontal bar chart: category labels on left, value ticks at bottom
      const left = showXLabels ? 80 : 8;
      const bottom = showYAxisLabels
        ? (showYTickLine ? TICK_LENGTH : 0) + yTickMargin + FONT_SIZE + FONT_BASELINE
        : 8;
      return { top: 20, right: 20, bottom, left };
    }
    const bottom = showXLabels
      ? (showXTickLine ? TICK_LENGTH : 0) + xTickMargin + FONT_SIZE + FONT_BASELINE
      : 8;
    const left = showYAxisLabels
      ? 20 + (showYTickLine ? TICK_LENGTH : 0) + yTickMargin
      : 8;
    return { top: 20, right: 20, bottom, left };
  }

  private handleLegendClick(label: string) {
    this.activeLegendItem = this.activeLegendItem === label ? null : label;
  }

  private prepareBars(series: BarConfig[], margin: Margin, tickCount: number = 5) {
    return calculateBarChartLayout(this.data, this.xKey, series, this.actualWidth, this.actualHeight, margin, tickCount, this.vertical, this.align);
  }

  private emitLeave() {
    this.hoveredIndex = -1;
    this.host.dispatchEvent(new CustomEvent('bdsChartLeave', { bubbles: true, composed: true }));
    
    const tooltipElement = this.host.querySelector('bds-chart-tooltip') as any;
    if (tooltipElement) {
      tooltipElement.setTooltipState({ visible: false });
    }
  }

  private handleCanvasMouseMove(event: MouseEvent) {
    const svg = event.currentTarget as SVGSVGElement;
    if (!svg) return;

    const rect = svg.getBoundingClientRect();
    const config = this.readAxisConfig();
    const margin = this.computeMargin(config);
    const { groups } = this.prepareBars(config.series as BarConfig[], margin, config.yTickCount);
    if (groups.length === 0) return;

    let closestIndex = 0;
    let closestDistance = Infinity;

    if (this.vertical) {
      const y = event.clientY - rect.top;
      groups.forEach((group, index) => {
        const distance = Math.abs(y - (margin.top + group.centerY));
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
    } else {
      const x = event.clientX - rect.left;
      groups.forEach((group, index) => {
        const distance = Math.abs(x - (margin.left + group.centerX));
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
    }

    this.hoveredIndex = closestIndex;
    const datum = groups[closestIndex].datum;

    const tooltipElement = this.host.querySelector('bds-chart-tooltip') as any;
    if (tooltipElement) {
      const entries = config.series.map(s => ({
        color: s.color,
        name: s.dataKey,
        value: datum[s.dataKey] ?? '',
      }));
      tooltipElement.setTooltipState({
        visible: true,
        x: event.clientX,
        y: event.clientY,
        label: datum[this.xKey],
        entries,
      });
    }
  }

  render() {
    const config = this.readAxisConfig();
    const {
      showVerticalGrid, showHorizontalGrid, gridStrokeStyle,
      showXLabels, showXTickLine, xTickMargin, xTickFormatter,
      showYAxisLabels, showYTickLine, yTickMargin, yTickFormatter, yTickCount,
      series,
      showLegend, legendDataKey, legendAlign,
    } = config;

    const margin = this.computeMargin(config);
    const { bars, groups: _groups, xLabels, yLabels, yGridLines, xGridLines } = this.prepareBars(series, margin, yTickCount);

    const seriesMap = new Map(series.map(s => [s.dataKey, s]));

    const categoryColorMap: Map<string, string> | null = (showLegend && legendDataKey)
      ? buildCategoryColorMap(this.data, legendDataKey)
      : null;

    const legendItems: Array<{ label: string; color: string }> = showLegend
      ? (categoryColorMap
          ? Array.from(categoryColorMap.entries()).map(([label, color]) => ({ label, color }))
          : series.map(s => ({ label: s.dataKey, color: s.color })))
      : [];

    const getStrokeDasharray = (style: string): string => {
      switch (style) {
        case 'dashed': return '4,4';
        case 'dotted': return '1,3';
        default: return '';
      }
    };

    return (
      <Host>
        <svg
          width={this.actualWidth}
          height={this.actualHeight}
          class="chart-bar"
          aria-hidden="true"
        >
          {/* Grid lines */}
          {this.vertical && showVerticalGrid && (
            <g class="chart-bar__grid-x" stroke-dasharray={getStrokeDasharray(gridStrokeStyle)}>
              {xLabels.map((label, idx) => (
                <line
                  key={`grid-cat-${idx}`}
                  x1={margin.left}
                  y1={margin.top + label.x}
                  x2={this.actualWidth - margin.right}
                  y2={margin.top + label.x}
                  stroke="rgba(0,0,0,0.05)"
                  stroke-width="1"
                />
              ))}
            </g>
          )}
          {this.vertical && showHorizontalGrid && (
            <g class="chart-bar__grid-y" stroke-dasharray={getStrokeDasharray(gridStrokeStyle)}>
              {yLabels.map((label, idx) => (
                <line
                  key={`grid-val-${idx}`}
                  x1={margin.left + label.y}
                  y1={margin.top}
                  x2={margin.left + label.y}
                  y2={this.actualHeight - margin.bottom}
                  stroke="rgba(0,0,0,0.05)"
                  stroke-width="1"
                />
              ))}
            </g>
          )}
          {!this.vertical && showHorizontalGrid && (
            <g class="chart-bar__grid-y" stroke-dasharray={getStrokeDasharray(gridStrokeStyle)}>
              {yGridLines.map((y, idx) => (
                <line
                  key={`grid-y-${idx}`}
                  x1={margin.left}
                  y1={margin.top + y}
                  x2={this.actualWidth - margin.right}
                  y2={margin.top + y}
                  stroke="rgba(0,0,0,0.05)"
                  stroke-width="1"
                />
              ))}
            </g>
          )}
          {!this.vertical && showVerticalGrid && (
            <g class="chart-bar__grid-x" stroke-dasharray={getStrokeDasharray(gridStrokeStyle)}>
              {xGridLines.map((gridLine, idx) => (
                <line
                  key={`grid-x-${idx}`}
                  x1={margin.left + gridLine.x}
                  y1={margin.top}
                  x2={margin.left + gridLine.x}
                  y2={this.actualHeight - margin.bottom}
                  stroke="rgba(0,0,0,0.05)"
                  stroke-width="1"
                />
              ))}
            </g>
          )}

          {/* Main chart group */}
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            {/* Bars container */}
            <g class="chart-bar__bars">
              {bars.map((bar, index) => {
                const sc = seriesMap.get(bar.dataKey) ?? series[0];
                const barOpacity = this.activeLegendItem
                  ? (legendDataKey
                      ? (this.activeLegendItem === String(bar.datum[legendDataKey]) ? 1 : 0.2)
                      : (this.activeLegendItem === bar.dataKey ? 1 : 0.2))
                  : 1;
                return (
                  <rect
                    key={`bar-${index}`}
                    class="chart-bar__rect"
                    x={bar.x}
                    y={bar.y}
                    width={Math.max(bar.width, 0)}
                    height={Math.max(bar.height, 0)}
                    rx={sc.radius}
                    fill={categoryColorMap && legendDataKey
                      ? (categoryColorMap.get(String(bar.datum[legendDataKey])) ?? sc.color)
                      : sc.color}
                    style={{ pointerEvents: 'none', opacity: String(barOpacity), transition: 'opacity 0.2s ease' }}
                  />
                );
              })}
            </g>

            {/* Hover highlight — all bars in the hovered group */}
            {this.hoveredIndex >= 0 && bars
              .filter(b => b.groupIndex === this.hoveredIndex)
              .map((b, hi) => {
                const sc = seriesMap.get(b.dataKey) ?? series[0];
                return (
                  <rect
                    key={`hover-bg-${hi}`}
                    class="chart-bar__hover-bg"
                    x={b.x}
                    y={b.y}
                    width={Math.max(b.width, 0)}
                    height={Math.max(b.height, 0)}
                    rx={sc.radius}
                    fill="rgba(0,0,0,0.08)"
                    style={{ pointerEvents: 'none' }}
                  />
                );
              })
            }
          </g>

          {/* X-axis (categories at bottom in default; categories on left in vertical) */}
          {showXLabels && (
            <g class="chart-bar__x-axis" style={{ pointerEvents: 'none' }}>
              {xLabels.map((label, idx) => (
                <g key={`x-axis-${idx}`}>
                  {this.vertical ? (
                    // Vertical mode: category label on Y axis (left)
                    <text
                      text-anchor="end"
                      font-size="12"
                      fill="rgba(0,0,0,0.6)"
                      x={margin.left - 8}
                      y={margin.top + label.x + 4}
                      class="chart-bar__x-label"
                    >
                      {formatTick(label.label, xTickFormatter)}
                    </text>
                  ) : (
                    // Default: category label on X axis (bottom)
                    <g>
                      {showXTickLine && (
                        <line
                          x1={margin.left + label.x}
                          y1={this.actualHeight - margin.bottom}
                          x2={margin.left + label.x}
                          y2={this.actualHeight - margin.bottom + 6}
                          stroke="rgba(0,0,0,0.3)"
                          stroke-width="1"
                        />
                      )}
                      <text
                        text-anchor="middle"
                        font-size="12"
                        fill="rgba(0,0,0,0.6)"
                        x={margin.left + label.x}
                        y={this.actualHeight - margin.bottom + 6 + xTickMargin}
                        class="chart-bar__x-label"
                      >
                        {formatTick(label.label, xTickFormatter)}
                      </text>
                    </g>
                  )}
                </g>
              ))}
            </g>
          )}

          {/* Y-axis (values on left in default; values at bottom in vertical) */}
          {showYAxisLabels && (
            <g class="chart-bar__y-axis" style={{ pointerEvents: 'none' }}>
              {yLabels.map((label, idx) => (
                <g key={`y-axis-${idx}`}>
                  {this.vertical ? (
                    // Vertical mode: value tick on X axis (bottom)
                    <g>
                      {showYTickLine && (
                        <line
                          x1={margin.left + label.y}
                          y1={this.actualHeight - margin.bottom}
                          x2={margin.left + label.y}
                          y2={this.actualHeight - margin.bottom + 6}
                          stroke="rgba(0,0,0,0.3)"
                          stroke-width="1"
                        />
                      )}
                      <text
                        text-anchor="middle"
                        font-size="12"
                        fill="rgba(0,0,0,0.6)"
                        x={margin.left + label.y}
                        y={this.actualHeight - margin.bottom + 6 + yTickMargin}
                        class="chart-bar__y-label"
                      >
                        {formatTick(label.label, yTickFormatter)}
                      </text>
                    </g>
                  ) : (
                    // Default: value tick on Y axis (left)
                    <g>
                      {showYTickLine && (
                        <line
                          x1={margin.left - 6}
                          y1={margin.top + label.y}
                          x2={margin.left}
                          y2={margin.top + label.y}
                          stroke="rgba(0,0,0,0.3)"
                          stroke-width="1"
                        />
                      )}
                      <text
                        text-anchor="end"
                        font-size="12"
                        fill="rgba(0,0,0,0.6)"
                        x={margin.left - 6 - yTickMargin}
                        y={margin.top + label.y + 4}
                        class="chart-bar__y-label"
                      >
                        {formatTick(label.label, yTickFormatter)}
                      </text>
                    </g>
                  )}
                </g>
              ))}
            </g>
          )}

          {/* Invisible overlay rect for mouse events */}
          <rect
            key="chart-overlay"
            x={0}
            y={0}
            width={this.actualWidth}
            height={this.actualHeight}
            fill="transparent"
            style={{ cursor: 'default' }}
            onMouseMove={(e) => this.handleCanvasMouseMove(e as MouseEvent)}
            onMouseLeave={() => this.emitLeave()}
          />
        </svg>
        {showLegend && legendItems.length > 0 && (
          <div class="chart__legend">
            <ul
              class="chart__legend-list"
              style={{ justifyContent: legendAlign === 'left' ? 'flex-start' : legendAlign === 'right' ? 'flex-end' : 'center' }}
            >
              {legendItems.map((item) => (
                <li
                  key={`legend-${item.label}`}
                  class={`chart__legend-item${this.activeLegendItem && this.activeLegendItem !== item.label ? ' chart__legend-item--inactive' : ''}`}
                  onClick={() => this.handleLegendClick(item.label)}
                >
                  <span class="chart__legend-item-color" style={{ background: item.color }}></span>
                  <span class="chart__legend-item-label">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <slot></slot>
      </Host>
    );
  }
}
