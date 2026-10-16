import type { Components, JSX } from "../types/components";

interface BdsChipClickable extends Components.BdsChipClickable, HTMLElement {}
export const BdsChipClickable: {
    prototype: BdsChipClickable;
    new (): BdsChipClickable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
