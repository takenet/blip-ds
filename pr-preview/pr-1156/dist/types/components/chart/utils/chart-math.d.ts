import { ChartDatum, Scale, Margin, HeatmapLayout, PieLayout } from './chart.types';
export declare const DEFAULT_LEGEND_PALETTE: string[];
/**
 * Builds a Map from unique category string values to palette colors.
 * Cycles through palette if categories exceed palette size.
 */
export declare function buildCategoryColorMap(data: ChartDatum[] | string, categoryKey: string, palette?: string[]): Map<string, string>;
/**
 * Format a value using tickFormatter string.
 * Examples: "toFixed,2" | "uppercase" | "slice,0,3" | "round,1"
 */
export declare function formatTick(value: string | number, formatter?: string): string;
/**
 * Linear scale: maps domain to range linearly
 */
export declare function createLinearScale(domain: number[], range: [number, number]): Scale;
/**
 * Band scale: maps categorical values to fixed-width bands
 */
export declare function createBandScale(domain: string[], range: [number, number], padding?: number): Scale;
export declare function getBandWidth(domain: string[], range: [number, number], padding?: number): number;
/**
 * Generate SVG path string for a line chart (monotone curve)
 */
export declare function generateLinePathMonotone(points: Array<{
    x: number;
    y: number;
}>, tension?: number): string;
/**
 * Generate SVG path string for a line chart (linear)
 */
export declare function generateLinePathLinear(points: Array<{
    x: number;
    y: number;
}>): string;
export declare function normalizeChartData(data: any[] | string): ChartDatum[];
export interface LineChartLayout {
    margin: Margin;
    innerWidth: number;
    innerHeight: number;
    path: string;
    dots: Array<{
        x: number;
        y: number;
        datum: ChartDatum;
    }>;
    xLabels: Array<{
        x: number;
        label: string;
    }>;
    yLabels: Array<{
        y: number;
        label: string;
    }>;
    yGridLines: number[];
    xGridLines: Array<{
        x: number;
    }>;
}
/**
 * Returns a "nice" round tick step >= rawStep.
 * e.g. rawStep=35.75 → 50, rawStep=12 → 20, rawStep=7 → 10
 */
export declare function niceTickStep(rawStep: number): number;
export declare function calculateLineChartLayout(data: ChartDatum[] | string, xKey: string, yKey: string, width: number, height: number, curve?: 'linear' | 'monotone', margin?: Margin, tickCount?: number): LineChartLayout;
export interface BarSeriesConfig {
    dataKey: string;
    stackId?: string;
}
export interface BarChartLayout {
    margin: Margin;
    innerWidth: number;
    innerHeight: number;
    vertical: boolean;
    bars: Array<{
        x: number;
        y: number;
        width: number;
        height: number;
        datum: ChartDatum;
        dataKey: string;
        groupIndex: number;
    }>;
    groups: Array<{
        centerX: number;
        centerY: number;
        datum: ChartDatum;
    }>;
    xLabels: Array<{
        x: number;
        label: string;
    }>;
    yLabels: Array<{
        y: number;
        label: string;
    }>;
    yGridLines: number[];
    xGridLines: Array<{
        x: number;
    }>;
}
export declare function calculateBarChartLayout(data: ChartDatum[] | string, xKey: string, series: BarSeriesConfig[], width: number, height: number, margin?: Margin, tickCount?: number, vertical?: boolean, align?: 'left' | 'center' | 'right'): BarChartLayout;
/**
 * Calculate grid lines and labels for independent grid component
 * Returns positions for rendering grids and labels separately
 */
export interface GridAndLabelsData {
    xGridLines: Array<{
        x: number;
        label: string;
    }>;
    yGridLines: Array<{
        y: number;
        label: string;
    }>;
    margin: Margin;
}
export declare function calculateGridsAndLabels(data: any[] | string, xKey: string, yKey: string, width: number, height: number): GridAndLabelsData;
/**
 * Calculates cell positions, sizes, and opacity for a heatmap/matrix chart.
 *
 * - X axis = columns (unique xKey values, ordered by first appearance)
 * - Y axis = rows    (unique yKey values, ordered by first appearance)
 * - Opacity = linear scale: min value → 0.1, max value → 1.0
 * - Duplicate (x, y) pairs: last entry in data wins
 */
export declare function calculateHeatmapLayout(data: ChartDatum[] | string, xKey: string, yKey: string, valueKey: string, width: number, height: number, margin?: Margin, cellPadding?: number): HeatmapLayout;
/**
 * Generates the SVG `d` attribute for a single donut/pie slice.
 *
 * @param startAngle  - Start angle in radians (−π/2 = 12 o'clock)
 * @param endAngle    - End angle in radians
 * @param outerRadius - Outer arc radius in pixels
 * @param innerRadius - Inner arc radius in pixels (0 = full wedge / pie)
 * @param padAngle    - Gap between slices in radians (split evenly on each side)
 */
export declare function generateDonutPath(startAngle: number, endAngle: number, outerRadius: number, innerRadius: number, padAngle?: number): string;
/**
 * Calculates the full layout for a pie or donut chart.
 *
 * @param data           - Array of data objects or JSON string
 * @param labelKey       - Field name for slice labels (e.g., "label")
 * @param valueKey       - Field name for slice values (e.g., "value")
 * @param width          - Available width in pixels
 * @param height         - Available height in pixels
 * @param innerRadiusPct - Inner radius as % of outer (0 = pie, 60 = donut)
 * @param palette        - Color palette for slices
 */
export declare function calculatePieLayout(data: ChartDatum[] | string, labelKey: string, valueKey: string, width: number, height: number, innerRadiusPct?: number, palette?: string[]): PieLayout;
