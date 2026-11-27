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
import { UaiOverlay, UaiOverlayAlign, UaiOverlayCloseReason, UaiOverlaySide } from '../../utils/uai-overlay';
import {
  CalendarDays,
  CalendarHeader,
  CalendarList,
  UaiCalendarDayRange,
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
import { displayToIso, groupDigits, isoToDisplay, regionalDateFormat } from '../uai-input-date/uai-input-date-format';
import {
  UaiDatepickerBannerVariant,
  UaiDatepickerConclude,
  UaiDatepickerLanguage,
  UaiDatepickerPosition,
  UaiDatepickerType,
  datepickerTexts,
} from './uai-datepicker-interface';

export type UaiDatepickerSize = UaiControlSize;
type Edge = 'start' | 'end';

const TAG = 'uai-datepicker';
const SIZES: UaiDatepickerSize[] = ['short', 'medium'];
const LANGUAGES: UaiDatepickerLanguage[] = ['pt_BR', 'en_US', 'es_ES'];
const TYPES: UaiDatepickerType[] = ['single', 'period'];
const LEGACY_DATE = /^(\d{2})\/(\d{2})\/(\d{4})$/;
const BANNER_ICONS: Record<UaiDatepickerBannerVariant, string> = {
  system: 'info',
  info: 'info',
  success: 'checkball',
  warning: 'warning',
  error: 'error',
};

let instances = 0;

/**
 * Field to choose a date or a period in the UAI calendar. With typeOfDate "single" (default) the panel shows a month
 * and a date field; with "period" it shows two months side by side with the "Starts" and "Ends" fields, fills the days
 * between them and previews the period under the pointer. The choice is a draft until Apply; Reset clears it and
 * closing without applying discards it. Dates are ISO YYYY-MM-DD. Use it for filters and reports over a period, or
 * when the choice should be confirmed. Pair with a visible label. Avoid it for a single date typed in a form (use
 * uai-input-date). Wrap the app in UaiThemeProvider.
 *
 * @part input-container - The field that shows the chosen date or period and opens the panel.
 * @part input__message - The helper or error message below the field.
 * @part panel - The floating panel with the calendars, the date fields and the buttons.
 * @part calendar-arrow - The previous and next buttons of a calendar header.
 * @part calendar-picker - The month and year buttons of a calendar header.
 * @part calendar-day - Each day button of the calendars.
 * @part calendar-option - Each month or year in their pickers.
 * @part date-input - The date fields inside the panel.
 * @part message - The message shown inside the panel.
 */
@Component({
  tag: 'uai-datepicker',
  styleUrl: 'uai-datepicker.scss',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class UaiDatepicker {
  @Element() el!: HTMLElement;

  @AttachInternals() internals: ElementInternals;

  @State() isOpen = false;
  @State() view: UaiCalendarView = 'days';
  /** The month on the left (or the only month), as an ISO date on its first day. */
  @State() shownMonth = todayIso().slice(0, 8) + '01';
  /** The day with the focus in the grids. */
  @State() focusedDate = todayIso();
  @State() firstYear = 0;
  @State() slide: 'next' | 'previous' | 'view' | null = null;
  /** The draft: what the person chooses before applying. */
  @State() draftStart: string | null = null;
  @State() draftEnd: string | null = null;
  /** What the date fields of the panel show while being typed. */
  @State() typed: Record<Edge, string | null> = { start: null, end: null };
  @State() hovered: string | null = null;
  @State() disabledByForm = false;

  private trigger?: HTMLButtonElement;
  private panel?: HTMLElement;
  private overlay?: UaiOverlay;
  private formControl?: UaiFormControl;
  private focusGrid = false;
  private readonly baseId = `uai-datepicker-${++instances}`;

  /** Name of the value in the submitted form data: the date, or the start and the end of the period. */
  @Prop({ reflect: true, mutable: true }) name?: string;

  /** One date or a period. Can be one of: 'single' (default), 'period'. */
  @Prop() typeOfDate?: UaiDatepickerType = 'single';

  /**
   * Earliest date that can be chosen, as ISO YYYY-MM-DD. The legacy DD/MM/YYYY still works, with a warning.
   * Earlier days are disabled.
   */
  @Prop({ mutable: true, reflect: true }) startDateLimit?: string;

  /**
   * Latest date that can be chosen, as ISO YYYY-MM-DD. The legacy DD/MM/YYYY still works, with a warning. Later days
   * are disabled.
   */
  @Prop({ mutable: true, reflect: true }) endDateLimit?: string;

  /** Label shown above the field. Without it, the default text of the language is shown ("Data"). */
  @Prop() label?: string;

  /** Text shown in the field while nothing is chosen. Defaults to the browser's regional date format. */
  @Prop() placeholder?: string;

  /** Message shown inside the panel, above the buttons, such as a rule about the period. */
  @Prop() message?: string = null;

  /** Tone of the message inside the panel. Can be one of: 'system', 'info', 'success', 'warning' (default), 'error'. */
  @Prop({ reflect: true, mutable: true }) variantBanner?: UaiDatepickerBannerVariant = 'warning';

  /** Language of the texts and of the calendar. Can be one of: 'pt_BR' (default), 'en_US', 'es_ES'. */
  @Prop() language?: UaiDatepickerLanguage = 'pt_BR';

  /** If true, the field cannot be used and is left out of the form data. */
  @Prop({ reflect: true, mutable: true }) disabled?: boolean = false;

  /** Chosen date, or the start of the period, as ISO YYYY-MM-DD (the legacy DD/MM/YYYY still works, with a warning). */
  @Prop({ reflect: true, mutable: true }) valueDateSelected?: string = null;

  /** End of the period, as ISO YYYY-MM-DD (the legacy DD/MM/YYYY still works, with a warning). */
  @Prop({ reflect: true, mutable: true }) valueEndDateSelected?: string = null;

  /**
   * Side and alignment of the panel. Can be 'auto' (default) or a side and an edge such as 'bottom-left',
   * 'bottom-right', 'top-left', 'top-right'. 'top-center' and 'bottom-center' keep only the side; the right and
   * left sides of the legacy fall back to 'auto'.
   */
  @Prop() positionOptions?: UaiDatepickerPosition | string = 'auto';

  /** Height of the field. Can be one of: 'short', 'medium' (default). */
  @Prop({ reflect: true }) size?: UaiDatepickerSize = 'medium';

  /** Message below the field that helps to fill it. */
  @Prop() helperMessage?: string = '';

  /** If true, shows the error state and errorMessage. */
  @Prop({ reflect: true }) danger?: boolean = false;

  /** Message below the field while danger is true. */
  @Prop() errorMessage?: string = '';

  /** Accessible name of the field when the visible label is not enough. */
  @Prop({ attribute: 'aria-label' }) ariaLabel: string = null;

  /** Data test id of the start date field of the panel (or the only one). */
  @Prop() dtInputStart?: string = null;

  /** Data test id of the end date field of the panel. */
  @Prop() dtInputEnd?: string = null;

  /** Data test id of the field that opens the panel. Kept from bds-datepicker, where it was the outside area. */
  @Prop() dtOutzone?: string = null;

  /** Data test id of the previous month button. */
  @Prop() dtButtonPrev?: string = null;

  /** Data test id of the next month button. */
  @Prop() dtButtonNext?: string = null;

  /** Data test id of the month button. */
  @Prop() dtSelectMonth?: string = null;

  /** Data test id of the year button. */
  @Prop() dtSelectYear?: string = null;

  /** Data test id of the Reset button. */
  @Prop() dtButtonClear?: string = null;

  /** Data test id of the Apply button. */
  @Prop() dtButtonConfirm?: string = null;

  /** Emitted when the start date of the draft changes (or the date, with "single"). detail: { value } as ISO or null. */
  @Event() uaiStartDate!: EventEmitter<{ value: string | null }>;

  /** Emitted when the end date of the draft changes. detail: { value } as ISO or null. */
  @Event() uaiEndDate!: EventEmitter<{ value: string | null }>;

  /** Emitted on Apply with a choice. detail: { startDate, endDate? } as ISO. */
  @Event() uaiConcludeDatepicker!: EventEmitter<UaiDatepickerConclude>;

  /** Emitted on Apply with nothing chosen. */
  @Event() uaiEmptyConcludeDatepicker!: EventEmitter<void>;

  /** Opens the panel. */
  @Method()
  async open(): Promise<void> {
    this.openPanel(false);
  }

  /** Closes the panel, discarding the draft. */
  @Method()
  async close(): Promise<void> {
    this.closePanel();
  }

  /** Clears the chosen date or period. */
  @Method()
  async clear(): Promise<void> {
    this.valueDateSelected = null;
    this.valueEndDateSelected = null;
    this.resetDraft();
  }

  @Watch('valueDateSelected')
  @Watch('valueEndDateSelected')
  protected valueChanged(): void {
    this.syncFormValue();
  }

  @Watch('positionOptions')
  protected positionChanged(): void {
    this.overlay?.setPlacement(this.placement);
  }

  // The focus moving to something outside the field and the panel closes it, discarding the draft.
  @Listen('focusout')
  protected onFocusOut(event: FocusEvent): void {
    const next = event.relatedTarget as Node | null;
    if (next && !this.el.contains(next) && !this.el.shadowRoot?.contains(next)) this.closePanel();
  }

  componentWillLoad() {
    if (typeof this.internals?.setFormValue === 'function') {
      const initial = { start: this.startValue, end: this.endValue };
      this.formControl = new UaiFormControl({
        internals: this.internals,
        defaultValue: () => this.formValue(initial.start, initial.end),
        onReset: () => {
          this.valueDateSelected = initial.start;
          this.valueEndDateSelected = initial.end;
        },
        onDisabledChange: (disabled) => {
          queueMicrotask(() => {
            const formDisabled = this.formControl?.disabled ?? disabled;
            if (!this.disabled && this.disabledByForm !== formDisabled) this.disabledByForm = formDisabled;
            if (formDisabled) this.closePanel();
          });
        },
      });
      this.syncFormValue();
    }
    if (Build.isDev && this.label === '' && !this.ariaLabel) {
      warnOnce(TAG, 'accessible-name', 'Fields without a visible label require an aria-label.');
    }
  }

  componentDidLoad() {
    if (this.trigger && this.panel) {
      this.overlay = new UaiOverlay({
        trigger: this.trigger,
        panel: this.panel,
        onClose: this.onOverlayClose,
        ...this.placement,
      });
    }
  }

  componentDidRender() {
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

  // ---- values --------------------------------------------------------------------------------

  // ISO dates from the props: ISO as is, the legacy DD/MM/YYYY converted with a warning, anything else ignored.
  private iso(value: string | null | undefined, prop: string): string | null {
    if (!value) return null;
    if (parseIso(value)) return value;
    const legacy = LEGACY_DATE.exec(value);
    if (legacy) {
      const iso = `${legacy[3]}-${legacy[2]}-${legacy[1]}`;
      if (parseIso(iso)) {
        warnLegacyValue(TAG, prop, value, iso);
        return iso;
      }
    }
    warnOnce(TAG, `${prop}-invalid`, `${prop} must be an ISO date (YYYY-MM-DD).`);
    return null;
  }

  private get startValue(): string | null {
    return this.iso(this.valueDateSelected, 'valueDateSelected');
  }

  private get endValue(): string | null {
    return this.isPeriod ? this.iso(this.valueEndDateSelected, 'valueEndDateSelected') : null;
  }

  private get min(): string | null {
    return this.iso(this.startDateLimit, 'startDateLimit');
  }

  private get max(): string | null {
    return this.iso(this.endDateLimit, 'endDateLimit');
  }

  private get isPeriod(): boolean {
    if ((TYPES as string[]).includes(this.typeOfDate)) return this.typeOfDate === 'period';
    warnLegacyValue(TAG, 'typeOfDate', this.typeOfDate, 'single');
    return false;
  }

  private get languageValue(): UaiDatepickerLanguage {
    if ((LANGUAGES as string[]).includes(this.language)) return this.language;
    warnLegacyValue(TAG, 'language', this.language, 'pt_BR');
    return 'pt_BR';
  }

  private get sizeValue(): UaiDatepickerSize {
    if ((SIZES as string[]).includes(this.size)) return this.size;
    warnLegacyValue(TAG, 'size', this.size, 'medium');
    return 'medium';
  }

  private get placement(): { side?: UaiOverlaySide; align?: UaiOverlayAlign } {
    const position = String(this.positionOptions || 'auto');
    if (position === 'auto') return {};
    const [side, edge] = position.split('-');
    if (side !== 'top' && side !== 'bottom') {
      warnLegacyValue(TAG, 'positionOptions', position, 'auto');
      return {};
    }
    const align: UaiOverlayAlign | undefined =
      edge === 'left' || edge === 'start' ? 'start' : edge === 'right' || edge === 'end' ? 'end' : undefined;
    return { side, align };
  }

  private get isDisabled(): boolean {
    return this.disabled || this.disabledByForm;
  }

  private formValue(start: string | null, end: string | null): string | FormData | null {
    if (!start) return null;
    if (!this.isPeriod) return start;
    if (!this.name) return null;
    const data = new FormData();
    data.append(this.name, start);
    if (end) data.append(this.name, end);
    return data;
  }

  private syncFormValue() {
    this.formControl?.setValue(this.formValue(this.startValue, this.endValue));
  }

  // ---- panel ---------------------------------------------------------------------------------

  private resetDraft() {
    this.draftStart = this.startValue;
    this.draftEnd = this.endValue;
    this.typed = { start: null, end: null };
    this.hovered = null;
  }

  // The panel starts on the chosen date (or today, within the limits); a period shows it and the next month.
  private openPanel(focusGrid: boolean) {
    if (this.isDisabled) return;
    if (!this.isOpen) {
      this.resetDraft();
      const start = clampIso(this.draftStart ?? todayIso(), this.min, this.max);
      this.focusedDate = start;
      this.shownMonth = this.firstOfMonth(start);
      if (this.isPeriod && this.max && this.firstOfMonth(this.max) === this.shownMonth) {
        this.shownMonth = addMonths(this.shownMonth, -1);
      }
      this.view = 'days';
      this.slide = null;
      this.isOpen = true;
    }
    this.focusGrid = focusGrid;
    if (focusGrid) forceUpdate(this.el);
  }

  private closePanel(reason: UaiOverlayCloseReason = 'api') {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.overlay?.close(reason);
  }

  private onOverlayClose = (reason: UaiOverlayCloseReason): void => {
    if (this.isOpen) this.isOpen = false;
    if (reason === 'escape') this.trigger?.focus();
  };

  private firstOfMonth(iso: string): string {
    return `${iso.slice(0, 8)}01`;
  }

  private get monthsShown(): number {
    return this.isPeriod ? 2 : 1;
  }

  // Shows a month: the grids move only when it is not already in view, sliding from the side it comes from.
  private showMonthOf(iso: string) {
    const target = this.firstOfMonth(iso);
    const last = addMonths(this.shownMonth, this.monthsShown - 1);
    if (target >= this.shownMonth && target <= last) return;
    const next = target > last ? addMonths(target, 1 - this.monthsShown) : target;
    this.slide = next > this.shownMonth ? 'next' : 'previous';
    this.shownMonth = next;
  }

  private turn(months: number) {
    this.slide = months > 0 ? 'next' : 'previous';
    this.shownMonth = addMonths(this.shownMonth, months);
  }

  // ---- choosing ------------------------------------------------------------------------------

  // A single date is the start. In a period, a click starts it, the next click after the start ends it, and a click
  // before the start (or after a complete period) starts again.
  private pick = (iso: string): void => {
    if (outOfRange(iso, this.min, this.max)) return;
    this.focusedDate = iso;
    this.typed = { start: null, end: null };
    if (!this.isPeriod || !this.draftStart || this.draftEnd || iso < this.draftStart) {
      this.setDraft(iso, null);
    } else {
      this.setDraft(this.draftStart, iso);
    }
  };

  private setDraft(start: string | null, end: string | null) {
    if (start !== this.draftStart) this.uaiStartDate.emit({ value: start });
    if (this.isPeriod && end !== this.draftEnd) this.uaiEndDate.emit({ value: end });
    this.draftStart = start;
    this.draftEnd = end;
  }

  private get canApply(): boolean {
    return !this.isPeriod || !this.draftStart || !!this.draftEnd;
  }

  private apply = (): void => {
    if (!this.canApply) return;
    this.valueDateSelected = this.draftStart;
    this.valueEndDateSelected = this.isPeriod ? this.draftEnd : null;
    if (this.draftStart) {
      this.uaiConcludeDatepicker.emit(
        this.isPeriod ? { startDate: this.draftStart, endDate: this.draftEnd } : { startDate: this.draftStart },
      );
    } else {
      this.uaiEmptyConcludeDatepicker.emit();
    }
    this.closePanel();
    this.trigger?.focus();
  };

  private reset = (): void => {
    this.setDraft(null, null);
    this.typed = { start: null, end: null };
  };

  private rangeOf = (iso: string): UaiCalendarDayRange => {
    if (!this.isPeriod || !this.draftStart) return null;
    const end = this.draftEnd ?? (this.hovered && this.hovered > this.draftStart ? this.hovered : null);
    if (!end || end === this.draftStart) return null;
    if (iso === this.draftStart) return 'start';
    if (iso === end) return 'end';
    return iso > this.draftStart && iso < end ? 'between' : null;
  };

  // ---- keyboard and views --------------------------------------------------------------------

  private onDayKeyDown = (event: KeyboardEvent): void => {
    const target = dateForKey(this.focusedDate, event);
    if (target) {
      event.preventDefault();
      this.focusedDate = clampIso(target, this.min, this.max);
      this.showMonthOf(this.focusedDate);
      this.focusGrid = true;
      forceUpdate(this.el);
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.pick(this.focusedDate);
    }
  };

  private onView = (view: UaiCalendarView, month: string): void => {
    this.shownMonth = month;
    if (view === 'years') this.firstYear = parseIso(month).year - 4;
    this.slide = 'view';
    this.view = view;
  };

  // A month or year picked in the pickers of the right month moves the left one too, a month before.
  private pickMonth = (month: number, offset: number): void => {
    const { year } = parseIso(addMonths(this.shownMonth, offset));
    this.shownMonth = addMonths(toIso(year, month, 1), -offset);
    this.slide = 'view';
    this.view = 'days';
  };

  private pickYear = (year: number, offset: number): void => {
    const { month } = parseIso(addMonths(this.shownMonth, offset));
    this.shownMonth = addMonths(toIso(year, month, 1), -offset);
    this.slide = 'view';
    this.view = 'months';
  };

  // ---- date fields of the panel --------------------------------------------------------------

  private onTyped(edge: Edge, event: InputEvent) {
    const input = event.target as HTMLInputElement;
    const digits = input.value.replace(/\D/g, '').slice(0, 8);
    const display = groupDigits(digits);
    input.value = display;
    this.typed = { ...this.typed, [edge]: display };
    const iso = displayToIso(digits);
    if (!iso || outOfRange(iso, this.min, this.max)) return;
    if (edge === 'start') this.setDraft(iso, this.draftEnd && this.draftEnd >= iso ? this.draftEnd : null);
    else if (this.draftStart && iso >= this.draftStart) this.setDraft(this.draftStart, iso);
    this.focusedDate = iso;
    this.showMonthOf(iso);
  }

  private fieldText(edge: Edge): string {
    const typed = this.typed[edge];
    if (typed !== null) return typed;
    return isoToDisplay(edge === 'start' ? this.draftStart : this.draftEnd);
  }

  private fieldInvalid(edge: Edge): boolean {
    const typed = this.typed[edge];
    if (!typed) return false;
    const iso = displayToIso(typed.replace(/\D/g, ''));
    return typed.replace(/\D/g, '').length === 8 && (!iso || outOfRange(iso, this.min, this.max));
  }

  // ---- render --------------------------------------------------------------------------------

  private renderField(edge: Edge, label: string, dataTest: string | null) {
    const id = `${this.baseId}-${edge}`;
    const invalid = this.fieldInvalid(edge);
    return (
      <div class={{ field: true, 'field--danger': invalid }}>
        <label class="field__label" {...{ for: id }}>
          <uai-typo variant="caption" bold="semibold" tag="span" margin={false}>
            {label}
          </uai-typo>
        </label>
        <input
          id={id}
          class="field__input"
          part="date-input"
          type="text"
          inputMode="numeric"
          autocomplete="off"
          maxLength={regionalDateFormat().placeholder.length}
          placeholder={regionalDateFormat().placeholder}
          value={this.fieldText(edge)}
          aria-invalid={invalid ? 'true' : null}
          data-test={dataTest}
          onInput={(event) => this.onTyped(edge, event as InputEvent)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              this.apply();
            }
          }}
        />
      </div>
    );
  }

  private renderMonth(offset: number) {
    const language = this.languageValue;
    const month = addMonths(this.shownMonth, offset);
    const { year, month: monthIndex } = parseIso(month);
    const min = parseIso(this.min);
    const max = parseIso(this.max);
    const last = this.monthsShown - 1;
    const position = this.view === 'days' ? year * 12 + monthIndex : year;
    const limit = (date: { year: number; month: number }) => (this.view === 'days' ? date.year * 12 + date.month : date.year);
    const atMin = !!min && (this.view === 'years' ? this.firstYear <= min.year : position - offset <= limit(min));
    const atMax =
      !!max && (this.view === 'years' ? this.firstYear + YEARS_PER_PAGE - 1 >= max.year : position + (last - offset) >= limit(max));
    return (
      <div class="month">
        <CalendarHeader
          year={year}
          month={monthIndex}
          view={this.view}
          language={language}
          showPrevious={offset === 0}
          showNext={offset === last}
          disablePrevious={atMin}
          disableNext={atMax}
          onPrevious={() => (this.view === 'years' ? ((this.firstYear -= YEARS_PER_PAGE), (this.slide = 'previous')) : this.turn(this.view === 'months' ? -12 : -1))}
          onNext={() => (this.view === 'years' ? ((this.firstYear += YEARS_PER_PAGE), (this.slide = 'next')) : this.turn(this.view === 'months' ? 12 : 1))}
          onView={(view) => this.onView(view, addMonths(month, -offset))}
          dataTest={{ previous: this.dtButtonPrev, next: this.dtButtonNext, month: this.dtSelectMonth, year: this.dtSelectYear }}
        />
      </div>
    );
  }

  private renderBody(offset: number) {
    const language = this.languageValue;
    const month = addMonths(this.shownMonth, offset);
    const { year, month: monthIndex } = parseIso(month);
    const texts = datepickerTexts(language);
    const edge: Edge = offset === 0 ? 'start' : 'end';
    const key =
      this.view === 'years' ? `years-${this.firstYear}` : this.view === 'months' ? `months-${year}` : `days-${month}`;
    return (
      <div class="month__body">
        {this.renderField(
          edge,
          this.isPeriod ? (edge === 'start' ? texts.start : texts.end) : texts.date,
          edge === 'start' ? this.dtInputStart : this.dtInputEnd,
        )}
        <div key={key} class={{ calendar__body: true, [`calendar__body--${this.slide}`]: !!this.slide }}>
          {this.view === 'days' ? (
            <CalendarDays
              year={year}
              month={monthIndex}
              language={language}
              focused={this.focusedDate}
              min={this.min ?? undefined}
              max={this.max ?? undefined}
              idPrefix={`${this.baseId}-day`}
              isSelected={(iso) => iso === this.draftStart || iso === this.draftEnd}
              rangeOf={this.rangeOf}
              onPick={this.pick}
              onKeyDown={this.onDayKeyDown}
              onHover={(iso) => {
                if (this.isPeriod && this.draftStart && !this.draftEnd) this.hovered = iso;
              }}
            />
          ) : (
            <CalendarList
              kind={this.view}
              year={year}
              month={monthIndex}
              language={language}
              min={this.min ?? undefined}
              max={this.max ?? undefined}
              firstYear={this.firstYear}
              onPick={(value) => (this.view === 'months' ? this.pickMonth(value, offset) : this.pickYear(value, offset))}
            />
          )}
        </div>
      </div>
    );
  }

  private renderPanel() {
    if (!this.isOpen) return null;
    const texts = datepickerTexts(this.languageValue);
    const offsets = this.isPeriod ? [0, 1] : [0];
    const variant = (Object.keys(BANNER_ICONS) as string[]).includes(this.variantBanner) ? this.variantBanner : 'warning';
    return [
      <div class="panel__months">
        {offsets.map((offset) => (
          <div class="panel__column">
            {this.renderMonth(offset)}
            {this.renderBody(offset)}
          </div>
        ))}
      </div>,
      this.message && (
        <div class={`panel__message panel__message--${variant}`} part="message" role="status">
          <uai-icon name={BANNER_ICONS[variant]} size="small"></uai-icon>
          <uai-typo variant="caption" tag="span" margin={false}>
            {this.message}
          </uai-typo>
        </div>
      ),
      <div class="panel__footer">
        <uai-button variant="outline" color="content" size="medium" data-test={this.dtButtonClear} onUaiClick={this.reset}>
          {texts.reset}
        </uai-button>
        <uai-button
          variant="solid"
          color="primary"
          size="medium"
          data-test={this.dtButtonConfirm}
          disabled={!this.canApply}
          onUaiClick={this.apply}
        >
          {texts.apply}
        </uai-button>
      </div>,
    ];
  }

  render() {
    const disabled = this.isDisabled;
    const texts = datepickerTexts(this.languageValue);
    const label = this.label ?? texts.label;
    const start = this.startValue;
    const end = this.endValue;
    const shown = start ? (end ? `${isoToDisplay(start)} – ${isoToDisplay(end)}` : isoToDisplay(start)) : '';
    const placeholder =
      this.placeholder ??
      (this.isPeriod ? `${regionalDateFormat().placeholder} – ${regionalDateFormat().placeholder}` : regionalDateFormat().placeholder);
    const message = this.danger ? this.errorMessage : this.helperMessage;
    const panelId = `${this.baseId}-panel`;

    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
        class={{
          [`uai-datepicker--size-${this.sizeValue}`]: true,
          'uai-datepicker--danger': this.danger,
          'uai-datepicker--disabled': disabled,
          'uai-datepicker--open': this.isOpen,
          'uai-datepicker--period': this.isPeriod,
        }}
      >
        <div class="input">
          {label && (
            <label class="input__label" {...{ for: `${this.baseId}-trigger` }}>
              <uai-typo variant="caption" bold="semibold" tag="span" margin={false}>
                {label}
              </uai-typo>
            </label>
          )}
          <button
            id={`${this.baseId}-trigger`}
            type="button"
            ref={(trigger) => (this.trigger = trigger)}
            class="input__control"
            part="input-container"
            aria-haspopup="dialog"
            aria-expanded={this.isOpen ? 'true' : 'false'}
            aria-controls={panelId}
            aria-label={this.ariaLabel || null}
            aria-invalid={this.danger ? 'true' : null}
            aria-describedby={message ? `${this.baseId}-message` : null}
            disabled={disabled}
            data-test={this.dtOutzone}
            onClick={() => (this.isOpen ? this.closePanel() : this.openPanel(false))}
            onKeyDown={(event) => {
              if (event.key === 'ArrowDown') {
                event.preventDefault();
                this.openPanel(true);
              }
            }}
          >
            <uai-typo
              class={{ input__value: true, 'input__value--placeholder': !shown }}
              variant="body-base"
              tag="span"
              margin={false}
            >
              {shown || placeholder}
            </uai-typo>
            {this.danger && <uai-icon class="input__feedback" name="error" theme="outline" size="medium"></uai-icon>}
            <uai-icon class="input__icon" name="calendar" size="medium" aria-hidden="true"></uai-icon>
          </button>
          {message && (
            <div id={`${this.baseId}-message`} class="input__message" part="input__message">
              <uai-typo variant="caption" tag="span" margin={false}>
                {message}
              </uai-typo>
            </div>
          )}
        </div>
        {/* A press on the panel keeps the focus where it is, except on its controls. */}
        <div
          id={panelId}
          ref={(panel) => (this.panel = panel)}
          class="panel"
          part="panel"
          role="dialog"
          aria-label={texts.dialog}
          onPointerDown={(event) => {
            if (!(event.target as HTMLElement)?.closest?.('button, input, uai-button')) event.preventDefault();
          }}
          onPointerLeave={() => (this.hovered = null)}
        >
          {this.renderPanel()}
        </div>
      </Host>
    );
  }
}
