import type { Components, JSX } from "../types/components";

interface BdsSwitch extends Components.BdsSwitch, HTMLElement {}
export const BdsSwitch: {
    prototype: BdsSwitch;
    new (): BdsSwitch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
