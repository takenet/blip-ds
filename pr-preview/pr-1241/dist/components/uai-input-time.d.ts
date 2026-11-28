import type { Components, JSX } from "../types/components";

interface UaiInputTime extends Components.UaiInputTime, HTMLElement {}
export const UaiInputTime: {
    prototype: UaiInputTime;
    new (): UaiInputTime;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
