import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: 'bds-menu-list-item',
  styleUrl: 'menu-list-item.scss',
  shadow: true,
})
export class MenuListItem {
  @Prop() color: string;

  /**
   * used for add icon in input left. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) icon!: string;

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
