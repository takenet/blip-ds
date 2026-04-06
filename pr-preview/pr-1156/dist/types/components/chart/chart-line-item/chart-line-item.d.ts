/**
 * Line Component - Configuration for line in chart
 *
 * Must be used as a child of bds-chart-line
 */
export declare class ChartLineItem {
    /**
     * Key from data object to use for line values
     */
    dataKey: string;
    /**
     * Color of the line (hex, rgb, or CSS variable)
     */
    color: string;
    /**
     * Width of the line stroke (in pixels)
     */
    strokeWidth: number;
    /**
     * Type of interpolation: linear or monotone (smooth)
     */
    curve: 'linear' | 'monotone';
    /**
     * Radius of data point circles (in pixels)
     */
    radius: number;
    /**
     * Whether to show dots on data points
     */
    dot: boolean;
    render(): any;
}
