import type { Components, JSX } from "../types/components";

interface UaiProgressBar extends Components.UaiProgressBar, HTMLElement {}
export const UaiProgressBar: {
    prototype: UaiProgressBar;
    new (): UaiProgressBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
