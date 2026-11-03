import type { Components, JSX } from "../types/components";

interface BdsAlertHeader extends Components.BdsAlertHeader, HTMLElement {}
export const BdsAlertHeader: {
    prototype: BdsAlertHeader;
    new (): BdsAlertHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
