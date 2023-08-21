import { Component, h, Host, Prop, Element } from '@stencil/core';

export type orientation = 'horizontal' | 'vertical';
export type navbarBackground = 'surface-1' | 'surface-2' | 'surface-3';
export type justifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
@Component({
  tag: 'bds-navbar',
  styleUrl: 'navbar.scss',
  shadow: true,
})
export class Navbar {
  @Element() hostElement: HTMLElement;

  /**
   * Navbar orientation. Used to orientation the navbar. Either on the left or on the right.
   */
  @Prop() orientation?: orientation = 'vertical';

  /**
   * Width, number to define navbar width.
   */
  @Prop() backgroundColor?: navbarBackground = 'surface-1';

  /**
   * Justify Content. Used to align itens in navbar.
   */
  @Prop() justifyContent?: justifyContent = 'space-between';

  render() {
    return (
      <Host class={{ [`${this.orientation}`]: true }}>
        <div
          class={{
            navbar: true,
            [`navbar__justify-content__${this.justifyContent}`]: true,
            [`navbar__orientation__${this.orientation}`]: true,
            [`navbar__background-color__${this.backgroundColor}`]: true,
          }}
        >
          <slot />
        </div>
      </Host>
    );
  }
}
