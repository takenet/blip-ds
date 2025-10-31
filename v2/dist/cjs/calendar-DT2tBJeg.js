'use strict';

const ptTerms = [
    {
        conclude: 'Concluir',
        from: 'De',
        reset: 'Redefinir',
        setTheDate: 'Definir a data',
        to: 'Até',
    },
];
const ptMonths = [
    {
        january: 'Janeiro',
        february: 'Fevereiro',
        march: 'Março',
        april: 'Abril',
        may: 'Maio',
        june: 'Junho',
        july: 'Julho',
        august: 'Agosto',
        september: 'Setembro',
        october: 'Outubro',
        november: 'Novembro',
        december: 'Dezembro',
    },
];
const ptDays = [
    {
        sunday: 'Domingo',
        monday: 'Segunda',
        tuesday: 'Terça',
        wednesday: 'Quarta',
        thursday: 'Quinta',
        friday: 'Sexta',
        saturday: 'Sábado',
    },
];
const ptMessages = [
    {
        dateFormatIsIncorrect: 'Formato da data esta incorreto',
        betweenPeriodOf: 'Por favor selecione uma data entre o período de',
        endDateIsEmpty: 'Selecione a data final',
    },
];

const esTerms = [
    {
        conclude: 'Finalizar',
        from: 'Desde',
        reset: 'Reiniciar',
        setTheDate: 'Establecer la fecha',
        to: 'Hasta',
    },
];
const esMonths = [
    {
        january: 'Enero',
        february: 'Febrero',
        march: 'Marzo',
        april: 'Abril',
        may: 'Mayo',
        june: 'Junio',
        july: 'Julio',
        august: 'Agosto',
        september: 'Septiembre',
        october: 'Octubre',
        november: 'Noviembre',
        december: 'Diciembre',
    },
];
const esDays = [
    {
        sunday: 'Domingo',
        monday: 'Lunes',
        tuesday: 'Martes',
        wednesday: 'Miércoles',
        thursday: 'Jueves',
        friday: 'Viernes',
        saturday: 'Sábado',
    },
];
const esMessages = [
    {
        dateFormatIsIncorrect: 'El formato de fecha es incorrecto',
        betweenPeriodOf: 'Selecciona una fecha entre el período de',
        endDateIsEmpty: 'Selecciona la fecha de finalización',
    },
];

const enTerms = [
    {
        conclude: 'Conclude',
        from: 'From',
        reset: 'Reset',
        setTheDate: 'Set the date',
        to: 'To',
    },
];
const enMonths = [
    {
        january: 'January',
        february: 'February',
        march: 'March',
        april: 'April',
        may: 'May',
        june: 'June',
        july: 'July',
        august: 'August',
        september: 'September',
        october: 'October',
        november: 'November',
        december: 'December',
    },
];
const enDays = [
    {
        // week days
        sunday: 'Sunday',
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
    },
];
const enMessages = [
    {
        dateFormatIsIncorrect: 'Date format is incorrect',
        betweenPeriodOf: 'Please select a date between the period of',
        endDateIsEmpty: 'Select the end date',
    },
];

const termTranslate = (lang, string) => {
    let tranlate;
    switch (lang) {
        case 'pt_BR':
            tranlate = ptTerms.map((term) => term[string]);
            break;
        case 'es_ES':
            tranlate = esTerms.map((term) => term[string]);
            break;
        case 'en_US':
            tranlate = enTerms.map((term) => term[string]);
            break;
        default:
            tranlate = ptTerms.map((term) => term[string]);
    }
    return tranlate;
};
const monthTranslate = (lang, string) => {
    let tranlate;
    switch (lang) {
        case 'pt_BR':
            tranlate = ptMonths.map((term) => term[string]);
            break;
        case 'es_ES':
            tranlate = esMonths.map((term) => term[string]);
            break;
        case 'en_US':
            tranlate = enMonths.map((term) => term[string]);
            break;
        default:
            tranlate = ptMonths.map((term) => term[string]);
    }
    return tranlate;
};
const dayTranslate = (lang, string) => {
    let tranlate;
    switch (lang) {
        case 'pt_BR':
            tranlate = ptDays.map((term) => term[string]);
            break;
        case 'es_ES':
            tranlate = esDays.map((term) => term[string]);
            break;
        case 'en_US':
            tranlate = enDays.map((term) => term[string]);
            break;
        default:
            tranlate = ptDays.map((term) => term[string]);
    }
    return tranlate;
};
const messageTranslate = (lang, string) => {
    let tranlate;
    switch (lang) {
        case 'pt_BR':
            tranlate = ptMessages.map((term) => term[string]);
            break;
        case 'es_ES':
            tranlate = esMessages.map((term) => term[string]);
            break;
        case 'en_US':
            tranlate = enMessages.map((term) => term[string]);
            break;
        default:
            tranlate = ptMessages.map((term) => term[string]);
    }
    return tranlate;
};

const THIS_DAY = new Date();
const THIS_YEAR = +new Date().getFullYear();
const THIS_MONTH = +new Date().getMonth();
const weekDays = (language) => {
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
const changeMonths = (language) => [
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
const defaultStartDate = `${THIS_DAY.getDate().toString().padStart(2, '0')}/${(THIS_DAY.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${THIS_DAY.getFullYear()}`;
const defaultEndDate = `${THIS_DAY.getDate().toString().padStart(2, '0')}/${(THIS_DAY.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${THIS_DAY.getFullYear() + 100}`;
const getYears = (year, startYear, endYear) => {
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
const getMonths = (year, startDate, endDate, monthList) => {
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
const getDaysInMonth = (year = THIS_YEAR, month = THIS_MONTH) => {
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
const getMonthsSlide = (year = THIS_YEAR, month = THIS_MONTH) => {
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
const fillDayList = (value) => {
    const stringDate = `${value.year}${value.month.toString().padStart(2, '0')}${value.date.toString().padStart(2, '0')}`;
    return stringDate;
};
const fillDate = (value) => {
    const stringDate = `${value.getFullYear()}${value.getMonth().toString().padStart(2, '0')}${value
        .getDate()
        .toString()
        .padStart(2, '0')}`;
    return stringDate;
};
const dateToDayList = (value) => {
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
const dateToInputDate = (value) => {
    const splitDate = value.split('/');
    return `${parseFloat(splitDate[2])}-${parseFloat(splitDate[1]).toString().padStart(2, '0')}-${parseFloat(splitDate[0]).toString().padStart(2, '0')}`;
};
const typeDateToStringDate = (value) => {
    const splitDate = value.split('-');
    return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
};
const dateToTypeDate = (value) => {
    return `${value.getFullYear()}-${(value.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${value.getDate().toString().padStart(2, '0')}`;
};

exports.THIS_DAY = THIS_DAY;
exports.changeMonths = changeMonths;
exports.dateToDayList = dateToDayList;
exports.dateToInputDate = dateToInputDate;
exports.dateToTypeDate = dateToTypeDate;
exports.defaultEndDate = defaultEndDate;
exports.defaultStartDate = defaultStartDate;
exports.fillDate = fillDate;
exports.fillDayList = fillDayList;
exports.getMonths = getMonths;
exports.getMonthsSlide = getMonthsSlide;
exports.getYears = getYears;
exports.messageTranslate = messageTranslate;
exports.termTranslate = termTranslate;
exports.typeDateToStringDate = typeDateToStringDate;
exports.weekDays = weekDays;
//# sourceMappingURL=calendar-DT2tBJeg.js.map

//# sourceMappingURL=calendar-DT2tBJeg.js.map