import type { Components, JSX } from "../types/components";

interface BdsPagination extends Components.BdsPagination, HTMLElement {}
export const BdsPagination: {
    prototype: BdsPagination;
    new (): BdsPagination;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
