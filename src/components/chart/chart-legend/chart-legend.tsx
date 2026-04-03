import { Component, Host, h, Prop, State, Method, Event, EventEmitter } from '@stencil/core';

export interface LegendItem {
  label: string;
  color: string;
}

export interface LegendState {
  items: LegendItem[];
  align: 'left' | 'center' | 'right';
  activeItem: string | null;
}

/**
 * ChartLegend — Renders the interactive legend for chart components.
 *
 * Must be used as a child of bds-chart-line or bds-chart-bar.
 * The parent chart pushes data via setLegendState() and listens to bdsLegendItemClick.
 *
 * Modes:
 *  - Series mode (no dataKey): reads bds-line/bds-bar siblings for color + label.
 *  - Category mode (dataKey set): reads unique values of dataKey from data,
 *    assigns palette colors to each category, and recolors bars/dots accordingly.
 */
@Component({
  tag: 'bds-chart-legend',
  styleUrl: 'chart-legend.scss',
  shadow: true,
})
export class ChartLegend {
  @Prop() dataKey?: string;
  @Prop() align: 'left' | 'center' | 'right' = 'center';

  @State() private items: LegendItem[] = [];
  @State() private activeItem: string | null = null;
  @State() private currentAlign: 'left' | 'center' | 'right' = 'center';

  @Event() bdsLegendItemClick: EventEmitter<string>;

  @Method()
  async setLegendState(state: LegendState) {
    this.items = state.items;
    this.currentAlign = state.align;
    this.activeItem = state.activeItem;
  }

  render() {
    if (this.items.length === 0) {
      return <Host style={{ display: 'none' }} />;
    }

    const justifyContent =
      this.currentAlign === 'left' ? 'flex-start' :
      this.currentAlign === 'right' ? 'flex-end' : 'center';

    return (
      <Host>
        <ul class="chart__legend-list" style={{ justifyContent }}>
          {this.items.map(item => (
            <li
              key={`legend-${item.label}`}
              class={`chart__legend-item${this.activeItem && this.activeItem !== item.label ? ' chart__legend-item--inactive' : ''}`}
              onClick={() => this.bdsLegendItemClick.emit(item.label)}
            >
              <span class="chart__legend-item-color" style={{ background: item.color }}></span>
              <span class="chart__legend-item-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </Host>
    );
  }
}
