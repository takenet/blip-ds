import type { Components, JSX } from "../types/components";

interface UaiGrid extends Components.UaiGrid, HTMLElement {}
export const UaiGrid: {
    prototype: UaiGrid;
    new (): UaiGrid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
