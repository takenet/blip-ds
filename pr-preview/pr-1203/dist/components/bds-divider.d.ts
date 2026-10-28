import type { Components, JSX } from "../types/components";

interface BdsDivider extends Components.BdsDivider, HTMLElement {}
export const BdsDivider: {
    prototype: BdsDivider;
    new (): BdsDivider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
