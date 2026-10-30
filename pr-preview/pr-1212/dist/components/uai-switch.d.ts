import type { Components, JSX } from "../types/components";

interface UaiSwitch extends Components.UaiSwitch, HTMLElement {}
export const UaiSwitch: {
    prototype: UaiSwitch;
    new (): UaiSwitch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
