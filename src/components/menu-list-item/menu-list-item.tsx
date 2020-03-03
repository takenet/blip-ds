import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: 'bds-menu-list-item',
  styleUrl: 'menu-list-item.scss',
})
export class MenuListItem {
  @Prop() color: string;
  @Prop() icon!: string;

  render(): HTMLElement {
    return (
      <Host>
        <div class="menu-list-item">
          <bds-icon color={this.color} name={this.icon}></bds-icon>
          <bds-typo class="menu-list-item__text" variant="fs-10"><slot></slot></bds-typo>
        </div>
      </Host>
    )
  }
}
