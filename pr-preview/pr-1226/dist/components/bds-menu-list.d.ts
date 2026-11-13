import type { Components, JSX } from "../types/components";

interface BdsMenuList extends Components.BdsMenuList, HTMLElement {}
export const BdsMenuList: {
    prototype: BdsMenuList;
    new (): BdsMenuList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
