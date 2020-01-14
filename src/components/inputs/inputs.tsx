import { Component, h } from "@stencil/core";

@Component({
  tag: 'bds-input',
  styleUrl: 'input.scss',
  shadow: true
})
export class Input {
  render(): HTMLElement {
    return (
      <div class="input__container">
        <label class="input__label">Test</label>
        <input class="input__text" type="text" name="test" id="test" />
      </div>
    )
  }
}
