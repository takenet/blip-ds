import type { Components, JSX } from "../types/components";

interface BdsChartPie extends Components.BdsChartPie, HTMLElement {}
export const BdsChartPie: {
    prototype: BdsChartPie;
    new (): BdsChartPie;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
