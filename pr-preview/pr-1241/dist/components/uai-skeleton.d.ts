import type { Components, JSX } from "../types/components";

interface UaiSkeleton extends Components.UaiSkeleton, HTMLElement {}
export const UaiSkeleton: {
    prototype: UaiSkeleton;
    new (): UaiSkeleton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
