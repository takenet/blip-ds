import type { Components, JSX } from "../types/components";

interface BdsInputEditable extends Components.BdsInputEditable, HTMLElement {}
export const BdsInputEditable: {
    prototype: BdsInputEditable;
    new (): BdsInputEditable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
