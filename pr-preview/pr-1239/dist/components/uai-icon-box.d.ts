import type { Components, JSX } from "../types/components";

interface UaiIconBox extends Components.UaiIconBox, HTMLElement {}
export const UaiIconBox: {
    prototype: UaiIconBox;
    new (): UaiIconBox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
