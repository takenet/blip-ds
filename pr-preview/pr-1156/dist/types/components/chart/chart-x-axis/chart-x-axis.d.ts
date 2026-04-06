/**
 * XAxis Component - Configuration for X-axis
 *
 * Must be used as a child of bds-chart-line or bds-chart-bar
 */
export declare class ChartXAxis {
    /**
     * Key from data object to use for X-axis labels
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
     * Note: In HTML attributes, use comma-separated string for simple transformations
     * Example: "slice,0,3" to get first 3 characters
     */
    tickFormatter?: string;
    /**
     * Number of ticks to display on the Y-axis (default: 5)
     * Note: This applies only to numeric axes with calculated scales
     */
    tickCount: number;
    /**
     * Show X-axis labels
     */
    show: boolean;
    render(): any;
}
