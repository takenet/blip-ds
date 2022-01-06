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
