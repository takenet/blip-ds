/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Option {
  value: string;
  label: string;
  icon?: string;
  iconColor?: string;
  titleText?: string;
  slotAlign?: string;
  bulkOption?: string;
  status?: string;
}

export interface SelectChangeEventDetail {
  value: any | any[] | undefined | null;
  code?: string;
  country?: string;
}

export type SelectType = 'text' | 'icon';

export type SelectOptionsPositionType = 'top' | 'bottom';
