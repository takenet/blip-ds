import type { Components, JSX } from "../types/components";

interface BdsAlertBody extends Components.BdsAlertBody, HTMLElement {}
export const BdsAlertBody: {
    prototype: BdsAlertBody;
    new (): BdsAlertBody;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
