import type { Components, JSX } from "../types/components";

interface UaiAutocomplete extends Components.UaiAutocomplete, HTMLElement {}
export const UaiAutocomplete: {
    prototype: UaiAutocomplete;
    new (): UaiAutocomplete;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
