import type { Components, JSX } from "../types/components";

interface UaiToastContainer extends Components.UaiToastContainer, HTMLElement {}
export const UaiToastContainer: {
    prototype: UaiToastContainer;
    new (): UaiToastContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
