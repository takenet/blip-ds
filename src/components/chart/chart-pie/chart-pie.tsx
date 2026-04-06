import { Component, Element, Host, h, Prop, State } from '@stencil/core';
import { ChartDatum } from '../utils/chart.types';
import { calculatePieLayout, generateDonutPath, DEFAULT_LEGEND_PALETTE } from '../utils/chart-math';

/**
 * ChartPie — Donut/pie chart component.
 *
 * Renders categorical data as a donut chart. Each datum becomes one slice.
 * Colors are assigned automatically from the design-system palette.
 *
 * Slot children (all optional):
 *   - <bds-pie-config>      override innerRadius, padAngle, cornerRadius
 *   - <bds-chart-legend>    enable clickable legend
 *   - <bds-chart-tooltip>   enable hover tooltip
 *
 * @example
 * <bds-chart-pie
 *   data='[{"label":"A","value":50},{"label":"B","value":30}]'
 *   label-key="label"
 *   value-key="value"
 * >
 *   <bds-pie-config inner-radius="60" pad-angle="0.02"></bds-pie-config>
 *   <bds-chart-legend align="center"></bds-chart-legend>
 *   <bds-chart-tooltip></bds-chart-tooltip>
 * </bds-chart-pie>
 */
@Component({
  tag: 'bds-chart-pie',
  styleUrl: 'chart-pie.scss',
  shadow: true,
})
export class ChartPie {
  @Element() private host!: HTMLElement;

  /** Array of data objects or JSON string. Each object must have labelKey and valueKey fields. */
  @Prop() data: ChartDatum[] | string = [];

  /** Field name used for slice labels. */
  @Prop() labelKey: string = 'label';

  /** Field name whose numeric value determines each slice size. */
  @Prop() valueKey: string = 'value';

  /** Fallback color (palette is used automatically; this is a last-resort override). */
  @Prop() color: string = 'var(--color-extended-blue, #0d6efd)';

  @State() private actualWidth: number = 400;
  @State() private actualHeight: number = 300;
  @State() private hoveredIndex: number = -1;
  @State() private activeLegendItem: string | null = null;

  private resizeObserver: ResizeObserver | null = null;

  componentDidLoad() {
    this.calculateActualDimensions();

    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        this.calculateActualDimensions();
      });
      this.resizeObserver.observe(this.host);
    }

    this.host.addEventListener('bdsLegendItemClick', (e: Event) => {
      const label = (e as CustomEvent<string>).detail;
      this.activeLegendItem = this.activeLegendItem === label ? null : label;
    });
  }

  componentDidRender() {
    const legendElement = this.host.querySelector('bds-chart-legend') as any;
    if (!legendElement) return;

    const { slices } = this.computeLayout();
    if (slices.length === 0) return;

    const { legendAlign } = this.readConfig();
    const items = slices.map(s => ({ label: s.label, color: s.color }));
    legendElement.setLegendState?.({ items, align: legendAlign, activeItem: this.activeLegendItem });
  }

  disconnectedCallback() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  private calculateActualDimensions() {
    this.actualWidth = this.host.clientWidth || 400;
    const svgEl = this.host.shadowRoot?.querySelector('svg') as unknown as HTMLElement | null;
    this.actualHeight = svgEl?.clientHeight || this.host.clientHeight || 300;
  }

  private readConfig() {
    const configEl = this.host.querySelector('bds-pie-config') as any;
    const innerRadius = Number(
      configEl?.getAttribute('data-inner-radius') ?? configEl?.innerRadius ?? 60
    );
    const padAngle = Number(
      configEl?.getAttribute('data-pad-angle') ?? configEl?.padAngle ?? 0.02
    );
    const cornerRadius = Number(
      configEl?.getAttribute('data-corner-radius') ?? configEl?.cornerRadius ?? 3
    );

    const legendElement = this.host.querySelector('bds-chart-legend') as any;
    const legendAlign = (
      legendElement?.getAttribute('align') ?? legendElement?.align ?? 'center'
    ) as 'left' | 'center' | 'right';

    return { innerRadius, padAngle, cornerRadius, legendAlign };
  }

  private computeLayout() {
    const { innerRadius } = this.readConfig();
    return calculatePieLayout(
      this.data,
      this.labelKey,
      this.valueKey,
      this.actualWidth,
      this.actualHeight,
      innerRadius,
      DEFAULT_LEGEND_PALETTE,
    );
  }

  private emitLeave() {
    this.hoveredIndex = -1;
    const tooltipEl = this.host.querySelector('bds-chart-tooltip') as any;
    if (tooltipEl) {
      tooltipEl.setTooltipState({ visible: false });
    }
  }

  private showTooltip(index: number, event: MouseEvent) {
    const tooltipEl = this.host.querySelector('bds-chart-tooltip') as any;
    if (!tooltipEl) return;

    const { slices } = this.computeLayout();
    const slice = slices[index];
    if (!slice) return;

    tooltipEl.setTooltipState({
      visible: true,
      x: event.clientX,
      y: event.clientY,
      label: slice.label,
      entries: [
        {
          color: slice.color,
          name: slice.label,
          value: `${slice.value} (${slice.percentage.toFixed(1)}%)`,
        },
      ],
    });
  }

  render() {
    const { padAngle } = this.readConfig();
    const { slices, outerRadius, innerRadius, centerX, centerY } = this.computeLayout();

    return (
      <Host>
        <svg
          width={this.actualWidth}
          height={this.actualHeight}
          class="chart-pie"
          aria-hidden="true"
          onMouseLeave={() => this.emitLeave()}
        >
          <g transform={`translate(${centerX}, ${centerY})`}>
            {slices.map((slice, index) => {
              const isHovered = this.hoveredIndex === index;
              const isFaded = this.activeLegendItem !== null
                ? this.activeLegendItem !== slice.label
                : (this.hoveredIndex >= 0 && !isHovered);

              const d = generateDonutPath(
                slice.startAngle,
                slice.endAngle,
                outerRadius,
                innerRadius,
                padAngle,
              );

              if (!d) return null;

              const classes = [
                'chart-pie__slice',
                isHovered ? 'chart-pie__slice--hovered' : '',
                isFaded ? 'chart-pie__slice--faded' : '',
              ].filter(Boolean).join(' ');

              return (
                <path
                  key={`slice-${index}`}
                  class={classes}
                  d={d}
                  fill={slice.color}
                  onMouseEnter={(e) => { this.hoveredIndex = index; this.showTooltip(index, e as MouseEvent); }}
                  onMouseMove={(e) => this.showTooltip(index, e as MouseEvent)}
                  onMouseLeave={() => this.emitLeave()}
                />
              );
            })}
          </g>
        </svg>
        <slot></slot>
      </Host>
    );
  }
}
