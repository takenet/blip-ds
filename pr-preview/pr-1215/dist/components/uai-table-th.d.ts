import type { Components, JSX } from "../types/components";

interface UaiTableTh extends Components.UaiTableTh, HTMLElement {}
export const UaiTableTh: {
    prototype: UaiTableTh;
    new (): UaiTableTh;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
