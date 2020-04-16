import { Component, h, Prop, State, Watch, Event, EventEmitter, Method, Host } from "@stencil/core";
import { InputType, InputAutocapitalize, InputAutoComplete, InputCounterLengthRules } from './input-interface';

@Component({
  tag: 'bds-input',
  styleUrl: 'input.scss',
  shadow: true
})
export class Input {
  private nativeInput?: HTMLInputElement;

  /**
   * Conditions the element to say whether it is pressed or not, to add styles.
   */
  @State() isPressed?= false;

  /**
   * Indicates if the input is password, adding the eye icon.
   */
  @State() isPassword?= false;

  /**
   * Input Name
   */
  @Prop() inputName?= '';

  /**
   * Input type. Can be one of: "text" or "password".
   */
  @Prop({ reflect: true }) type?: InputType = 'text';

  /**
   *  label in input, with he the input size increases.
   */
  @Prop() label?= '';

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
   * The maximum value, which must not be less than its minimum (min attribute) value.
   */
  @Prop() max?: string;

  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
   */
  @Prop() maxlength?: number;

  /**
   * The minimum value, which must not be greater than its maximum (max attribute) value.
   */
  @Prop() min?: string;

  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
   */
  @Prop() minlength?: number;

  /**
   * If `true`, the user cannot modify the value.
   */
  @Prop() readonly = false;

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
  @Prop({ reflect: true }) disabled?: boolean = false;

  /**
   * Add state danger on input, use for use feedback.
   */
  @Prop({ reflect: true }) danger?: boolean = false;

  /**
   * The value of the input.
   */
  @Prop({ mutable: true }) value?: string | null = '';

  /**
   * Passing true to display a counter of available size, it is necessary to
   * pass another maxlength property.
   */
  @Prop() counterLength?= false;

  /**
   * Make it possible to pass the base values to the warning level and exclude,
   * using the values between min and max.
   */
  @Prop() counterLengthRule?: InputCounterLengthRules | {} = {};

  /**
   * If `true`, the user cannot modify the value.
   */
  @Prop() isSubmit = false;

  /**
   * if `true` input switched to textarea
   */
  @Prop() isTextarea = false;

  /**
   * The rows and cols attributes allow you to specify an exact size for the <textarea> to get. Setting this is a good idea for consistency, as the browser defaults may differ.
   */
  @Prop() rows?: number = 1;

  /**
   * The rows and cols attributes allow you to specify an exact size for the <textarea> to get. Setting this is a good idea for consistency, as the browser defaults may differ.
   */
  @Prop() cols?: number = 0;

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

  /**
   * Emitted when the input has changed.
   */
  @Event() bdsInput!: EventEmitter<KeyboardEvent>;

  /**
   * Event input onblur.
   */
  @Event() bdsOnBlur: EventEmitter;

  /**
   * Event input focus.
   */
  @Event() bdsFocus: EventEmitter;

  /**
   * Event input enter.
   */
  @Event() bdsSubmit: EventEmitter;

  /**
   * Sets focus on the specified `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.onClickWrapper();
  }

  @Method()
  async removeFocus(): Promise<void> {
    this.onBlur();
  }

  /**
   * Returns the native `<input>` element used under the hood.
   */
  @Method()
  async getInputElement(): Promise<HTMLInputElement> {
    return this.nativeInput;
  }

  private keyPressWrapper = (event: KeyboardEvent): void => {
    switch (event.key) {
      case 'Enter':
        this.bdsSubmit.emit({ event, value: this.value });
        if (this.isSubmit) {
          this.value = "";
        }
        break;
    }
  }

  private onInput = (ev: Event): void => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.bdsInput.emit(ev as KeyboardEvent);
  }

  private onBlur = (): void => {
    this.isPressed = false;
    this.bdsOnBlur.emit();
  }

  private onFocus = (): void => {
    this.isPressed = true;
    this.bdsFocus.emit();
  }

  private onClickWrapper = (): void => {
    this.onFocus();
    if (this.nativeInput) { this.nativeInput.focus(); }
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

  private renderLabel(): HTMLElement {
    return this.label && (
      <label class={{
        "input__container__label": true,
        "input__container__label--pressed": this.isPressed && !this.disabled,
      }}>
        <bds-typo variant="fs-12" bold="bold">{this.label}</bds-typo>
      </label>
    )
  }

  private renderMessage(): HTMLElement {
    const icon = this.danger ? 'error' : 'info';
    const message = this.danger ? this.errorMessage : this.helperMessage;
    const styles = this.danger ? 'input__message input__message--danger' : 'input__message';

    if ((this.danger && this.errorMessage) ||
      (!this.danger && this.helperMessage)) {
      return (
        <div class={styles}>
          <div class="input__message__icon">
            <bds-icon
              size="x-small"
              name={icon}
              theme="solid"
              color="inherit">
            </bds-icon>
          </div>
          <bds-typo variant="fs-12">{message}</bds-typo>
        </div>
      )
    }

    return undefined;
  }

  render(): HTMLElement {
    const isPressed = this.isPressed && !this.disabled;
    const Element = this.isTextarea ? 'textarea' : 'input';

    return (
      <Host aria-disabled={this.disabled ? 'true' : null}>
        <div
          class={{
            "input": true,
            "input--state-primary": !this.danger,
            "input--state-danger": this.danger,
            "input--state-disabled": this.disabled,
            "input--label": !!this.label,
            "input--pressed": isPressed,
          }}
          onClick={this.onClickWrapper}
          onKeyPress={this.keyPressWrapper}
        >
          {this.renderIcon()}
          <div class="input__container">
            {this.renderLabel()}
            <Element
              class="input__container__text"
              rows={this.rows}
              cols={this.cols}
              autocapitalize={this.autoCapitalize}
              autocomplete={this.autoComplete}
              disabled={this.disabled}
              min={this.min}
              max={this.max}
              minLength={this.minlength}
              maxLength={this.maxlength}
              name={this.inputName}
              onBlur={this.onBlur}
              onFocus={this.onFocus}
              onInput={this.onInput}
              placeholder={this.placeholder}
              readOnly={this.readonly}
              type={this.type}
              value={this.value}
            >
            </Element>
          </div>
          {this.counterLength &&
            <bds-counter-text
              length={this.value.length}
              max={this.maxlength}
              active={isPressed}
              {...this.counterLengthRule}
            />}
          <slot name="input-right" />
          {this.renderMessage()}
        </div>
      </Host>
    )
  }
}
