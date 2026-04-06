import type { Components, JSX } from "../types/components";

interface BdsChartHeatmap extends Components.BdsChartHeatmap, HTMLElement {}
export const BdsChartHeatmap: {
    prototype: BdsChartHeatmap;
    new (): BdsChartHeatmap;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
