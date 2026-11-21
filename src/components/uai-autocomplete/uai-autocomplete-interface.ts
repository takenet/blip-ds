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

const TERMS: Record<UaiAutocompleteLanguage, AutocompleteTerms> = {
  pt_BR: {
    selected: (count) => `${count} selecionados`,
    allSelected: 'Selecionar todos',
    loading: 'Carregando…',
    empty: 'Nenhum resultado',
    clear: 'Limpar',
    required: 'Selecione uma opção.',
  },
  en_US: {
    selected: (count) => `${count} selected`,
    allSelected: 'Select all',
    loading: 'Loading…',
    empty: 'No results',
    clear: 'Clear',
    required: 'Select an option.',
  },
  es_ES: {
    selected: (count) => `${count} seleccionados`,
    allSelected: 'Seleccionar todos',
    loading: 'Cargando…',
    empty: 'Sin resultados',
    clear: 'Limpiar',
    required: 'Seleccione una opción.',
  },
};

export const autocompleteTerms = (language: UaiAutocompleteLanguage): AutocompleteTerms => TERMS[language];

/** Text without accents and in lower case, so "São" matches "sao". */
export const normalize = (text: string) =>
  String(text ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
