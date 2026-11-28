import type { Components, JSX } from "../types/components";

interface UaiList extends Components.UaiList, HTMLElement {}
export const UaiList: {
    prototype: UaiList;
    new (): UaiList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
