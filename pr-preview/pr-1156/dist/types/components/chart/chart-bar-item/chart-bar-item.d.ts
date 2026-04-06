/**
 * Bar Component - Configuration for bar in chart
 *
 * Must be used as a child of bds-chart-bar
 */
export declare class ChartBar {
    /**
     * Key from data object to use for bar values
     */
    dataKey: string;
    /**
     * Color of the bar (hex, rgb, or CSS variable)
     */
    color: string;
    /**
     * Border radius of bar corners (in pixels)
     */
    radius: number;
    /**
     * Stack identifier. Bars with the same stackId are stacked on top of each other.
     * Bars with different (or no) stackId are placed side-by-side.
     */
    stackId?: string;
    render(): any;
}
