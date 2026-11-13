import type { Components, JSX } from "../types/components";

interface UaiBadge extends Components.UaiBadge, HTMLElement {}
export const UaiBadge: {
    prototype: UaiBadge;
    new (): UaiBadge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
