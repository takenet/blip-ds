import type { Components, JSX } from "../types/components";

interface BdsRadioGroup extends Components.BdsRadioGroup, HTMLElement {}
export const BdsRadioGroup: {
    prototype: BdsRadioGroup;
    new (): BdsRadioGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
