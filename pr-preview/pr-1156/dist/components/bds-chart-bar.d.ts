import type { Components, JSX } from "../types/components";

interface BdsChartBar extends Components.BdsChartBar, HTMLElement {}
export const BdsChartBar: {
    prototype: BdsChartBar;
    new (): BdsChartBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
