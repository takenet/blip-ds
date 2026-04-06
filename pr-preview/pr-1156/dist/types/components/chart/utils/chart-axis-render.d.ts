import { Margin } from './chart.types';
export declare const TICK_LENGTH = 6;
export interface XAxisParams {
    xLabels: Array<{
        x: number;
        label: string;
    }>;
    margin: Margin;
    actualHeight: number;
    showTickLine: boolean;
    tickMargin: number;
    tickFormatter?: string;
    lineColor: string;
    labelColor: string;
    hoveredIndex?: number;
}
export interface YAxisParams {
    yLabels: Array<{
        y: number;
        label: string;
    }>;
    margin: Margin;
    showTickLine: boolean;
    tickMargin: number;
    tickFormatter?: string;
    lineColor: string;
    labelColor: string;
}
/**
 * Renders standard bottom X-axis (category labels).
 * Uses `.chart__x-label` CSS class — styled by chart-x-axis.scss.
 */
export declare function renderXAxisLabels(params: XAxisParams): any;
/**
 * Renders standard left Y-axis (value or category labels).
 * Uses `.chart__y-label` CSS class — styled by chart-y-axis.scss.
 */
export declare function renderYAxisLabels(params: YAxisParams): any;
