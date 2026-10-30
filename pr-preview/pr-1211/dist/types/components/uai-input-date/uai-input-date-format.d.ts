export type UaiInputDateLanguage = 'pt_BR' | 'en_US' | 'es_ES';
type DatePart = 'day' | 'month' | 'year';
interface DateLocale {
    label: string;
    calendar: string;
    required: string;
    date: string;
    min: (date: string) => string;
    max: (date: string) => string;
}
export declare const dateLocale: (language: UaiInputDateLanguage) => DateLocale;
export declare function regionalDateFormat(locale?: string): {
    order: DatePart[];
    separator: string;
    placeholder: string;
};
/** True when the text is an ISO YYYY-MM-DD date that exists in the calendar. */
export declare function isIsoDate(text: string | null | undefined): boolean;
/** Groups the typed digits in the browser's regional date format. */
export declare function groupDigits(digits: string, locale?: string): string;
/** ISO date for eight typed digits, or '' when they are incomplete or name a day that does not exist. */
export declare function displayToIso(digits: string, locale?: string): string;
/** Date in the browser's regional format for a valid ISO date, or ''. */
export declare function isoToDisplay(iso: string | null | undefined, locale?: string): string;
export {};
