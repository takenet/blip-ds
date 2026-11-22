/**
 * Internal calendar primitive for the UAI date fields (uai-input-date, uai-datepicker). Not a public component: it
 * holds the date math on ISO YYYY-MM-DD strings, the texts of each language (from Intl) and the functional
 * components that draw the header, the day grid and the month and year pickers. Styles come from the
 * `uai-calendar` mixin in src/globals/_uai-calendar.scss. Weeks start on Sunday, as in the UAI Core calendar.
 */
import { FunctionalComponent, h } from '@stencil/core';

export type UaiCalendarLanguage = 'pt_BR' | 'en_US' | 'es_ES';
export type UaiCalendarView = 'days' | 'months' | 'years';
/** How a day looks in a period: its ends, the days between them, or alone. */
export type UaiCalendarDayRange = 'start' | 'end' | 'between' | null;

const LOCALES: Record<UaiCalendarLanguage, string> = { pt_BR: 'pt-BR', en_US: 'en-US', es_ES: 'es-ES' };
const ISO = /^(\d{4})-(\d{2})-(\d{2})$/;
export const YEARS_PER_PAGE = 12;

interface CalendarTexts {
  previousMonth: string;
  nextMonth: string;
  chooseMonth: string;
  chooseYear: string;
  previousYears: string;
  nextYears: string;
}

const TEXTS: Record<UaiCalendarLanguage, CalendarTexts> = {
  pt_BR: {
    previousMonth: 'Mês anterior',
    nextMonth: 'Próximo mês',
    chooseMonth: 'Escolher mês',
    chooseYear: 'Escolher ano',
    previousYears: 'Anos anteriores',
    nextYears: 'Próximos anos',
  },
  en_US: {
    previousMonth: 'Previous month',
    nextMonth: 'Next month',
    chooseMonth: 'Choose month',
    chooseYear: 'Choose year',
    previousYears: 'Previous years',
    nextYears: 'Next years',
  },
  es_ES: {
    previousMonth: 'Mes anterior',
    nextMonth: 'Mes siguiente',
    chooseMonth: 'Elegir mes',
    chooseYear: 'Elegir año',
    previousYears: 'Años anteriores',
    nextYears: 'Años siguientes',
  },
};

export const calendarTexts = (language: UaiCalendarLanguage): CalendarTexts => TEXTS[language];

const pad = (value: number) => String(value).padStart(2, '0');
const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

// ---- dates -----------------------------------------------------------------------------------

export function toIso(year: number, month: number, day: number): string {
  return `${String(year).padStart(4, '0')}-${pad(month + 1)}-${pad(day)}`;
}

/** Year, month (0 to 11) and day of an ISO date, or null when it is not one. */
export function parseIso(iso: string | null | undefined): { year: number; month: number; day: number } | null {
  const match = ISO.exec(iso || '');
  if (!match) return null;
  const [year, month, day] = match.slice(1).map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return null;
  return { year, month: month - 1, day };
}

export const daysInMonth = (year: number, month: number) => new Date(Date.UTC(year, month + 1, 0)).getUTCDate();

