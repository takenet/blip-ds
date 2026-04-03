import { Component, Host, h, Prop } from '@stencil/core';

/**
 * Line Component - Configuration for line in chart
 * 
 * Must be used as a child of bds-chart-line
 */
@Component({
  tag: 'bds-line',
})
export class ChartLineItem {
  /**
   * Key from data object to use for line values
   */
  @Prop() dataKey: string;

  /**
   * Color of the line (hex, rgb, or CSS variable)
   */
  @Prop() color: string = '#0d6efd';

  /**
   * Width of the line stroke (in pixels)
   */
  @Prop() strokeWidth: number = 2;

  /**
   * Type of interpolation: linear or monotone (smooth)
   */
  @Prop() curve: 'linear' | 'monotone' = 'monotone';

  /**
   * Radius of data point circles (in pixels)
   */
  @Prop() radius: number = 4;

  /**
   * Whether to show dots on data points
   */
  @Prop() dot: boolean = true;

  render() {
    return (
      <Host
        data-line={true}
        data-data-key={this.dataKey}
        data-color={this.color}
        data-stroke-width={this.strokeWidth}
        data-curve={this.curve}
        data-radius={this.radius}
        data-dot={String(this.dot)}
        style={{ display: 'none' }}
      />
    );
  }
}
