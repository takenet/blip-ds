import type { Components, JSX } from "../types/components";

interface BdsBannerLink extends Components.BdsBannerLink, HTMLElement {}
export const BdsBannerLink: {
    prototype: BdsBannerLink;
    new (): BdsBannerLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
