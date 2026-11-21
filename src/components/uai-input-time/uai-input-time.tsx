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
import { UaiOverlay, UaiOverlayCloseReason } from '../../utils/uai-overlay';
import {
  UaiInputTimeLanguage,
  acceptDigits,
  digitsToTime,
  groupTime,
  isTime,
  pad,
  timeLocale,
} from './uai-input-time-format';

export type UaiInputTimeSize = UaiControlSize;
type Column = 'hour' | 'minute';

const TAG = 'uai-input-time';
const SIZES: UaiInputTimeSize[] = ['short', 'medium'];
const LANGUAGES: UaiInputTimeLanguage[] = ['pt_BR', 'en_US', 'es_ES'];
const HOURS = Array.from({ length: 24 }, (_, hour) => hour);

let instances = 0;

/**
 * Time field. The person types the time of day as HH:mm (24 hours), and digits that cannot make a time are refused,
 * or picks the hour and the minutes in the panel that opens on a click; value, min, max and the submitted form value
 * are HH:mm. Use it for a time of day, such as an opening hour or a return time. Pair with uai-input-date for a date
 * and time, and with UaiButton in forms. Avoid it for durations or periods. Wrap the app in UaiThemeProvider.
 *
 * @slot input-right - Content after the picker button (for example a clear button). Give actions an accessible name.
 * @part input-container - The field box with border, icon, the native input and the picker button.
 * @part input - The native text input with the time as HH:mm.
 * @part input__message - The helper, error or success message below the field.
 * @part picker-button - The button that opens and closes the time panel.
 * @part picker - The floating panel with the hour and minute columns.
 * @part picker-option - Each hour or minute in the panel.
 */
