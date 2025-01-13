export interface Itens {
  id: number;
  label: string;
  offsetHeight?: number;
  offsetLeft?: number;
  isWhole?: boolean;
}

export type arrows = 'outside' | 'inside' | 'none';

export type bullets = 'outside' | 'inside' | 'none';

export type bulletsPositions = 'left' | 'center' | 'right';

export type gap = 'none' | 'half' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
