import type { Components, JSX } from "../types/components";

interface BdsListItemContent extends Components.BdsListItemContent, HTMLElement {}
export const BdsListItemContent: {
    prototype: BdsListItemContent;
    new (): BdsListItemContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
