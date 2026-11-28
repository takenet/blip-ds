import { transformTag } from "@stencil/core";
export const UAI_TOAST_POSITIONS = [
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
];
/**
 * Marks the containers toastContainerFor creates. One created inside a modal hands its open toasts over when the modal
 * closes. An attribute, not a WeakSet: an app can bundle this module twice, and each copy must recognize the container.
 */
export const CREATED_CONTAINER = 'data-uai-toast-created';
export const isCreatedContainer = (element) => !!(element === null || element === void 0 ? void 0 : element.hasAttribute(CREATED_CONTAINER));
export const isOpenModal = (element) => element.localName === 'dialog'
    ? element.matches(':modal')
    : element.localName === transformTag('uai-modal') && element.open === true;
/** Whether `element` is a uai-modal or a native dialog, open or not. */
export const isModal = (element) => !!element && (element.localName === 'dialog' || element.localName === transformTag('uai-modal'));
/**
 * The modal on top, when one is open: a uai-modal or a native modal dialog. A modal makes everything outside it inert,
 * the top layer included, so toasts shown while it is open go inside it to stay clickable.
 */
export const openModalHost = () => {
    const modals = Array.from(document.querySelectorAll(`${transformTag('uai-modal')}, dialog`)).filter(isOpenModal);
    return modals[modals.length - 1] || null;
};
/**
 * The uai-toast-container of a position, created when there is none. While a modal is open it goes inside the modal;
 * otherwise in the UaiThemeProvider around `from` (or the first one of the page, or the body), so the toasts take that
 * theme.
 */
export const toastContainerFor = (position = 'bottom-left', from) => {
    const known = UAI_TOAST_POSITIONS.includes(position) ? position : 'bottom-left';
    const provider = transformTag('uai-theme-provider');
    const root = openModalHost() ||
        ((from === null || from === void 0 ? void 0 : from.isConnected) && from.closest(provider)) ||
        document.querySelector(provider) ||
        document.body;
    const tag = transformTag('uai-toast-container');
    const existing = Array.from(root.children).find((child) => child.localName === tag && (child.position || 'bottom-left') === known);
    if (existing)
        return existing;
    const container = document.createElement(tag);
    container.position = known;
    container.setAttribute(CREATED_CONTAINER, '');
    root.appendChild(container);
    return container;
};
/**
 * Shows a toast without declaring it: creates a uai-toast in the container of `position` and opens it. The toast leaves
 * the page after it closes. Resolves with the toast element, to listen to uaiToastAction or uaiToastClose.
 *
 *   const toast = await showToast({ variant: 'success', message: 'Alterações salvas', duration: 5000 });
 */
export const showToast = async (options = {}) => {
    var _a;
    const container = toastContainerFor(options.position);
    const toast = document.createElement(transformTag('uai-toast'));
    container.appendChild(toast);
    await customElements.whenDefined(transformTag('uai-toast'));
    await ((_a = toast.componentOnReady) === null || _a === void 0 ? void 0 : _a.call(toast));
    await toast.show(Object.assign({ removeOnClose: true }, options));
    return toast;
};
