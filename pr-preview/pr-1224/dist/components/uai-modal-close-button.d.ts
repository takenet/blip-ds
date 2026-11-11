import type { Components, JSX } from "../types/components";

interface UaiModalCloseButton extends Components.UaiModalCloseButton, HTMLElement {}
export const UaiModalCloseButton: {
    prototype: UaiModalCloseButton;
    new (): UaiModalCloseButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
