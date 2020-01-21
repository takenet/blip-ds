import { Component, h, Prop, Element, State } from "@stencil/core";

export type InputType = 'text' | 'password';

export type InputAutocapitalize = 'off' | 'none' | 'words' | 'on' | 'sentences' | 'characters';

export type InputAutoComplete = 'on' | 'off' | 'current-password' | 'new-password' | 'username';

@Component({
  tag: 'bds-input',
  styleUrl: 'input.scss',
  shadow: true
})
export class Input {
  @Element() element: HTMLElement;

  /**
   * Conditions the element to say whether it is pressed or not, to add styles.
   */
  @State() isPressed?= false;

  /**
   * Indicates if the input is password, adding the eye icon.
   */
  @State() isPassword?= false;

  /**
   * When the input is of the password type, this field informs if the eye is open or closed.
   */
  @State() showPassword?= false;

  /**
   * Input Id
   */
  @Prop() inputId!: string;

  /**
   * Input Name
   */
  @Prop() inputName?: string = '';

  /**
   * Input type. Can be one of: "text" or "password".
   */
  @Prop() type?: InputType = 'text';

  /**
   *  label in input, with he the input size increases.
   */
  @Prop() label?: string = '';

  /**
   * A tip for the user who can enter no controls.
   */
  @Prop() placeholder?: string = '';

  /**
   * Capitalizes every word's second character.
   */
  @Prop() autoCapitalize?: InputAutocapitalize = 'off';

  /**
   * Hint for form autofill feature
   */
  @Prop() autoComplete?: InputAutoComplete = 'off';

  /**
   * Indicated to pass a help the user in complex filling.
   */
  @Prop() helperMessage?: string = '';

  /**
   * Indicated to pass an feeback to user.
   */
  @Prop() errorMessage?: string = '';

  /**
   * used for add icon in input left. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) icon?: string = '';

  /**
   * Input value.
   */
  @Prop({ reflect: true }) value?: string = '';

  /**
   * Add state danger on input, use for use feedback.
   */
  @Prop({ reflect: true }) danger?: boolean = false;

  @Prop() onChangeValue: Function;

  /**
   * Disabled input.
   */
  @Prop() disabled?= false;


  connectedCallback(): void {
    if (this.type == 'password') this.isPassword = true;
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  getTypeInput(): string {
    if (this.isPassword && this.showPassword) return 'text';

    return this.type;
  }

  getAutoCompleteInput(): string {
    if (!this.showPassword) return 'current-password';

    return this.autoComplete;
  }

  inputChanged(event): void {
    if (this.onChangeValue) this.onChangeValue(event.target.value);
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
  }

  render(): HTMLElement {
    return (
      <div class={{
        "input": true,
        "input--state-primary": !this.danger,
        "input--state-danger": this.danger,
        "input--state-disabled": this.disabled,
        "input--label": !!this.label,
        "input--pressed": this.isPressed && !this.disabled,
      }}
        onClick={(): void => { this.isPressed = true; }}
      >
        {this.renderIcon()}
        <div class="input__container">
          {this.renderLabel()}
          <input
            disabled={this.disabled}
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
