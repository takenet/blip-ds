import type { Components, JSX } from "../types/components";

interface UaiCheckbox extends Components.UaiCheckbox, HTMLElement {}
export const UaiCheckbox: {
    prototype: UaiCheckbox;
    new (): UaiCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
