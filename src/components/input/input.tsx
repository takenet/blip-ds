/* eslint-disable no-console */
import { Component, h, Prop, State, Watch, Event, EventEmitter, Method, Host } from '@stencil/core';
import { InputType, InputAutocapitalize, InputAutoComplete, InputCounterLengthRules } from './input-interface';
import { emailValidation, numberValidation } from '../../utils/validations';

@Component({
  tag: 'bds-input',
  styleUrl: 'input.scss',
  shadow: true,
})
export class Input {
  private nativeInput?: HTMLInputElement | HTMLTextAreaElement;

  @State() isPressed? = false;
  @State() isPassword? = false;
  @State() validationMesage? = '';
  @State() validationDanger? = false;
  /**
   * Input name, used for form identification.
   */
  @Prop() inputName? = '';

  /**
   * Defines the input type (e.g., `text`, `password`, etc).
   */
  @Prop({ reflect: true }) type?: InputType = 'text';

  /**
   * Label to be displayed above the input.
   */
  @Prop() label? = '';

  /**
   * Text to be displayed as a hint or placeholder in the input.
   */
  @Prop() placeholder?: string = '';

  /**
   * Defines automatic text capitalization (possible values: `on`, `off`).
   */
  @Prop() autoCapitalize?: InputAutocapitalize = 'off';

  /**
   * Defines browser autocomplete behavior (possible values: `on`, `off`).
   */
  @Prop() autoComplete?: InputAutoComplete = 'off';

  /**
   * Defines the maximum allowed value for the input.
   */
  @Prop() max?: string;

  /**
   * Defines the maximum number of characters allowed in the input.
   */
  @Prop() maxlength?: number;

  /**
   * Defines the minimum allowed value for the input.
   */
  @Prop() min?: string;

  /**
   * Defines the minimum number of characters allowed in the input.
   */
  @Prop() minlength?: number;

  /**
   * Makes the input read-only.
   */
  @Prop() readonly = false;

  /**
   * Defines if the input is required.
   */
  @Prop() required: boolean;

  /**
   * Defines a regex pattern that the input value must follow.
   */
  @Prop() pattern?: string;

  /**
   * Help message displayed below the input.
   */
  @Prop() helperMessage?: string = '';

  /**
   * Error message displayed when the input value is invalid.
   */
  @Prop({ mutable: true }) errorMessage?: string = '';

  /**
   * Message displayed when the input value is valid.
   */
  @Prop({ mutable: true }) successMessage?: string = '';

  /**
   * Name of the icon to be displayed inside the input.
   */
  @Prop({ reflect: true }) icon?: string = '';

  /**
   * Defines if the input is disabled.
   */
  @Prop({ reflect: true, mutable: true }) disabled?: boolean = false;

  /**
   * Defines if the input is in error state.
   */
  @Prop({ reflect: true, mutable: true }) danger?: boolean = false;

  /**
   * Defines if the input is in success state.
   */
  @Prop({ reflect: true, mutable: true }) success?: boolean = false;

  /**
   * The current value of the input.
   */
  @Prop({ mutable: true }) value?: string | null = '';

  /**
   * Defines whether a character length counter will be displayed.
   */
  @Prop() counterLength? = false;

  /**
   * Defines the character length counter rule (min, max, etc).
   */
  @Prop() counterLengthRule?: InputCounterLengthRules = null;

  /**
   * Defines whether the input will be submitted when pressing Enter.
   */
  @Prop() isSubmit = false;

  /**
   * Defines whether the input is a textarea.
   */
  @Prop() isTextarea = false;

  /**
   * Defines the number of lines for the textarea (if `textarea`).
   */
  @Prop() rows?: number = 3;

  /**
   * Defines the number of columns for the textarea (if `textarea`).
   */
  @Prop() cols?: number = 0;

  /**
   * Defines whether the textarea should automatically resize based on content.
   */
  @Prop() autoResize = true;

