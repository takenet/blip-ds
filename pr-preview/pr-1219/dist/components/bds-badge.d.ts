import type { Components, JSX } from "../types/components";

interface BdsBadge extends Components.BdsBadge, HTMLElement {}
export const BdsBadge: {
    prototype: BdsBadge;
    new (): BdsBadge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
