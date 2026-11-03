import type { Components, JSX } from "../types/components";

interface BdsSelectOption extends Components.BdsSelectOption, HTMLElement {}
export const BdsSelectOption: {
    prototype: BdsSelectOption;
    new (): BdsSelectOption;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
