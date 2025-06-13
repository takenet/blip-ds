import type { Components, JSX } from "../types/components";

interface BdsNavTreeItem extends Components.BdsNavTreeItem, HTMLElement {}
export const BdsNavTreeItem: {
    prototype: BdsNavTreeItem;
    new (): BdsNavTreeItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
