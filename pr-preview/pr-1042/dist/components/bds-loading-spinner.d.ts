import type { Components, JSX } from "../types/components";

interface BdsLoadingSpinner extends Components.BdsLoadingSpinner, HTMLElement {}
export const BdsLoadingSpinner: {
    prototype: BdsLoadingSpinner;
    new (): BdsLoadingSpinner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
