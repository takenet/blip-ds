import type { Components, JSX } from "../types/components";

interface BdsToast extends Components.BdsToast, HTMLElement {}
export const BdsToast: {
    prototype: BdsToast;
    new (): BdsToast;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
