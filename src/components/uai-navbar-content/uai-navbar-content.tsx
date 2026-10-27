import { Component, h, Host, Element } from '@stencil/core';

/**
 * Group of items inside a uai-navbar.
 *
 * @slot - Items of the group.
 */
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
