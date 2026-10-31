import type { Components, JSX } from "../types/components";

interface UaiInputChips extends Components.UaiInputChips, HTMLElement {}
export const UaiInputChips: {
    prototype: UaiInputChips;
    new (): UaiInputChips;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
