import { Component, Host, h, Prop } from '@stencil/core';

/**
 * PieConfig — Visual configuration slot for bds-chart-pie.
 *
 * Place as a child of <bds-chart-pie> to override default appearance.
 * Renders as display:none — parent reads props via getAttribute().
 *
 * @example
 * <bds-chart-pie data="...">
 *   <bds-pie-config inner-radius="70" pad-angle="0.03"></bds-pie-config>
 * </bds-chart-pie>
 */
@Component({
  tag: 'bds-pie-config',
})
export class ChartPieConfig {
  /**
   * Inner radius as a percentage of the outer radius (0 = pie, 60 = donut).
   * Default: 60
   */
  @Prop() innerRadius: number = 60;

  /**
   * Gap between slices in radians.
   * Default: 0.02
   */
  @Prop() padAngle: number = 0.02;

  /**
   * Corner radius of each slice end-cap in pixels (0 = sharp corners).
   * Default: 3
   */
  @Prop() cornerRadius: number = 3;

  render() {
    return (
      <Host
        data-pie-config={true}
        data-inner-radius={this.innerRadius}
        data-pad-angle={this.padAngle}
        data-corner-radius={this.cornerRadius}
        style={{ display: 'none' }}
      />
    );
  }
}
