import { Component, h, Prop, Host } from "@stencil/core";

@Component({
  tag: "bds-column",
  styleUrl: "column.scss",
  // shadow: true,
})
export class Column {
  @Prop() size?= 0;

  getStyle() {
    return {
      "flexGrow": this.size.toString(),
    }
  }

  render() {
    return (
      <Host class="column" syle={this.getStyle()}>
        <slot></slot>
      </Host>
    )
  }
}