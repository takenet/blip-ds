import type { Components, JSX } from "../types/components";

interface BdsRichText extends Components.BdsRichText, HTMLElement {}
export const BdsRichText: {
    prototype: BdsRichText;
    new (): BdsRichText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
