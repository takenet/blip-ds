import type { Components, JSX } from "../types/components";

interface BdsCard extends Components.BdsCard, HTMLElement {}
export const BdsCard: {
    prototype: BdsCard;
    new (): BdsCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
