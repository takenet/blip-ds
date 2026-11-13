import type { Components, JSX } from "../types/components";

interface BdsSelect extends Components.BdsSelect, HTMLElement {}
export const BdsSelect: {
    prototype: BdsSelect;
    new (): BdsSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
