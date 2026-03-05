import type { Components, JSX } from "../types/components";

interface BdsBreadcrumb extends Components.BdsBreadcrumb, HTMLElement {}
export const BdsBreadcrumb: {
    prototype: BdsBreadcrumb;
    new (): BdsBreadcrumb;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
