import type { Components, JSX } from "../types/components";

interface BdsSearchAnywhere extends Components.BdsSearchAnywhere, HTMLElement {}
export const BdsSearchAnywhere: {
    prototype: BdsSearchAnywhere;
    new (): BdsSearchAnywhere;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
