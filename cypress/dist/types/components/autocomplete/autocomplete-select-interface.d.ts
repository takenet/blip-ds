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
export type AutocompleteSelectType = 'text' | 'icon';
export type AutocompleteOptionsPositionType = 'auto' | 'top' | 'bottom';
