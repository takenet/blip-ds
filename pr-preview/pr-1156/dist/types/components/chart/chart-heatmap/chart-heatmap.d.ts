import { ChartDatum } from '../utils/chart.types';
/**
 * ChartHeatmap — Grid/matrix heatmap chart.
 *
 * Renders two-dimensional categorical data as a grid of colored cells.
 * Cell intensity is determined by a numeric value field mapped to opacity (0.1–1.0).
 *
 * Slot children (all optional):
 *   - <bds-heatmap-cell>  override cell color, radius, valueKey
 *   - <bds-x-axis>        configure bottom axis labels
 *   - <bds-y-axis>        configure left axis labels
 *   - <bds-chart-grid>    show grid lines
 *   - <bds-chart-tooltip> enable hover tooltip
 *
 * @example
 * <bds-chart-heatmap data='[{"x":"Seg","y":"9h","value":42}]'>
 *   <bds-x-axis data-key="x" show="true"></bds-x-axis>
 *   <bds-y-axis data-key="y" show="true"></bds-y-axis>
 *   <bds-heatmap-cell color="#0d6efd" radius="4" value-key="value"></bds-heatmap-cell>
 *   <bds-chart-tooltip></bds-chart-tooltip>
 * </bds-chart-heatmap>
 */
export declare class ChartHeatmap {
    private host;
    /** Array of data objects or JSON string. Each object must have xKey, yKey, and valueKey fields. */
    data: ChartDatum[] | string;
    /** Data field used for X-axis (column) categories. */
    xKey: string;
    /** Data field used for Y-axis (row) categories. */
    yKey: string;
    /** Data field whose numeric value drives cell opacity (min → 0.1, max → 1.0). */
    valueKey: string;
    /** Base fill color of cells. Can be overridden by <bds-heatmap-cell color="...">. */
    color: string;
    /** Border-radius of each cell in pixels. */
    cellRadius: number;
    /** Gap between cells in pixels. */
    cellPadding: number;
    private actualWidth;
    private actualHeight;
    private hoveredIndex;
    private resizeObserver;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private calculateActualDimensions;
    private readConfig;
    private computeMargin;
    private emitLeave;
    private handleCanvasMouseMove;
    render(): any;
}
