import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: 'bds-input',
  styleUrl: 'input.scss',
  shadow: true
})
export class Input {
  @Prop() title?: string = '';
  @Prop() iconLeft?: string = '';
  @Prop() iconRight?: string = '';

  renderIconLeft(): HTMLElement {
    if (!this.iconLeft) return null;
    return (
      <div class="input__container__icon-left">
        <bds-icon size={this.title ? "medium" : "small"} name={this.iconLeft} color="inherit"></bds-icon>
      </div>
    )
  }

  renderContent(): HTMLElement {
    return (
      <div class="input__container__content">
        {this.title && (
          <label class="input__container__content__title">
            <bds-typo variant="fs-12" bold="bold">{this.title}</bds-typo>
          </label>
        )}
        <input placeholder="teste" class="input__container__content__text" type="text" name="test" id="test" />
      </div>
    )
  }

  render(): HTMLElement {
    return (
      <div class={{
        "input__container": true,
        "input__container--title": !!this.title
      }}>
        {this.renderIconLeft()}
        {this.renderContent()}
      </div>
    )
  }
}
