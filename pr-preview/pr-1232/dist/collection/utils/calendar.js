import { monthTranslate, dayTranslate } from "../utils/languages";
export const THIS_DAY = new Date();
export const THIS_YEAR = +new Date().getFullYear();
export const THIS_MONTH = +new Date().getMonth();
export const weekDays = (language) => {
    const days = {
        Sunday: dayTranslate(language, 'sunday')[0],
        Monday: dayTranslate(language, 'monday')[0],
        Tuesday: dayTranslate(language, 'tuesday')[0],
        Wednesday: dayTranslate(language, 'wednesday')[0],
        Thursday: dayTranslate(language, 'thursday')[0],
        Friday: dayTranslate(language, 'friday')[0],
        Saturday: dayTranslate(language, 'saturday')[0],
    };
    return days;
};
export const changeMonths = (language) => [
    {
        value: 0,
        label: monthTranslate(language, 'january'),
    },
    {
        value: 1,
        label: monthTranslate(language, 'february'),
    },
    {
        value: 2,
        label: monthTranslate(language, 'march'),
    },
    {
        value: 3,
        label: monthTranslate(language, 'april'),
    },
    {
        value: 4,
        label: monthTranslate(language, 'may'),
    },
    {
        value: 5,
        label: monthTranslate(language, 'june'),
    },
    {
        value: 6,
        label: monthTranslate(language, 'july'),
    },
    {
        value: 7,
        label: monthTranslate(language, 'august'),
    },
    {
        value: 8,
        label: monthTranslate(language, 'september'),
    },
    {
        value: 9,
        label: monthTranslate(language, 'october'),
    },
    {
        value: 10,
        label: monthTranslate(language, 'november'),
    },
    {
        value: 11,
        label: monthTranslate(language, 'december'),
    },
];
export const defaultStartDate = `${THIS_DAY.getDate().toString().padStart(2, '0')}/${(THIS_DAY.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${THIS_DAY.getFullYear()}`;
export const defaultEndDate = `${THIS_DAY.getDate().toString().padStart(2, '0')}/${(THIS_DAY.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${THIS_DAY.getFullYear() + 100}`;
export const getYears = (year, startYear, endYear) => {
    const years = [];
    let minYear = startYear < year - 4 ? year - 4 : startYear;
    const maxYear = endYear > year + 6 ? year + 6 : endYear;
    while (minYear <= maxYear) {
        const newYear = {
            value: minYear,
            label: minYear.toString(),
        };
        years.push(newYear);
        minYear++;
    }
    return years;
};
export const getMonths = (year, startDate, endDate, monthList) => {
    let months = [];
    if (year == startDate.year && year == endDate.year) {
        months = monthList.slice(startDate.month, endDate.month + 1);
        return months;
    }
    if (year == startDate.year) {
        months = monthList.slice(startDate.month);
        return months;
    }
    if (year == endDate.year) {
        months = monthList.slice(0, endDate.month + 1);
        return months;
    }
    return monthList;
};
export const getDaysInMonth = (year = THIS_YEAR, month = THIS_MONTH) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
        const currentDate = new Date(date);
        const newDate = {
            date: currentDate.getDate(),
            month: currentDate.getMonth(),
            year: currentDate.getFullYear(),
            day: currentDate.getDay(),
        };
        days.push(newDate);
        date.setDate(date.getDate() + 1);
    }
    return days;
};
export const getMonthsSlide = (year = THIS_YEAR, month = THIS_MONTH) => {
    const pastCalc = {
        year: month - 1 < 0 ? year - 1 : year,
        month: month - 1 < 0 ? 11 : month - 1,
    };
    const futureCalc = {
        year: month + 1 > 11 ? year + 1 : year,
        month: month + 1 > 11 ? 0 : month + 1,
    };
    const comingCalc = {
        year: futureCalc.month + 1 > 11 ? year + 1 : year,
        month: futureCalc.month + 1 > 11 ? 0 : futureCalc.month + 1,
    };
    const pastMonth = {
        year: pastCalc.year,
        month: pastCalc.month,
        days: getDaysInMonth(pastCalc.year, pastCalc.month),
    };
    const currentMonth = {
        year: year,
        month: month,
        days: getDaysInMonth(year, month),
    };
    const futureMonth = {
        year: futureCalc.year,
        month: futureCalc.month,
        days: getDaysInMonth(futureCalc.year, futureCalc.month),
    };
    const comingMonth = {
        year: comingCalc.year,
        month: comingCalc.month,
        days: getDaysInMonth(comingCalc.year, comingCalc.month),
    };
    const array = [];
    array.push(pastMonth);
    array.push(currentMonth);
    array.push(futureMonth);
    array.push(comingMonth);
    return array;
};
export const fillDayList = (value) => {
    const stringDate = `${value.year}${value.month.toString().padStart(2, '0')}${value.date.toString().padStart(2, '0')}`;
    return stringDate;
};
export const fillDate = (value) => {
    const stringDate = `${value.getFullYear()}${value.getMonth().toString().padStart(2, '0')}${value
        .getDate()
        .toString()
        .padStart(2, '0')}`;
    return stringDate;
};
export const dateToDayList = (value) => {
    const splitDate = value.split('/');
    const date = new Date(parseFloat(splitDate[2]), parseFloat(splitDate[1]) - 1, parseFloat(splitDate[0]));
    const result = {
        date: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        day: date.getDay(),
    };
    return result;
};
export const dateToInputDate = (value) => {
    const splitDate = value.split('/');
    return `${parseFloat(splitDate[2])}-${parseFloat(splitDate[1]).toString().padStart(2, '0')}-${parseFloat(splitDate[0]).toString().padStart(2, '0')}`;
};
export const dateToString = (value) => {
    return `${value.getDate().toString().padStart(2, '0')}/${(value.getMonth() + 1)
        .toString()
        .padStart(2, '0')}/${value.getFullYear()}`;
};
export const typeDateToStringDate = (value) => {
    const splitDate = value.split('-');
    return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
};
export const dateToTypeDate = (value) => {
    return `${value.getFullYear()}-${(value.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${value.getDate().toString().padStart(2, '0')}`;
};
