import type { Components, JSX } from "../types/components";

interface UaiPaper extends Components.UaiPaper, HTMLElement {}
export const UaiPaper: {
    prototype: UaiPaper;
    new (): UaiPaper;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
