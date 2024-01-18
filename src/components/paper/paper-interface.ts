export type PaperElevation = 'static' | 'primary' | 'secondary' | 'none';

export type PaperElevationMap = {
  [key in PaperElevation]: string;
};
