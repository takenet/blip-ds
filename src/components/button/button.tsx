import { Component, h} from "@stencil/core";

@Component({
  tag: 'sbp-button',
  styleUrl: 'button.scss'
})
export class Button {
  render() {
    return (
      <button class="button">
        <slot></slot>
      </button>
    )
  }
}