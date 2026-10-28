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
import { warnLegacyValue, warnOnce } from '../../utils/deprecation';
import { UaiFormControl } from '../../utils/uai-form-control';
import {
  UaiInputDateLanguage,
  dateLocale,
  displayToIso,
  groupDigits,
  isIsoDate,
  isoToDisplay,
} from './uai-input-date-format';

export type UaiInputDateSize = UaiControlSize;

const TAG = 'uai-input-date';
const SIZES: UaiInputDateSize[] = ['short', 'medium'];
const LANGUAGES: UaiInputDateLanguage[] = ['pt_BR', 'en_US', 'es_ES'];

let instances = 0;

/**
 * Date field. The person types the date as DD-MM-YYYY in every language or picks it in the browser calendar;
 * value, min, max and the submitted form value are ISO YYYY-MM-DD. Use it
 * for a single known date, such as a birth or due date. Pair with UaiButton in forms. Avoid it for periods, presets or
 * times (use uai-datepicker when available). Wrap the app in UaiThemeProvider.
 *
 * @slot input-right - Content after the calendar button (for example a clear button). Give actions an accessible name.
 * @part input-container - The field box with border, icon, the native input and the calendar button.
 * @part input - The native text input with the date as DD-MM-YYYY.
 * @part input__message - The helper, error or success message below the field.
 * @part calendar-button - The button that opens the browser calendar.
 */
