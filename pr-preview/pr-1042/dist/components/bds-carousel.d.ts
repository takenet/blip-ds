import type { Components, JSX } from "../types/components";

interface BdsCarousel extends Components.BdsCarousel, HTMLElement {}
export const BdsCarousel: {
    prototype: BdsCarousel;
    new (): BdsCarousel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
