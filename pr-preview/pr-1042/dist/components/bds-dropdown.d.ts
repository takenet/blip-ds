import type { Components, JSX } from "../types/components";

interface BdsDropdown extends Components.BdsDropdown, HTMLElement {}
export const BdsDropdown: {
    prototype: BdsDropdown;
    new (): BdsDropdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
