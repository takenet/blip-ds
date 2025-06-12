import type { Components, JSX } from "../types/components";

interface BdsExpansionPanelHeader extends Components.BdsExpansionPanelHeader, HTMLElement {}
export const BdsExpansionPanelHeader: {
    prototype: BdsExpansionPanelHeader;
    new (): BdsExpansionPanelHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