/** The ISO date a number of days away. */
export function addDays(iso: string, days: number): string {
  const { year, month, day } = parseIso(iso);
  const date = new Date(Date.UTC(year, month, day + days));
  return toIso(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}

/** The same day a number of months away, kept within the length of the target month (31 Jan + 1 is 28/29 Feb). */
export function addMonths(iso: string, months: number): string {
  const { year, month, day } = parseIso(iso);
  const target = new Date(Date.UTC(year, month + months, 1));
  const targetYear = target.getUTCFullYear();
  const targetMonth = target.getUTCMonth();
  return toIso(targetYear, targetMonth, Math.min(day, daysInMonth(targetYear, targetMonth)));
}

/** Today in the person's time zone, as ISO. */
export function todayIso(): string {
  const now = new Date();
  return toIso(now.getFullYear(), now.getMonth(), now.getDate());
}

/** The ISO date within min and max (both optional). */
export function clampIso(iso: string, min?: string | null, max?: string | null): string {
  if (parseIso(min) && iso < min) return min;
  if (parseIso(max) && iso > max) return max;
  return iso;
}

export const outOfRange = (iso: string, min?: string | null, max?: string | null) =>
  (!!parseIso(min) && iso < min) || (!!parseIso(max) && iso > max);

/** The weeks of a month, Sunday first: each cell is an ISO date, or null outside the month. */
export function monthWeeks(year: number, month: number): (string | null)[][] {
  const first = new Date(Date.UTC(year, month, 1)).getUTCDay();
  const cells: (string | null)[] = Array.from({ length: first }, () => null);
  for (let day = 1; day <= daysInMonth(year, month); day++) cells.push(toIso(year, month, day));
  while (cells.length % 7) cells.push(null);
  const weeks: (string | null)[][] = [];
  for (let index = 0; index < cells.length; index += 7) weeks.push(cells.slice(index, index + 7));
  return weeks;
}

// ---- texts -----------------------------------------------------------------------------------

/** One-letter weekday names, Sunday first ("D S T Q Q S S" in pt_BR). */
export function weekdayNames(language: UaiCalendarLanguage): { short: string; long: string }[] {
  const locale = LOCALES[language];
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(Date.UTC(2026, 1, 1 + index)); // 1 Feb 2026 is a Sunday.
    const short = new Intl.DateTimeFormat(locale, { weekday: 'narrow', timeZone: 'UTC' }).format(date);
    const long = new Intl.DateTimeFormat(locale, { weekday: 'long', timeZone: 'UTC' }).format(date);
    return { short: short.toUpperCase(), long };
  });
}

/** Month names: short ("Dez") for the header and long ("dezembro") for screen readers. */
export function monthNames(language: UaiCalendarLanguage): { short: string; long: string }[] {
  const locale = LOCALES[language];
  return Array.from({ length: 12 }, (_, month) => {
    const date = new Date(Date.UTC(2026, month, 1));
    const short = new Intl.DateTimeFormat(locale, { month: 'short', timeZone: 'UTC' }).format(date).replace('.', '');
    const long = new Intl.DateTimeFormat(locale, { month: 'long', timeZone: 'UTC' }).format(date);
    return { short: capitalize(short), long };
  });
}

/** The full date read by screen readers and shown in the day's title, such as "quarta-feira, 15 de janeiro de 2026". */
export function longDate(iso: string, language: UaiCalendarLanguage): string {
  const { year, month, day } = parseIso(iso);
  return new Intl.DateTimeFormat(LOCALES[language], { dateStyle: 'full', timeZone: 'UTC' }).format(
    new Date(Date.UTC(year, month, day)),
  );
}

// ---- keyboard --------------------------------------------------------------------------------

/**
 * The date a key moves to in the day grid, as in the WAI-ARIA date picker: arrows by a day or a week, Home and
 * End to the start and end of the week, PageUp and PageDown by a month (with Shift, by a year). Null for other keys.
 */
export function dateForKey(iso: string, event: KeyboardEvent): string | null {
  const { year, month, day } = parseIso(iso);
  const weekday = new Date(Date.UTC(year, month, day)).getUTCDay();
  switch (event.key) {
    case 'ArrowLeft':
      return addDays(iso, -1);
    case 'ArrowRight':
      return addDays(iso, 1);
    case 'ArrowUp':
      return addDays(iso, -7);
    case 'ArrowDown':
      return addDays(iso, 7);
    case 'Home':
      return addDays(iso, -weekday);
    case 'End':
      return addDays(iso, 6 - weekday);
    case 'PageUp':
      return addMonths(iso, event.shiftKey ? -12 : -1);
    case 'PageDown':
      return addMonths(iso, event.shiftKey ? 12 : 1);
    default:
      return null;
  }
}

// ---- views -----------------------------------------------------------------------------------

