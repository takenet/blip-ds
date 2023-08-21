import { Component, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'bds-navbar-content',
  styleUrl: 'navbar.scss',
  shadow: true,
})
export class NavbarContent {
  @Element() hostElement: HTMLElement;

  render() {
    return (
      <Host class={{ NavbarContent: true }}>
        <slot />
      </Host>
    );
  }
}
