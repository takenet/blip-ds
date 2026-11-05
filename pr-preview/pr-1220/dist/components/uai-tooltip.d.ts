import type { Components, JSX } from "../types/components";

interface UaiTooltip extends Components.UaiTooltip, HTMLElement {}
export const UaiTooltip: {
    prototype: UaiTooltip;
    new (): UaiTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
