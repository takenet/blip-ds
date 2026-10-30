import type { Components, JSX } from "../types/components";

interface UaiInputDate extends Components.UaiInputDate, HTMLElement {}
export const UaiInputDate: {
    prototype: UaiInputDate;
    new (): UaiInputDate;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
