import type { Components, JSX } from "../types/components";

interface UaiDatepicker extends Components.UaiDatepicker, HTMLElement {}
export const UaiDatepicker: {
    prototype: UaiDatepicker;
    new (): UaiDatepicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
