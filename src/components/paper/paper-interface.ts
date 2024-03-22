export type PaperElevation = 'static' | 'primary' | 'secondary' | 'none';

export type PaperElevationMap = {
  [key in PaperElevation]: string;
};

export type PaperBackground = 'surface-1' | 'surface-2' | 'surface-3' | 'surface-4';
