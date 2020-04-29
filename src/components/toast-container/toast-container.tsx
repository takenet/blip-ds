import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'toast-container',
  styleUrl: 'toast-container.scss',
  shadow: true,
})
export class ToastContainer {
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
