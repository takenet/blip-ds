import type { Components, JSX } from "../types/components";

interface UaiIconButton extends Components.UaiIconButton, HTMLElement {}
export const UaiIconButton: {
    prototype: UaiIconButton;
    new (): UaiIconButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
