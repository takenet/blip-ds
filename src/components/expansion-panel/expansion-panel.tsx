import { Component, Host, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bds-expansion-panel',
  styleUrl: 'expansion-panel.scss',
  shadow: true,
})
export class ExpansionPanel implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
