import type { Components, JSX } from "../types/components";

interface BdsIcon extends Components.BdsIcon, HTMLElement {}
export const BdsIcon: {
    prototype: BdsIcon;
    new (): BdsIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
