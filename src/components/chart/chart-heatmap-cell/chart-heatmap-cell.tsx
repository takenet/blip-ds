import { Component, Host, h, Prop } from '@stencil/core';

/**
 * HeatmapCell — Configuration slot for bds-chart-heatmap.
 *
 * Place as a child of <bds-chart-heatmap> to override cell appearance.
 * Renders as display:none — parent reads props via getAttribute().
 *
 * @example
 * <bds-chart-heatmap data="...">
 *   <bds-heatmap-cell color="#0d6efd" radius="6"></bds-heatmap-cell>
 * </bds-chart-heatmap>
 */
@Component({
  tag: 'bds-heatmap-cell',
})
export class ChartHeatmapCell {
  /** Base fill color of the cells. Overrides bds-chart-heatmap color prop. */
  @Prop() color: string;

  /** Border-radius of cells in pixels. Overrides bds-chart-heatmap cellRadius prop. */
  @Prop() radius: number;

  /** Data field key for intensity value. Overrides bds-chart-heatmap valueKey prop. */
  @Prop() valueKey: string;

  render() {
    return (
      <Host
        data-heatmap-cell={true}
        data-color={this.color}
        data-radius={this.radius}
        data-value-key={this.valueKey}
        style={{ display: 'none' }}
      />
    );
  }
}
