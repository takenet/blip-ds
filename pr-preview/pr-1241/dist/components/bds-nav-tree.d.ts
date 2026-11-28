import type { Components, JSX } from "../types/components";

interface BdsNavTree extends Components.BdsNavTree, HTMLElement {}
export const BdsNavTree: {
    prototype: BdsNavTree;
    new (): BdsNavTree;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
