export interface AutocompleteOption {
    value: string;
    label: any;
    bulkOption?: any;
    status?: any;
    checked?: boolean;
}
export interface AutocompleteChangeEventDetail {
    value: string | string[] | undefined | null;
    code?: string;
}
export interface AutocompleteSelectedChangeEventDetail {
    value: string | string[] | undefined | null;
    code?: string;
}
export interface AutocompleteMultiSelectedChangeEventDetail {
    value: AutocompleteOption[] | undefined | null;
}
export type AutocompleteSelectType = 'text' | 'icon';
export type AutocompleteOptionsPositionType = 'auto' | 'top' | 'bottom';
