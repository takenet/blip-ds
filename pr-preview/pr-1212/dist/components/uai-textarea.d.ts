import type { Components, JSX } from "../types/components";

interface UaiTextarea extends Components.UaiTextarea, HTMLElement {}
export const UaiTextarea: {
    prototype: UaiTextarea;
    new (): UaiTextarea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
