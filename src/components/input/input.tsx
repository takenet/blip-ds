import { Component, h, Prop, State, Watch, Event, EventEmitter, Method, Host } from '@stencil/core';
import { InputType, InputAutocapitalize, InputAutoComplete, InputCounterLengthRules } from './input-interface';
import { emailValidation } from '../../utils/validations';

@Component({
  tag: 'bds-input',
  styleUrl: 'input.scss',
  shadow: true,
})
export class Input {
  private nativeInput?: HTMLInputElement;
  /**
   * Conditions the element to say whether it is pressed or not, to add styles.
   */
  @State() isPressed? = false;

  /**
   * Indicates if the input is password, adding the eye icon.
   */
  @State() isPassword? = false;

  /**
   * Used to set the error message setted by the internal validators
   */
  @State() validationMesage? = '';
  /**
   * Used to set the danger behavior by the internal validators
   */
  @State() validationDanger? = false;

  /**
   * Input Name
   */
  @Prop() inputName? = '';

  /**
   * Input type. Can be one of: "text", "password", "number" or "email".
   */
  @Prop({ reflect: true }) type?: InputType = 'text';

  /**
   *  label in input, with he the input size increases.
   */
  @Prop() label? = '';

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
   * If `true`, the input value will be required.
   */
  @Prop() required: boolean;

  /**
   * Indicated to pass a help the user in complex filling.
   */
  @Prop() helperMessage?: string = '';

  /**
   * Indicated to pass an feeback to user.
   */
  @Prop({ mutable: true }) errorMessage?: string = '';

  /**
   * used for add icon in input left. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) icon?: string = '';

  /**
   * Disabled input.
   */
  @Prop({ reflect: true, mutable: true }) disabled?: boolean = false;

  /**
   * Add state danger on input, use for use feedback.
   */
  @Prop({ reflect: true, mutable: true }) danger?: boolean = false;

  /**
   * The value of the input.
   */
  @Prop({ mutable: true }) value?: string | null = '';

  /**
   * Passing true to display a counter of available size, it is necessary to
   * pass another maxlength property.
   */
  @Prop() counterLength? = false;

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
   * Error message when input is required
   */
  @Prop() requiredErrorMessage: string;

  /**
   * Error message when the value is lower than the minlength
   */
  @Prop() minlengthErrorMessage: string;

  /**
   * Error message when the value is lower than the min value
   */
  @Prop() minErrorMessage: string;

  /**
   * Error message when the value is higher than the max value
   */
  @Prop() maxErrorMessage: string;

  /**
   * Error message when the value isn't an email
   */
  @Prop() emailErrorMessage: string;

  /**
   * Internal prop to identify input chips
   */
  @Prop() chips: boolean;

  /**
   * Update the native input element when the value changes
   */
  @Watch('value')
  protected valueChanged(): void {
    this.bdsChange.emit({ value: this.value == null ? this.value : this.value.toString() });
  }

  /**
   * Emitted when the value has changed.
   */
  @Event({ bubbles: true, composed: true }) bdsChange!: EventEmitter;

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
   * Event input key down backspace.
   */
  @Event() bdsKeyDownBackspace: EventEmitter;

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

  /**
   * Return the validity of the input.
   */
  @Method()
  async isValid(): Promise<boolean> {
    return this.nativeInput.validity.valid;
  }

  /**
   * Return the validity of the input.
   */
  @Method()
  async clear(): Promise<void> {
    this.value = '';
  }

  private keyPressWrapper = (event: KeyboardEvent): void => {
    switch (event.key) {
      case 'Enter':
        this.bdsSubmit.emit({ event, value: this.value });

        if (this.isSubmit) {
          this.clearTextInput();
        }
        break;
      case 'Backspace' || 'Delete':
        this.bdsKeyDownBackspace.emit({ event, value: this.value });
        break;
    }
  };

  private onInput = (ev: Event): void => {
    this.onBdsInputValidations();
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.bdsInput.emit(ev as KeyboardEvent);
  };

  private onBlur = (): void => {
    this.onBlurValidations();
    this.isPressed = false;
    this.bdsOnBlur.emit();
  };

  private onFocus = (): void => {
    this.isPressed = true;
    this.bdsFocus.emit();
  };

  private onClickWrapper = (): void => {
    this.onFocus();
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  };

