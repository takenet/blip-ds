import { Component, Host, h } from "@stencil/core";

@Component({
  tag: 'bds-menu-list',
  styleUrl: 'menu-list.scss',
  shadow: true,
})
export class MenuList {
  render(): HTMLElement {
    return (
      <Host class="menu-list">
        <div class="menu-list__left"></div>
        <slot></slot>
        <div class="menu-list__right"></div>
      </Host>
    )
  }
}