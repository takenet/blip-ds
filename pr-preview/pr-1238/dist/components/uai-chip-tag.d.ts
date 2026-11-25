import type { Components, JSX } from "../types/components";

interface UaiChipTag extends Components.UaiChipTag, HTMLElement {}
export const UaiChipTag: {
    prototype: UaiChipTag;
    new (): UaiChipTag;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
