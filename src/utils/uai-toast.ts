import { transformTag } from '@stencil/core';

export type UaiToastVariant = 'system' | 'info' | 'success' | 'warning' | 'error';
export type UaiToastCloseReason = 'close-button' | 'action' | 'timeout' | 'escape' | 'method';
export type UaiToastPosition =
  'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

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

export const UAI_TOAST_POSITIONS: readonly UaiToastPosition[] = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
];

type ToastElement = HTMLElement & {
  show(options?: UaiToastOptions): Promise<void>;
  componentOnReady?(): Promise<unknown>;
};

/**
 * Marks the containers toastContainerFor creates. One created inside a modal hands its open toasts over when the modal
 * closes. An attribute, not a WeakSet: an app can bundle this module twice, and each copy must recognize the container.
 */
export const CREATED_CONTAINER = 'data-uai-toast-created';

export const isCreatedContainer = (element: Element | null): boolean => !!element?.hasAttribute(CREATED_CONTAINER);

export const isOpenModal = (element: Element): boolean =>
  element.localName === 'dialog'
    ? element.matches(':modal')
    : element.localName === transformTag('uai-modal') && (element as HTMLElement & { open?: boolean }).open === true;

/** Whether `element` is a uai-modal or a native dialog, open or not. */
export const isModal = (element: Element | null): boolean =>
  !!element && (element.localName === 'dialog' || element.localName === transformTag('uai-modal'));

/**
 * The modal on top, when one is open: a uai-modal or a native modal dialog. A modal makes everything outside it inert,
 * the top layer included, so toasts shown while it is open go inside it to stay clickable.
 */
export const openModalHost = (): HTMLElement | null => {
  const modals = Array.from(document.querySelectorAll(`${transformTag('uai-modal')}, dialog`)).filter(isOpenModal);
  return (modals[modals.length - 1] as HTMLElement) || null;
};

/**
 * The uai-toast-container of a position, created when there is none. While a modal is open it goes inside the modal;
 * otherwise in the UaiThemeProvider around `from` (or the first one of the page, or the body), so the toasts take that
 * theme.
 */
export const toastContainerFor = (position: UaiToastPosition = 'bottom-left', from?: Element): HTMLElement => {
  const known = UAI_TOAST_POSITIONS.includes(position) ? position : 'bottom-left';
  const provider = transformTag('uai-theme-provider');
  const root =
    openModalHost() ||
    (from?.isConnected && (from.closest(provider) as HTMLElement)) ||
    (document.querySelector(provider) as HTMLElement) ||
    document.body;
  const tag = transformTag('uai-toast-container');
  const existing = Array.from(root.children).find(
    (child) =>
      child.localName === tag && ((child as HTMLElement & { position?: string }).position || 'bottom-left') === known,
  );
  if (existing) return existing as HTMLElement;
  const container = document.createElement(tag) as HTMLElement & { position?: UaiToastPosition };
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
export const showToast = async (options: UaiToastOptions = {}): Promise<HTMLElement> => {
  const container = toastContainerFor(options.position);
  const toast = document.createElement(transformTag('uai-toast')) as ToastElement;
  container.appendChild(toast);
  await customElements.whenDefined(transformTag('uai-toast'));
  await toast.componentOnReady?.();
  await toast.show({ removeOnClose: true, ...options });
  return toast;
};
