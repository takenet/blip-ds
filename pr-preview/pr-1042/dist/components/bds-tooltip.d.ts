import type { Components, JSX } from "../types/components";

interface BdsTooltip extends Components.BdsTooltip, HTMLElement {}
export const BdsTooltip: {
    prototype: BdsTooltip;
    new (): BdsTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
