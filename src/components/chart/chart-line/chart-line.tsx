import { Component, Element, Host, h, Prop, State } from '@stencil/core';
import { ChartDatum, Margin } from './chart.types';
import { calculateLineChartLayout, formatTick, buildCategoryColorMap, DEFAULT_LEGEND_PALETTE } from './chart-math';

// Pixel constants used for dynamic margin computation
const TICK_LENGTH = 6;    // length of tick mark line
const FONT_SIZE = 12;     // SVG label font-size
const FONT_BASELINE = 4;  // extra baseline offset for SVG text

@Component({
  tag: 'bds-chart-line',
  styleUrl: 'chart-line.scss',
  shadow: true,
})
export class ChartLine {
  @Element() private host!: HTMLElement;

  @Prop() data: ChartDatum[] | string = [];
  @Prop() color = 'var(--color-extended-blue, #0d66f4)';
  @Prop() strokeWidth = 2;
  @Prop() curve: 'linear' | 'monotone' = 'monotone';
  @Prop() circleRadius = 4;

  @State() private actualWidth: number = 640;
  @State() private actualHeight: number = 280;
  @State() private hoveredIndex: number = -1;
  @State() private activeLegendItem: string | null = null;

  private xKey = 'label';
  private yKey = 'value';
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

    // Read ALL bds-line children (support multiple lines)
    const lineElements = Array.from(this.host.querySelectorAll('bds-line')) as any[];
    const lines = lineElements.map((lineEl) => ({
      dataKey: lineEl.getAttribute('dataKey') ?? lineEl.dataKey,
      color: lineEl.getAttribute('color') ?? lineEl.color ?? this.color,
      strokeWidth: Number(lineEl.getAttribute('strokeWidth') ?? lineEl.strokeWidth ?? this.strokeWidth),
      curve: lineEl.getAttribute('curve') ?? lineEl.curve ?? this.curve,
      radius: Number(lineEl.getAttribute('radius') ?? lineEl.radius ?? this.circleRadius),
      dot: (lineEl.getAttribute('data-dot') ?? lineEl.getAttribute('dot') ?? 'true') !== 'false',
    }));

    const legendElement = this.host.querySelector('bds-chart-legend') as any;
    const showLegend = !!legendElement;
    const legendDataKey: string | undefined = legendElement?.getAttribute('dataKey') ?? legendElement?.dataKey ?? undefined;
    const legendAlign = (legendElement?.getAttribute('align') ?? legendElement?.align ?? 'center') as 'left' | 'center' | 'right';

