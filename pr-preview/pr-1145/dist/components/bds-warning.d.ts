import type { Components, JSX } from "../types/components";

interface BdsWarning extends Components.BdsWarning, HTMLElement {}
export const BdsWarning: {
    prototype: BdsWarning;
    new (): BdsWarning;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