  /**
   * Defines whether the textarea can be manually resized by the user.
   */
  @Prop() resizable = false;

  /**
   * Defines the minimum height of the textarea in pixels.
   */
  @Prop() minHeight?: number = 60;

  /**
   * Defines the maximum height of the textarea in pixels.
   */
  @Prop() maxHeight?: number = 200;

  /**
   * Defines the icon size (small or medium).
   */
  @Prop() iconSize?: 'small' | 'medium' = 'small';

  /**
   * Error message displayed when the input is not filled and is required.
   */
  @Prop() requiredErrorMessage: string;

  /**
   * Error message displayed when the input value doesn't meet the minimum length requirement.
   */
  @Prop() minlengthErrorMessage: string;

  /**
   * Error message displayed when the input value doesn't meet the minimum allowed value.
   */
  @Prop() minErrorMessage: string;

  /**
   * Error message displayed when the input value doesn't meet the maximum allowed value.
   */
  @Prop() maxErrorMessage: string;

  /**
   * Error message displayed when the input value is not a valid email.
   */
  @Prop() emailErrorMessage: string;

  /**
   * Error message displayed when the input value is not a valid number.
   */
  @Prop() numberErrorMessage: string;

  /**
   * Defines if the input will be displayed as chips (a type of input with multiple values).
   */
  @Prop() chips: boolean;

  /**
   * Data test is the prop to specifically test the component action.
   */
  @Prop() dataTest?: string = null;

  @Prop() encode?: boolean = false;

  /**
   * Event emitted when the input value changes.
   */
  @Event({ bubbles: true, composed: true }) bdsChange!: EventEmitter;

  /**
   * Event emitted when the input receives input (typing).
   */
  @Event() bdsInput!: EventEmitter<KeyboardEvent>;

  /**
   * Event emitted when the input loses focus.
   */
  @Event() bdsOnBlur: EventEmitter;

  /**
   * Event emitted when the input gains focus.
   */
  @Event() bdsFocus: EventEmitter;

  /**
   * Event emitted when the form is submitted.
   */
  @Event() bdsSubmit: EventEmitter;

  /**
   * Event emitted for regex pattern validation.
   */
  @Event() bdsPatternValidation: EventEmitter;

  /**
   * Event emitted when the "Backspace" key is pressed.
   */
  @Event() bdsKeyDownBackspace: EventEmitter;

  /**
   * Sets focus to the input field.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.onClickWrapper();
  }

  /**
   * Removes focus from the input field.
   */
  @Method()
  async removeFocus(): Promise<void> {
    this.onBlur();
  }

  /**
   * Returns the input element of the component.
   */
  @Method()
  async getInputElement(): Promise<HTMLInputElement | HTMLTextAreaElement> {
    return this.nativeInput;
  }

  /**
   * Checks if the input field is valid.
   */
  @Method()
  async isValid(): Promise<boolean> {
    return this.nativeInput.validity.valid;
  }

  /**
   * Clears the input field value.
   */
  @Method()
  async clear(): Promise<void> {
    this.value = '';
  }

  /**
   * Encodes special characters for safe display (prevents HTML code injection).
   */
  private encodeValue(value?: string): string {
    const lt = /</g,
      gt = />/g,
      ap = /'/g,
      ic = /"/g,
      amp = /&/g,
      slash = /\//g;
if(!this.encode) return value;
    return (
      value &&
      value
        .toString()
        .replace(lt, '&lt;')
        .replace(gt, '&gt;')
        .replace(ap, '&#39;')
        .replace(ic, '&#34;')
        .replace(amp, '&amp;')
        .replace(slash, '&#47;')
    );
  }

  /**
   * Notifies about the input field value change.
   */
  @Watch('value')
  protected valueChanged(newValue: string | null): void {
    const changeValue = this.encode ? this.encodeValue(newValue || '') : newValue || '';
    this.bdsChange.emit({ value: changeValue });
  }

