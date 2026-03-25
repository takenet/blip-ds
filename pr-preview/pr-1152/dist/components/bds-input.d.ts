import type { Components, JSX } from "../types/components";

interface BdsInput extends Components.BdsInput, HTMLElement {}
export const BdsInput: {
    prototype: BdsInput;
    new (): BdsInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
