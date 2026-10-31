export type PaperElevation = 'static' | 'primary' | 'secondary' | 'none';
export type PaperElevationMap = {
    [key in PaperElevation]: string;
};
export type PaperBackground = 'surface-0' | 'surface-1' | 'surface-2' | 'surface-3' | 'surface-4';
export type BorderColor = 'border-1' | 'border-2' | 'primary' | 'secondary' | 'positive' | 'negative' | 'warning' | 'error' | 'delete' | 'success';
