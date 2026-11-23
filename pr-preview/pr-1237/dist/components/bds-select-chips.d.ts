import type { Components, JSX } from "../types/components";

interface BdsSelectChips extends Components.BdsSelectChips, HTMLElement {}
export const BdsSelectChips: {
    prototype: BdsSelectChips;
    new (): BdsSelectChips;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
