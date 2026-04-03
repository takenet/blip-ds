import { Component, Element, Host, h, Prop, State } from '@stencil/core';
import { ChartDatum, Margin } from '../utils/chart.types';
import { calculateHeatmapLayout, formatTick } from '../utils/chart-math';

const TICK_LENGTH = 6;
const FONT_SIZE = 12;
const FONT_BASELINE = 4;

/**
 * ChartHeatmap — Grid/matrix heatmap chart.
 *
 * Renders two-dimensional categorical data as a grid of colored cells.
 * Cell intensity is determined by a numeric value field mapped to opacity (0.1–1.0).
 *
 * Slot children (all optional):
 *   - <bds-heatmap-cell>  override cell color, radius, valueKey
 *   - <bds-x-axis>        configure bottom axis labels
 *   - <bds-y-axis>        configure left axis labels
 *   - <bds-chart-grid>    show grid lines
 *   - <bds-chart-tooltip> enable hover tooltip
 *
 * @example
 * <bds-chart-heatmap
 *   data='[{"x":"Seg","y":"9h","value":42}]'
 *   x-key="x" y-key="y" value-key="value"
 * >
 *   <bds-heatmap-cell color="#0d6efd" radius="4"></bds-heatmap-cell>
 *   <bds-x-axis show="true"></bds-x-axis>
 *   <bds-y-axis show="true"></bds-y-axis>
 *   <bds-chart-tooltip></bds-chart-tooltip>
 * </bds-chart-heatmap>
 */
@Component({
  tag: 'bds-chart-heatmap',
  styleUrl: 'chart-heatmap.scss',
  shadow: true,
})
export class ChartHeatmap {
  @Element() private host!: HTMLElement;

  /** Array of data objects or JSON string. Each object must have xKey, yKey, and valueKey fields. */
  @Prop() data: ChartDatum[] | string = [];
  /** Data field used for X-axis (column) categories. */
  @Prop() xKey: string = 'x';
  /** Data field used for Y-axis (row) categories. */
  @Prop() yKey: string = 'y';
  /** Data field whose numeric value drives cell opacity (min → 0.1, max → 1.0). */
  @Prop() valueKey: string = 'value';
  /** Base fill color of cells. Can be overridden by <bds-heatmap-cell color="...">. */
  @Prop() color: string = 'var(--color-extended-blue, #0d6efd)';
  /** Border-radius of each cell in pixels. */
  @Prop() cellRadius: number = 4;
  /** Gap between cells in pixels. */
  @Prop() cellPadding: number = 2;

  @State() private actualWidth: number = 640;
  @State() private actualHeight: number = 280;
  @State() private hoveredIndex: number = -1;

  private resizeObserver: ResizeObserver | null = null;

