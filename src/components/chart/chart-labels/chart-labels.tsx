import { Component, Element, Host, h, Prop } from '@stencil/core';
import { calculateGridsAndLabels, GridAndLabelsData } from './chart-math';

@Component({
  tag: 'bds-chart-labels',
  styleUrl: 'chart-labels.scss',
  shadow: true,
})
export class ChartLabels {
  @Element() private host!: HTMLElement;

  @Prop() data: string | object[] = '[]';
  @Prop() xkey: string = 'label';
  @Prop() ykey: string = 'value';
  @Prop() width: number = 720;
  @Prop() height: number = 320;

  private getGridData(): GridAndLabelsData {
    try {
      return calculateGridsAndLabels(this.data, this.xkey, this.ykey, this.width, this.height);
    } catch {
      return { xGridLines: [], yGridLines: [], margin: { top: 20, right: 40, bottom: 60, left: 50 } };
    }
  }

  render() {
    const { xGridLines, yGridLines, margin } = this.getGridData();

    // Get label visibility from computed styles (set by parent container)
    const computedStyle = getComputedStyle(this.host);
    const showXLabels = computedStyle.getPropertyValue('--chart-show-x-labels').trim() === '1';
    const showYLabels = computedStyle.getPropertyValue('--chart-show-y-labels').trim() === '1';

    return (
      <Host>
        <svg width={this.width} height={this.height} class="chart-labels" aria-hidden="true">
          {/* X-axis labels */}
          {showXLabels && (
            <g class="chart-labels__x" text-anchor="middle" font-size="12" fill="rgba(0,0,0,0.6)">
              {xGridLines.map((label, idx) => (
                <text
                  key={`x-label-${idx}`}
                  x={margin.left + label.x}
                  y={this.height - margin.bottom + 18}
                  class="chart-labels__x-label"
                >
                  {label.label}
                </text>
              ))}
            </g>
          )}

          {/* Y-axis labels */}
          {showYLabels && (
            <g class="chart-labels__y" text-anchor="end" font-size="12" fill="rgba(0,0,0,0.6)">
              {yGridLines.map((label, idx) => (
                <text
                  key={`y-label-${idx}`}
                  x={margin.left - 8}
                  y={margin.top + label.y + 4}
                  class="chart-labels__y-label"
                >
                  {label.label}
                </text>
              ))}
            </g>
          )}
        </svg>
      </Host>
    );
  }
}
