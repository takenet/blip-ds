import type { Components, JSX } from "../types/components";

interface BdsChartLegend extends Components.BdsChartLegend, HTMLElement {}
export const BdsChartLegend: {
    prototype: BdsChartLegend;
    new (): BdsChartLegend;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
