import type { Components, JSX } from "../types/components";

interface BdsXAxis extends Components.BdsXAxis, HTMLElement {}
export const BdsXAxis: {
    prototype: BdsXAxis;
    new (): BdsXAxis;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
