export type UaiToastVariant = 'system' | 'info' | 'success' | 'warning' | 'error';
export type UaiToastCloseReason = 'close-button' | 'action' | 'timeout' | 'escape' | 'method';
export type UaiToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
/** Options of `show()` and `showToast()`: each one replaces the prop of the same name before the toast opens. */
export type UaiToastOptions = {
    variant?: UaiToastVariant;
    heading?: string;
    message?: string;
    /** Milliseconds before the toast closes by itself; 0 keeps it open. */
    duration?: number;
    closable?: boolean;
    closeLabel?: string;
    actionLabel?: string;
    position?: UaiToastPosition;
    /** Removes the toast from the page after it closes. On by default when the toast is placed by show() or showToast(). */
    removeOnClose?: boolean;
};
export declare const UAI_TOAST_POSITIONS: readonly UaiToastPosition[];
/**
 * Marks the containers toastContainerFor creates. One created inside a modal hands its open toasts over when the modal
 * closes. An attribute, not a WeakSet: an app can bundle this module twice, and each copy must recognize the container.
 */
export declare const CREATED_CONTAINER = "data-uai-toast-created";
export declare const isCreatedContainer: (element: Element | null) => boolean;
export declare const isOpenModal: (element: Element) => boolean;
/** Whether `element` is a uai-modal or a native dialog, open or not. */
export declare const isModal: (element: Element | null) => boolean;
/**
 * The modal on top, when one is open: a uai-modal or a native modal dialog. A modal makes everything outside it inert,
 * the top layer included, so toasts shown while it is open go inside it to stay clickable.
 */
export declare const openModalHost: () => HTMLElement | null;
/**
 * The uai-toast-container of a position, created when there is none. While a modal is open it goes inside the modal;
 * otherwise in the UaiThemeProvider around `from` (or the first one of the page, or the body), so the toasts take that
 * theme.
 */
export declare const toastContainerFor: (position?: UaiToastPosition, from?: Element) => HTMLElement;
/**
 * Shows a toast without declaring it: creates a uai-toast in the container of `position` and opens it. The toast leaves
 * the page after it closes. Resolves with the toast element, to listen to uaiToastAction or uaiToastClose.
 *
 *   const toast = await showToast({ variant: 'success', message: 'Alterações salvas', duration: 5000 });
 */
export declare const showToast: (options?: UaiToastOptions) => Promise<HTMLElement>;
