import type { Components, JSX } from "../types/components";

interface BdsTabs extends Components.BdsTabs, HTMLElement {}
export const BdsTabs: {
    prototype: BdsTabs;
    new (): BdsTabs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
