export interface DaysList {
    date: number;
    month: number;
    year: number;
    day: number;
}
export interface MonthsSlide {
    year: number;
    month: number;
    days: DaysList[];
}
export interface Options {
    value: number;
    label: string;
}
