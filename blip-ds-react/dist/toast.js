import { showToast as showToastElement } from 'blip-ds/dist/components/index.js';
import { defineCustomElement as defineToast } from 'blip-ds/dist/components/uai-toast.js';
import { defineCustomElement as defineToastContainer } from 'blip-ds/dist/components/uai-toast-container.js';
export const showToast = (options = {}) => {
    defineToast();
    defineToastContainer();
    return showToastElement(options);
};
//# sourceMappingURL=toast.js.map