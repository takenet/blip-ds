import type { Components, JSX } from "../types/components";

interface BdsRadio extends Components.BdsRadio, HTMLElement {}
export const BdsRadio: {
    prototype: BdsRadio;
    new (): BdsRadio;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
