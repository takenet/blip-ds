import { Component, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'bds-navbar-slot',
  styleUrl: 'navbar.scss',
  shadow: true,
})
export class NavbarSlot {
  @Element() hostElement: HTMLElement;

  render() {
    return (
      <Host class={{ NavbarSlot: true }}>
        <slot />
      </Host>
    );
  }
}
