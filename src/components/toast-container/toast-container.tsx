import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'bds-toast-container',
  styleUrl: 'toast-container.scss',
  scoped: true,
})
export class BdsToastContainer {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
