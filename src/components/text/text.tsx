import { Component, h, Prop } from '@stencil/core';

export type FontSize = 'fs-10'
  | 'fs-12'
  | 'fs-14'
  | 'fs-16';

@Component({
  tag: 'bds-text',
  styleUrl: 'text.scss',
  shadow: true
})
export class Text {
  
  /**
  * Variant. Entered as one of the font size variant. Can be one of: 
  * fs-10,  fs-12, fs-14,  fs-16
  */
  @Prop() variant?: FontSize = 'fs-16';

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
