import type { Components, JSX } from "../types/components";

interface UaiListItemContent extends Components.UaiListItemContent, HTMLElement {}
export const UaiListItemContent: {
    prototype: UaiListItemContent;
    new (): UaiListItemContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
