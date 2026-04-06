import { Component, Host, h, Prop } from '@stencil/core';

/**
 * Bar Component - Configuration for bar in chart
 * 
 * Must be used as a child of bds-chart-bar
 */
@Component({
  tag: 'bds-bar',
})
export class ChartBar {
  /**
   * Key from data object to use for bar values
   */
  @Prop() dataKey: string;

  /**
   * Color of the bar (hex, rgb, or CSS variable)
   */
  @Prop() color: string = '#0d6efd';

  /**
   * Border radius of bar corners (in pixels)
   */
  @Prop() radius: number = 4;

  /**
   * Stack identifier. Bars with the same stackId are stacked on top of each other.
   * Bars with different (or no) stackId are placed side-by-side.
   */
  @Prop() stackId?: string;

  render() {
    return (
      <Host
        data-bar={true}
        data-data-key={this.dataKey}
        data-color={this.color}
        data-radius={this.radius}
        data-stack-id={this.stackId}
        style={{ display: 'none' }}
      />
    );
  }
}
