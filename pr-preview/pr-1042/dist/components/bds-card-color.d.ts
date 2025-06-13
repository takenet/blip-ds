import type { Components, JSX } from "../types/components";

interface BdsCardColor extends Components.BdsCardColor, HTMLElement {}
export const BdsCardColor: {
    prototype: BdsCardColor;
    new (): BdsCardColor;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
