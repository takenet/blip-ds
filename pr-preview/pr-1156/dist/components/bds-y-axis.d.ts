import type { Components, JSX } from "../types/components";

interface BdsYAxis extends Components.BdsYAxis, HTMLElement {}
export const BdsYAxis: {
    prototype: BdsYAxis;
    new (): BdsYAxis;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
