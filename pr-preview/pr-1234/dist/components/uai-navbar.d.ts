import type { Components, JSX } from "../types/components";

interface UaiNavbar extends Components.UaiNavbar, HTMLElement {}
export const UaiNavbar: {
    prototype: UaiNavbar;
    new (): UaiNavbar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
