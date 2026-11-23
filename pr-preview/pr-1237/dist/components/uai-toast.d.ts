import type { Components, JSX } from "../types/components";

interface UaiToast extends Components.UaiToast, HTMLElement {}
export const UaiToast: {
    prototype: UaiToast;
    new (): UaiToast;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
