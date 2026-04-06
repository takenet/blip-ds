import { ChartDatum } from '../utils/chart.types';
/**
 * ChartPie — Donut/pie chart component.
 *
 * Renders categorical data as a donut chart. Each datum becomes one slice.
 * Colors are assigned automatically from the design-system palette.
 *
 * Slot children (all optional):
 *   - <bds-pie-config>      override innerRadius, padAngle, cornerRadius
 *   - <bds-chart-legend>    enable clickable legend
 *   - <bds-chart-tooltip>   enable hover tooltip
 *
 * @example
 * <bds-chart-pie
 *   data='[{"label":"A","value":50},{"label":"B","value":30}]'
 *   label-key="label"
 *   value-key="value"
 * >
 *   <bds-pie-config inner-radius="60" pad-angle="0.02"></bds-pie-config>
 *   <bds-chart-legend align="center"></bds-chart-legend>
 *   <bds-chart-tooltip></bds-chart-tooltip>
 * </bds-chart-pie>
 */
export declare class ChartPie {
    private host;
    /** Array of data objects or JSON string. Each object must have labelKey and valueKey fields. */
    data: ChartDatum[] | string;
    /** Field name used for slice labels. */
    labelKey: string;
    /** Field name whose numeric value determines each slice size. */
    valueKey: string;
    /** Fallback color (palette is used automatically; this is a last-resort override). */
    color: string;
    private actualWidth;
    private actualHeight;
    private hoveredIndex;
    private activeLegendItem;
    private resizeObserver;
    componentDidLoad(): void;
    componentDidRender(): void;
    disconnectedCallback(): void;
    private calculateActualDimensions;
    private readConfig;
    private computeLayout;
    private emitLeave;
    private showTooltip;
    render(): any;
}
