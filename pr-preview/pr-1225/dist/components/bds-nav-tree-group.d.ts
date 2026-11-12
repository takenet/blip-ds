import type { Components, JSX } from "../types/components";

interface BdsNavTreeGroup extends Components.BdsNavTreeGroup, HTMLElement {}
export const BdsNavTreeGroup: {
    prototype: BdsNavTreeGroup;
    new (): BdsNavTreeGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
