import type { Components, JSX } from "../types/components";

interface BdsNavbar extends Components.BdsNavbar, HTMLElement {}
export const BdsNavbar: {
    prototype: BdsNavbar;
    new (): BdsNavbar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
