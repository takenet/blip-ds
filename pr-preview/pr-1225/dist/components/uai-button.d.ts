import type { Components, JSX } from "../types/components";

interface UaiButton extends Components.UaiButton, HTMLElement {}
export const UaiButton: {
    prototype: UaiButton;
    new (): UaiButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
