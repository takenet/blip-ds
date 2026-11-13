import type { Components, JSX } from "../types/components";

interface BdsListItem extends Components.BdsListItem, HTMLElement {}
export const BdsListItem: {
    prototype: BdsListItem;
    new (): BdsListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
