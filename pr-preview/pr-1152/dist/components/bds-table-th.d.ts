import type { Components, JSX } from "../types/components";

interface BdsTableTh extends Components.BdsTableTh, HTMLElement {}
export const BdsTableTh: {
    prototype: BdsTableTh;
    new (): BdsTableTh;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
