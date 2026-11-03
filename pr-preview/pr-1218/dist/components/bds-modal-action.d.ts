import type { Components, JSX } from "../types/components";

interface BdsModalAction extends Components.BdsModalAction, HTMLElement {}
export const BdsModalAction: {
    prototype: BdsModalAction;
    new (): BdsModalAction;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
