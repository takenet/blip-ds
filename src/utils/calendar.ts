export const THIS_DAY = new Date();
export const THIS_YEAR = +new Date().getFullYear();
export const THIS_MONTH = +new Date().getMonth();

export const WEEK_DAYS = {
  Sunday: 'Domingo',
  Monday: 'Segunda',
  Tuesday: 'Terça',
  Wednesday: 'Quarta',
  Thursday: 'Quinta',
  Friday: 'Sexta',
  Saturday: 'Sábado',
};

export const CALENDAR_MONTHS = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export const MONTHS = [
  {
    value: 0,
    label: 'Janeiro',
  },
  {
    value: 1,
    label: 'Fevereiro',
  },
  {
    value: 2,
    label: 'Março',
  },
  {
    value: 3,
    label: 'Abril',
  },
  {
    value: 4,
    label: 'Maio',
  },
  {
    value: 5,
    label: 'Junho',
  },
  {
    value: 6,
    label: 'Julho',
  },
  {
    value: 7,
    label: 'Agosto',
  },
  {
    value: 8,
    label: 'Setembro',
  },
  {
    value: 9,
    label: 'Outubro',
  },
  {
    value: 10,
    label: 'Novembro',
  },
  {
    value: 11,
    label: 'Dezembro',
  },
];

export const getYears = (year) => {
  const years = [];
  let minYear = year - 4;
  const maxYear = year + 8;

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
