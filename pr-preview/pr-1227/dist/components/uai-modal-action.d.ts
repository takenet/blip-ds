import type { Components, JSX } from "../types/components";

interface UaiModalAction extends Components.UaiModalAction, HTMLElement {}
export const UaiModalAction: {
    prototype: UaiModalAction;
    new (): UaiModalAction;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
