import type { Components, JSX } from "../types/components";

interface UaiEmptyState extends Components.UaiEmptyState, HTMLElement {}
export const UaiEmptyState: {
    prototype: UaiEmptyState;
    new (): UaiEmptyState;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
