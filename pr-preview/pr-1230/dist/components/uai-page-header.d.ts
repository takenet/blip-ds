import type { Components, JSX } from "../types/components";

interface UaiPageHeader extends Components.UaiPageHeader, HTMLElement {}
export const UaiPageHeader: {
    prototype: UaiPageHeader;
    new (): UaiPageHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
