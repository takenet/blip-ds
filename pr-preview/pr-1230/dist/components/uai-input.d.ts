import type { Components, JSX } from "../types/components";

interface UaiInput extends Components.UaiInput, HTMLElement {}
export const UaiInput: {
    prototype: UaiInput;
    new (): UaiInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