  /**
   * Key press event handling (Enter, Backspace, etc).
   */
  private keyPressWrapper = (event: KeyboardEvent): void => {
    switch (event.key) {
      case 'Enter':
        this.bdsSubmit.emit({ event, value: this.value });

        if (this.isSubmit) {
          this.clearTextInput();
          event.preventDefault();
        }
        break;
      case 'Backspace':
      case 'Delete':
        this.bdsKeyDownBackspace.emit({ event, value: this.value });
        break;
    }
  };

  /**
   * Auto-resizes the textarea based on content.
   */
  private autoResizeTextarea(): void {
    if (this.isTextarea && this.autoResize && this.nativeInput) {
      const textarea = this.nativeInput as HTMLTextAreaElement;
      
      // Reset height to auto to get the correct scrollHeight
      textarea.style.height = 'auto';
      
      // Calculate new height
      const scrollHeight = textarea.scrollHeight;
      const newHeight = Math.min(
        Math.max(scrollHeight, this.minHeight || 60),
        this.maxHeight || 200
      );
      
      textarea.style.height = `${newHeight}px`;
    }
  }

  /**
   * Centralizes all necessary updates for the textarea, including auto-resize.
   */
  private updateTextarea(): void {
    if (this.isTextarea && this.autoResize) {
      this.autoResizeTextarea();
    }
  }

  /**
   * Function called when typing in the input field.
   */
  private onInput = (ev: Event): void => {
    this.onBdsInputValidations();
    const input = ev.target as HTMLInputElement | HTMLTextAreaElement | null;
    if (input) {
      this.value = input.value || '';
    }
    
    // Update textarea if needed
    this.updateTextarea();
    
    this.bdsInput.emit(ev as KeyboardEvent);
  };

  /**
   * Function called when the input field loses focus.
   */
  private onBlur = (): void => {
    this.onBlurValidations();
    this.isPressed = false;
    this.bdsOnBlur.emit();
  };

  /**
   * Function called when the input field gains focus.
   */
  private onFocus = (): void => {
    this.isPressed = true;
    this.bdsFocus.emit();
  };

  /**
   * Function called when clicking on the input field.
   */
  private onClickWrapper = (): void => {
    this.onFocus();
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  };

  /**
   * Clears the input field value.
   */
  private clearTextInput = (ev?: Event) => {
    if (!this.readonly && !this.disabled && ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }

    this.value = '';

    if (this.nativeInput) {
      this.nativeInput.value = '';
    }
  };

  /**
   * Function that renders the icon inside the input field.
   */
  private renderIcon(): HTMLElement {
    return (
      this.icon && (
        <div
          class={{
            input__icon: true,
            'input__icon--large': !!this.label || this.iconSize === 'medium',
            'input__icon--textarea': this.isTextarea,
          }}
        >
          <bds-icon
            class="input__icon--color"
            size={this.label || this.iconSize === 'medium' ? 'medium' : 'small'}
            name={this.icon}
            color="inherit"
          ></bds-icon>
        </div>
      )
    );
  }

  /**
   * Function that renders the label of the input field.
   */
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

  /**
   * Function that renders error or success messages below the input field.
   */
  private renderMessage(): HTMLElement {
    const icon = this.danger ? 'error' : this.success ? 'checkball' : 'info';
    let message = this.danger ? this.errorMessage : this.success ? this.successMessage : this.helperMessage;

    if (!message && this.validationDanger) message = this.validationMesage;

    const styles =
      this.danger || this.validationDanger
        ? 'input__message input__message--danger'
        : this.success
          ? 'input__message input__message--success'
          : 'input__message';

    if (message) {
      return (
        <div class={styles} part="input__message">
          <div class="input__message__icon">
            <bds-icon size="x-small" name={icon} theme="outline" color="inherit"></bds-icon>
          </div>
          <bds-typo class="input__message__text" variant="fs-12">
            {message}
          </bds-typo>
        </div>
      );
    }

    return undefined;
  }

