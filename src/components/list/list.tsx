import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bds-list',
  styleUrl: 'list.css',
  shadow: true
})
export class List {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
