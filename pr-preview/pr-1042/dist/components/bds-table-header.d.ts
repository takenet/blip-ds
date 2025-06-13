import type { Components, JSX } from "../types/components";

interface BdsTableHeader extends Components.BdsTableHeader, HTMLElement {}
export const BdsTableHeader: {
    prototype: BdsTableHeader;
    new (): BdsTableHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
