import type { Components, JSX } from "../types/components";

interface BdsBanner extends Components.BdsBanner, HTMLElement {}
export const BdsBanner: {
    prototype: BdsBanner;
    new (): BdsBanner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
