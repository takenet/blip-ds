import type { Components, JSX } from "../types/components";

interface UaiSelectOption extends Components.UaiSelectOption, HTMLElement {}
export const UaiSelectOption: {
    prototype: UaiSelectOption;
    new (): UaiSelectOption;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
