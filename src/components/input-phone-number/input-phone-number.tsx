import { Component, h, State, Prop, EventEmitter, Event, Method, Watch, Element, Listen } from '@stencil/core';
import { Option } from '../selects/select-interface';
import { numberValidation } from '../../utils/validations';
import * as countriesJson from './countries.json';

@Component({
  tag: 'bds-input-phone-number',
  styleUrl: 'input-phone-number.scss',
  scoped: true,
})
export class InputPhoneNumber {
  private nativeInput?: HTMLInputElement;

  @Element() el!: HTMLBdsSelectElement;

  @State() isOpen? = false;

  @State() selectedCountry: string;

  @State() isoCode: string;

  /**
   * Conditions the element to say whether it is pressed or not, to add styles.
   */
  @State() isPressed? = false;
  /**
   * Used to set the danger behavior by the internal validators
   */
  @State() validationDanger? = false;

  /**
   * Used to set the error message setted by the internal validators
   */
  @State() validationMesage? = '';

  /**
   * The options of select.
   */
  @Prop() options?: Array<Option> = [];

  /**
   * The value of the phone number input.
   */
  @Prop() text? = '';

  /**
   * the value of the select.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop({ mutable: true }) value?: string | null = '+55';

  /**
   * Add state danger on input, use for use feedback.
   */
  @Prop({ mutable: true, reflect: true }) danger? = false;

  /**
   * Disabled input.
   */
  @Prop({ reflect: true }) disabled? = false;

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
   * Error message when input is required
   */
  @Prop() requiredErrorMessage: string;

  /**
   * Error message when input is required
   */
  @Prop() numberErrorMessage: string;

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  /**
   * Emitted when the value has changed.
   */
  @Event({ bubbles: true, composed: true }) bdsPhoneNumberChange!: EventEmitter;

  /**
   * Emitted when the input has changed.
   */
  @Event() bdsInput!: EventEmitter<KeyboardEvent>;
  /**
   * Emitted when the selection is cancelled.
   */
  @Event() bdsCancel!: EventEmitter<void>;

  /**
   * Emitted when the select loses focus.
   */
  @Event() bdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the select loses focus.
   */
  @Event() bdsBlur!: EventEmitter<void>;

  /**
   *  label in input, with he the input size increases.
   */
  @Prop() label? = 'Phone number';

