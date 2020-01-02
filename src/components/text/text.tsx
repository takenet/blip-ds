import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'bds-text',
  styleUrl: 'text.scss',
  shadow: true
})
export class Text {
  @Prop() variant?: string = 'fs-16';

  render(): HTMLElement {
    return (
      <p class={{
        'text': true,
        [`text__variant--${this.variant}`]: true,
      }}>
        <slot></slot>
      </p>
    );
  }

}
