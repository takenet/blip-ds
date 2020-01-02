import { Component, h } from '@stencil/core';

@Component({
  tag: 'bds-text',
  styleUrl: 'text.scss',
  shadow: true
})
export class Text {

  render() {
    return (
      <p class="text">
        <slot></slot>
      </p>
    );
  }

}
