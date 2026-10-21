import { Component, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'uai-navbar-content',
  styleUrl: 'uai-navbar-content.scss',
  shadow: true,
})
export class UaiNavbarContent {
  @Element() hostElement: HTMLElement;

  render() {
    return (
      <Host class={{ NavbarContent: true }}>
        <slot />
      </Host>
    );
  }
}
