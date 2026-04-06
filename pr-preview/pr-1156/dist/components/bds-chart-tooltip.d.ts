import type { Components, JSX } from "../types/components";

interface BdsChartTooltip extends Components.BdsChartTooltip, HTMLElement {}
export const BdsChartTooltip: {
    prototype: BdsChartTooltip;
    new (): BdsChartTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
