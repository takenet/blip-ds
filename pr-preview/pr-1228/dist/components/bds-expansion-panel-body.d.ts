import type { Components, JSX } from "../types/components";

interface BdsExpansionPanelBody extends Components.BdsExpansionPanelBody, HTMLElement {}
export const BdsExpansionPanelBody: {
    prototype: BdsExpansionPanelBody;
    new (): BdsExpansionPanelBody;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