  /**
   * used for add icon in input left. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) icon?: string = '';

  @Method()
  async removeFocus(): Promise<void> {
    this.onBlur();
  }

  @Watch('value')
  valueChanged(): void {
    for (const option of this.childOptions) {
      option.selected = this.value === option.value;
    }
  }

  @Listen('mousedown', { target: 'window', passive: true })
  handleWindow(ev: Event) {
    if (!this.el.contains(ev.target as HTMLInputElement)) {
      this.isOpen = false;
    }
  }

  componentWillRender() {
    const countries = countriesJson['default'];
    const flagsNames = Object.keys(countries);
    this.selectedCountry = this.selectedCountry || flagsNames[0];
    this.isoCode = this.isoCode || flagsNames[0];
  }

  async connectedCallback() {
    for (const option of this.childOptions) {
      option.selected = this.value === option.value;
    }
  }

  private get childOptions(): HTMLBdsSelectOptionElement[] {
    return Array.from(this.el.querySelectorAll('bds-select-option'));
  }

  private refNativeInput = (el: HTMLInputElement): void => {
    this.nativeInput = el;
  };

  private onClickWrapper = (): void => {
    this.onFocus();
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  };

  private onFocus = (): void => {
    this.bdsFocus.emit();
    this.isPressed = true;
  };

  private onBlur = (): void => {
    this.bdsBlur.emit();
    this.isPressed = false;
  };

  private changedInputValue = async (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    this.checkValidity();
    if (input) {
      this.text = input.value || '';
      this.numberValidation();
    }
    this.bdsInput.emit(ev as KeyboardEvent);
  };

  @Watch('text')
  protected handleInputChange(): void {
    this.bdsPhoneNumberChange.emit({
      value: this.text,
      code: this.value,
      isoCode: this.isoCode,
      country: this.selectedCountry,
    });
  }

  private numberValidation() {
    if (numberValidation(this.nativeInput.value)) {
      this.validationMesage = this.numberErrorMessage;
      this.validationDanger = true;
    } else {
      this.validationDanger = false;
    }
  }

  private toggle = (): void => {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  };

  private handler = (event: CustomEvent): void => {
    const {
      detail: { value },
    } = event;

    this.value = value.code;
    this.selectedCountry = value.flag;
    this.isoCode = value.isoCode;
    this.bdsPhoneNumberChange.emit({
      value: this.text,
      code: this.value,
      isoCode: this.isoCode,
      country: this.selectedCountry,
    });
    this.toggle();
  };

  @Method()
  async changeCountry(code, isoCode, flag) {
    this.value = code;
    this.selectedCountry = flag;
    this.isoCode = isoCode;
    this.bdsPhoneNumberChange.emit({
      value: this.text,
      code: this.value,
      isoCode: this.isoCode,
      country: this.selectedCountry,
    });
  }

  private setFocusWrapper = (): void => {
    if (this.nativeInput) {
      this.nativeInput.focus();
      this.onBlur();
    }
  };

  private removeFocusWrapper = (event: FocusEvent): void => {
    const isInputElement = (event.relatedTarget as Element).localName === 'bds-input';

    if (this.nativeInput && !isInputElement) {
      this.onBlur();
    }
  };

  private keyPressWrapper = (event: KeyboardEvent): void => {
    const isSelectElement = (event.target as Element).localName === 'bds-select';
    const isInputElement = (event.target as Element).localName === 'input';

    switch (event.key) {
      case 'Enter':
        if (!this.isOpen && (isSelectElement || isInputElement)) {
          this.toggle();
        }
        break;
    }
  };

  private checkValidity() {
    if (this.nativeInput.validity.valid) {
      this.validationDanger = false;
    }
  }

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
        <div class={styles} part="input__message">
          <div class="input__message__icon">
            <bds-icon size="x-small" name={icon} theme="solid" color="inherit"></bds-icon>
          </div>
          <bds-typo class="input__message__text" variant="fs-12">
            {message}
          </bds-typo>
        </div>
      );
    }

    return undefined;
  }

  render(): HTMLElement {
    const isPressed = this.isPressed && !this.disabled;
    const iconArrow = this.isOpen ? 'arrow-up' : 'arrow-down';
    const countries = countriesJson['default'];
    const flagsNames = Object.keys(countries);

    return (
      <div
        class={{
          'select-phone-number': true,
          'select-phone-number--pressed': this.isPressed,
        }}
        tabindex="0"
        onFocus={this.setFocusWrapper}
        onBlur={this.removeFocusWrapper}
        onKeyPress={this.keyPressWrapper}
      >
        <div class={{ element_input: true }} aria-disabled={this.disabled ? 'true' : null}>
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
            part="input-container"
          >
            {this.renderIcon()}
            <div onClick={this.toggle} class="select-phone-number__icon">
              <bds-icon size="medium" theme="solid" name={this.selectedCountry} color="primary"></bds-icon>
              <bds-icon size="x-small" name={iconArrow}></bds-icon>
            </div>
            <div class="input__container">
              {this.renderLabel()}
              <div class={{ input__container__wrapper: true }}>
                <div class="select-phone-number__country-code">
                  <bds-typo variant="fs-14">{this.value}</bds-typo>
                </div>
                <input
                  class={{ input__container__text: true }}
                  type="phonenumber"
                  required={this.required}
                  pattern="/^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/"
                  ref={this.refNativeInput}
                  onInput={this.changedInputValue}
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                  value={this.text}
                  disabled={this.disabled}
                  data-test={this.dataTest}
                  {...{ maxlength: this.value === '+55' ? 25 : null }}
                ></input>
              </div>
            </div>
            <slot name="input-right" />
          </div>
          {this.renderMessage()}
        </div>
        <div
          class={{
            'select-phone-number__options': true,
            'select-phone-number__options--open': this.isOpen,
          }}
        >
          {this.isOpen &&
            flagsNames.map((flag) => (
              <bds-select-option
                key={flag}
                onOptionSelected={this.handler}
                selected={flag == this.selectedCountry}
                value={{ code: countries[flag].code, isoCode: countries[flag].isoCode, flag }}
                status={countries[flag].isoCode}
              >
                {countries[flag].name} {countries[flag].code}
              </bds-select-option>
            ))}
        </div>
      </div>
    );
  }
}
