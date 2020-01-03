import { Component, h, Prop } from '@stencil/core';

export type FontSize = 'fs-10'
  | 'fs-12'
  | 'fs-14'
  | 'fs-16'
  | 'fs-20'
  | 'fs-24'
  | 'fs-32'
  | 'fs-40';

export type FontLineHeight = 'none'
  | 'small'
  | 'simple'
  | 'plus'
  | 'double';

export type Bold = 'regular'
  | 'semi-bold'
  | 'bold'
  | 'extra-bold';

@Component({
  tag: 'bds-typo',
  styleUrl: 'typo.scss',
  shadow: true
})
export class Typo {
  /**
   * Variant. Entered as one of the font size variant. Can be one of: 
   * 'fs-10' ,'fs-12' ,'fs-14' ,'fs-16' ,'fs-20' ,'fs-24' ,'fs-32' ,'fs-40';
   */
  @Prop() variant?: FontSize = 'fs-16';

  /**
   * Line Height. Entered as one of the line hieght. Can be one of: 
   * 'none', 'small', 'simple', 'plus', 'double'
   */
  @Prop() lineHeight?: FontLineHeight = null;

  /**
   * Bold. Entered as one of the bold. Can be one of: 
   * 'regular', 'semi-bold', 'bold', 'extra-bold';
   */
  @Prop() bold?: Bold = null;

  /**
   * Added font style italic
   */
  @Prop() italic?: boolean = false;

  /**
   * Added style no wrap 
   */
  @Prop() noWrap?: boolean = false;

  /**
   * Tranform text in paragraph 
   */
  @Prop() paragraph?: boolean = false;

  render(): HTMLElement {
    return (
      <p class={{
        'typo': true,
        [`typo__variant--${this.variant}`]: true,
        'typo--no-wrap': this.noWrap,
        'typo--paragraph': this.paragraph,
        'typo--italic': this.italic,
        [`typo__line-height--${this.lineHeight}`]: !!this.lineHeight,
        [`typo__bold--${this.bold}`]: !!this.bold
      }}>
        <slot></slot>
      </p>
    );
  }

}
