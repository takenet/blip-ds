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
export declare const DEFAULT_CHART_MARGIN: Margin;
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
    xLabels: Array<{
        x: number;
        label: string;
    }>;
    yLabels: Array<{
        y: number;
        label: string;
    }>;
}
export interface PieSlice {
    label: string;
    value: number;
    percentage: number;
    startAngle: number;
    endAngle: number;
    color: string;
    datum: ChartDatum;
}
export interface PieLayout {
    slices: PieSlice[];
    outerRadius: number;
    innerRadius: number;
    centerX: number;
    centerY: number;
}
