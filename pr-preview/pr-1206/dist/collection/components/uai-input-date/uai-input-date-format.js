const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;
const LENGTHS = { day: 2, month: 2, year: 4 };
const LOCALES = {
    pt_BR: {
        order: ['day', 'month', 'year'],
        label: 'Data',
        placeholder: 'DD-MM-YYYY',
        calendar: 'Abrir calendário',
        required: 'Informe a data.',
        date: 'Informe uma data válida.',
        min: (date) => `Informe uma data a partir de ${date}.`,
        max: (date) => `Informe uma data até ${date}.`,
    },
    en_US: {
        order: ['day', 'month', 'year'],
        label: 'Date',
        placeholder: 'DD-MM-YYYY',
        calendar: 'Open calendar',
        required: 'Enter the date.',
        date: 'Enter a valid date.',
        min: (date) => `Enter a date on or after ${date}.`,
        max: (date) => `Enter a date on or before ${date}.`,
    },
    es_ES: {
        order: ['day', 'month', 'year'],
        label: 'Fecha',
        placeholder: 'DD-MM-YYYY',
        calendar: 'Abrir calendario',
        required: 'Ingrese la fecha.',
        date: 'Ingrese una fecha válida.',
        min: (date) => `Ingrese una fecha a partir del ${date}.`,
        max: (date) => `Ingrese una fecha hasta el ${date}.`,
    },
};
export const dateLocale = (language) => LOCALES[language];
/** True when the text is an ISO YYYY-MM-DD date that exists in the calendar. */
export function isIsoDate(text) {
    const match = ISO_DATE.exec(text || '');
    if (!match)
        return false;
    const [year, month, day] = match.slice(1).map(Number);
    const date = new Date(Date.UTC(year, month - 1, day));
    return year > 0 && date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}
/** Groups the typed digits as DD-MM-YYYY: "25122026" -> "25-12-2026". */
export function groupDigits(digits, language) {
    const groups = [];
    let rest = digits;
    for (const part of LOCALES[language].order) {
        if (!rest)
            break;
        groups.push(rest.slice(0, LENGTHS[part]));
        rest = rest.slice(LENGTHS[part]);
    }
    return groups.join('-');
}
/** ISO date for eight typed digits, or '' when they are incomplete or name a day that does not exist. */
export function displayToIso(digits, language) {
    if (digits.length !== 8)
        return '';
    const parts = {};
    let offset = 0;
    for (const part of LOCALES[language].order) {
        parts[part] = digits.slice(offset, offset + LENGTHS[part]);
        offset += LENGTHS[part];
    }
    const iso = `${parts.year}-${parts.month}-${parts.day}`;
    return isIsoDate(iso) ? iso : '';
}
/** Date as DD-MM-YYYY for an ISO date, or '' when the ISO text is not valid. */
export function isoToDisplay(iso, language) {
    const match = ISO_DATE.exec(iso || '');
    if (!match || !isIsoDate(iso))
        return '';
    const parts = { year: match[1], month: match[2], day: match[3] };
    return LOCALES[language].order.map((part) => parts[part]).join('-');
}
