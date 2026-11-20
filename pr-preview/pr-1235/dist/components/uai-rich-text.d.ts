import type { Components, JSX } from "../types/components";

interface UaiRichText extends Components.UaiRichText, HTMLElement {}
export const UaiRichText: {
    prototype: UaiRichText;
    new (): UaiRichText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
