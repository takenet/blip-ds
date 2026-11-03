import type { Components, JSX } from "../types/components";

interface BdsTabGroup extends Components.BdsTabGroup, HTMLElement {}
export const BdsTabGroup: {
    prototype: BdsTabGroup;
    new (): BdsTabGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
