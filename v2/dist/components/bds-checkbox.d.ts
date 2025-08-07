import type { Components, JSX } from "../types/components";

interface BdsCheckbox extends Components.BdsCheckbox, HTMLElement {}
export const BdsCheckbox: {
    prototype: BdsCheckbox;
    new (): BdsCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
