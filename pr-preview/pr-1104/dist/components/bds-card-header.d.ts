import type { Components, JSX } from "../types/components";

interface BdsCardHeader extends Components.BdsCardHeader, HTMLElement {}
export const BdsCardHeader: {
    prototype: BdsCardHeader;
    new (): BdsCardHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
