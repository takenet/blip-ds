import type { Components, JSX } from "../types/components";

interface UaiEmoji extends Components.UaiEmoji, HTMLElement {}
export const UaiEmoji: {
    prototype: UaiEmoji;
    new (): UaiEmoji;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
