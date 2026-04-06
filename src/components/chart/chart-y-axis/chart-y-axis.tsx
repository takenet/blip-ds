import { Component, Host, h, Prop } from '@stencil/core';

/**
 * YAxis Component - Configuration for Y-axis
 * 
 * Must be used as a child of bds-chart-line or bds-chart-bar
 */
@Component({
  tag: 'bds-y-axis',
})
export class ChartYAxis {
  /**
   * Key from data object to use for Y-axis scale
   */
  @Prop() dataKey: string = 'value';

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
   */
  @Prop() tickFormatter?: string;

  /**
   * Number of ticks to display on the Y-axis (default: 5)
   * Increase to show more ticks (e.g., 10 for 20, 25, 30, 35, 40...)
   */
  @Prop() tickCount: number = 5;

  /**
   * Show Y-axis labels
   */
  @Prop() show: boolean = true;

  render() {
    return (
      <Host
        data-y-axis={true}
        data-data-key={this.dataKey}
        data-tick-line={this.tickLine}
        data-line-color={this.lineColor}
        data-label-color={this.labelColor}
        data-tick-margin={this.tickMargin}
        data-axis-line={this.axisLine}
        data-tick-formatter={this.tickFormatter}
        data-tick-count={this.tickCount}
        data-show={this.show}
        style={{ display: 'none' }}
      />
    );
  }
}
