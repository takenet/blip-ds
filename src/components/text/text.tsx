// src/components/bds-text/bds-text.tsx
import { Component, Prop, h } from '@stencil/core';

export type Tag = 'p' | 'h1' | 'h2' | 'h3' | 'span-large' | 'span-medium' | 'span-small' | 'span-micro' | 'a';

export type Weight = 'regular' | 'semi-bold' | 'bold' | 'extra-bold';

export type Style = 'italic' | 'normal';

export type Decoration = 'line-through' | 'underline';

export type Align = 'left' | 'center' | 'right' | 'justify';

@Component({
  tag: 'bds-text',
  styleUrl: 'text.scss',
  shadow: true,
})
export class BdsText {
  /**
   * Define a tag HTML que será usada (ex: 'p', 'span', 'h1', 'a', etc).
   */
  @Prop() tag: string = 'p'; // valor padrão é 'p'

  /**
   * URL para quando a tag for 'a', se houver.
   */
  @Prop() href: string = '';
  /**
   * Escolha a cor do texto.
   */
  @Prop() color: string = 'default';

  /**
   * Bold. Entered as one of the bold. Can be one of:
   * 'regular', 'semi-bold', 'bold', 'extra-bold';
   */
  @Prop() fontWeight?: Weight = 'regular';

  /**
   * Added font style italic
   */
  @Prop() fontStyle?: Style = 'normal';
  /**
   * Adiciona text decoration do css para textos.
   */
  @Prop() textDecoration?: Decoration = null;

  /**
   * Adiciona text align do css para textos.
   */
  @Prop() textAlign?: Align = null;
  
  /**
   * Adiciona text align do css para textos.
   */
   @Prop() textOverflow?: boolean = false;

  render() {
    const Element = this.tag;
    const weight = this.tag === 'h1' || this.tag === 'h2' || this.tag === 'h3' ? false : true;

    // Se a tag for 'a' e tiver um href, cria um link
    if (this.tag === 'a' && this.href) {
      return (
        <a href={this.href}>
          <slot></slot>
        </a>
      );
    }

    if (this.href && this.tag !== 'a') {
      return (
        <a href={this.href}>
          <Element
            style={{ textDecoration: `${this.textDecoration}`, textAlign: `${this.textAlign}` }}
            class={{
              [`text__weight--${this.fontWeight}`]: weight,
              [`text__style--${this.fontStyle}`]: true,
            }}
          >
            <slot></slot>
          </Element>
        </a>
      );
    }

    // Para outros tipos de tags, retorna diretamente o texto dentro da tag correspondente
    return (
      <Element
        style={{ textDecoration: `${this.textDecoration}`, textAlign: `${this.textAlign}` }}
        class={{
          [`text__color--${this.color}`]: true,
          [`text__weight--${this.fontWeight}`]: weight,
          [`text__style--${this.fontStyle}`]: true,
          'text__overflow': this.textOverflow,
        }}
      >
        <slot></slot>
      </Element>
    );
  }
}
