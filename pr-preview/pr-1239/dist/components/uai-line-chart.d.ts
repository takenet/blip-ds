import type { Components, JSX } from "../types/components";

interface UaiLineChart extends Components.UaiLineChart, HTMLElement {}
export const UaiLineChart: {
    prototype: UaiLineChart;
    new (): UaiLineChart;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
