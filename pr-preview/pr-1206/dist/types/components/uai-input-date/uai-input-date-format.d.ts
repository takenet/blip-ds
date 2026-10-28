export type UaiInputDateLanguage = 'pt_BR' | 'en_US' | 'es_ES';
type DatePart = 'day' | 'month' | 'year';
interface DateLocale {
    order: DatePart[];
    label: string;
    placeholder: string;
    calendar: string;
    required: string;
    date: string;
    min: (date: string) => string;
    max: (date: string) => string;
}
export declare const dateLocale: (language: UaiInputDateLanguage) => DateLocale;
/** True when the text is an ISO YYYY-MM-DD date that exists in the calendar. */
export declare function isIsoDate(text: string | null | undefined): boolean;
/** Groups the typed digits with slashes in the order of the language: "25122026" -> "25/12/2026". */
export declare function groupDigits(digits: string, language: UaiInputDateLanguage): string;
/** ISO date for eight typed digits, or '' when they are incomplete or name a day that does not exist. */
export declare function displayToIso(digits: string, language: UaiInputDateLanguage): string;
/** Date in the format of the language for an ISO date, or '' when the ISO text is not valid. */
export declare function isoToDisplay(iso: string | null | undefined, language: UaiInputDateLanguage): string;
export {};
