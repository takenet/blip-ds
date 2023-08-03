import { Component, h, Host, Prop, EventEmitter, Event, Element } from '@stencil/core';

export type navbarPosition = 'horizontal' | 'vertical';
export type navbarBackground = 'surface-1' | 'surface-2' | 'surface-3' | 'surface-4';

@Component({
  tag: 'bds-navbar',
  styleUrl: 'navbar.scss',
  shadow: true,
})
export class Navbar {
  @Element() hostElement: HTMLElement;

  /**
   * navbar position. Used to position the navbar. Either on the left or on the right.
   */
  @Prop() navbarPosition?: navbarPosition = 'vertical';

  /**
   * Width, number to define navbar width.
   */
  @Prop() background?: navbarBackground = 'surface-1';

  /**
   * Emitted when the isOpen has changed.
   */
  @Event() bdsToggle!: EventEmitter;

  render() {
    return (
      <Host class={{ [`${this.navbarPosition}`]: true }}>
        <div
          class={{
            navbar: true,
            [`navbar__position__${this.navbarPosition}`]: true,
            [`navbar__background__${this.background}`]: true,
          }}
        >
          <slot name="content-area" />
          <slot name="action-area" />
        </div>
      </Host>
    );
  }
}
