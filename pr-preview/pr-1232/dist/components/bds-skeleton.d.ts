import type { Components, JSX } from "../types/components";

interface BdsSkeleton extends Components.BdsSkeleton, HTMLElement {}
export const BdsSkeleton: {
    prototype: BdsSkeleton;
    new (): BdsSkeleton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
