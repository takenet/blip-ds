import { Component, Host, h, Prop } from '@stencil/core';

/**
 * ChartLegend — Configuration component for chart legends.
 *
 * Must be used as a child of bds-chart-line or bds-chart-bar.
 *
 * Modes:
 *  - Series mode (no dataKey): reads bds-line/bds-bar siblings for color + label.
 *  - Category mode (dataKey set): reads unique values of dataKey from data,
 *    assigns palette colors to each category, and recolors bars/dots accordingly.
 */
@Component({
  tag: 'bds-chart-legend',
  styleUrl: 'chart-legend.scss',
})
export class ChartLegend {
  /**
   * Key from data objects to use as category labels (activates category mode).
   * Example: dataKey="label" reads "Product A", "Product B", etc. from data.
   */
  @Prop() dataKey?: string;

  /**
   * Horizontal alignment of legend items inside the chart.
   */
  @Prop() align: 'left' | 'center' | 'right' = 'center';

  render() {
    return (
      <Host
        data-legend={true}
        data-data-key={this.dataKey}
        data-align={this.align}
        style={{ display: 'none' }}
      />
    );
  }
}
