import type { Components, JSX } from "../types/components";

interface BdsChartGrid extends Components.BdsChartGrid, HTMLElement {}
export const BdsChartGrid: {
    prototype: BdsChartGrid;
    new (): BdsChartGrid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
