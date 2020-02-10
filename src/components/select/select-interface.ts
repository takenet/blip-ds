export interface Option {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  label: any;
}

export interface SelectChangeEventDetail {
  value: any | any[] | undefined | null;
}
