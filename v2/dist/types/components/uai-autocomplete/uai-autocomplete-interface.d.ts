export type UaiAutocompleteSelectionType = 'single' | 'multiple';
export type UaiAutocompleteOptionsPosition = 'auto' | 'top' | 'bottom';
export type UaiAutocompleteLanguage = 'pt_BR' | 'en_US' | 'es_ES';
export interface UaiAutocompleteOption {
    value: string;
    label: string;
    /** UaiIcon name shown before the label. */
    icon?: string;
    disabled?: boolean;
    /** With selectionType "multiple": the option starts checked. */
    checked?: boolean;
}
export interface UaiAutocompleteChange {
    value: string | null;
}
export interface UaiAutocompleteSelectedChange {
    value: string | null;
    label: string | null;
}
export interface UaiAutocompleteMultiselectedChange {
    value: UaiAutocompleteOption[];
}
interface AutocompleteTerms {
    selected: (count: number) => string;
    allSelected: string;
    loading: string;
    empty: string;
    clear: string;
    required: string;
}
export declare const autocompleteTerms: (language: UaiAutocompleteLanguage) => AutocompleteTerms;
/** Text without accents and in lower case, so "São" matches "sao". */
export declare const normalize: (text: string) => string;
export {};
