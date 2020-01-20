import { Component, h, Prop, Element, State } from "@stencil/core";

export type InputType = 'text' | 'textarea' | 'password';

export type InputAutocapitalize = 'off' | 'none' | 'words' | 'on' | 'sentences' | 'characters';

export type InputAutoComplete = 'on' | 'off' | 'current-password' | 'new-password' | 'username';

@Component({
  tag: 'bds-input',
  styleUrl: 'input.scss',
  shadow: true
})
export class Input {
  @Element() element: HTMLElement;

  @State() isPressed?= false;
  @State() isPassword?= false;
  @State() showPassword?= false;

  @Prop() inputId!: string;
  @Prop() inputName?: string = '';

  @Prop() type?: InputType = 'text';
  @Prop() label?: string = '';
  @Prop() placeholder?: string = '';
  @Prop() helperMessage?: string = '';
  @Prop() errorMessage?: string = '';
  @Prop() autoCapitalize?: InputAutocapitalize = 'off';
  @Prop() autoComplete?: InputAutoComplete = 'off';

  @Prop() icon?: string = '';

  @Prop({ reflect: true }) value?: string = '';

  @Prop({ reflect: true }) danger?: boolean = false;

  @Prop() onChangeValue: Function;

  connectedCallback() {
    if (this.type == 'password') {
      this.isPassword = true;
      console.log('INPUT: connectedCallback: password', this.isPassword)
    }
  }

  toggleShowPassword(): void {
    console.log('trace: toggleShowPassword', this.showPassword, !this.showPassword)
    this.showPassword = !this.showPassword;
  }

  getTypeInput() {
    if (this.isPassword && this.showPassword) {
      return 'text'
    }

    return this.type;
  }

  getAutoCompleteInput() {
    if (!this.showPassword) return 'current-password';

    return this.autoComplete;
  }

  renderIcon(): HTMLElement {
    return this.icon && (
      <div class={{
        "input__icon": true,
        "input__icon--large": !!this.label,
      }}>
        <bds-icon
          size={this.label ? "medium" : "small"}
          name={this.icon}
          color="inherit">
        </bds-icon>
      </div>
    )
  }

  renderEyeIcon(): HTMLElement {
    if (!this.isPassword) return null;

    const name = this.showPassword ? "eye-open" : "eye-closed";

    return (
      <div class="input__icon_eye" onClick={(): void => this.toggleShowPassword()}>
        <bds-icon size="small" name={name} color="inherit"></bds-icon>
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
    if (this.onChangeValue) this.onChangeValue(event.target.value);
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
        {this.renderIcon()}
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
            type={this.getTypeInput()}
            value={this.value}
            autocapitalize={this.autoCapitalize}
            autocomplete={this.getAutoCompleteInput()}
          />
        </div>
        {this.renderEyeIcon()}
        {this.renderMessageError()}
      </div>
    )
  }
}
