import type { Components, JSX } from "../types/components";

interface BdsToastContainer extends Components.BdsToastContainer, HTMLElement {}
export const BdsToastContainer: {
    prototype: BdsToastContainer;
    new (): BdsToastContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