@Component({
  tag: 'uai-input-time',
  styleUrl: 'uai-input-time.scss',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class UaiInputTime {
  @Element() el!: HTMLElement;

  @AttachInternals() internals: ElementInternals;

  @State() display = '';
  @State() validationDanger = false;
  @State() disabledByForm = false;
  @State() isOpen = false;
  @State() activeColumn: Column = 'hour';
  @State() activeHour = 0;
  @State() activeMinute = 0;

  private nativeInput?: HTMLInputElement;
  private control?: HTMLElement;
  private panel?: HTMLElement;
  private overlay?: UaiOverlay;
  private formControl?: UaiFormControl;
  private defaultValue = '';
  private typing = false;
  private readonly inputId = `uai-input-time-${++instances}`;

  /**
   * Name of the value in the submitted form data, which is the time as HH:mm. Without name (or inputName), the field
   * is not submitted.
   */
  @Prop({ reflect: true, mutable: true }) name?: string;

  /**
   * Name of the value in the submitted form data. Same as name, kept from bds-input.
   */
  @Prop() inputName?: string = '';

  /**
   * Chosen time as HH:mm, from "00:00" to "23:59". Empty while the typed time is incomplete.
   */
  @Prop({ mutable: true }) value?: string | null = '';

  /**
   * Earliest accepted time, as HH:mm. Earlier hours and minutes are disabled in the panel.
   */
  @Prop() min?: string;

  /**
   * Latest accepted time, as HH:mm. Later hours and minutes are disabled in the panel.
   */
  @Prop() max?: string;

  /**
   * Interval of the minutes offered in the panel, from 1 to 30: 5 (default) offers 00, 05, 10… Typing accepts any
   * minute. Use 15 or 30 for appointments; avoid 1, which makes a long list.
   */
  @Prop() minuteStep?: number = 5;

  /**
   * Language of the default texts. Can be 'pt_BR' (default), 'en_US', 'es_ES'.
   */
  @Prop() language?: UaiInputTimeLanguage = 'pt_BR';

  /**
   * Height of the field. Can be one of: 'short', 'medium' (default).
   */
  @Prop({ reflect: true }) size?: UaiInputTimeSize = 'medium';

  /**
   * Label shown above the field. Without it, the default text of the language is shown ("Horário").
   */
  @Prop() label?: string;

  /**
   * Text shown while the field is empty. Defaults to "hh:mm".
   */
  @Prop() placeholder?: string;

  /**
   * UaiIcon name shown before the time.
   */
  @Prop({ reflect: true }) icon?: string = '';

  /**
   * If true, an empty field blocks the form submission.
   */
  @Prop() required: boolean;

  /**
   * If true, the time can be selected and copied but not edited; the panel does not open and its button is hidden.
   */
  @Prop() readonly = false;

  /**
   * If true, the field and the picker button cannot be used and the value is left out of the form data.
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
   * Message shown when the typed time is incomplete. Without it, the default text is shown.
   */
  @Prop() timeErrorMessage: string;

  /**
   * Message shown when the time is before min. Without it, the default text with the min time is shown.
   */
  @Prop() minErrorMessage: string;

  /**
   * Message shown when the time is after max. Without it, the default text with the max time is shown.
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
   * Emitted when the time changes, by typing, by the panel or programmatically. detail: { value } as HH:mm, or ''
   * while the typed time is incomplete.
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
   * Returns true when the time is complete, within min and max, and present when required.
   */
  @Method()
  async isValid(): Promise<boolean> {
    return !this.validity().invalid;
  }

  /**
   * Clears the time.
   */
  @Method()
  async clear(): Promise<void> {
    this.display = '';
    this.value = '';
  }

  /**
   * Opens the time panel. Use for imperative control; pair with close.
   */
  @Method()
  async open(): Promise<void> {
    this.openPanel();
  }

  /**
   * Closes the time panel.
   */
  @Method()
  async close(): Promise<void> {
    this.closePanel();
  }

  @Watch('inputName')
  protected inputNameChanged(): void {
    if (!this.name && this.inputName) this.name = this.inputName;
  }

  @Watch('value')
  protected valueChanged(newValue: string | null): void {
    const value = newValue || '';
    if (!this.typing) this.display = isTime(value) ? value : '';
    this.formControl?.setValue(isTime(value) ? value : null);
    this.uaiChange.emit({ value });
  }

  @Listen('invalid')
  protected onInvalid(): void {
    this.showValidation(true);
  }

  componentWillLoad() {
    this.inputNameChanged();
    this.defaultValue = isTime(this.value) ? this.value : '';
    this.display = this.defaultValue;
    // Real browsers only: the Stencil mock DOM attaches internals without the form API.
    if (typeof this.internals?.setFormValue === 'function') {
      this.formControl = new UaiFormControl({
        internals: this.internals,
        defaultValue: () => this.defaultValue || null,
        onReset: () => {
          this.validationDanger = false;
          this.display = this.defaultValue;
          this.value = this.defaultValue;
        },
        onDisabledChange: (disabled) => {
          queueMicrotask(() => {
            const formDisabled = this.formControl?.disabled ?? disabled;
            if (!this.disabled && this.disabledByForm !== formDisabled) this.disabledByForm = formDisabled;
            if (formDisabled) this.closePanel();
          });
        },
      });
    }
    if (Build.isDev && this.label === '' && !this.ariaLabel) {
      warnOnce(TAG, 'accessible-name', 'Fields without a visible label require an aria-label.');
    }
  }

  componentDidLoad() {
    if (this.control && this.panel) {
      this.overlay = new UaiOverlay({
        trigger: this.control,
        panel: this.panel,
        side: 'bottom',
        align: 'start',
        onClose: this.onOverlayClose,
      });
    }
  }

  componentDidRender() {
    if (this.nativeInput && this.nativeInput.value !== this.display) this.nativeInput.value = this.display;
    const { flags, message } = this.validity();
    this.formControl?.setValidity(flags, message, this.nativeInput);
    if (this.isOpen && this.overlay && !this.overlay.isOpen) this.overlay.open();
    if (this.isOpen) {
      this.overlay?.update();
      // Keeps the active hour and minute in view, each in its own column.
      this.panel
        ?.querySelectorAll<HTMLElement>('.option--current')
        .forEach((option) => option.scrollIntoView?.({ block: 'nearest' }));
    }
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
    if (typeof state === 'string') this.value = state;
  }

  private get languageValue(): UaiInputTimeLanguage {
    if ((LANGUAGES as string[]).includes(this.language)) return this.language;
    warnLegacyValue(TAG, 'language', this.language, 'pt_BR');
    return 'pt_BR';
  }

  private get sizeValue(): UaiInputTimeSize {
    if ((SIZES as string[]).includes(this.size)) return this.size;
    warnLegacyValue(TAG, 'size', this.size, 'medium');
    return 'medium';
  }

  private get minutes(): number[] {
    const step = Math.round(Number(this.minuteStep));
    const valid = step >= 1 && step <= 30 ? step : 5;
    if (valid !== step) warnLegacyValue(TAG, 'minuteStep', String(this.minuteStep), '5');
    return Array.from({ length: Math.ceil(60 / valid) }, (_, index) => index * valid);
  }

  private get isDisabled(): boolean {
    return this.disabled || this.disabledByForm;
  }

  // HH:mm compares in the order of the day, so min and max compare as text.
  private inRange(time: string): boolean {
    return (!isTime(this.min) || time >= this.min) && (!isTime(this.max) || time <= this.max);
  }

  private hourDisabled(hour: number): boolean {
    const first = `${pad(hour)}:00`;
    const last = `${pad(hour)}:59`;
    return (isTime(this.min) && last < this.min) || (isTime(this.max) && first > this.max);
  }

  private minuteDisabled(minute: number): boolean {
    return !this.inRange(`${pad(this.activeHour)}:${pad(minute)}`);
  }

  private validity(): { invalid: boolean; flags: ValidityStateFlags; message: string } {
    const locale = timeLocale(this.languageValue);
    const value = isTime(this.value) ? this.value : '';
    if (!this.display && !value) {
      return this.required
        ? { invalid: true, flags: { valueMissing: true }, message: this.requiredErrorMessage || locale.required }
        : { invalid: false, flags: {}, message: '' };
    }
    if (!value) return { invalid: true, flags: { badInput: true }, message: this.timeErrorMessage || locale.time };
    if (isTime(this.min) && value < this.min) {
      return { invalid: true, flags: { rangeUnderflow: true }, message: this.minErrorMessage || locale.min(this.min) };
    }
    if (isTime(this.max) && value > this.max) {
      return { invalid: true, flags: { rangeOverflow: true }, message: this.maxErrorMessage || locale.max(this.max) };
    }
    return { invalid: false, flags: {}, message: '' };
  }

  // Shows the validation result from now on; the message follows the value while it stays shown.
  private showValidation(show: boolean) {
    const danger = show && this.validity().invalid;
    if (danger !== this.validationDanger) this.validationDanger = danger;
  }

  private setTime(time: string) {
    this.display = time;
    this.value = time;
  }

  // The panel starts on the hour and minute of the value, or on the first ones it can offer.
  private openPanel() {
    if (this.isDisabled || this.readonly || this.isOpen) return;
    const [hour, minute] = isTime(this.value) ? this.value.split(':').map(Number) : [null, null];
    this.activeHour = hour ?? HOURS.find((candidate) => !this.hourDisabled(candidate)) ?? 0;
    const minutes = this.minutes;
    this.activeMinute =
      minute === null
        ? (minutes.find((candidate) => !this.minuteDisabled(candidate)) ?? 0)
        : minutes.reduce((best, candidate) => (Math.abs(candidate - minute) < Math.abs(best - minute) ? candidate : best));
    this.activeColumn = 'hour';
    this.isOpen = true;
  }

  private closePanel(reason: UaiOverlayCloseReason = 'api') {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.overlay?.close(reason);
  }

  private onOverlayClose = (reason: UaiOverlayCloseReason): void => {
    if (this.isOpen) this.isOpen = false;
    if (reason === 'escape') this.nativeInput?.focus();
    if (reason === 'outside') this.showValidation(true);
  };

  // The hour fills the field at once, with the minute already shown (or the first one offered), and moves to the minutes.
  private pickHour(hour: number) {
    if (this.hourDisabled(hour)) return;
    this.activeHour = hour;
    const minutes = this.minutes;
    if (this.minuteDisabled(this.activeMinute)) {
      this.activeMinute = minutes.find((candidate) => !this.minuteDisabled(candidate)) ?? this.activeMinute;
    }
    this.setTime(`${pad(hour)}:${pad(this.activeMinute)}`);
    this.activeColumn = 'minute';
  }

  private pickMinute(minute: number) {
    if (this.minuteDisabled(minute)) return;
    this.activeMinute = minute;
    this.setTime(`${pad(this.activeHour)}:${pad(minute)}`);
    this.showValidation(true);
    this.closePanel();
    this.nativeInput?.focus();
  }

  private moveActive(step: 1 | -1) {
    if (this.activeColumn === 'hour') {
      for (let hour = this.activeHour + step; hour >= 0 && hour < 24; hour += step) {
        if (!this.hourDisabled(hour)) return void (this.activeHour = hour);
      }
      return;
    }
    const minutes = this.minutes;
    for (let index = minutes.indexOf(this.activeMinute) + step; index >= 0 && index < minutes.length; index += step) {
      if (!this.minuteDisabled(minutes[index])) return void (this.activeMinute = minutes[index]);
    }
  }

  private onInput = (event: InputEvent): void => {
    const input = event.target as HTMLInputElement;
    const raw = input.value;
    const previous = this.display.replace(/\D/g, '');
    const digits = acceptDigits(raw, previous);
    const refused = digits === previous && raw.replace(/\D/g, '') !== previous;
    const caretDigits = refused
      ? previous.length
      : raw.slice(0, input.selectionStart ?? raw.length).replace(/\D/g, '').length;
    const display = groupTime(digits);

    input.value = display;
    let caret = 0;
    for (let seen = 0; caret < display.length && seen < caretDigits; caret++) {
      if (/\d/.test(display[caret])) seen++;
    }
    input.setSelectionRange?.(caret, caret);

    this.display = display;
    this.typing = true;
    this.value = digitsToTime(digits);
    this.typing = false;
    // While the panel is open, it follows the hour being typed.
    if (this.isOpen && digits.length >= 2 && !this.hourDisabled(Number(digits.slice(0, 2)))) {
      this.activeHour = Number(digits.slice(0, 2));
    }
    this.uaiInput.emit(event);
  };

  private onFocus = (): void => {
    this.uaiFocus.emit();
  };

  private onBlur = (): void => {
    if (!this.isOpen) this.showValidation(true);
    this.uaiOnBlur.emit();
  };

  private onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'ArrowDown' && event.altKey) {
      event.preventDefault();
      this.openPanel();
      return;
    }
    if (this.isOpen) {
      const keys: Record<string, () => void> = {
        ArrowDown: () => this.moveActive(1),
        ArrowUp: () => this.moveActive(-1),
        ArrowRight: () => (this.activeColumn = 'minute'),
        ArrowLeft: () => (this.activeColumn = 'hour'),
        Enter: () =>
          this.activeColumn === 'hour' ? this.pickHour(this.activeHour) : this.pickMinute(this.activeMinute),
      };
      if (keys[event.key]) {
        event.preventDefault();
        keys[event.key]();
      } else if (event.key === 'Tab') {
        this.closePanel();
      }
      return;
    }
    if (event.key === 'Enter' && !event.isComposing) this.formControl?.form?.requestSubmit();
  };

  // A click on the field opens the panel; on the button, it opens or closes it.
  private onInputClick = (): void => {
    this.openPanel();
  };

  private onButtonClick = (): void => {
    if (this.isOpen) this.closePanel();
    else {
      this.openPanel();
      this.nativeInput?.focus();
    }
  };

  // Clicks on the field box (outside the button and slotted content) focus the input and open the panel.
  private onControlClick = (event: MouseEvent): void => {
    if ((event.target as HTMLElement)?.closest?.('button')) return;
    if (!this.el.contains(event.target as Node)) {
      this.nativeInput?.focus();
      this.openPanel();
    }
  };

  private optionId(column: Column, value: number): string {
    return `${this.inputId}-${column}-${value}`;
  }

  private renderColumn(column: Column, label: string, values: number[]) {
    const [hour, minute] = isTime(this.value) ? this.value.split(':').map(Number) : [null, null];
    const chosen = column === 'hour' ? hour : hour === this.activeHour ? minute : null;
    const active = column === 'hour' ? this.activeHour : this.activeMinute;
    return (
      <ul class="column" role="listbox" aria-label={label}>
        {values.map((item) => {
          const disabled = column === 'hour' ? this.hourDisabled(item) : this.minuteDisabled(item);
          return (
            <li
              id={this.optionId(column, item)}
              role="option"
              part="picker-option"
              aria-selected={chosen === item ? 'true' : 'false'}
              aria-disabled={disabled ? 'true' : null}
              class={{
                option: true,
                'option--current': item === active,
                'option--active': item === active && this.activeColumn === column,
                'option--disabled': disabled,
              }}
              onClick={() => (column === 'hour' ? this.pickHour(item) : this.pickMinute(item))}
            >
              <uai-typo variant="body-base" tag="span" margin={false}>
                {pad(item)}
              </uai-typo>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    const disabled = this.isDisabled;
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
    const locale = timeLocale(this.languageValue);
    const label = this.label ?? locale.label;
    const panelId = `${this.inputId}-picker`;
    const activeValue = this.activeColumn === 'hour' ? this.activeHour : this.activeMinute;

    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
        class={{
          [`uai-input-time--size-${this.sizeValue}`]: true,
          'uai-input-time--danger': invalid,
          'uai-input-time--success': success,
          'uai-input-time--disabled': disabled,
          'uai-input-time--readonly': this.readonly && !disabled,
          'uai-input-time--open': this.isOpen,
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
          <div
            class="input__control"
            part="input-container"
            ref={(control) => (this.control = control)}
            onClick={this.onControlClick}
          >
            {this.icon && <uai-icon class="input__icon" name={this.icon} size="medium"></uai-icon>}
            <div class="input__field">
              <input
                id={this.inputId}
                ref={(input) => (this.nativeInput = input)}
                class="input__native"
                part="input"
                type="text"
                role="combobox"
                inputMode="numeric"
                autocomplete="off"
                maxLength={5}
                value={this.display}
                placeholder={this.placeholder ?? 'hh:mm'}
                required={this.required}
                readOnly={this.readonly}
                disabled={disabled}
                aria-label={this.ariaLabel || null}
                aria-haspopup="listbox"
                aria-expanded={this.isOpen ? 'true' : 'false'}
                aria-controls={panelId}
                aria-activedescendant={this.isOpen ? this.optionId(this.activeColumn, activeValue) : null}
                aria-invalid={invalid ? 'true' : null}
                aria-describedby={message ? `${this.inputId}-message` : null}
                data-test={this.dataTest}
                onInput={this.onInput}
                onClick={this.onInputClick}
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
                class="clock"
                part="picker-button"
                aria-label={locale.picker}
                aria-expanded={this.isOpen ? 'true' : 'false'}
                aria-controls={panelId}
                disabled={disabled}
                onClick={this.onButtonClick}
              >
                <uai-icon name="clock" size="medium"></uai-icon>
              </button>
            )}
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
        {/* The focus stays in the field: a press on the panel does not take it away. */}
        <div
          id={panelId}
          ref={(panel) => (this.panel = panel)}
          class="panel"
          part="picker"
          role="group"
          aria-label={locale.picker}
          onPointerDown={(event) => event.preventDefault()}
        >
          {this.isOpen && this.renderColumn('hour', locale.hours, HOURS)}
          {this.isOpen && this.renderColumn('minute', locale.minutes, this.minutes)}
        </div>
      </Host>
    );
  }
}
