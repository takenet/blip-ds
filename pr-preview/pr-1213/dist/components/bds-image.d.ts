import type { Components, JSX } from "../types/components";

interface BdsImage extends Components.BdsImage, HTMLElement {}
export const BdsImage: {
    prototype: BdsImage;
    new (): BdsImage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
