import type { Components, JSX } from "../types/components";

interface BdsBar extends Components.BdsBar, HTMLElement {}
export const BdsBar: {
    prototype: BdsBar;
    new (): BdsBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
