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

const TEXTS: Record<UaiDatepickerLanguage, DatepickerTexts> = {
  pt_BR: {
    label: 'Data',
    open: 'Abrir calendário',
    dialog: 'Escolher data',
    date: 'Data',
    start: 'Começa',
    end: 'Termina',
    reset: 'Redefinir',
    apply: 'Aplicar',
    invalid: 'Data fora do período permitido.',
  },
  en_US: {
    label: 'Date',
    open: 'Open calendar',
    dialog: 'Choose date',
    date: 'Date',
    start: 'Starts',
    end: 'Ends',
    reset: 'Reset',
    apply: 'Apply',
    invalid: 'Date outside the allowed period.',
  },
  es_ES: {
    label: 'Fecha',
    open: 'Abrir calendario',
    dialog: 'Elegir fecha',
    date: 'Fecha',
    start: 'Comienza',
    end: 'Termina',
    reset: 'Restablecer',
    apply: 'Aplicar',
    invalid: 'Fecha fuera del período permitido.',
  },
};

export const datepickerTexts = (language: UaiDatepickerLanguage): DatepickerTexts => TEXTS[language];