@Component({
  tag: 'uai-input-date',
  styleUrl: 'uai-input-date.scss',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class UaiInputDate {
  @Element() el!: HTMLElement;

  @AttachInternals() internals: ElementInternals;

  @State() display = '';
  @State() validationDanger = false;
  @State() disabledByForm = false;

  private nativeInput?: HTMLInputElement;
  private picker?: HTMLInputElement;
  private formControl?: UaiFormControl;
  private defaultValue = '';
  private typing = false;
  private readonly id = `uai-input-date-${++instances}`;

  /**
   * Name of the value in the submitted form data, which is the ISO date. Without name (or inputName), the field is not
   * submitted.
   */
  @Prop({ reflect: true, mutable: true }) name?: string;

  /**
   * Name of the value in the submitted form data. Same as name, kept from bds-input.
   */
  @Prop() inputName?: string = '';

  /**
   * Selected date as ISO YYYY-MM-DD, for example "2026-12-25". Empty while the typed date is incomplete or invalid.
   */
  @Prop({ mutable: true }) value?: string | null = '';

  /**
   * Earliest accepted date, as ISO YYYY-MM-DD.
   */
  @Prop() min?: string;

  /**
   * Latest accepted date, as ISO YYYY-MM-DD.
   */
  @Prop() max?: string;

  /**
   * Language of the default texts. The date format is always DD-MM-YYYY. Can be 'pt_BR' (default), 'en_US', 'es_ES'.
   */
  @Prop() language?: UaiInputDateLanguage = 'pt_BR';

  /**
   * Height of the field. Can be one of: 'short', 'medium' (default).
   */
  @Prop({ reflect: true }) size?: UaiInputDateSize = 'medium';

  /**
   * Label shown above the field. Without it, the default text of the language is shown ("Data").
   */
  @Prop() label?: string;

  /**
   * Text shown while the field is empty. Without it, "DD-MM-YYYY" is shown.
   */
  @Prop() placeholder?: string;

  /**
   * UaiIcon name shown before the date.
   */
  @Prop({ reflect: true }) icon?: string = '';

  /**
   * If true, an empty field blocks the form submission.
   */
  @Prop() required: boolean;

  /**
   * If true, the date can be selected and copied but not edited, and the calendar button is hidden.
   */
  @Prop() readonly = false;

  /**
   * If true, the field and the calendar button cannot be used and the value is left out of the form data.
   */
  @Prop({ reflect: true, mutable: true }) disabled?: boolean = false;

  /**
   * If true, shows the error state and errorMessage. Has priority over success.
   */
  @Prop({ reflect: true, mutable: true }) danger?: boolean = false;

  /**
   * If true, shows the success state and successMessage.
   */
  @Prop({ reflect: true, mutable: true }) success?: boolean = false;

  /**
   * Message below the field that helps to fill it.
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
   * Message shown when the typed date is incomplete or does not exist. Without it, the default text is shown.
   */
  @Prop() dateErrorMessage: string;

  /**
   * Message shown when the date is before min. Without it, the default text with the min date is shown.
   */
  @Prop() minErrorMessage: string;

  /**
   * Message shown when the date is after max. Without it, the default text with the max date is shown.
   */
  @Prop() maxErrorMessage: string;

  /**
   * Accessible name of the field when the visible label is not enough.
   */
  @Prop({ attribute: 'aria-label' }) ariaLabel: string = null;

  /**
   * Data test id, set on the native input.
   */
  @Prop() dataTest?: string = null;

  /**
   * Emitted when the date changes, by typing, by the calendar or programmatically. detail: { value } as ISO
   * YYYY-MM-DD, or '' while the typed date is incomplete or invalid.
   */
  @Event({ bubbles: true, composed: true }) uaiChange!: EventEmitter<{ value: string }>;

  /**
   * Emitted on every keystroke with the native InputEvent.
   */
  @Event() uaiInput!: EventEmitter<InputEvent>;

  /**
   * Emitted when the field receives focus.
   */
  @Event() uaiFocus!: EventEmitter<void>;

  /**
   * Emitted when the field loses focus.
   */
  @Event() uaiOnBlur!: EventEmitter<void>;

  /**
   * Moves the focus to the field.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.nativeInput?.focus();
  }

  /**
   * Removes the focus from the field.
   */
  @Method()
  async removeFocus(): Promise<void> {
    this.nativeInput?.blur();
  }

  /**
   * Returns true when the date is complete, exists, is within min and max, and is present when required.
   */
  @Method()
  async isValid(): Promise<boolean> {
    return !this.validity().invalid;
  }

  /**
   * Clears the date.
   */
  @Method()
  async clear(): Promise<void> {
    this.display = '';
    this.value = '';
  }

  @Watch('inputName')
  protected inputNameChanged(): void {
    if (!this.name && this.inputName) this.name = this.inputName;
  }

  @Watch('value')
  protected valueChanged(newValue: string | null): void {
    const value = newValue || '';
    if (!this.typing) this.display = isoToDisplay(value, this.languageValue);
    this.formControl?.setValue(isIsoDate(value) ? value : null);
    this.uaiChange.emit({ value });
  }

  @Watch('language')
  protected languageChanged(): void {
    if (isIsoDate(this.value)) this.display = isoToDisplay(this.value, this.languageValue);
  }

  @Listen('invalid')
  protected onInvalid(): void {
    this.showValidation(true);
  }

  componentWillLoad() {
    this.inputNameChanged();
    this.defaultValue = isIsoDate(this.value) ? this.value : '';
    this.display = isoToDisplay(this.defaultValue, this.languageValue);
    // Real browsers only: the Stencil mock DOM attaches internals without the form API.
    if (typeof this.internals?.setFormValue === 'function') {
      this.formControl = new UaiFormControl({
        internals: this.internals,
        defaultValue: () => this.defaultValue || null,
        onReset: () => {
          this.validationDanger = false;
          this.display = isoToDisplay(this.defaultValue, this.languageValue);
          this.value = this.defaultValue;
        },
        onDisabledChange: (disabled) => {
          queueMicrotask(() => {
            const formDisabled = this.formControl?.disabled ?? disabled;
            if (!this.disabled && this.disabledByForm !== formDisabled) this.disabledByForm = formDisabled;
          });
        },
      });
    }
    if (Build.isDev && this.label === '' && !this.ariaLabel) {
      warnOnce(TAG, 'accessible-name', 'Fields without a visible label require an aria-label.');
    }
  }

  componentDidRender() {
    if (this.nativeInput && this.nativeInput.value !== this.display) this.nativeInput.value = this.display;
    const { flags, message } = this.validity();
    this.formControl?.setValidity(flags, message, this.nativeInput);
  }

  formResetCallback() {
    this.formControl?.reset();
  }

  formDisabledCallback(disabled: boolean) {
    this.formControl?.setDisabled(disabled);
  }

  formStateRestoreCallback(state: string | null) {
    if (typeof state === 'string') this.value = state;
  }

  private get languageValue(): UaiInputDateLanguage {
    if ((LANGUAGES as string[]).includes(this.language)) return this.language;
    warnLegacyValue(TAG, 'language', this.language, 'pt_BR');
    return 'pt_BR';
  }

  private get sizeValue(): UaiInputDateSize {
    if ((SIZES as string[]).includes(this.size)) return this.size;
    warnLegacyValue(TAG, 'size', this.size, 'medium');
    return 'medium';
  }

  private validity(): { invalid: boolean; flags: ValidityStateFlags; message: string } {
    const language = this.languageValue;
    const locale = dateLocale(language);
    const value = isIsoDate(this.value) ? this.value : '';
    if (!this.display && !value) {
      return this.required
        ? { invalid: true, flags: { valueMissing: true }, message: this.requiredErrorMessage || locale.required }
        : { invalid: false, flags: {}, message: '' };
    }
    if (!value) return { invalid: true, flags: { badInput: true }, message: this.dateErrorMessage || locale.date };
    if (isIsoDate(this.min) && value < this.min) {
      const message = this.minErrorMessage || locale.min(isoToDisplay(this.min, language));
      return { invalid: true, flags: { rangeUnderflow: true }, message };
    }
    if (isIsoDate(this.max) && value > this.max) {
      const message = this.maxErrorMessage || locale.max(isoToDisplay(this.max, language));
      return { invalid: true, flags: { rangeOverflow: true }, message };
    }
    return { invalid: false, flags: {}, message: '' };
  }

  // Shows the validation result from now on; the message follows the value while it stays shown.
  private showValidation(show: boolean) {
    const danger = show && this.validity().invalid;
    if (danger !== this.validationDanger) this.validationDanger = danger;
  }

  private onInput = (event: InputEvent): void => {
    const input = event.target as HTMLInputElement;
    const raw = input.value;
    const caretDigits = raw.slice(0, input.selectionStart ?? raw.length).replace(/\D/g, '').length;
    const digits = raw.replace(/\D/g, '').slice(0, 8);
    const display = groupDigits(digits, this.languageValue);

    input.value = display;
    let caret = 0;
    for (let seen = 0; caret < display.length && seen < caretDigits; caret++) {
      if (/\d/.test(display[caret])) seen++;
    }
    input.setSelectionRange?.(caret, caret);

    this.display = display;
    this.typing = true;
    this.value = displayToIso(digits, this.languageValue);
    this.typing = false;
    this.uaiInput.emit(event);
  };

  private onFocus = (): void => {
    this.uaiFocus.emit();
  };

  private onBlur = (): void => {
    this.showValidation(true);
    this.uaiOnBlur.emit();
  };

  private onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'ArrowDown' && event.altKey) {
      event.preventDefault();
      this.openCalendar();
    } else if (event.key === 'Enter' && !event.isComposing) {
      this.formControl?.form?.requestSubmit();
    }
  };

  private openCalendar = (): void => {
    if (!this.picker || this.disabled || this.disabledByForm || this.readonly) return;
    this.picker.value = isIsoDate(this.value) ? this.value : '';
    try {
      this.picker.showPicker();
    } catch {
      this.nativeInput?.focus();
    }
  };

  private onPick = (): void => {
    const value = this.picker?.value || '';
    if (!isIsoDate(value)) return;
    this.display = isoToDisplay(value, this.languageValue);
    this.value = value;
    this.showValidation(true);
    this.nativeInput?.focus();
  };

  // Clicks on the field box (outside the button and slotted content) focus the input, as a native field does.
  private onControlClick = (event: MouseEvent): void => {
    if ((event.target as HTMLElement)?.closest?.('button')) return;
    if (!this.el.contains(event.target as Node)) this.nativeInput?.focus();
  };

  render() {
    const disabled = this.disabled || this.disabledByForm;
    const validity = this.validity();
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
    const locale = dateLocale(this.languageValue);
    const label = this.label ?? locale.label;

    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
        class={{
          [`uai-input-date--size-${this.sizeValue}`]: true,
          'uai-input-date--danger': invalid,
          'uai-input-date--success': success,
          'uai-input-date--disabled': disabled,
          'uai-input-date--readonly': this.readonly && !disabled,
        }}
      >
        <div class="input">
          {label && (
            <label class="input__label" {...{ for: this.id }}>
              <uai-typo variant="caption" bold="semibold" tag="span" margin={false}>
                {label}
              </uai-typo>
            </label>
          )}
          <div class="input__control" part="input-container" onClick={this.onControlClick}>
            {this.icon && <uai-icon class="input__icon" name={this.icon} size="medium"></uai-icon>}
            <div class="input__field">
              <input
                id={this.id}
                ref={(input) => (this.nativeInput = input)}
                class="input__native"
                part="input"
                type="text"
                inputMode="numeric"
                autocomplete="off"
                maxLength={10}
                value={this.display}
                placeholder={this.placeholder ?? locale.placeholder}
                required={this.required}
                readOnly={this.readonly}
                disabled={disabled}
                aria-label={this.ariaLabel || null}
                aria-invalid={invalid ? 'true' : null}
                aria-describedby={message ? `${this.id}-message` : null}
                data-test={this.dataTest}
                onInput={this.onInput}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onKeyDown={this.onKeyDown}
              />
            </div>
            {invalid && <uai-icon class="input__feedback" name="error" theme="outline" size="medium"></uai-icon>}
            {success && <uai-icon class="input__feedback" name="checkball" theme="solid" size="medium"></uai-icon>}
            {!this.readonly && (
              <button
                type="button"
                class="calendar"
                part="calendar-button"
                aria-label={locale.calendar}
                disabled={disabled}
                onClick={this.openCalendar}
              >
                <uai-icon name="calendar" size="medium"></uai-icon>
              </button>
            )}
            <input
              ref={(picker) => (this.picker = picker)}
              class="picker"
              type="date"
              tabindex="-1"
              aria-hidden="true"
              min={isIsoDate(this.min) ? this.min : undefined}
              max={isIsoDate(this.max) ? this.max : undefined}
              disabled={disabled}
              onChange={this.onPick}
            />
            <slot name="input-right"></slot>
          </div>
          {message && (
            <div id={`${this.id}-message`} class="input__message" part="input__message">
              <uai-typo variant="caption" tag="span" margin={false}>
                {message}
              </uai-typo>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
