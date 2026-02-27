import type { Components, JSX } from "../types/components";

interface BdsSlider extends Components.BdsSlider, HTMLElement {}
export const BdsSlider: {
    prototype: BdsSlider;
    new (): BdsSlider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
