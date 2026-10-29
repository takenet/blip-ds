import type { Components, JSX } from "../types/components";

interface UaiTabGroup extends Components.UaiTabGroup, HTMLElement {}
export const UaiTabGroup: {
    prototype: UaiTabGroup;
    new (): UaiTabGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
