import type { Components, JSX } from "../types/components";

interface BdsAutocomplete extends Components.BdsAutocomplete, HTMLElement {}
export const BdsAutocomplete: {
    prototype: BdsAutocomplete;
    new (): BdsAutocomplete;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
