import type { Components, JSX } from "../types/components";

interface BdsChip extends Components.BdsChip, HTMLElement {}
export const BdsChip: {
    prototype: BdsChip;
    new (): BdsChip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
