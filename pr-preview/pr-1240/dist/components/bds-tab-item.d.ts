import type { Components, JSX } from "../types/components";

interface BdsTabItem extends Components.BdsTabItem, HTMLElement {}
export const BdsTabItem: {
    prototype: BdsTabItem;
    new (): BdsTabItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
