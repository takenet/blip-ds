const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;
const LENGTHS = { day: 2, month: 2, year: 4 };
const LOCALES = {
    pt_BR: {
        label: 'Data',
        calendar: 'Abrir calendário',
        required: 'Informe a data.',
        date: 'Informe uma data válida.',
        min: (date) => `Informe uma data a partir de ${date}.`,
        max: (date) => `Informe uma data até ${date}.`,
    },
    en_US: {
        label: 'Date',
        calendar: 'Open calendar',
        required: 'Enter the date.',
        date: 'Enter a valid date.',
        min: (date) => `Enter a date on or after ${date}.`,
        max: (date) => `Enter a date on or before ${date}.`,
    },
    es_ES: {
        label: 'Fecha',
        calendar: 'Abrir calendario',
        required: 'Ingrese la fecha.',
        date: 'Ingrese una fecha válida.',
        min: (date) => `Ingrese una fecha a partir del ${date}.`,
        max: (date) => `Ingrese una fecha hasta el ${date}.`,
    },
};
export const dateLocale = (language) => LOCALES[language];
export function regionalDateFormat(locale = typeof window === 'undefined' ? undefined : window.navigator.language) {
    const parts = new Intl.DateTimeFormat(locale, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        calendar: 'gregory',
        numberingSystem: 'latn',
    }).formatToParts(new Date(2026, 11, 25));
    const order = parts
        .map((part) => part.type)
        .filter((part) => part === 'day' || part === 'month' || part === 'year');
    const separator = parts.find((part) => part.type === 'literal').value;
    const labels = { day: 'DD', month: 'MM', year: 'YYYY' };
    return { order, separator, placeholder: order.map((part) => labels[part]).join(separator) };
}
/** True when the text is an ISO YYYY-MM-DD date that exists in the calendar. */
export function isIsoDate(text) {
    const match = ISO_DATE.exec(text || '');
    if (!match)
        return false;
    const [year, month, day] = match.slice(1).map(Number);
    const date = new Date(Date.UTC(year, month - 1, day));
    return year > 0 && date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}
/** Groups the typed digits in the browser's regional date format. */
export function groupDigits(digits, locale) {
    const { order, separator } = regionalDateFormat(locale);
    const groups = [];
    let rest = digits;
    for (const part of order) {
        if (!rest)
            break;
        groups.push(rest.slice(0, LENGTHS[part]));
        rest = rest.slice(LENGTHS[part]);
    }
    return groups.join(separator);
}
/** ISO date for eight typed digits, or '' when they are incomplete or name a day that does not exist. */
export function displayToIso(digits, locale) {
    if (digits.length !== 8)
        return '';
    const parts = {};
    let offset = 0;
    for (const part of regionalDateFormat(locale).order) {
        parts[part] = digits.slice(offset, offset + LENGTHS[part]);
        offset += LENGTHS[part];
    }
    const iso = `${parts.year}-${parts.month}-${parts.day}`;
    return isIsoDate(iso) ? iso : '';
}
/** Date in the browser's regional format for a valid ISO date, or ''. */
export function isoToDisplay(iso, locale) {
    const match = ISO_DATE.exec(iso || '');
    if (!match || !isIsoDate(iso))
        return '';
    const parts = { year: match[1], month: match[2], day: match[3] };
    const { order, separator } = regionalDateFormat(locale);
    return order.map((part) => parts[part]).join(separator);
}
