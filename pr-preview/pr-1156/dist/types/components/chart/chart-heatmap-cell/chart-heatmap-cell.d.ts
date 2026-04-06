/**
 * HeatmapCell — Configuration slot for bds-chart-heatmap.
 *
 * Place as a child of <bds-chart-heatmap> to override cell appearance.
 * Renders as display:none — parent reads props via getAttribute().
 *
 * @example
 * <bds-chart-heatmap data="...">
 *   <bds-heatmap-cell color="#0d6efd" radius="6"></bds-heatmap-cell>
 * </bds-chart-heatmap>
 */
export declare class ChartHeatmapCell {
    /** Base fill color of the cells. Overrides bds-chart-heatmap color prop. */
    color: string;
    /** Border-radius of cells in pixels. Overrides bds-chart-heatmap cellRadius prop. */
    radius: number;
    /** Data field key for intensity value. Overrides bds-chart-heatmap valueKey prop. */
    valueKey: string;
    render(): any;
}
