import type { Components, JSX } from "../types/components";

interface BdsChartContainer extends Components.BdsChartContainer, HTMLElement {}
export const BdsChartContainer: {
    prototype: BdsChartContainer;
    new (): BdsChartContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
