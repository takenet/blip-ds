import type { Components, JSX } from "../types/components";

interface BdsAlertActions extends Components.BdsAlertActions, HTMLElement {}
export const BdsAlertActions: {
    prototype: BdsAlertActions;
    new (): BdsAlertActions;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
