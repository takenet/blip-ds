import type { Components, JSX } from "../types/components";

interface UaiListItem extends Components.UaiListItem, HTMLElement {}
export const UaiListItem: {
    prototype: UaiListItem;
    new (): UaiListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
