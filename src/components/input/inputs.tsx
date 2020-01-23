import { Component, h, Prop, Element, State, Watch, Event, EventEmitter, Method } from "@stencil/core";

export type InputType = 'text' | 'password';

export type InputAutocapitalize = 'off' | 'none' | 'words' | 'on' | 'sentences' | 'characters';

export type InputAutoComplete = 'on' | 'off' | 'current-password' | 'new-password' | 'username';

@Component({
  tag: 'bds-input',
  styleUrl: 'input.scss',
  // shadow: true,
  scoped: true
})
export class Input {
  private nativeInput?: HTMLInputElement;

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
  @Prop({ reflect: true }) type?: InputType = 'text';

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
   * Disabled input.
   */
  @Prop() disabled?= false;

  /**
   * Add state danger on input, use for use feedback.
   */
  @Prop({ reflect: true }) danger?: boolean = false;

  /**
   * The value of the input.
   */
  @Prop({ mutable: true, reflect: true }) value?: string | null = '';

  /**
   * Update the native input element when the value changes
   */
  @Watch('value')
  protected valueChanged(): void {
    this.bdsChange.emit({ value: this.value });
  }

  /**
   * Emitted when the value has changed.
   */
  @Event() bdsChange!: EventEmitter;


  connectedCallback(): void {
    if (this.type == 'password') this.isPassword = true;
  }

  /**
   * Sets focus on the specified `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }

  /**
   * Returns the native `<input>` element used under the hood.
   */
  @Method()
  getInputElement(): Promise<HTMLInputElement> {
    return Promise.resolve(this.nativeInput!);
  }

  private onInput = (ev: Event): void => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    console.log('private onInput', ev);
    this.bdsChange.emit(ev as KeyboardEvent);
  }

  private onBlur = (): void => { this.isPressed = false; }

  private onFocus = (): void => { this.isPressed = true; }

  private onClick = (): void => { this.isPressed = true; }

  private refNativeInput = (input: HTMLInputElement): void => { this.nativeInput = input }

  private toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  private getTypeInput(): string {
    if (this.isPassword && this.showPassword) return 'text';

    return this.type;
  }

  private getAutoCompleteInput(): string {
    if (!this.showPassword) return 'current-password';

    return this.autoComplete;
  }

  private renderIcon(): HTMLElement {
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

  private renderEyeIcon(): HTMLElement {
    const name = this.showPassword ? "eye-open" : "eye-closed";

    return this.isPassword && (
      <div class="input__icon_eye" onClick={(): void => this.toggleShowPassword()}>
        <bds-icon size="small" name={name} color="inherit"></bds-icon>
      </div>
    )
  }

  private renderLabel(): HTMLElement {
    return this.label && (
      <label class="input__container__label">
        <bds-typo variant="fs-12" bold="bold">{this.label}</bds-typo>
      </label>
    )
  }

  private renderMessageError(): HTMLElement {
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
    const autocomplete = this.getAutoCompleteInput();
    const type = this.getTypeInput();

    return (
      <div class={{
        "input": true,
        "input--state-primary": !this.danger,
        "input--state-danger": this.danger,
        "input--state-disabled": this.disabled,
        "input--label": !!this.label,
        "input--pressed": this.isPressed && !this.disabled,
      }}
        onClick={this.onClick}
      >
        {this.renderIcon()}
        <div class="input__container">
          {this.renderLabel()}
          <input
            autocapitalize={this.autoCapitalize}
            autocomplete={autocomplete}
            class="input__container__text"
            disabled={this.disabled}
            id={this.inputId}
            name={this.inputName}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            onInput={this.onInput}
            placeholder={this.placeholder}
            ref={this.refNativeInput}
            type={type}
            value={this.value}
          />
        </div>
        {this.renderEyeIcon()}
        {this.renderMessageError()}
      </div>
    )
  }
}
