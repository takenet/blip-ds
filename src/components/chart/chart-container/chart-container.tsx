import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bds-chart-container',
  styleUrl: 'chart-container.scss',
  shadow: true,
})
export class ChartContainer {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
