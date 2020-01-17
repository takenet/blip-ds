import { Component, h, Prop, Element, State } from "@stencil/core";

export type InputType = 'text' | 'textarea';

@Component({
  tag: 'bds-input',
  styleUrl: 'input.scss',
  shadow: true
})
export class Input {
  @Element() element: HTMLElement;

  @Prop() inputId!: string;
  @Prop() inputName?: string = '';

  @Prop() type?: InputType = 'text';
  @Prop() label?: string = '';
  @Prop() placeholder?: string = '';
  @Prop() helperMessage?: string = '';
  @Prop() errorMessage?: string = '';

  @Prop() iconLeft?: string = '';
  @Prop() iconRight?: string = '';

  @Prop({ reflect: true }) value?: string = '';

  @Prop({ reflect: true }) danger?: boolean = false;

  @Prop() onChangeValue: Function;

  @State() isPressed?= false;

  renderIconLeft(): HTMLElement {
    return this.iconLeft && (
      <div class={{
        "input__icon-left": true,
        "input__icon-left--large": !!this.label,
      }}>
        <bds-icon
          size={this.label ? "medium" : "small"}
          name={this.iconLeft}
          color="inherit">
        </bds-icon>
      </div>
    )
  }

  renderLabel(): HTMLElement {
    return this.label && (
      <label class="input__container__label">
        <bds-typo variant="fs-12" bold="bold">{this.label}</bds-typo>
      </label>
    )
  }

  renderMessageError(): HTMLElement {
    if (!this.danger && this.helperMessage) {
      return (
        <div class="input__message">
          <bds-typo variant="fs-12">{this.helperMessage}</bds-typo>
        </div>
      )
    }

    if (this.danger && this.errorMessage) {
      return (
        <div class="input__message input__message--danger">
          <div class="input__message__icon">
            <bds-icon
              size="x-small"
              name="error"
              theme="solid"
              color="inherit">
            </bds-icon>
          </div>
          <bds-typo variant="fs-12">{this.errorMessage}</bds-typo>
        </div>
      )
    }

    return null;

  }

  inputChanged(event): void {
    if (this.onChangeValue) {
      this.onChangeValue(event.target.value);
    }
  }

  render(): HTMLElement {
    return (
      <div class={{
        "input": true,
        "input--state-primary": !this.danger,
        "input--state-danger": this.danger,
        "input--label": !!this.label,
        "input--pressed": this.isPressed,
      }}
        onClick={(): void => { this.isPressed = true; }}
      >
        {this.renderIconLeft()}
        <div class="input__container">
          {this.renderLabel()}
          <input
            class="input__container__text"
            onInput={(event: UIEvent): void => this.inputChanged(event)}
            onBlur={(): void => { this.isPressed = false; }}
            onFocus={(): void => { this.isPressed = true; }}
            id={this.inputId}
            name={this.inputName}
            placeholder={this.placeholder}
            type={this.type}
            value={this.value}
          />
        </div>
        {this.renderMessageError()}
      </div>
    )
  }
}
