import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bds-expansion-panel',
  styleUrl: 'expansion-panel.scss',
  shadow: true,
})
export class ExpansionPanel {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
