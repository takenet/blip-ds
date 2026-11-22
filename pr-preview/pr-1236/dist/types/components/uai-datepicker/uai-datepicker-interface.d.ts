export type UaiDatepickerType = 'single' | 'period';
export type UaiDatepickerLanguage = 'pt_BR' | 'en_US' | 'es_ES';
export type UaiDatepickerPosition = 'auto' | 'top' | 'bottom' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
export type UaiDatepickerBannerVariant = 'system' | 'info' | 'success' | 'warning' | 'error';
export interface UaiDatepickerConclude {
    startDate: string | null;
    endDate?: string | null;
}
interface DatepickerTexts {
    label: string;
    open: string;
    dialog: string;
    date: string;
    start: string;
    end: string;
    reset: string;
    apply: string;
    invalid: string;
}
export declare const datepickerTexts: (language: UaiDatepickerLanguage) => DatepickerTexts;
export {};