    return {
      showVerticalGrid, showHorizontalGrid, gridStrokeStyle,
      showXLabels, showXTickLine, xTickMargin, xTickFormatter,
      showYAxisLabels, showYTickLine, yTickMargin, yTickFormatter, yTickCount,
      lines: lines.length > 0 ? lines : [{ dataKey: this.yKey, color: this.color, strokeWidth: this.strokeWidth, curve: this.curve, radius: this.circleRadius, dot: true }],
      showLegend, legendDataKey, legendAlign,
    };
  }

  private computeMargin(config: ReturnType<typeof this.readAxisConfig>): Margin {
    const { showXLabels, showXTickLine, xTickMargin, showYAxisLabels, showYTickLine, yTickMargin } = config;
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

  private prepareLine(margin: Margin, tickCount: number = 5) {
    return calculateLineChartLayout(this.data, this.xKey, this.yKey, this.actualWidth, this.actualHeight, this.curve, margin, tickCount);
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
    const x = event.clientX - rect.left;

    const config = this.readAxisConfig();
    const margin = this.computeMargin(config);
    const { dots } = this.prepareLine(margin, config.yTickCount);
    if (dots.length === 0) return;

    // Find the closest dot by X position
    let closestIndex = 0;
    let closestDistance = Infinity;

    dots.forEach((dot, index) => {
      const distance = Math.abs(x - (margin.left + dot.x));
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    this.hoveredIndex = closestIndex;
    const datum = dots[closestIndex].datum;

    const tooltipElement = this.host.querySelector('bds-chart-tooltip') as any;
    if (tooltipElement) {
      const tooltipNameKey = tooltipElement?.getAttribute('nameKey') ?? tooltipElement?.nameKey;
      const keys: string[] = tooltipNameKey
        ? tooltipNameKey.split(',').map((k: string) => k.trim())
        : config.lines.map(l => l.dataKey);

      // Build a color map: dataKey → line color
      const colorMap = new Map(config.lines.map(l => [l.dataKey, l.color]));

      const entries = keys.map((key: string) => ({
        color: colorMap.get(key) ?? '#0d6efd',
        name: key,
        value: datum[key] ?? '',
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
    // Read all child config FIRST so margin can be derived from it
    const config = this.readAxisConfig();
    const {
      showVerticalGrid, showHorizontalGrid, gridStrokeStyle,
      showXLabels, showXTickLine, xTickMargin, xTickFormatter,
      showYAxisLabels, showYTickLine, yTickMargin, yTickFormatter, yTickCount,
      lines,
      showLegend, legendDataKey, legendAlign,
    } = config;

    const margin = this.computeMargin(config);

    const categoryColorMap: Map<string, string> | null = (showLegend && legendDataKey)
      ? buildCategoryColorMap(this.data, legendDataKey)
      : null;

    const legendItems: Array<{ label: string; color: string }> = showLegend
      ? (categoryColorMap
          ? Array.from(categoryColorMap.entries()).map(([label, color]) => ({ label, color }))
          : lines.map(line => ({ label: line.dataKey, color: line.color ?? DEFAULT_LEGEND_PALETTE[0] })))
      : [];
    
    // Prepare layout for all lines
    const lineLayouts = lines.map(line => 
      calculateLineChartLayout(this.data, this.xKey, line.dataKey, this.actualWidth, this.actualHeight, line.curve, margin, yTickCount)
    );

    // Use the first line's labels (X/Y labels are the same for all lines since same X-axis and Y-scale)
    const { xLabels, yLabels, yGridLines, xGridLines } = lineLayouts[0] || { xLabels: [], yLabels: [], yGridLines: [], xGridLines: [] };

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
          class="chart-line"
          aria-hidden="true"
        >
          {/* Y-axis grid lines (horizontal) */}
          {showHorizontalGrid && (
            <g class="chart-line__grid-y" stroke-dasharray={getStrokeDasharray(gridStrokeStyle)}>
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

          {/* X-axis grid lines (vertical) */}
          {showVerticalGrid && (
            <g class="chart-line__grid-x" stroke-dasharray={getStrokeDasharray(gridStrokeStyle)}>
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
            {/* Render all lines and their circles */}
            {lineLayouts.map((layout, lineIdx) => {
              const lineKey = lines[lineIdx].dataKey;
              const lineOpacity = this.activeLegendItem && !legendDataKey
                ? (this.activeLegendItem === lineKey ? 1 : 0.2)
                : 1;
              return (
              <g key={`line-group-${lineIdx}`} style={{ opacity: String(lineOpacity), transition: 'opacity 0.2s ease' }}>
                {/* Line path */}
                <path
                  class="chart-line__path"
                  d={layout.path}
                  fill="none"
                  stroke={lines[lineIdx].color}
                  stroke-width={lines[lineIdx].strokeWidth}
                />

                {/* Data points (circles) for this line */}
                {lines[lineIdx].dot && layout.dots.map((dot, pointIdx) => {
                  const dotOpacity = this.activeLegendItem && legendDataKey
                    ? (this.activeLegendItem === String(dot.datum[legendDataKey]) ? 1 : 0.2)
                    : 1;
                  return (
                  <circle
                    class="chart-line__point"
                    key={`point-${lineIdx}-${pointIdx}`}
                    cx={dot.x}
                    cy={dot.y}
                    r={lines[lineIdx].radius}
                    fill={categoryColorMap && legendDataKey
                      ? (categoryColorMap.get(String(dot.datum[legendDataKey])) ?? lines[lineIdx].color)
                      : lines[lineIdx].color}
                    style={{ pointerEvents: 'none', opacity: String(dotOpacity), transition: 'opacity 0.2s ease' }}
                  />
                  );
                })}
              </g>
              );
            })}

            {/* Hover indicator: always rendered, toggled via opacity */}
            {lineLayouts.length > 0 && (
              <line
                key="hover-line"
                class="chart-line__hover-line"
                x1={this.hoveredIndex >= 0 && lineLayouts[0].dots[this.hoveredIndex] ? lineLayouts[0].dots[this.hoveredIndex].x : 0}
                y1={0}
                x2={this.hoveredIndex >= 0 && lineLayouts[0].dots[this.hoveredIndex] ? lineLayouts[0].dots[this.hoveredIndex].x : 0}
                y2={this.actualHeight - margin.top - margin.bottom}
                stroke="rgba(0,0,0,0.15)"
                stroke-width="1"
                stroke-dasharray="4,4"
                style={{ opacity: this.hoveredIndex >= 0 ? '1' : '0', pointerEvents: 'none' }}
              />
            )}

            {/* Hover dots for lines with dot=false */}
            {this.hoveredIndex >= 0 && lineLayouts.map((layout, lineIdx) => {
              if (lines[lineIdx].dot) return null;
              const dot = layout.dots[this.hoveredIndex];
              if (!dot) return null;
              return (
                <circle
                  key={`hover-dot-${lineIdx}`}
                  cx={dot.x}
                  cy={dot.y}
                  r={lines[lineIdx].radius}
                  fill={lines[lineIdx].color}
                  stroke="white"
                  stroke-width="2"
                  style={{ pointerEvents: 'none' }}
                />
              );
            })}
          </g>

          {/* X-axis ticks and labels */}
          {showXLabels && (
            <g class="chart-line__x-axis" style={{ pointerEvents: 'none' }}>
              {xLabels.map((label, idx) => (
                <g key={`x-axis-${idx}`}>
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
                    class="chart-line__x-label"
                  >
                    {formatTick(label.label, xTickFormatter)}
                  </text>
                </g>
              ))}
            </g>
          )}

          {/* Y-axis ticks and labels */}
          {showYAxisLabels && (
            <g class="chart-line__y-axis" style={{ pointerEvents: 'none' }}>
              {yLabels.map((label, idx) => (
                <g key={`y-axis-${idx}`}>
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
                    class="chart-line__y-label"
                  >
                    {formatTick(label.label, yTickFormatter)}
                  </text>
                </g>
              ))}
            </g>
          )}
          {/* Invisible overlay rect — MUST be last, topmost element. Has a stable key
              so Stencil always reuses this exact DOM node across re-renders, preventing
              spurious mouseleave events when hoveredIndex state changes. */}
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