  componentDidLoad() {
    this.calculateActualDimensions();
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

  private readConfig() {
    const parseBoolean = (value: any): boolean => {
      if (typeof value === 'boolean') return value;
      if (typeof value === 'string') return value === 'true';
      return !!value;
    };

    const gridElement = this.host.querySelector('bds-chart-grid') as any;
    const showHorizontalGrid = gridElement
      ? parseBoolean(gridElement.getAttribute('horizontal') ?? gridElement.horizontal ?? 'true')
      : false;
    const showVerticalGrid = gridElement
      ? parseBoolean(gridElement.getAttribute('vertical') ?? gridElement.vertical ?? 'false')
      : false;
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

    // bds-heatmap-cell overrides
    const cellEl = this.host.querySelector('bds-heatmap-cell') as any;
    const color = cellEl?.getAttribute('data-color') ?? cellEl?.getAttribute('color') ?? cellEl?.color ?? this.color;
    const cellRadius = Number(cellEl?.getAttribute('data-radius') ?? cellEl?.getAttribute('radius') ?? cellEl?.radius ?? this.cellRadius);
    const valueKey = cellEl?.getAttribute('data-value-key') ?? cellEl?.getAttribute('valueKey') ?? cellEl?.valueKey ?? this.valueKey;

    return {
      showHorizontalGrid, showVerticalGrid, gridStrokeStyle,
      showXLabels, showXTickLine, xTickMargin, xTickFormatter,
      showYAxisLabels, showYTickLine, yTickMargin, yTickFormatter,
      color, cellRadius, valueKey,
    };
  }

  private computeMargin(config: ReturnType<typeof this.readConfig>): Margin {
    const { showXLabels, showXTickLine, xTickMargin, showYAxisLabels, showYTickLine, yTickMargin } = config;
    const bottom = showXLabels
      ? (showXTickLine ? TICK_LENGTH : 0) + xTickMargin + FONT_SIZE + FONT_BASELINE
      : 8;
    const left = showYAxisLabels
      ? 20 + (showYTickLine ? TICK_LENGTH : 0) + yTickMargin
      : 8;
    return { top: 20, right: 20, bottom, left };
  }

  private emitLeave() {
    this.hoveredIndex = -1;
    const tooltipElement = this.host.querySelector('bds-chart-tooltip') as any;
    if (tooltipElement) {
      tooltipElement.setTooltipState({ visible: false });
    }
  }

  private handleCanvasMouseMove(event: MouseEvent) {
    const svg = event.currentTarget as SVGSVGElement;
    if (!svg) return;

    const rect = svg.getBoundingClientRect();
    const mx = event.clientX - rect.left;
    const my = event.clientY - rect.top;

    const config = this.readConfig();
    const margin = this.computeMargin(config);
    const { cells } = calculateHeatmapLayout(
      this.data, this.xKey, this.yKey, config.valueKey,
      this.actualWidth, this.actualHeight, margin, this.cellPadding
    );
    if (cells.length === 0) return;

    let closestIndex = 0;
    let closestDistance = Infinity;
    cells.forEach((cell, index) => {
      const cx = margin.left + cell.x + cell.width / 2;
      const cy = margin.top + cell.y + cell.height / 2;
      const dist = Math.hypot(mx - cx, my - cy);
      if (dist < closestDistance) {
        closestDistance = dist;
        closestIndex = index;
      }
    });

    this.hoveredIndex = closestIndex;
    const datum = cells[closestIndex].datum;

    const tooltipElement = this.host.querySelector('bds-chart-tooltip') as any;
    if (tooltipElement) {
      tooltipElement.setTooltipState({
        visible: true,
        x: event.clientX,
        y: event.clientY,
        label: `${datum[this.xKey]} × ${datum[this.yKey]}`,
        entries: [{ color: config.color, name: config.valueKey, value: datum[config.valueKey] ?? '' }],
      });
    }
  }

  render() {
    const config = this.readConfig();
    const {
      showHorizontalGrid, showVerticalGrid, gridStrokeStyle,
      showXLabels, showXTickLine, xTickMargin, xTickFormatter,
      showYAxisLabels, showYTickLine, yTickMargin, yTickFormatter,
      color, cellRadius, valueKey,
    } = config;

    const margin = this.computeMargin(config);
    const { cells, xLabels, yLabels } = calculateHeatmapLayout(
      this.data, this.xKey, this.yKey, valueKey,
      this.actualWidth, this.actualHeight, margin, this.cellPadding
    );

    const getStrokeDasharray = (style: string): string => {
      if (style === 'dashed') return '4,4';
      if (style === 'dotted') return '1,3';
      return '';
    };

    return (
      <Host>
        <svg
          width={this.actualWidth}
          height={this.actualHeight}
          class="chart-heatmap"
          aria-hidden="true"
        >
          {/* Horizontal grid lines at row centers */}
          {showHorizontalGrid && (
            <g class="chart-heatmap__grid-y" stroke-dasharray={getStrokeDasharray(gridStrokeStyle)}>
              {yLabels.map((label, idx) => (
                <line
                  key={`grid-h-${idx}`}
                  x1={margin.left}
                  y1={margin.top + label.y}
                  x2={this.actualWidth - margin.right}
                  y2={margin.top + label.y}
                  stroke="rgba(0,0,0,0.05)"
                  stroke-width="1"
                />
              ))}
            </g>
          )}

          {/* Vertical grid lines at column centers */}
          {showVerticalGrid && (
            <g class="chart-heatmap__grid-x" stroke-dasharray={getStrokeDasharray(gridStrokeStyle)}>
              {xLabels.map((label, idx) => (
                <line
                  key={`grid-v-${idx}`}
                  x1={margin.left + label.x}
                  y1={margin.top}
                  x2={margin.left + label.x}
                  y2={this.actualHeight - margin.bottom}
                  stroke="rgba(0,0,0,0.05)"
                  stroke-width="1"
                />
              ))}
            </g>
          )}

          {/* Main chart group */}
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            {/* Cells */}
            <g class="chart-heatmap__cells">
              {cells.map((cell, index) => (
                <rect
                  key={`cell-${index}`}
                  class="chart-heatmap__cell"
                  x={cell.x}
                  y={cell.y}
                  width={Math.max(cell.width, 0)}
                  height={Math.max(cell.height, 0)}
                  rx={cellRadius}
                  fill={color}
                  style={{ opacity: String(cell.opacity), pointerEvents: 'none', transition: 'opacity 0.2s ease' }}
                />
              ))}
            </g>

            {/* Hover highlight */}
            {this.hoveredIndex >= 0 && cells[this.hoveredIndex] && (
              <rect
                key="hover-bg"
                class="chart-heatmap__hover-bg"
                x={cells[this.hoveredIndex].x}
                y={cells[this.hoveredIndex].y}
                width={Math.max(cells[this.hoveredIndex].width, 0)}
                height={Math.max(cells[this.hoveredIndex].height, 0)}
                rx={cellRadius}
                fill="rgba(0,0,0,0.08)"
                style={{ pointerEvents: 'none' }}
              />
            )}
          </g>

          {/* X-axis labels (column categories at bottom) */}
          {showXLabels && (
            <g class="chart-heatmap__x-axis" style={{ pointerEvents: 'none' }}>
              {xLabels.map((label, idx) => (
                <g key={`x-${idx}`}>
                  {showXTickLine && (
                    <line
                      x1={margin.left + label.x}
                      y1={this.actualHeight - margin.bottom}
                      x2={margin.left + label.x}
                      y2={this.actualHeight - margin.bottom + TICK_LENGTH}
                      stroke="rgba(0,0,0,0.3)"
                      stroke-width="1"
                    />
                  )}
                  <text
                    text-anchor="middle"
                    font-size="12"
                    fill="rgba(0,0,0,0.6)"
                    x={margin.left + label.x}
                    y={this.actualHeight - margin.bottom + TICK_LENGTH + xTickMargin}
                    class="chart-heatmap__x-label"
                  >
                    {formatTick(label.label, xTickFormatter)}
                  </text>
                </g>
              ))}
            </g>
          )}

          {/* Y-axis labels (row categories on left) */}
          {showYAxisLabels && (
            <g class="chart-heatmap__y-axis" style={{ pointerEvents: 'none' }}>
              {yLabels.map((label, idx) => (
                <g key={`y-${idx}`}>
                  {showYTickLine && (
                    <line
                      x1={margin.left - TICK_LENGTH}
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
                    x={margin.left - (showYTickLine ? TICK_LENGTH : 0) - yTickMargin}
                    y={margin.top + label.y + 4}
                    class="chart-heatmap__y-label"
                  >
                    {formatTick(label.label, yTickFormatter)}
                  </text>
                </g>
              ))}
            </g>
          )}

          {/* Invisible overlay for mouse events — must be topmost */}
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
        <slot></slot>
      </Host>
    );
  }
}
