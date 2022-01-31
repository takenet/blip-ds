/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Option {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  label: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bulkOption?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  status?: any;
}

export interface SelectChangeEventDetail {
  value: any | any[] | undefined | null;
  code?: string;
  country?: string;
}

export type SelectType = 'text' | 'icon';

export type SelectOptionsPositionType = 'top' | 'bottom';
