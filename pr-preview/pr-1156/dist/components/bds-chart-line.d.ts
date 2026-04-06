import type { Components, JSX } from "../types/components";

interface BdsChartLine extends Components.BdsChartLine, HTMLElement {}
export const BdsChartLine: {
    prototype: BdsChartLine;
    new (): BdsChartLine;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
