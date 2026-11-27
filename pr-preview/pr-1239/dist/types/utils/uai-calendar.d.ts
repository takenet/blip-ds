/**
 * Internal calendar primitive for the UAI date fields (uai-input-date, uai-datepicker). Not a public component: it
 * holds the date math on ISO YYYY-MM-DD strings, the texts of each language (from Intl) and the functional
 * components that draw the header, the day grid and the month and year pickers. Styles come from the
 * `uai-calendar` mixin in src/globals/_uai-calendar.scss. Weeks start on Sunday, as in the UAI Core calendar.
 */
import { FunctionalComponent } from '../stencil-public-runtime';
export type UaiCalendarLanguage = 'pt_BR' | 'en_US' | 'es_ES';
export type UaiCalendarView = 'days' | 'months' | 'years';
/** How a day looks in a period: its ends, the days between them, or alone. */
export type UaiCalendarDayRange = 'start' | 'end' | 'between' | null;
export declare const YEARS_PER_PAGE = 12;
interface CalendarTexts {
    previousMonth: string;
    nextMonth: string;
    chooseMonth: string;
    chooseYear: string;
    previousYears: string;
    nextYears: string;
}
export declare const calendarTexts: (language: UaiCalendarLanguage) => CalendarTexts;
export declare function toIso(year: number, month: number, day: number): string;
/** Year, month (0 to 11) and day of an ISO date, or null when it is not one. */
export declare function parseIso(iso: string | null | undefined): {
    year: number;
    month: number;
    day: number;
} | null;
export declare const daysInMonth: (year: number, month: number) => number;
/** The ISO date a number of days away. */
export declare function addDays(iso: string, days: number): string;
/** The same day a number of months away, kept within the length of the target month (31 Jan + 1 is 28/29 Feb). */
export declare function addMonths(iso: string, months: number): string;
/** Today in the person's time zone, as ISO. */
export declare function todayIso(): string;
/** The ISO date within min and max (both optional). */
export declare function clampIso(iso: string, min?: string | null, max?: string | null): string;
export declare const outOfRange: (iso: string, min?: string | null, max?: string | null) => boolean;
/** The weeks of a month, Sunday first: each cell is an ISO date, or null outside the month. */
export declare function monthWeeks(year: number, month: number): (string | null)[][];
/** One-letter weekday names, Sunday first ("D S T Q Q S S" in pt_BR). */
export declare function weekdayNames(language: UaiCalendarLanguage): {
    short: string;
    long: string;
}[];
/** Month names: short ("Dez") for the header and long ("dezembro") for screen readers. */
export declare function monthNames(language: UaiCalendarLanguage): {
    short: string;
    long: string;
}[];
/** The full date read by screen readers and shown in the day's title, such as "quarta-feira, 15 de janeiro de 2026". */
export declare function longDate(iso: string, language: UaiCalendarLanguage): string;
/**
 * The date a key moves to in the day grid, as in the WAI-ARIA date picker: arrows by a day or a week, Home and
 * End to the start and end of the week, PageUp and PageDown by a month (with Shift, by a year). Null for other keys.
 */
export declare function dateForKey(iso: string, event: KeyboardEvent): string | null;
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
    dataTest?: {
        previous?: string;
        next?: string;
        month?: string;
        year?: string;
    };
}
/** The arrows and the month and year buttons; the month and year buttons switch to their pickers and back. */
export declare const CalendarHeader: FunctionalComponent<CalendarHeaderProps>;
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
export declare const CalendarDays: FunctionalComponent<CalendarDaysProps>;
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
export declare const CalendarList: FunctionalComponent<CalendarListProps>;
export {};
