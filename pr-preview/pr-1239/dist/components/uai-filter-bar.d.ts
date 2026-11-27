import type { Components, JSX } from "../types/components";

interface UaiFilterBar extends Components.UaiFilterBar, HTMLElement {}
export const UaiFilterBar: {
    prototype: UaiFilterBar;
    new (): UaiFilterBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
