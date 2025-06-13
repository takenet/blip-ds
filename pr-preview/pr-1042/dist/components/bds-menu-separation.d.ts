import type { Components, JSX } from "../types/components";

interface BdsMenuSeparation extends Components.BdsMenuSeparation, HTMLElement {}
export const BdsMenuSeparation: {
    prototype: BdsMenuSeparation;
    new (): BdsMenuSeparation;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
