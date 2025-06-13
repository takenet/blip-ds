import type { Components, JSX } from "../types/components";

interface BdsChipSelected extends Components.BdsChipSelected, HTMLElement {}
export const BdsChipSelected: {
    prototype: BdsChipSelected;
    new (): BdsChipSelected;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
