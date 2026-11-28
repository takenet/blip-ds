import type { Components, JSX } from "../types/components";

interface UaiBreadcrumb extends Components.UaiBreadcrumb, HTMLElement {}
export const UaiBreadcrumb: {
    prototype: UaiBreadcrumb;
    new (): UaiBreadcrumb;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
