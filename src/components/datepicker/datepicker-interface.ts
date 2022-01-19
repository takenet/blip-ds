/* eslint-disable @typescript-eslint/no-explicit-any */
export interface DaysList {
  date: number;
  month: number;
  year: number;
  day: number;
}
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface MonthsSlide {
  year: number;
  month: number;
  days: DaysList[];
}
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Options {
  value: number;
  label: string;
}
