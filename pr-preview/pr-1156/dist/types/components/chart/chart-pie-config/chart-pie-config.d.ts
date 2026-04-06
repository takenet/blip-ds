/**
 * PieConfig — Visual configuration slot for bds-chart-pie.
 *
 * Place as a child of <bds-chart-pie> to override default appearance.
 * Renders as display:none — parent reads props via getAttribute().
 *
 * @example
 * <bds-chart-pie data="...">
 *   <bds-pie-config inner-radius="70" pad-angle="0.03"></bds-pie-config>
 * </bds-chart-pie>
 */
export declare class ChartPieConfig {
    /**
     * Inner radius as a percentage of the outer radius (0 = pie, 60 = donut).
     * Default: 60
     */
    innerRadius: number;
    /**
     * Gap between slices in radians.
     * Default: 0.02
     */
    padAngle: number;
    /**
     * Corner radius of each slice end-cap in pixels (0 = sharp corners).
     * Default: 3
     */
    cornerRadius: number;
    render(): any;
}
