import type { Components, JSX } from "../types/components";

interface BdsButtonIcon extends Components.BdsButtonIcon, HTMLElement {}
export const BdsButtonIcon: {
    prototype: BdsButtonIcon;
    new (): BdsButtonIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
