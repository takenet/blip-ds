export interface ChartDatum {
  [key: string]: number | string;
}

export interface Scale {
  (value: number | string): number;
}

export interface Margin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export const DEFAULT_CHART_MARGIN: Margin = {
  top: 20,
  right: 20,
  bottom: 32,
  left: 36,
};

export interface ChartHoverPayload {
  datum: ChartDatum;
  tooltip: string;
  clientX: number;
  clientY: number;
}

export interface AxisConfig {
  dataKey: string;
  tickLine: boolean;
  tickMargin: number;
  axisLine: boolean;
  tickFormatter?: (value: any) => string;
}

export interface HeatmapCell {
  x: number;
  y: number;
  width: number;
  height: number;
  opacity: number;
  datum: ChartDatum;
}

export interface HeatmapLayout {
  cells: HeatmapCell[];
  xLabels: Array<{ x: number; label: string }>;
  yLabels: Array<{ y: number; label: string }>;
}
