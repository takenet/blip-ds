import type { Components, JSX } from "../types/components";

interface BdsChipTag extends Components.BdsChipTag, HTMLElement {}
export const BdsChipTag: {
    prototype: BdsChipTag;
    new (): BdsChipTag;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
