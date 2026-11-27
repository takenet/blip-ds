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

const TIME = /^([01]\d|2[0-3]):([0-5]\d)$/;

const LOCALES: Record<UaiInputTimeLanguage, TimeLocale> = {
  pt_BR: {
    label: 'Horário',
    picker: 'Escolher horário',
    hours: 'Horas',
    minutes: 'Minutos',
    required: 'Informe o horário.',
    time: 'Informe um horário de 00:00 a 23:59.',
    min: (time) => `Informe um horário a partir de ${time}.`,
    max: (time) => `Informe um horário até ${time}.`,
  },
  en_US: {
    label: 'Time',
    picker: 'Choose time',
    hours: 'Hours',
    minutes: 'Minutes',
    required: 'Enter the time.',
    time: 'Enter a time from 00:00 to 23:59.',
    min: (time) => `Enter a time at or after ${time}.`,
    max: (time) => `Enter a time at or before ${time}.`,
  },
  es_ES: {
    label: 'Hora',
    picker: 'Elegir hora',
    hours: 'Horas',
    minutes: 'Minutos',
    required: 'Ingrese la hora.',
    time: 'Ingrese una hora de 00:00 a 23:59.',
    min: (time) => `Ingrese una hora a partir de las ${time}.`,
    max: (time) => `Ingrese una hora hasta las ${time}.`,
  },
};

export const timeLocale = (language: UaiInputTimeLanguage): TimeLocale => LOCALES[language];

/** True when the text is a time of day as HH:mm, from 00:00 to 23:59. */
export function isTime(text: string | null | undefined): boolean {
  return TIME.test(text || '');
}

/**
 * The digits a keystroke leaves, as far as they can still be a time of day: a first digit above 2, an hour above 23
 * or a minute tens above 5 is refused, and the previous digits stay.
 */
export function acceptDigits(typed: string, previous: string): string {
  const digits = typed.replace(/\D/g, '');
  if (
    digits.length > 4 ||
    (digits[0] && digits[0] > '2') ||
    (digits.length >= 2 && Number(digits.slice(0, 2)) > 23) ||
    (digits[2] && digits[2] > '5')
  ) {
    return previous;
  }
  return digits;
}

/** The digits as shown in the field: HH:mm, with the colon once the hour is complete. */
export function groupTime(digits: string): string {
  return digits.length > 2 ? `${digits.slice(0, 2)}:${digits.slice(2)}` : digits;
}

/** HH:mm for four digits that make a time, or '' while incomplete. */
export function digitsToTime(digits: string): string {
  const time = groupTime(digits);
  return digits.length === 4 && isTime(time) ? time : '';
}

/** Two digits, as hours and minutes are shown: 9 is "09". */
export function pad(value: number): string {
  return String(value).padStart(2, '0');
}
