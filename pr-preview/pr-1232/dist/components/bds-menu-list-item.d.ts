import type { Components, JSX } from "../types/components";

interface BdsMenuListItem extends Components.BdsMenuListItem, HTMLElement {}
export const BdsMenuListItem: {
    prototype: BdsMenuListItem;
    new (): BdsMenuListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
