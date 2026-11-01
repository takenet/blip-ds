import type { Components, JSX } from "../types/components";

interface BdsGrid extends Components.BdsGrid, HTMLElement {}
export const BdsGrid: {
    prototype: BdsGrid;
    new (): BdsGrid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
