import type { Components, JSX } from "../types/components";

interface UaiSelect extends Components.UaiSelect, HTMLElement {}
export const UaiSelect: {
    prototype: UaiSelect;
    new (): UaiSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
