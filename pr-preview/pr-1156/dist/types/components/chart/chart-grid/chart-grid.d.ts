/**
 * CartesianGrid - Simple grid line renderer
 *
 * Props:
 * - vertical: boolean - Show vertical grid lines
 * - horizontal: boolean - Show horizontal grid lines
 * - strokeStyle: 'solid' | 'dashed' - Line style
 *
 * Usage: Pass gridLines data via context or parent coordination
 */
export declare class ChartGrid {
    /**
     * Show vertical grid lines (X-axis)
     */
    vertical: boolean | string;
    /**
     * Show horizontal grid lines (Y-axis)
     */
    horizontal: boolean | string;
    /**
     * Grid line style: solid or dashed
     */
    strokeStyle: 'solid' | 'dashed';
    /**
     * Grid line color
     */
    strokeColor: string;
    private isVertical;
    private isHorizontal;
    private updateBooleans;
    componentDidLoad(): void;
    private parseBoolean;
    private getStrokeDasharray;
    render(): any;
}
