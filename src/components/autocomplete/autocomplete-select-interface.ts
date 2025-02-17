/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AutocompleteOption {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  label: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bulkOption?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  status?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
