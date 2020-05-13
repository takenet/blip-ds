import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bds-toast-container',
  styleUrl: 'toast-container.scss',
  shadow: true,
})
export class BdsToastContainer {
  render() {
    return (
      <Host>
        <div>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
