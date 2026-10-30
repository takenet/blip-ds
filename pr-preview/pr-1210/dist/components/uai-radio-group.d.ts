import type { Components, JSX } from "../types/components";

interface UaiRadioGroup extends Components.UaiRadioGroup, HTMLElement {}
export const UaiRadioGroup: {
    prototype: UaiRadioGroup;
    new (): UaiRadioGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
