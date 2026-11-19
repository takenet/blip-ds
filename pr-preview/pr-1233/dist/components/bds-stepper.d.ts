import type { Components, JSX } from "../types/components";

interface BdsStepper extends Components.BdsStepper, HTMLElement {}
export const BdsStepper: {
    prototype: BdsStepper;
    new (): BdsStepper;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
