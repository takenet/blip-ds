import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "bds-grid",
  styleUrl: "grid.scss",
  shadow: true,
})
export class Grid {

  render() {
    return (
      <Host class="grid">
        <slot></slot>
      </Host>
    )
  }
}