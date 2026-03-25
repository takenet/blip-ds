import type { Components, JSX } from "../types/components";

interface BdsInputChips extends Components.BdsInputChips, HTMLElement {}
export const BdsInputChips: {
    prototype: BdsInputChips;
    new (): BdsInputChips;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
