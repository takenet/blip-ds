import type { Components, JSX } from "../types/components";

interface UaiBarChart extends Components.UaiBarChart, HTMLElement {}
export const UaiBarChart: {
    prototype: UaiBarChart;
    new (): UaiBarChart;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
