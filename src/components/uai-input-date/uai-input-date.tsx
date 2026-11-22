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
  forceUpdate,
  h,
} from '@stencil/core';
import { UaiControlSize } from '../input/input-interface';
import { warnLegacyValue, warnOnce } from '../../utils/deprecation';
import { UaiFormControl } from '../../utils/uai-form-control';
import { UaiOverlay, UaiOverlayCloseReason } from '../../utils/uai-overlay';
import {
  CalendarDays,
  CalendarHeader,
  CalendarList,
  UaiCalendarView,
  YEARS_PER_PAGE,
  addMonths,
  clampIso,
  dateForKey,
  outOfRange,
  parseIso,
  toIso,
  todayIso,
} from '../../utils/uai-calendar';
import {
  UaiInputDateLanguage,
  dateLocale,
  displayToIso,
  groupDigits,
  isIsoDate,
  isoToDisplay,
  regionalDateFormat,
} from './uai-input-date-format';

export type UaiInputDateSize = UaiControlSize;

const TAG = 'uai-input-date';
const SIZES: UaiInputDateSize[] = ['short', 'medium'];
const LANGUAGES: UaiInputDateLanguage[] = ['pt_BR', 'en_US', 'es_ES'];

let instances = 0;

/**
 * Date field. The person types the date in the browser's regional format or picks it in the UAI calendar that opens
 * on a click; value, min, max and the submitted form value are ISO YYYY-MM-DD. Use it for a single known date, such
 * as a birth or due date. Pair with uai-input-time for a date and time, and with UaiButton in forms. Avoid it for
 * periods (use uai-datepicker) or times (use uai-input-time). Wrap the app in UaiThemeProvider.
 *
 * @slot input-right - Content after the calendar button (for example a clear button). Give actions an accessible name.
 * @part input-container - The field box with border, icon, the native input and the calendar button.
 * @part input - The native text input with the date in the browser's regional format.
 * @part input__message - The helper, error or success message below the field.
 * @part calendar-button - The button that opens and closes the calendar.
 * @part calendar - The floating calendar panel.
 * @part calendar-arrow - The previous and next buttons of the calendar header.
 * @part calendar-picker - The month and year buttons of the calendar header.
 * @part calendar-day - Each day button of the calendar.
 * @part calendar-option - Each month or year in their pickers.
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
  @State() isOpen = false;
  @State() view: UaiCalendarView = 'days';
  /** The day with the focus in the calendar grid; its month is the month shown. */
  @State() focusedDate = todayIso();
  @State() firstYear = 0;
  /** Where the next month or page of years comes from, for the slide animation. */
  @State() slide: 'next' | 'previous' | 'view' | null = null;

  private nativeInput?: HTMLInputElement;
  private control?: HTMLElement;
  private panel?: HTMLElement;
  private overlay?: UaiOverlay;
  /** Moves the focus into the grid on the next render (opened by the keyboard or the calendar button). */
  private focusGrid = false;
  private formControl?: UaiFormControl;
  private defaultValue = '';
  private typing = false;
  private readonly inputId = `uai-input-date-${++instances}`;

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
   * Language of the default texts, not the date format. Can be 'pt_BR' (default), 'en_US', 'es_ES'.
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
   * Text shown while the field is empty. Defaults to the browser's regional date format, such as "DD/MM/YYYY".
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

  /**
   * Opens the calendar. Use for imperative control; pair with close.
   */
  @Method()
  async open(): Promise<void> {
    this.openCalendar(false);
  }

  /**
   * Closes the calendar.
   */
  @Method()
  async close(): Promise<void> {
    this.closeCalendar();
  }

  @Watch('inputName')
  protected inputNameChanged(): void {
    if (!this.name && this.inputName) this.name = this.inputName;
  }

  @Watch('value')
  protected valueChanged(newValue: string | null): void {
    const value = newValue || '';
    if (!this.typing) this.display = isoToDisplay(value);
    this.formControl?.setValue(isIsoDate(value) ? value : null);
    this.uaiChange.emit({ value });
  }

  @Listen('invalid')
  protected onInvalid(): void {
    this.showValidation(true);
  }

  // The focus moving to something outside the field and the calendar closes it. Without a target (a day button
  // replaced when the month changes, or a click on nothing), it stays: a click outside is the overlay's.
  @Listen('focusout')
  protected onFocusOut(event: FocusEvent): void {
    const next = event.relatedTarget as Node | null;
    if (next && !this.el.contains(next) && !this.el.shadowRoot?.contains(next)) this.closeCalendar();
  }

  componentWillLoad() {
    this.inputNameChanged();
    this.defaultValue = isIsoDate(this.value) ? this.value : '';
    this.display = isoToDisplay(this.defaultValue);
    // Real browsers only: the Stencil mock DOM attaches internals without the form API.
    if (typeof this.internals?.setFormValue === 'function') {
      this.formControl = new UaiFormControl({
        internals: this.internals,
        defaultValue: () => this.defaultValue || null,
        onReset: () => {
          this.validationDanger = false;
          this.display = isoToDisplay(this.defaultValue);
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
    if (this.isOpen) this.overlay?.update();
    if (this.isOpen && this.focusGrid) {
      this.focusGrid = false;
      this.panel?.querySelector<HTMLElement>(`[data-iso="${this.focusedDate}"]`)?.focus();
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
      const message = this.minErrorMessage || locale.min(isoToDisplay(this.min));
      return { invalid: true, flags: { rangeUnderflow: true }, message };
    }
    if (isIsoDate(this.max) && value > this.max) {
      const message = this.maxErrorMessage || locale.max(isoToDisplay(this.max));
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
    const display = groupDigits(digits);

    input.value = display;
    let caret = 0;
    for (let seen = 0; caret < display.length && seen < caretDigits; caret++) {
      if (/\d/.test(display[caret])) seen++;
    }
    input.setSelectionRange?.(caret, caret);

    this.display = display;
    this.typing = true;
    this.value = displayToIso(digits);
    this.typing = false;
    // A complete date typed with the calendar open shows its month.
    if (this.isOpen && isIsoDate(this.value)) this.moveTo(clampIso(this.value, this.min, this.max));
    this.uaiInput.emit(event);
  };

  private onFocus = (): void => {
    this.uaiFocus.emit();
  };

  // Going into the calendar is not leaving the field: the validation waits until the calendar closes.
  private onBlur = (): void => {
    if (!this.isOpen) this.showValidation(true);
    this.uaiOnBlur.emit();
  };

  private onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'ArrowDown' && (event.altKey || this.isOpen)) {
      event.preventDefault();
      this.openCalendar(true);
    } else if (event.key === 'Tab' && this.isOpen) {
      this.closeCalendar();
    } else if (event.key === 'Enter' && !event.isComposing) {
      this.formControl?.form?.requestSubmit();
    }
  };

  private get isDisabled(): boolean {
    return this.disabled || this.disabledByForm;
  }

  private get viewYear(): number {
    return parseIso(this.focusedDate).year;
  }

  private get viewMonth(): number {
    return parseIso(this.focusedDate).month;
  }

  // The calendar starts on the chosen date, or today, within min and max.
  private openCalendar(focusGrid: boolean) {
    if (this.isDisabled || this.readonly) return;
    if (!this.isOpen) {
      const start = isIsoDate(this.value) ? this.value : todayIso();
      this.focusedDate = clampIso(start, this.min, this.max);
      this.view = 'days';
      this.slide = null;
      this.isOpen = true;
    }
    this.focusGrid = focusGrid;
    if (focusGrid) this.forceFocus();
  }

  // Asks for a render when the calendar is already open and only the focus has to move.
  private forceFocus() {
    forceUpdate(this.el);
  }

  private closeCalendar(reason: UaiOverlayCloseReason = 'api') {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.overlay?.close(reason);
    if (!this.el.shadowRoot?.activeElement) this.showValidation(true);
  }

  private onOverlayClose = (reason: UaiOverlayCloseReason): void => {
    if (this.isOpen) this.isOpen = false;
    if (reason === 'escape') this.nativeInput?.focus();
    if (reason === 'outside') this.showValidation(true);
  };

  private pickDate = (iso: string): void => {
    if (outOfRange(iso, this.min, this.max)) return;
    this.display = isoToDisplay(iso);
    this.value = iso;
    this.showValidation(true);
    this.closeCalendar();
    this.nativeInput?.focus();
  };

  private moveFocus(iso: string) {
    this.moveTo(clampIso(iso, this.min, this.max));
    this.focusGrid = true;
    forceUpdate(this.el);
  }

  // Keys move from the active day in the state, not from the button that got the event: a fast key can reach the
  // previous button before the focus moves.
  private onDayKeyDown = (event: KeyboardEvent): void => {
    const target = dateForKey(this.focusedDate, event);
    if (target) {
      event.preventDefault();
      this.moveFocus(target);
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.pickDate(this.focusedDate);
    }
  };

  private showMonth(months: number) {
    this.moveTo(clampIso(addMonths(this.focusedDate, months), this.min, this.max));
  }

  // Moves the calendar to a date; a new month slides in from the side it comes from.
  private moveTo(iso: string) {
    const from = this.viewYear * 12 + this.viewMonth;
    const { year, month } = parseIso(iso);
    const to = year * 12 + month;
    if (to !== from) this.slide = to > from ? 'next' : 'previous';
    this.focusedDate = iso;
  }

  private changeView(view: UaiCalendarView) {
    if (view === this.view) return;
    this.slide = 'view';
    this.view = view;
  }

  private onView = (view: UaiCalendarView): void => {
    // The page of years opens with the current year in its first row, leaving the years ahead in view.
    if (view === 'years') this.firstYear = this.viewYear - 4;
    this.changeView(view);
  };

  private onPickMonth = (month: number): void => {
    const { year, day } = parseIso(this.focusedDate);
    const last = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    this.focusedDate = clampIso(toIso(year, month, Math.min(day, last)), this.min, this.max);
    this.changeView('days');
  };

  private onPickYear = (year: number): void => {
    const { month, day } = parseIso(this.focusedDate);
    const last = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    this.focusedDate = clampIso(toIso(year, month, Math.min(day, last)), this.min, this.max);
    this.changeView('months');
  };

  // The arrows turn a month, a year in the month picker, or a page of years in the year picker.
  private onPrevious = (): void => {
    if (this.view === 'years') {
      this.firstYear -= YEARS_PER_PAGE;
      this.slide = 'previous';
    } else this.showMonth(this.view === 'months' ? -12 : -1);
  };

  private onNext = (): void => {
    if (this.view === 'years') {
      this.firstYear += YEARS_PER_PAGE;
      this.slide = 'next';
    } else this.showMonth(this.view === 'months' ? 12 : 1);
  };

  private onInputClick = (): void => {
    this.openCalendar(false);
  };

  private onButtonClick = (): void => {
    if (this.isOpen) {
      this.closeCalendar();
      this.nativeInput?.focus();
    } else {
      this.openCalendar(true);
    }
  };

  private renderCalendar() {
    if (!this.isOpen) return null;
    const language = this.languageValue;
    const min = parseIso(this.min);
    const max = parseIso(this.max);
    const year = this.viewYear;
    const month = this.viewMonth;
    // The arrows stop at min and max: by month, by year in the month picker, by page in the year picker.
    const position = this.view === 'days' ? year * 12 + month : year;
    const limit = (date: { year: number; month: number }) => (this.view === 'days' ? date.year * 12 + date.month : date.year);
    const atMin = !!min && (this.view === 'years' ? this.firstYear <= min.year : position <= limit(min));
    const atMax = !!max && (this.view === 'years' ? this.firstYear + YEARS_PER_PAGE - 1 >= max.year : position >= limit(max));
    return [
      <CalendarHeader
        year={year}
        month={month}
        view={this.view}
        language={language}
        disablePrevious={atMin}
        disableNext={atMax}
        onPrevious={this.onPrevious}
        onNext={this.onNext}
        onView={this.onView}
      />,
      // A new key per month, page of years or view: the body is created again and its entry animation runs.
      <div
        key={`${this.view}-${this.view === 'years' ? this.firstYear : this.view === 'months' ? year : `${year}-${month}`}`}
        class={{ calendar__body: true, [`calendar__body--${this.slide}`]: !!this.slide }}
      >
        {this.view === 'days' ? (
          <CalendarDays
            year={year}
            month={month}
            language={language}
            focused={this.focusedDate}
            min={this.min}
            max={this.max}
            idPrefix={`${this.inputId}-day`}
            isSelected={(iso) => iso === this.value}
            onPick={this.pickDate}
            onKeyDown={this.onDayKeyDown}
          />
        ) : (
          <CalendarList
            kind={this.view}
            year={year}
            month={month}
            language={language}
            min={this.min}
            max={this.max}
            firstYear={this.firstYear}
            onPick={this.view === 'months' ? this.onPickMonth : this.onPickYear}
          />
        )}
      </div>,
    ];
  }

  // Clicks on the field box (outside the button and slotted content) focus the input, as a native field does.
  private onControlClick = (event: MouseEvent): void => {
    if ((event.target as HTMLElement)?.closest?.('button')) return;
    if (!this.el.contains(event.target as Node)) {
      this.nativeInput?.focus();
      this.openCalendar(false);
    }
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
          'uai-input-date--open': this.isOpen,
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
                inputMode="numeric"
                autocomplete="off"
                maxLength={regionalDateFormat().placeholder.length}
                value={this.display}
                placeholder={this.placeholder ?? regionalDateFormat().placeholder}
                required={this.required}
                readOnly={this.readonly}
                disabled={disabled}
                aria-label={this.ariaLabel || null}
                aria-haspopup="dialog"
                aria-expanded={this.isOpen ? 'true' : 'false'}
                aria-controls={`${this.inputId}-calendar`}
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
                class="calendar-toggle"
                part="calendar-button"
                aria-label={locale.calendar}
                aria-haspopup="dialog"
                aria-expanded={this.isOpen ? 'true' : 'false'}
                aria-controls={`${this.inputId}-calendar`}
                disabled={disabled}
                onClick={this.onButtonClick}
              >
                <uai-icon name="calendar" size="medium"></uai-icon>
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
        {/* A press on the calendar keeps the focus where it is: in the field or on a day. */}
        <div
          id={`${this.inputId}-calendar`}
          ref={(panel) => (this.panel = panel)}
          class="calendar-panel"
          part="calendar"
          role="dialog"
          aria-label={locale.calendar}
          onPointerDown={(event) => {
            if (!(event.target as HTMLElement)?.closest?.('button')) event.preventDefault();
          }}
        >
          {this.renderCalendar()}
        </div>
      </Host>
    );
  }
}
