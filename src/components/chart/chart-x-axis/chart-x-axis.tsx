import { Component, Host, h, Prop } from '@stencil/core';

/**
 * XAxis Component - Configuration for X-axis
 * 
 * Must be used as a child of bds-chart-line or bds-chart-bar
 */
@Component({
  tag: 'bds-x-axis',
})
export class ChartXAxis {
  /**
   * Key from data object to use for X-axis labels
   */
  @Prop() dataKey: string = 'label';

  /**
   * Show tick lines
   */
  @Prop() tickLine: boolean = true;

  /**
   * Color of tick lines and axis line
   */
  @Prop() lineColor: string = 'var(--color-border-1)';

  /**
   * Color of axis labels
   */
  @Prop() labelColor: string = 'var(--color-content-default)';

  /**
   * Margin between tick and label (in pixels)
   */
  @Prop() tickMargin: number = 10;

  /**
   * Show axis line
   */
  @Prop() axisLine: boolean = true;

  /**
   * Format function for tick labels (receives value, returns formatted string)
   * Note: In HTML attributes, use comma-separated string for simple transformations
   * Example: "slice,0,3" to get first 3 characters
   */
  @Prop() tickFormatter?: string;

  /**
   * Number of ticks to display on the Y-axis (default: 5)
   * Note: This applies only to numeric axes with calculated scales
   */
  @Prop() tickCount: number = 5;

  /**
   * Show X-axis labels
   */
  @Prop() show: boolean = true;

  render() {
    return (
      <Host
        data-x-axis={true}
        data-data-key={this.dataKey}
        data-tick-line={this.tickLine}
        data-line-color={this.lineColor}
        data-label-color={this.labelColor}
        data-tick-margin={this.tickMargin}
        data-axis-line={this.axisLine}
        data-tick-formatter={this.tickFormatter}
        data-tick-count={this.tickCount}
        style={{ display: 'none' }}
      />
    );
  }
}
