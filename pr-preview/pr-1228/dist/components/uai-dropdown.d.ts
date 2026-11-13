import type { Components, JSX } from "../types/components";

interface UaiDropdown extends Components.UaiDropdown, HTMLElement {}
export const UaiDropdown: {
    prototype: UaiDropdown;
    new (): UaiDropdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
