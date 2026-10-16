import type { Components, JSX } from "../types/components";

interface BdsProgressBar extends Components.BdsProgressBar, HTMLElement {}
export const BdsProgressBar: {
    prototype: BdsProgressBar;
    new (): BdsProgressBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
