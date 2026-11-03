import type { Components, JSX } from "../types/components";

interface UaiTabItem extends Components.UaiTabItem, HTMLElement {}
export const UaiTabItem: {
    prototype: UaiTabItem;
    new (): UaiTabItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
