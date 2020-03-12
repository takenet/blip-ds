import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "bds-row",
  styleUrl: "row.scss",
  // shadow: true,
})
export class Row {

  render() {
    return (
      <Host class="row">
        <slot></slot>
      </Host>
    )
  }
}