import type { Components, JSX } from "../types/components";

interface BdsList extends Components.BdsList, HTMLElement {}
export const BdsList: {
    prototype: BdsList;
    new (): BdsList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
