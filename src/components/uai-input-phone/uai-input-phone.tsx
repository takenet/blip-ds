import {
  AttachInternals,
  Build,
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core';
import { UaiControlSize } from '../input/input-interface';
import { warnDeprecated, warnLegacyValue, warnOnce } from '../../utils/deprecation';
import { flagUrl } from './uai-input-phone-flags';
import { UaiFormControl } from '../../utils/uai-form-control';
import { UaiOverlay, UaiOverlayCloseReason } from '../../utils/uai-overlay';
import * as countriesPtBR from '../input-phone-number/countries-pt_BR.json';
import * as countriesEnUS from '../input-phone-number/countries-en_US.json';
import * as countriesEsES from '../input-phone-number/countries-es_ES.json';

export type UaiInputPhoneLanguage = 'pt_BR' | 'en_US' | 'es_ES';
export type UaiInputPhoneSize = UaiControlSize;

export interface UaiPhoneNumberChange {
  value: string | null;
  code: string | null;
  isoCode: string | null;
  country: string | null;
}

interface Country {
  code: string;
  name: string;
  isoCode: string;
}

const TAG = 'uai-input-phone';
const SIZES: UaiInputPhoneSize[] = ['short', 'medium'];
const LANGUAGES: UaiInputPhoneLanguage[] = ['pt_BR', 'en_US', 'es_ES'];

const COUNTRIES: Record<UaiInputPhoneLanguage, Record<string, Country>> = {
  pt_BR: countriesPtBR['default'],
  en_US: countriesEnUS['default'],
  es_ES: countriesEsES['default'],
};

const TEXTS: Record<
  UaiInputPhoneLanguage,
  { label: string; country: string; list: string; required: string; number: string }
> = {
  pt_BR: {
    label: 'Telefone',
    country: 'Código do país',
    list: 'Países',
    required: 'Informe o telefone.',
    number: 'Use apenas números, espaços e os caracteres + - ( ) .',
  },
  en_US: {
    label: 'Phone number',
    country: 'Country code',
    list: 'Countries',
    required: 'Enter the phone number.',
    number: 'Use only numbers, spaces and the characters + - ( ) .',
  },
  es_ES: {
    label: 'Teléfono',
    country: 'Código del país',
    list: 'Países',
    required: 'Ingrese el teléfono.',
    number: 'Use solo números, espacios y los caracteres + - ( ) .',
  },
};

const PHONE_CHARACTERS = /^[0-9+\-(). ]*$/;

const normalize = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

let instances = 0;

/**
 * Phone number field with a country code selector. Use it to ask for a phone number when the country matters:
 * the person picks the country (flag and dial code) and types the number freely, without mask or automatic
 * formatting. It takes part in native forms: give it a name to submit "<code> <number>" (for example
 * "+55 11 99999-0000"). Pair with UaiButton in forms. Avoid it for numbers without a country, or to infer the
 * country from the number. Wrap the app in UaiThemeProvider.
 *
 * @slot input-right - Content after the number (for example a clear button). Give actions an accessible name.
 * @part input-container - The field box with border, icon, country selector and the native input.
 * @part input - The native tel input.
 * @part input__message - The helper, error or success message below the field.
 * @part country-button - The country selector button (flag, dial code and arrow).
 * @part country-list - The floating list of countries.
 * @part country-option - Each country in the list.
 */
@Component({
  tag: 'uai-input-phone',
  styleUrl: 'uai-input-phone.scss',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class UaiInputPhone {
  @Element() el!: HTMLElement;

  @AttachInternals() internals: ElementInternals;

  @State() isOpen = false;
  @State() activeIndex = -1;
  @State() selectedCountry: string;
  @State() isoCode: string;
  @State() validationDanger = false;
  @State() disabledByForm = false;

  private nativeInput?: HTMLInputElement;
  private button?: HTMLButtonElement;
  private list?: HTMLElement;
  private overlay?: UaiOverlay;
  private formControl?: UaiFormControl;
  private defaults = { text: '', code: '+55', country: '', isoCode: '' };
  private readonly inputId = `uai-input-phone-${++instances}`;

  /**
   * Name of the value in the submitted form data, which is "<code> <number>". Without name (or inputName), the field
   * is not submitted.
   */
  @Prop({ reflect: true, mutable: true }) name?: string;

  /**
   * Name of the value in the submitted form data. Same as name.
   */
  @Prop() inputName?: string = '';

  /**
   * Phone number typed by the person, without the country code. Free text: no mask or formatting is applied.
   */
  @Prop({ mutable: true }) text?: string = '';

  /**
   * Dial code of the selected country, for example "+55" (default) or "+1". Use changeCountry to pick a country that
   * shares its code with others.
   */
  @Prop({ mutable: true }) value?: string | null = '+55';

  /**
   * Language of the country names and default texts. Can be one of: 'pt_BR' (default), 'en_US', 'es_ES'.
   */
  @Prop({ mutable: true }) language?: UaiInputPhoneLanguage = 'pt_BR';

  /**
   * Height of the field. Can be one of: 'short', 'medium' (default).
   */
  @Prop({ reflect: true }) size?: UaiInputPhoneSize = 'medium';

  /**
   * Label shown above the field. Without it, the default text of the language is shown ("Telefone").
   */
  @Prop() label?: string;

  /**
   * Example of the expected number, shown while the field is empty, for example "11 99999-0000". Do not use it as
   * the label.
   */
  @Prop() placeholder?: string = '';

  /**
   * UaiIcon name shown before the country selector.
   */
  @Prop({ reflect: true }) icon?: string = '';

  /**
   * If true, an empty number blocks the form submission.
   */
  @Prop() required: boolean;

  /**
   * If true, the number can be selected and copied but not edited, and the country cannot be changed.
   */
  @Prop() readonly = false;

  /**
   * If true, the field and the country selector cannot be used and the value is left out of the form data.
   */
  @Prop({ reflect: true, mutable: true }) disabled? = false;

  /**
   * If true, shows the error state and errorMessage. Has priority over success.
   */
  @Prop({ reflect: true, mutable: true }) danger? = false;

  /**
   * If true, shows the success state and successMessage.
   */
  @Prop({ reflect: true, mutable: true }) success?: boolean = false;

  /**
   * Message below the field that helps to fill it, for example the expected format.
   */
  @Prop() helperMessage?: string = '';

  /**
   * Message below the field while danger is true.
   */
  @Prop({ mutable: true }) errorMessage?: string = '';

  /**
   * Message below the field while success is true.
   */
  @Prop({ mutable: true }) successMessage?: string = '';

  /**
   * Message shown when a required field is empty. Without it, the default text of the language is shown.
   */
  @Prop() requiredErrorMessage: string;

  /**
   * Message shown when the number has characters other than digits, spaces and + - ( ) . Without it, the default
   * text of the language is shown.
   */
  @Prop() numberErrorMessage: string;

  /**
   * Accessible name of the field when the visible label is not enough.
   */
  @Prop({ attribute: 'aria-label' }) ariaLabel: string = null;

  /**
   * Data test id, set on the native input.
   */
  @Prop() dataTest?: string = null;

  /**
   * Data test id, set on the country selector button.
   */
  @Prop() dtSelectFlag?: string = null;

  /**
   * @deprecated The country list comes from the language. Has no effect.
   */
  @Prop() options?: Array<unknown>;

  /**
   * Emitted when the number or the country changes. detail: { value (number), code, isoCode, country (flag key) }.
   */
  @Event({ bubbles: true, composed: true }) uaiPhoneNumberChange!: EventEmitter<UaiPhoneNumberChange>;

  /**
   * Emitted on every keystroke in the number with the native InputEvent.
   */
  @Event() uaiInput!: EventEmitter<InputEvent>;

  /**
   * Emitted when the country list closes without a new choice (Escape or click outside).
   */
  @Event() uaiCancel!: EventEmitter<void>;

  /**
   * Emitted when the number receives focus.
   */
  @Event() uaiFocus!: EventEmitter<void>;

  /**
   * Emitted when the number loses focus.
   */
  @Event() uaiBlur!: EventEmitter<void>;

  /**
   * Selects a country. code is the dial code ("+1"), isoCode the ISO text ("US / USA") and flag the country key
   * ("united-states-flag").
   */
  @Method()
  async changeCountry(code: string, isoCode: string, flag: string): Promise<void> {
    this.selectedCountry = flag;
    this.isoCode = isoCode;
    this.value = code;
    this.emitChange();
  }

  /**
   * Removes the focus from the field.
   */
  @Method()
  async removeFocus(): Promise<void> {
    this.nativeInput?.blur();
  }

  /**
   * Moves the focus to the number.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.nativeInput?.focus();
  }

  /**
   * Returns true when the number meets required and has only digits, spaces and + - ( ) .
   */
  @Method()
  async isValid(): Promise<boolean> {
    return !this.validityFlags().invalid;
  }

  /**
   * Clears the number. The country stays selected.
   */
  @Method()
  async clear(): Promise<void> {
    this.text = '';
  }

  @Watch('inputName')
  protected inputNameChanged(): void {
    if (!this.name && this.inputName) this.name = this.inputName;
  }

  @Watch('text')
  protected textChanged(): void {
    this.syncFormValue();
    this.emitChange();
  }

  @Watch('value')
  protected codeChanged(): void {
    this.resolveCountry();
    this.syncFormValue();
  }

  @Watch('language')
  protected languageChanged(): void {
    this.resolveCountry();
  }

  @Watch('options')
  protected optionsChanged(): void {
    warnDeprecated(TAG, 'options');
  }

  @Listen('invalid')
  protected onInvalid(): void {
    this.showValidation(true);
  }

  componentWillLoad() {
    this.inputNameChanged();
    this.resolveCountry();
    this.defaults = {
      text: this.text || '',
      code: this.value,
      country: this.selectedCountry,
      isoCode: this.isoCode,
    };
    // Real browsers only: the Stencil mock DOM attaches internals without the form API.
    if (typeof this.internals?.setFormValue === 'function') {
      this.formControl = new UaiFormControl({
        internals: this.internals,
        defaultValue: () => this.formValue(this.defaults.code, this.defaults.text),
        onReset: () => {
          this.validationDanger = false;
          this.selectedCountry = this.defaults.country;
          this.isoCode = this.defaults.isoCode;
          this.value = this.defaults.code;
          this.text = this.defaults.text;
        },
        onDisabledChange: (disabled) => {
          queueMicrotask(() => {
            const formDisabled = this.formControl?.disabled ?? disabled;
            if (!this.disabled && this.disabledByForm !== formDisabled) this.disabledByForm = formDisabled;
            if (formDisabled) this.closeList();
          });
        },
      });
    }
    this.warnLegacyUsage();
  }

  componentDidLoad() {
    if (this.button && this.list) {
      this.overlay = new UaiOverlay({
        trigger: this.button,
        panel: this.list,
        matchTriggerWidth: false,
        onClose: this.onOverlayClose,
      });
    }
  }

  componentDidRender() {
    if (this.nativeInput && this.nativeInput.value !== (this.text || '')) {
      this.nativeInput.value = this.text || '';
    }
    if (this.isOpen && this.overlay && !this.overlay.isOpen) {
      this.overlay.open();
      this.list?.focus({ preventScroll: true });
    }
    if (this.isOpen) {
      this.overlay?.update();
      this.activeOption()?.scrollIntoView?.({ block: 'nearest' });
    }
    this.syncValidity();
  }

  disconnectedCallback() {
    this.overlay?.destroy();
  }

  formResetCallback() {
    this.formControl?.reset();
  }

  formDisabledCallback(disabled: boolean) {
    this.formControl?.setDisabled(disabled);
  }

  formStateRestoreCallback(state: string | null) {
    if (typeof state !== 'string') return;
    const [code, ...number] = state.split(' ');
    if (code) this.value = code;
    this.text = number.join(' ');
  }

  private get languageValue(): UaiInputPhoneLanguage {
    if ((LANGUAGES as string[]).includes(this.language)) return this.language;
    warnLegacyValue(TAG, 'language', this.language, 'pt_BR');
    return 'pt_BR';
  }

  private get sizeValue(): UaiInputPhoneSize {
    if ((SIZES as string[]).includes(this.size)) return this.size;
    warnLegacyValue(TAG, 'size', this.size, 'medium');
    return 'medium';
  }

  private get countries(): Record<string, Country> {
    return COUNTRIES[this.languageValue];
  }

  private get countryKeys(): string[] {
    return Object.keys(this.countries);
  }

  private get texts() {
    return TEXTS[this.languageValue];
  }

  private get isDisabled(): boolean {
    return this.disabled || this.disabledByForm;
  }

  private get canPick(): boolean {
    return !this.isDisabled && !this.readonly;
  }

  // Keeps the selected country when it still has the current code; otherwise picks the first country with it.
  private resolveCountry() {
    const countries = this.countries;
    const current = this.selectedCountry && countries[this.selectedCountry];
    if (current && current.code === this.value) {
      this.isoCode = current.isoCode;
      return;
    }
    const key = this.countryKeys.find((name) => countries[name].code === this.value) || this.countryKeys[0];
    this.selectedCountry = key;
    this.isoCode = countries[key].isoCode;
  }

  private formValue(code: string | null, text: string): string | null {
    return text ? `${code || ''} ${text}`.trim() : null;
  }

  private syncFormValue() {
    this.formControl?.setValue(this.formValue(this.value, this.text || ''));
  }

  private emitChange() {
    this.uaiPhoneNumberChange.emit({
      value: this.text,
      code: this.value,
      isoCode: this.isoCode,
      country: this.selectedCountry,
    });
  }

  private warnLegacyUsage() {
    if (this.options !== undefined && this.options !== null) warnDeprecated(TAG, 'options');
    if (Build.isDev && this.label === '' && !this.ariaLabel) {
      warnOnce(TAG, 'accessible-name', 'Fields without a visible label require an aria-label.');
    }
  }

  private validityFlags(): { invalid: boolean; flags: ValidityStateFlags; message: string } {
    const text = this.text || '';
    if (this.required && !text) {
      return {
        invalid: true,
        flags: { valueMissing: true },
        message: this.requiredErrorMessage || this.texts.required,
      };
    }
    if (!PHONE_CHARACTERS.test(text)) {
      return { invalid: true, flags: { patternMismatch: true }, message: this.numberErrorMessage || this.texts.number };
    }
    return { invalid: false, flags: {}, message: '' };
  }

  private syncValidity() {
    const { flags, message } = this.validityFlags();
    this.formControl?.setValidity(flags, message, this.nativeInput);
  }

  // Shows the validation result from now on; the message follows the value while it stays shown.
  private showValidation(show: boolean) {
    const danger = show && this.validityFlags().invalid;
    if (danger !== this.validationDanger) this.validationDanger = danger;
  }

  private activeOption(): HTMLElement | null {
    return this.list?.querySelector('.option--active') || null;
  }

  private openList() {
    if (!this.canPick || this.isOpen) return;
    const selected = this.countryKeys.indexOf(this.selectedCountry);
    this.activeIndex = selected < 0 ? 0 : selected;
    this.isOpen = true;
  }

  private closeList(reason: UaiOverlayCloseReason = 'api') {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.overlay?.close(reason);
  }

  private onOverlayClose = (reason: UaiOverlayCloseReason): void => {
    if (this.isOpen) this.isOpen = false;
    if (reason === 'escape' || reason === 'outside') this.uaiCancel.emit();
  };

  private select(index: number) {
    const key = this.countryKeys[index];
    if (!key) return;
    const country = this.countries[key];
    this.closeList();
    this.button?.focus();
    if (key === this.selectedCountry) return;
    this.changeCountry(country.code, country.isoCode, key);
  }

  private moveActive(index: number) {
    const last = this.countryKeys.length - 1;
    this.activeIndex = Math.min(Math.max(index, 0), last);
  }

  // Activates the next country whose name starts with the typed letter, cycling from the active one.
  private typeAhead(letter: string) {
    const keys = this.countryKeys;
    const target = normalize(letter);
    for (let step = 1; step <= keys.length; step++) {
      const index = (this.activeIndex + step) % keys.length;
      if (normalize(this.countries[keys[index]].name).startsWith(target)) {
        this.activeIndex = index;
        return;
      }
    }
  }

  private onButtonClick = (): void => {
    if (this.isOpen) this.closeList();
    else this.openList();
  };

  private onButtonKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      this.openList();
    }
  };

  private onListKeyDown = (event: KeyboardEvent): void => {
    const keys: Record<string, () => void> = {
      ArrowDown: () => this.moveActive(this.activeIndex + 1),
      ArrowUp: () => this.moveActive(this.activeIndex - 1),
      Home: () => this.moveActive(0),
      End: () => this.moveActive(this.countryKeys.length - 1),
      Enter: () => this.select(this.activeIndex),
      ' ': () => this.select(this.activeIndex),
    };
    if (keys[event.key]) {
      event.preventDefault();
      keys[event.key]();
    } else if (event.key === 'Tab') {
      event.preventDefault();
      this.closeList();
      if (event.shiftKey) this.button?.focus();
      else this.nativeInput?.focus();
    } else if (event.key.length === 1 && /\p{L}/u.test(event.key)) {
      event.preventDefault();
      this.typeAhead(event.key);
    }
  };

  private onInput = (event: InputEvent): void => {
    this.text = (event.target as HTMLInputElement).value;
    this.uaiInput.emit(event);
  };

  private onFocus = (): void => {
    this.uaiFocus.emit();
  };

  private onBlur = (): void => {
    this.showValidation(true);
    this.uaiBlur.emit();
  };

  private onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Enter' && !event.isComposing) this.formControl?.form?.requestSubmit();
  };

  // Clicks on the field box (outside the selector and slotted content) focus the number, as a native field does.
  private onControlClick = (event: MouseEvent): void => {
    const path = event.composedPath();
    if (this.button && path.includes(this.button)) return;
    if (!this.el.contains(event.target as Node)) this.nativeInput?.focus();
  };

  private renderFlag(key: string, className: string) {
    const url = key ? flagUrl(key) : null;
    return url ? <img class={className} src={url} alt="" draggable={false} /> : null;
  }

  private renderOptions() {
    if (!this.isOpen) return null;
    return this.countryKeys.map((key, index) => {
      const country = this.countries[key];
      return (
        <li
          id={`${this.inputId}-option-${index}`}
          key={key}
          role="option"
          part="country-option"
          data-country={key}
          aria-selected={key === this.selectedCountry ? 'true' : 'false'}
          class={{ option: true, 'option--active': index === this.activeIndex }}
          onClick={() => this.select(index)}
          onPointerMove={() => {
            if (this.activeIndex !== index) this.activeIndex = index;
          }}
        >
          <span class="option__flag">{this.renderFlag(key, 'option__flag-image')}</span>
          <uai-typo class="option__name" variant="body-base" tag="span" margin={false}>
            {country.name}
          </uai-typo>
          <uai-typo class="option__code" variant="body-base" tag="span" margin={false}>
            {country.code}
          </uai-typo>
        </li>
      );
    });
  }

  render() {
    const disabled = this.isDisabled;
    const validity = this.validityFlags();
    const validationText = this.validationDanger && validity.invalid ? validity.message : '';
    const invalid = this.danger || !!validationText;
    const success = this.success && !invalid;
    const message = this.danger
      ? this.errorMessage || validationText
      : validationText
        ? validationText
        : success
          ? this.successMessage
          : this.helperMessage;
    const label = this.label ?? this.texts.label;
    const country = this.countries[this.selectedCountry];
    const countryName = country ? `${country.name} ${this.value}` : this.value;

    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
        class={{
          [`uai-input-phone--size-${this.sizeValue}`]: true,
          'uai-input-phone--danger': invalid,
          'uai-input-phone--success': success,
          'uai-input-phone--disabled': disabled,
          'uai-input-phone--readonly': this.readonly && !disabled,
          'uai-input-phone--open': this.isOpen,
        }}
      >
        <div class="input">
          {label && (
            <label class="input__label" {...{ for: this.inputId }}>
              <uai-typo variant="caption" bold="semibold" tag="span" margin={false}>
                {label}
              </uai-typo>
            </label>
          )}
          <div class="input__control" part="input-container" onClick={this.onControlClick}>
            {this.icon && <uai-icon class="input__icon" name={this.icon} size="medium"></uai-icon>}
            <button
              type="button"
              ref={(button) => (this.button = button)}
              class="prefix"
              part="country-button"
              aria-haspopup="listbox"
              aria-expanded={this.isOpen ? 'true' : 'false'}
              aria-controls={`${this.inputId}-list`}
              aria-label={`${this.texts.country}: ${countryName}`}
              disabled={!this.canPick}
              data-test={this.dtSelectFlag}
              onClick={this.onButtonClick}
              onKeyDown={this.onButtonKeyDown}
            >
              {this.renderFlag(this.selectedCountry, 'prefix__flag')}
              <uai-typo class="prefix__code" variant="body-base" tag="span" margin={false}>
                {this.value}
              </uai-typo>
              {!this.readonly && <uai-icon class="prefix__arrow" name="arrow-down" size="medium"></uai-icon>}
            </button>
            <div class="input__field">
              <input
                id={this.inputId}
                ref={(input) => (this.nativeInput = input)}
                class="input__native"
                part="input"
                type="tel"
                inputMode="tel"
                autocomplete="tel-national"
                value={this.text || ''}
                placeholder={this.placeholder}
                required={this.required}
                readOnly={this.readonly}
                disabled={disabled}
                maxLength={this.value === '+55' ? 25 : undefined}
                aria-label={this.ariaLabel || null}
                aria-invalid={invalid ? 'true' : null}
                aria-describedby={message ? `${this.inputId}-message` : null}
                data-test={this.dataTest}
                onInput={this.onInput}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onKeyDown={this.onKeyDown}
              />
            </div>
            {invalid && <uai-icon class="input__feedback" name="error" theme="outline" size="medium"></uai-icon>}
            {success && <uai-icon class="input__feedback" name="checkball" theme="solid" size="medium"></uai-icon>}
            <slot name="input-right"></slot>
          </div>
          {message && (
            <div id={`${this.inputId}-message`} class="input__message" part="input__message">
              <uai-typo variant="caption" tag="span" margin={false}>
                {message}
              </uai-typo>
            </div>
          )}
        </div>
        <ul
          id={`${this.inputId}-list`}
          ref={(list) => (this.list = list)}
          class="list"
          part="country-list"
          role="listbox"
          tabindex="-1"
          aria-label={this.texts.list}
          aria-activedescendant={this.isOpen && this.activeIndex >= 0 ? `${this.inputId}-option-${this.activeIndex}` : null}
          onKeyDown={this.onListKeyDown}
        >
          {this.renderOptions()}
        </ul>
      </Host>
    );
  }
}
