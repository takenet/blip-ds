export type PaperElevation = 'static' | 'primary' | 'secondary';

export type PaperElevationMap = {
  [key in PaperElevation]: string;
};
