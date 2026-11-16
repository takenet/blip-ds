import type { Components, JSX } from "../types/components";

interface UaiModal extends Components.UaiModal, HTMLElement {}
export const UaiModal: {
    prototype: UaiModal;
    new (): UaiModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
