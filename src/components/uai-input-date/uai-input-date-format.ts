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

const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;
const LENGTHS: Record<DatePart, number> = { day: 2, month: 2, year: 4 };

const LOCALES: Record<UaiInputDateLanguage, DateLocale> = {
  pt_BR: {
    order: ['day', 'month', 'year'],
    label: 'Data',
    placeholder: 'dd/mm/aaaa',
    calendar: 'Abrir calendário',
    required: 'Informe a data.',
    date: 'Informe uma data válida.',
    min: (date) => `Informe uma data a partir de ${date}.`,
    max: (date) => `Informe uma data até ${date}.`,
  },
  en_US: {
    order: ['month', 'day', 'year'],
    label: 'Date',
    placeholder: 'mm/dd/yyyy',
    calendar: 'Open calendar',
    required: 'Enter the date.',
    date: 'Enter a valid date.',
    min: (date) => `Enter a date on or after ${date}.`,
    max: (date) => `Enter a date on or before ${date}.`,
  },
  es_ES: {
    order: ['day', 'month', 'year'],
    label: 'Fecha',
    placeholder: 'dd/mm/aaaa',
    calendar: 'Abrir calendario',
    required: 'Ingrese la fecha.',
    date: 'Ingrese una fecha válida.',
    min: (date) => `Ingrese una fecha a partir del ${date}.`,
    max: (date) => `Ingrese una fecha hasta el ${date}.`,
  },
};

export const dateLocale = (language: UaiInputDateLanguage): DateLocale => LOCALES[language];

/** True when the text is an ISO YYYY-MM-DD date that exists in the calendar. */
export function isIsoDate(text: string | null | undefined): boolean {
  const match = ISO_DATE.exec(text || '');
  if (!match) return false;
  const [year, month, day] = match.slice(1).map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return year > 0 && date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}

/** Groups the typed digits with slashes in the order of the language: "25122026" -> "25/12/2026". */
export function groupDigits(digits: string, language: UaiInputDateLanguage): string {
  const groups: string[] = [];
  let rest = digits;
  for (const part of LOCALES[language].order) {
    if (!rest) break;
    groups.push(rest.slice(0, LENGTHS[part]));
    rest = rest.slice(LENGTHS[part]);
  }
  return groups.join('/');
}

/** ISO date for eight typed digits, or '' when they are incomplete or name a day that does not exist. */
export function displayToIso(digits: string, language: UaiInputDateLanguage): string {
  if (digits.length !== 8) return '';
  const parts: Partial<Record<DatePart, string>> = {};
  let offset = 0;
  for (const part of LOCALES[language].order) {
    parts[part] = digits.slice(offset, offset + LENGTHS[part]);
    offset += LENGTHS[part];
  }
  const iso = `${parts.year}-${parts.month}-${parts.day}`;
  return isIsoDate(iso) ? iso : '';
}

/** Date in the format of the language for an ISO date, or '' when the ISO text is not valid. */
export function isoToDisplay(iso: string | null | undefined, language: UaiInputDateLanguage): string {
  const match = ISO_DATE.exec(iso || '');
  if (!match || !isIsoDate(iso)) return '';
  const parts: Record<DatePart, string> = { year: match[1], month: match[2], day: match[3] };
  return LOCALES[language].order.map((part) => parts[part]).join('/');
}
