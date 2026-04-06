/**
 * YAxis Component - Configuration for Y-axis
 *
 * Must be used as a child of bds-chart-line or bds-chart-bar
 */
export declare class ChartYAxis {
    /**
     * Key from data object to use for Y-axis scale
     */
    dataKey: string;
    /**
     * Show tick lines
     */
    tickLine: boolean;
    /**
     * Color of tick lines and axis line
     */
    lineColor: string;
    /**
     * Color of axis labels
     */
    labelColor: string;
    /**
     * Margin between tick and label (in pixels)
     */
    tickMargin: number;
    /**
     * Show axis line
     */
    axisLine: boolean;
    /**
     * Format function for tick labels (receives value, returns formatted string)
     */
    tickFormatter?: string;
    /**
     * Number of ticks to display on the Y-axis (default: 5)
     * Increase to show more ticks (e.g., 10 for 20, 25, 30, 35, 40...)
     */
    tickCount: number;
    /**
     * Show Y-axis labels
     */
    show: boolean;
    render(): any;
}