  /**
   * Validates the input field when it loses focus.
   */
  private onBlurValidations() {
    this.required && this.requiredValidation();
    this.pattern && this.patternValidation();
    (this.minlength || this.maxlength) && this.lengthValidation();
    (this.min || this.max) && this.minMaxValidation();
    this.checkValidity();
  }

  /**
   * Performs field validations while the user types.
   */
  private onBdsInputValidations() {
    this.type === 'email' && this.emailValidation();
    this.type === 'phonenumber' && this.numberValidation();
    this.checkValidity();
  }

  /**
   * Validates the regex pattern of the field.
   */
  private patternValidation() {
    const regex = new RegExp(this.pattern);
    this.bdsPatternValidation.emit(regex.test(this.nativeInput.value));
  }

  /**
   * Validates if the field is required.
   */
  private requiredValidation() {
    if (this.nativeInput.validity.valueMissing) {
      this.validationMesage = this.requiredErrorMessage;
      this.validationDanger = true;
    }
  }

  /**
   * Validates the text length in the input field.
   */
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

  /**
   * Validates the minimum and maximum values of the input field.
   */
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

  /**
   * Validates if the field contains a valid email.
   */
  private emailValidation() {
    if (emailValidation(this.nativeInput.value)) {
      this.validationMesage = this.emailErrorMessage;
      this.validationDanger = true;
    }
  }

  /**
   * Validates if the field contains a valid number.
   */
  private numberValidation() {
    if (numberValidation(this.nativeInput.value)) {
      this.validationMesage = this.numberErrorMessage;
      this.validationDanger = true;
    }
  }

  /**
   * Checks if the input field is valid.
   */
  private checkValidity() {
    if (this.nativeInput.validity.valid) {
      this.validationDanger = false;
    }
  }

  /**
   * Updates the input field value after changes.
   */
  componentDidUpdate() {
    if (this.nativeInput && this.value != this.nativeInput.value) {
      this.nativeInput.value = this.value;
    }
    
    // Update textarea after value changes
    this.updateTextarea();
  }

  /**
   * Initial configurations after the component loads.
   */
  componentDidLoad() {
    // Set initial height for textarea
    this.updateTextarea();
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
            'input--state-success': this.success,
            'input--state-disabled': this.disabled,
            'input--label': !!this.label,
            'input--pressed': isPressed,
            'input--textarea': this.isTextarea,
          }}
          onClick={this.onClickWrapper}
          onKeyDown={this.keyPressWrapper}
          part="input-container"
        >
          {this.renderIcon()}
          <slot name="input-left"></slot>
          <div class="input__container">
            {this.renderLabel()}
            <div class={{ 
              input__container__wrapper: !this.chips, 
              input__container__wrapper__chips: this.chips,
              'input__container__wrapper--textarea': this.isTextarea
            }}>
              <slot name="inside-input-left"></slot>
              <Element
                class={{ 
                  input__container__text: true, 
                  input__container__text__chips: this.chips,
                  'input__container__text--textarea': this.isTextarea
                }}
                ref={(input) => (this.nativeInput = input)}
                rows={this.isTextarea ? this.rows : undefined}
                cols={this.isTextarea ? this.cols : undefined}
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
                type={this.isTextarea ? undefined : this.type}
                value={this.encodeValue(this.value)}
                pattern={this.pattern}
                required={this.required}
                part="input"
                data-test={this.dataTest}
                style={this.isTextarea ? {
                  minHeight: `${this.minHeight || 60}px`,
                  maxHeight: `${this.maxHeight || 200}px`,
                  resize: this.resizable ? (this.autoResize ? 'none' : 'vertical') : 'none'
                } : {}}
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
          {this.success && <bds-icon class="icon-success" name="check" theme="outline" size="small" />}
          <slot name="input-right" />
        </div>
        {this.renderMessage()}
      </Host>
    );
  }
}
