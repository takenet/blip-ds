export type UaiInputTimeLanguage = 'pt_BR' | 'en_US' | 'es_ES';
interface TimeLocale {
    label: string;
    picker: string;
    hours: string;
    minutes: string;
    required: string;
    time: string;
    min: (time: string) => string;
    max: (time: string) => string;
}
export declare const timeLocale: (language: UaiInputTimeLanguage) => TimeLocale;
/** True when the text is a time of day as HH:mm, from 00:00 to 23:59. */
export declare function isTime(text: string | null | undefined): boolean;
/**
 * The digits a keystroke leaves, as far as they can still be a time of day: a first digit above 2, an hour above 23
 * or a minute tens above 5 is refused, and the previous digits stay.
 */
export declare function acceptDigits(typed: string, previous: string): string;
/** The digits as shown in the field: HH:mm, with the colon once the hour is complete. */
export declare function groupTime(digits: string): string;
/** HH:mm for four digits that make a time, or '' while incomplete. */
export declare function digitsToTime(digits: string): string;
/** Two digits, as hours and minutes are shown: 9 is "09". */
export declare function pad(value: number): string;
export {};
