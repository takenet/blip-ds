/**
 * `showToast` for React apps. The components are custom elements defined by their wrappers, and a bundler drops the
 * wrappers an app does not import, so this defines uai-toast and uai-toast-container before showing the toast.
 *
 *   import { showToast } from 'blip-ds-react';
 *   showToast({ variant: 'success', message: 'Alterações salvas', duration: 5000 });
 */
import { showToast as showToastElement, type UaiToastOptions } from 'blip-ds/dist/components/index.js';
import { defineCustomElement as defineToast } from 'blip-ds/dist/components/uai-toast.js';
import { defineCustomElement as defineToastContainer } from 'blip-ds/dist/components/uai-toast-container.js';

export type { UaiToastOptions };

/** Creates a toast in the container of `options.position` and opens it; it leaves the page after it closes. */
export const showToast = (options: UaiToastOptions = {}): Promise<HTMLElement> => {
  defineToast();
  defineToastContainer();
  return showToastElement(options);
};
