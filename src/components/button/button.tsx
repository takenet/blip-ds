import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: 'sbp-button',
  styleUrl: 'button.scss'
})
export class Button {
  @Prop() action: Function;

  handleClick = () => {
    if (this.action) {
      this.action();
    } else {
      console.log('oie')
    }
  }

  render() {
    return (
      <button class="button" onClick={this.handleClick}>
        <slot></slot>
      </button>
    )
  }
}