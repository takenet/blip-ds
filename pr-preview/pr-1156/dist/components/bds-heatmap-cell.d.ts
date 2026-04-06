import type { Components, JSX } from "../types/components";

interface BdsHeatmapCell extends Components.BdsHeatmapCell, HTMLElement {}
export const BdsHeatmapCell: {
    prototype: BdsHeatmapCell;
    new (): BdsHeatmapCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
