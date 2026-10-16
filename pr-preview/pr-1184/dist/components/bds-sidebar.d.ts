import type { Components, JSX } from "../types/components";

interface BdsSidebar extends Components.BdsSidebar, HTMLElement {}
export const BdsSidebar: {
    prototype: BdsSidebar;
    new (): BdsSidebar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
