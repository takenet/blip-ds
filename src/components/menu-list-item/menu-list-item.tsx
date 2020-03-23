import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: 'bds-menu-list-item',
  styleUrl: 'menu-list-item.scss',
})
export class MenuListItem {
  @Prop() color: string;
  @Prop() icon!: string;

  render(): HTMLElement {
    const color = this.color || "currentColor";

    return (
      <Host role="button">
        <div class="menu-list-item">
          <bds-icon color={color} name={this.icon}></bds-icon>
          <bds-typo class="menu-list-item__text" variant="fs-10"><slot /></bds-typo>
        </div>
      </Host>
    )
  }
}
