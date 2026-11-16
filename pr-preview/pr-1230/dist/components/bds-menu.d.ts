import type { Components, JSX } from "../types/components";

interface BdsMenu extends Components.BdsMenu, HTMLElement {}
export const BdsMenu: {
    prototype: BdsMenu;
    new (): BdsMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
