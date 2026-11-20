import type { Components, JSX } from "../types/components";

interface UaiInputEditable extends Components.UaiInputEditable, HTMLElement {}
export const UaiInputEditable: {
    prototype: UaiInputEditable;
    new (): UaiInputEditable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
