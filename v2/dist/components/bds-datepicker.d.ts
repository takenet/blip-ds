import type { Components, JSX } from "../types/components";

interface BdsDatepicker extends Components.BdsDatepicker, HTMLElement {}
export const BdsDatepicker: {
    prototype: BdsDatepicker;
    new (): BdsDatepicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
