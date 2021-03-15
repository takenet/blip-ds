/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Option {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  label: any;
}

export interface SelectChangeEventDetail {
  value: any | any[] | undefined | null;
  code?: string;
}

export type SelectType = 'text' | 'icon';

export type SelectOptionsPositionType = 'top' | 'bottom';
