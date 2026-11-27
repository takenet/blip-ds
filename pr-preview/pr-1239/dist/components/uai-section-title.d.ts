import type { Components, JSX } from "../types/components";

interface UaiSectionTitle extends Components.UaiSectionTitle, HTMLElement {}
export const UaiSectionTitle: {
    prototype: UaiSectionTitle;
    new (): UaiSectionTitle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
