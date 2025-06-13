import type { Components, JSX } from "../types/components";

interface BdsModalCloseButton extends Components.BdsModalCloseButton, HTMLElement {}
export const BdsModalCloseButton: {
    prototype: BdsModalCloseButton;
    new (): BdsModalCloseButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
