import type { Components, JSX } from "../types/components";

interface UaiSparkline extends Components.UaiSparkline, HTMLElement {}
export const UaiSparkline: {
    prototype: UaiSparkline;
    new (): UaiSparkline;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