  private clearTextInput = (ev?: Event) => {
    if (!this.readonly && !this.disabled && ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }

    this.value = '';

    /**
     * This is needed for clearOnEdit
     * Otherwise the value will not be cleared
     * if user is inside the input
     */
    if (this.nativeInput) {
      this.nativeInput.value = '';
    }
  };

  private renderIcon(): HTMLElement {
    return (
      this.icon && (
        <div
          class={{
            input__icon: true,
            'input__icon--large': !!this.label,
          }}
        >
          <bds-icon size={this.label ? 'medium' : 'small'} name={this.icon} color="inherit"></bds-icon>
        </div>
      )
    );
  }

  private renderLabel(): HTMLElement {
    return (
      this.label && (
        <label
          class={{
            input__container__label: true,
            'input__container__label--pressed': this.isPressed && !this.disabled,
          }}
        >
          <bds-typo variant="fs-12" bold="bold">
            {this.label}
          </bds-typo>
        </label>
      )
    );
  }

  private renderMessage(): HTMLElement {
    const icon = this.danger ? 'error' : 'info';
    let message = this.danger ? this.errorMessage : this.helperMessage;

    if (!message && this.validationDanger) message = this.validationMesage;

    const styles = this.danger || this.validationDanger ? 'input__message input__message--danger' : 'input__message';

    if (message) {
      return (
        <div class={styles}>
          <div class="input__message__icon">
            <bds-icon size="x-small" name={icon} theme="solid" color="inherit"></bds-icon>
          </div>
          <bds-typo variant="fs-12">{message}</bds-typo>
        </div>
      );
    }

    return undefined;
  }

  private onBlurValidations() {
    this.required && this.requiredValidation();
    this.checkValidity();
  }

  private onBdsInputValidations() {
    (this.minlength || this.maxlength) && this.lengthValidation();
    (this.min || this.max) && this.minMaxValidation();
    this.type === 'email' && this.emailValidation();
    this.checkValidity();
  }

  private requiredValidation() {
    if (this.nativeInput.validity.valueMissing) {
      this.validationMesage = this.requiredErrorMessage;
      this.validationDanger = true;
    }
  }

  private lengthValidation() {
    if (this.nativeInput.validity.tooShort) {
      this.validationMesage = this.minlengthErrorMessage;
      this.validationDanger = true;
      return;
    }

    if (this.nativeInput.validity.tooLong) {
      this.validationDanger = true;
      return;
    }
  }

  private minMaxValidation() {
    if (this.nativeInput.validity.rangeUnderflow) {
      this.validationMesage = this.minErrorMessage;
      this.validationDanger = true;
      return;
    }

    if (this.nativeInput.validity.rangeOverflow) {
      this.validationMesage = this.maxErrorMessage;
      this.validationDanger = true;
      return;
    }
  }

  private emailValidation() {
    if (emailValidation(this.nativeInput.value)) {
      this.validationMesage = this.emailErrorMessage;
      this.validationDanger = true;
    }
  }

  private checkValidity() {
    if (this.nativeInput.validity.valid) {
      this.validationDanger = false;
    }
  }

  componentDidUpdate() {
    if (this.nativeInput && this.value != this.nativeInput.value) {
      this.nativeInput.value = this.value;
    }
  }

  render(): HTMLElement {
    const isPressed = this.isPressed && !this.disabled;
    const Element = this.isTextarea ? 'textarea' : 'input';

    return (
      <Host aria-disabled={this.disabled ? 'true' : null}>
        <div
          class={{
            input: true,
            'input--state-primary': !this.danger && !this.validationDanger,
            'input--state-danger': this.danger || this.validationDanger,
            'input--state-disabled': this.disabled,
            'input--label': !!this.label,
            'input--pressed': isPressed,
          }}
          onClick={this.onClickWrapper}
          onKeyDown={this.keyPressWrapper}
        >
          {this.renderIcon()}
          <div class="input__container">
            {this.renderLabel()}
            <div class={{ input__container__wrapper: !this.chips, input__container__wrapper__chips: this.chips }}>
              <slot name="input-left"></slot>
              <Element
                class={{ input__container__text: true, input__container__text__chips: this.chips }}
                ref={(input) => (this.nativeInput = input)}
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
                required={this.required}
              ></Element>
            </div>
          </div>
          {this.counterLength && (
            <bds-counter-text
              length={this.value.length}
              max={this.maxlength}
              active={isPressed}
              {...this.counterLengthRule}
            />
          )}
          <slot name="input-right" />
          {this.renderMessage()}
        </div>
      </Host>
    );
  }
}
