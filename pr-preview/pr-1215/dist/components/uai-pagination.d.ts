import type { Components, JSX } from "../types/components";

interface UaiPagination extends Components.UaiPagination, HTMLElement {}
export const UaiPagination: {
    prototype: UaiPagination;
    new (): UaiPagination;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