export interface CalendarHeaderProps {
  year: number;
  month: number;
  view: UaiCalendarView;
  language: UaiCalendarLanguage;
  /** Hidden (kept as space) when the other month of a period shows the arrow. */
  showPrevious?: boolean;
  showNext?: boolean;
  disablePrevious?: boolean;
  disableNext?: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onView: (view: UaiCalendarView) => void;
  /** Test ids of the arrows and the month and year buttons. */
  dataTest?: { previous?: string; next?: string; month?: string; year?: string };
}

/** The arrows and the month and year buttons; the month and year buttons switch to their pickers and back. */
export const CalendarHeader: FunctionalComponent<CalendarHeaderProps> = (props) => {
  const texts = calendarTexts(props.language);
  const months = monthNames(props.language);
  const years = props.view === 'years';
  const arrow = (side: 'previous' | 'next', show = true, disabled = false) =>
    show ? (
      <button
        type="button"
        class="calendar__arrow"
        part="calendar-arrow"
        aria-label={side === 'previous' ? (years ? texts.previousYears : texts.previousMonth) : years ? texts.nextYears : texts.nextMonth}
        data-test={props.dataTest?.[side] ?? null}
        disabled={disabled}
        onClick={side === 'previous' ? props.onPrevious : props.onNext}
      >
        <uai-icon name={side === 'previous' ? 'arrow-left' : 'arrow-right'} size="medium"></uai-icon>
      </button>
    ) : (
      <span class="calendar__arrow calendar__arrow--hidden" aria-hidden="true"></span>
    );
  const picker = (kind: 'months' | 'years', label: string, name: string) => (
    <button
      type="button"
      class={{ calendar__picker: true, 'calendar__picker--open': props.view === kind }}
      part="calendar-picker"
      aria-label={`${name}: ${label}`}
      data-test={props.dataTest?.[kind === 'months' ? 'month' : 'year'] ?? null}
      aria-expanded={props.view === kind ? 'true' : 'false'}
      onClick={() => props.onView(props.view === kind ? 'days' : kind)}
    >
      <uai-typo variant="body-base" tag="span" margin={false}>
        {label}
      </uai-typo>
      <uai-icon name="arrow-down" size="small"></uai-icon>
    </button>
  );
  return (
    <div class="calendar__header">
      {arrow('previous', props.showPrevious ?? true, props.disablePrevious)}
      <div class="calendar__pickers">
        {picker('months', months[props.month].short, texts.chooseMonth)}
        {picker('years', String(props.year), texts.chooseYear)}
      </div>
      {arrow('next', props.showNext ?? true, props.disableNext)}
    </div>
  );
};

export interface CalendarDaysProps {
  year: number;
  month: number;
  language: UaiCalendarLanguage;
  /** The day that takes the focus (roving tabindex). */
  focused: string;
  min?: string;
  max?: string;
  /** Ids are built from it: `${idPrefix}-${iso}`. */
  idPrefix: string;
  isSelected: (iso: string) => boolean;
  rangeOf?: (iso: string) => UaiCalendarDayRange;
  onPick: (iso: string) => void;
  onKeyDown: (event: KeyboardEvent, iso: string) => void;
  onHover?: (iso: string) => void;
}

