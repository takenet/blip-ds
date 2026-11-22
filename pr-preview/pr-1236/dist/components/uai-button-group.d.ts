import type { Components, JSX } from "../types/components";

interface UaiButtonGroup extends Components.UaiButtonGroup, HTMLElement {}
export const UaiButtonGroup: {
    prototype: UaiButtonGroup;
    new (): UaiButtonGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
