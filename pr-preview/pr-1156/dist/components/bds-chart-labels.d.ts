import type { Components, JSX } from "../types/components";

interface BdsChartLabels extends Components.BdsChartLabels, HTMLElement {}
export const BdsChartLabels: {
    prototype: BdsChartLabels;
    new (): BdsChartLabels;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
