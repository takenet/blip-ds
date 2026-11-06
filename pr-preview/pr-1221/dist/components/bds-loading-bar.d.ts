import type { Components, JSX } from "../types/components";

interface BdsLoadingBar extends Components.BdsLoadingBar, HTMLElement {}
export const BdsLoadingBar: {
    prototype: BdsLoadingBar;
    new (): BdsLoadingBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
