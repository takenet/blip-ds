import { Component, Host, h, Prop, Watch } from '@stencil/core';

/**
 * CartesianGrid - Simple grid line renderer
 * 
 * Props:
 * - vertical: boolean - Show vertical grid lines
 * - horizontal: boolean - Show horizontal grid lines
 * - strokeStyle: 'solid' | 'dashed' - Line style
 * 
 * Usage: Pass gridLines data via context or parent coordination
 */
@Component({
  tag: 'bds-chart-grid',
  styleUrl: 'chart-grid.scss',
})
export class ChartGrid {
  /**
   * Show vertical grid lines (X-axis)
   */
  @Prop() vertical: boolean | string = false;

  /**
   * Show horizontal grid lines (Y-axis)
   */
  @Prop() horizontal: boolean | string = true;

  /**
   * Grid line style: solid or dashed
   */
  @Prop() strokeStyle: 'solid' | 'dashed' = 'solid';

  private isVertical: boolean = false;
  private isHorizontal: boolean = true;

  @Watch('vertical')
  @Watch('horizontal')
  private updateBooleans() {
    this.isVertical = this.parseBoolean(this.vertical);
    this.isHorizontal = this.parseBoolean(this.horizontal);
  }

  componentDidLoad() {
    this.updateBooleans();
  }

  private parseBoolean(value: any): boolean {
    if (typeof value === 'boolean') return value;
    if (typeof value === 'string') {
      return value === 'true' || value === '';
    }
    return !!value;
  }

  private getStrokeDasharray(): string {
    switch (this.strokeStyle) {
      case 'dashed':
        return '4,4';
      default:
        return '';
    }
  }

  render() {
    return (
      <Host class="chart-grid" data-vertical={this.isVertical} data-horizontal={this.isHorizontal} data-stroke-style={this.strokeStyle}>
        <style>{`
          :host {
            --chart-grid-vertical: ${this.isVertical ? '1' : '0'};
            --chart-grid-horizontal: ${this.isHorizontal ? '1' : '0'};
            --chart-grid-stroke-style: ${this.strokeStyle};
            --chart-grid-dasharray: ${this.getStrokeDasharray()};
          }
        `}</style>
      </Host>
    );
  }
}
