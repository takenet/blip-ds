import type { Components, JSX } from "../types/components";

interface BdsCarouselItem extends Components.BdsCarouselItem, HTMLElement {}
export const BdsCarouselItem: {
    prototype: BdsCarouselItem;
    new (): BdsCarouselItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