/** The weekday names and the days of the month, as an ARIA grid of buttons. */
export const CalendarDays: FunctionalComponent<CalendarDaysProps> = (props) => {
  const weekdays = weekdayNames(props.language);
  const months = monthNames(props.language);
  const today = todayIso();
  // A period that goes on before or after the month fills the empty cells at its start or end.
  const firstRange = props.rangeOf?.(toIso(props.year, props.month, 1)) ?? null;
  const lastRange = props.rangeOf?.(toIso(props.year, props.month, daysInMonth(props.year, props.month))) ?? null;
  const fillsBefore = firstRange === 'between' || firstRange === 'end';
  const fillsAfter = lastRange === 'between' || lastRange === 'start';
  return (
    <table class="calendar__grid" role="grid" aria-label={`${months[props.month].long} ${props.year}`}>
      <thead>
        <tr>
          {weekdays.map((weekday) => (
            <th class="calendar__weekday" scope="col" abbr={weekday.long}>
              <uai-typo variant="body-base" tag="span" margin={false}>
                {weekday.short}
              </uai-typo>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {monthWeeks(props.year, props.month).map((week, row) => (
          <tr>
            {week.map((iso, index) => {
              if (!iso) {
                const filled = row === 0 ? fillsBefore : fillsAfter;
                return (
                  <td
                    class={{
                      calendar__cell: true,
                      'calendar__cell--between': filled,
                      'calendar__cell--week-start': index === 0,
                      'calendar__cell--week-end': index === 6,
                    }}
                    role="gridcell"
                  ></td>
                );
              }
              const range = props.rangeOf?.(iso) ?? null;
              const selected = props.isSelected(iso);
              const disabled = outOfRange(iso, props.min, props.max);
              return (
                <td
                  class={{
                    calendar__cell: true,
                    [`calendar__cell--${range}`]: !!range,
                    'calendar__cell--week-start': index === 0 || (!week[index - 1] && !fillsBefore),
                    'calendar__cell--week-end': index === 6 || (!week[index + 1] && !fillsAfter),
                  }}
                  role="gridcell"
                  aria-selected={selected ? 'true' : 'false'}
                >
                  <button
                    type="button"
                    id={`${props.idPrefix}-${iso}`}
                    class={{
                      calendar__day: true,
                      'calendar__day--selected': selected,
                      'calendar__day--today': iso === today,
                    }}
                    part="calendar-day"
                    data-iso={iso}
                    tabindex={iso === props.focused ? '0' : '-1'}
                    aria-label={longDate(iso, props.language)}
                    aria-current={iso === today ? 'date' : null}
                    aria-disabled={disabled ? 'true' : null}
                    onClick={() => !disabled && props.onPick(iso)}
                    onKeyDown={(event) => props.onKeyDown(event, iso)}
                    onPointerEnter={() => props.onHover?.(iso)}
                  >
                    <uai-typo variant="body-base" tag="span" margin={false}>
                      {parseIso(iso).day}
                    </uai-typo>
                  </button>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export interface CalendarListProps {
  kind: 'months' | 'years';
  year: number;
  month: number;
  language: UaiCalendarLanguage;
  min?: string;
  max?: string;
  /** The first year of the page of years. */
  firstYear: number;
  onPick: (value: number) => void;
}

/** The 12 months, or a page of 12 years, to jump to; out of min and max they are disabled. */
export const CalendarList: FunctionalComponent<CalendarListProps> = (props) => {
  const minDate = parseIso(props.min);
  const maxDate = parseIso(props.max);
  const items =
    props.kind === 'months'
      ? monthNames(props.language).map((name, month) => ({
          value: month,
          label: name.short,
          long: `${name.long} ${props.year}`,
          current: month === props.month,
          disabled:
            (minDate && (props.year < minDate.year || (props.year === minDate.year && month < minDate.month))) ||
            (maxDate && (props.year > maxDate.year || (props.year === maxDate.year && month > maxDate.month))),
        }))
      : Array.from({ length: YEARS_PER_PAGE }, (_, index) => {
          const year = props.firstYear + index;
          return {
            value: year,
            label: String(year),
            long: String(year),
            current: year === props.year,
            disabled: (minDate && year < minDate.year) || (maxDate && year > maxDate.year),
          };
        });
  return (
    <div class="calendar__list" role="group" aria-label={calendarTexts(props.language)[props.kind === 'months' ? 'chooseMonth' : 'chooseYear']}>
      {items.map((item) => (
        <button
          type="button"
          class={{ calendar__option: true, 'calendar__option--current': item.current }}
          part="calendar-option"
          aria-label={item.long}
          aria-pressed={item.current ? 'true' : 'false'}
          disabled={!!item.disabled}
          onClick={() => props.onPick(item.value)}
        >
          <uai-typo variant="body-base" tag="span" margin={false}>
            {item.label}
          </uai-typo>
        </button>
      ))}
    </div>
  );
};
