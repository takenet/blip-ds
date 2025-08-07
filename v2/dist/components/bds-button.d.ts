import type { Components, JSX } from "../types/components";

interface BdsButton extends Components.BdsButton, HTMLElement {}
export const BdsButton: {
    prototype: BdsButton;
    new (): BdsButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
