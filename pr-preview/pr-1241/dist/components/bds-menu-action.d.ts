import type { Components, JSX } from "../types/components";

interface BdsMenuAction extends Components.BdsMenuAction, HTMLElement {}
export const BdsMenuAction: {
    prototype: BdsMenuAction;
    new (): BdsMenuAction;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
