import { Component, h, State, Prop, EventEmitter, Event, Watch, Element, Listen } from '@stencil/core';
import { Option, SelectChangeEventDetail } from '../selects/select-interface';
import * as countriesJson from './countries.json';

@Component({
  tag: 'bds-input-phone-number',
  styleUrl: 'input-phone-number.scss',
  scoped: true,
})
export class InputPhoneNumber {
  private nativeInput?: HTMLBdsInputElement;

  @Element() el!: HTMLBdsSelectElement;

  @State() isOpen? = false;

  @State() selectedCountry: string;

  /**
   * Conditions the element to say whether it is pressed or not, to add styles.
   */
  @State() isPressed? = false;

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
  @Prop({ mutable: true }) value?: any | null = '+55';

  /**
   * Add state danger on input, use for use feedback.
   */
  @Prop({ reflect: true }) danger? = false;

  /**
   * Disabled input.
   */
  @Prop({ reflect: true }) disabled? = false;

  /**
   * If `true`, the input value will be required.
   */
  @Prop() required: boolean;

  /**
   * Error message when input is required
   */
  @Prop() requiredErrorMessage: string;

  /**
   * Error message when input is required
   */
  @Prop() numberErrorMessage: string;

  /**
   * Emitted when the value has changed.
   */
  @Event() bdsPhoneNumberChange!: EventEmitter<SelectChangeEventDetail>;

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

  @Watch('value')
  valueChanged(): void {
    this.bdsPhoneNumberChange.emit({ value: this.text, code: this.value });

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

  async connectedCallback() {
    for (const option of this.childOptions) {
      option.selected = this.value === option.value;
      option.addEventListener('optionSelected', this.handler);
    }
  }

  private get childOptions(): HTMLBdsSelectOptionElement[] {
    return Array.from(this.el.querySelectorAll('bds-select-option'));
  }

  private refNativeInput = (el: HTMLBdsInputElement): void => {
    this.nativeInput = el;
  };

  private onFocus = (): void => {
    this.bdsFocus.emit();
    this.isPressed = true;
  };

  private onBlur = (): void => {
    this.bdsBlur.emit();
    this.isPressed = false;
  };

  private handleInputChange = (event: CustomEvent): void => {
    const {
      detail: { value },
    } = event;

    this.text = value;

    event.preventDefault();
    this.bdsPhoneNumberChange.emit({ value: this.text, code: this.value });
  };

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
    this.toggle();
  };

  private setFocusWrapper = (): void => {
    if (this.nativeInput) {
      this.nativeInput.setFocus();
      this.nativeInput.removeFocus();
    }
  };

  private removeFocusWrapper = (event: FocusEvent): void => {
    const isInputElement = (event.relatedTarget as Element).localName === 'bds-input';

    if (this.nativeInput && !isInputElement) {
      this.nativeInput.removeFocus();
    }
  };

  private keyPressWrapper = (event: KeyboardEvent): void => {
    const isSelectElement = (event.target as Element).localName === 'bds-select';
    const isInputElement = (event.target as Element).localName === 'bds-input';

    switch (event.key) {
      case 'Enter':
        if (!this.isOpen && (isSelectElement || isInputElement)) {
          this.toggle();
        }
        break;
    }
  };

  render(): HTMLElement {
    const iconArrow = this.isOpen ? 'arrow-up' : 'arrow-down';
    const countries = countriesJson['default'];

    const flagsNames = Object.keys(countries);

    this.selectedCountry = this.selectedCountry || flagsNames[0];

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
        <bds-input
          type="phonenumber"
          required={this.required}
          requiredErrorMessage={this.requiredErrorMessage}
          pattern="[0-9]*"
          numberErrorMessage={this.numberErrorMessage}
          label={this.label}
          ref={this.refNativeInput}
          onBdsChange={this.handleInputChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          value={this.text}
          danger={this.danger}
          disabled={this.disabled}
          {...{ maxlength: this.value === '+55' ? 11 : null }}
        >
          <div slot="input-left" onClick={this.toggle} class="select-phone-number__icon">
            <bds-icon
              size="medium"
              theme="solid"
              name={this.selectedCountry}
              color="primary"
            ></bds-icon>
            <bds-icon size="x-small" name={iconArrow}></bds-icon>
          </div>
          <div slot="inside-input-left" class="select-phone-number__country-code">
            <bds-typo variant="fs-14">{this.value}</bds-typo>
          </div>
        </bds-input>
        <div
          class={{
            'select-phone-number__options': true,
            'select-phone-number__options--open': this.isOpen,
          }}
        >
          {flagsNames.map((flag) => (
            <bds-select-option key={flag} onOptionSelected={this.handler} selected={flag == this.selectedCountry} value={{ code: countries[flag].code, flag }}>
              <bds-icon slot="input-left" size="xx-large" theme="solid" name={flag} color="primary"></bds-icon>
              {countries[flag].name} {countries[flag].code}
            </bds-select-option>
          ))}
        </div>
      </div>
    );
  }
}
