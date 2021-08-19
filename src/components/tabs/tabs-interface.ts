export interface BdsTabData {
  active: boolean;
  name: string;
}
export interface TabGroup {
  header: BdsTabData;
  content: BdsTabData;
}

export const enum ScrollDirection {
  LEFT = 'left',
  RIGHT = 'right',
}

export const enum Display {
  NONE = 'none',
  BLOCK = 'block',
}

export class Overflow {
  direction: ScrollDirection;
  distance?: number = null;
}
