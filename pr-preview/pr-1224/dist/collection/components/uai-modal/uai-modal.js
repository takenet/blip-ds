import { Host, h } from "@stencil/core";
import { warnLegacyValue } from "../../utils/deprecation";
const SIZES = ['fixed', 'dynamic'];
// Controls that use Enter themselves: pressing Enter on them must never close the modal.
const ENTER_CONTROLS = new Set(['a', 'button', 'input', 'select', 'summary', 'textarea']);
const ENTER_ROLES = new Set(['button', 'link', 'menuitem', 'option', 'switch', 'tab', 'checkbox', 'radio']);
const usesEnter = (event) => {
    const path = typeof event.composedPath === 'function' ? event.composedPath() : [event.target];
    return path.some((node) => {
        var _a;
        const element = node;
        if (!element || typeof element.tagName !== 'string')
            return false;
        return (ENTER_CONTROLS.has(element.tagName.toLowerCase()) ||
            ENTER_ROLES.has(((_a = element.getAttribute) === null || _a === void 0 ? void 0 : _a.call(element, 'role')) || '') ||
            element.isContentEditable === true);
    });
};
/**
 * Dialog that blocks the page behind a backdrop to ask for a decision or show focused content.
 * Built on the native dialog in modal mode: the focus moves into it, stays inside it, the page behind becomes inert and the focus returns on close.
 * Use for confirmations and short tasks; pair with uai-modal-action for the buttons and UaiThemeProvider;
 * avoid it for passive notices (use uai-banner).
 *
 * @slot - Modal content.
 * @slot footer - Footer actions, aligned to the end. Use uai-modal-action or a row of uai-button (Cancelar, Salvar).
 * @part dialog - The full-screen container with the backdrop.
 * @part modal - The modal panel.
 * @part header - The header with the title and the close button.
 * @part title - The title text.
 * @part body - The scrollable content area.
 * @part footer - The footer with the actions.
 * @part close - The close button.
 */
export class UaiModal {
    constructor() {
        /** Opens or closes the modal. Use for declarative control; pair with uaiModalChanged. Avoid toggling it on every render. */
        this.open = false;
        /** Shows the close button when 'true'. Use for dismissible dialogs; avoid hiding it when no other action closes the modal. */
        this.closeButton = true;
        /** Panel size. 'fixed' keeps a standard width and height; 'dynamic' grows with the content. Use 'dynamic' for variable content. */
        this.size = 'fixed';
        /** Closes the modal when the backdrop is clicked. Use 'false' for flows that need an explicit choice. */
        this.outzoneClose = true;
        /** Closes the modal with Escape, and with Enter when no control (button, link, field) has the focus. Use 'false' for flows that need an explicit choice. */
        this.enterClose = true;
        /** Accessible name of the close button. Use a translated label; avoid leaving it generic. */
        this.closeLabel = 'Fechar';
        /** Test selector on the backdrop. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dtOutzone = null;
        /** Test selector on the close button. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dtButtonClose = null;
        // Escape is handled by the native `cancel` event of the dialog; it only closes when enterClose is true.
        this.onCancel = (event) => {
            event.preventDefault();
            if (this.enterClose)
                this.setOpen(false);
        };
        // Enter closes only when it is not being used by a control, so it never closes the modal while someone
        // activates a button or types in a field, and a keyboard click cannot reopen it through toggle().
        this.onKeydown = (event) => {
            if (this.enterClose && event.key === 'Enter' && !usesEnter(event)) {
                this.setOpen(false);
            }
        };
        this.onOutzoneClick = () => {
            if (this.outzoneClose === true)
                this.setOpen(false);
        };
    }
    /** Opens the modal when closed and closes it when open. Use for imperative control; pair with uaiModalChanged. */
    async toggle() {
        this.setOpen(!this.open);
    }
    openChanged() {
        this.syncListener();
    }
    componentDidLoad() {
        var _a;
        (_a = this.dialogEl) === null || _a === void 0 ? void 0 : _a.addEventListener('cancel', this.onCancel);
        this.syncListener();
    }
    componentDidRender() {
        this.syncNativeDialog();
    }
    disconnectedCallback() {
        var _a;
        document.removeEventListener('keydown', this.onKeydown, false);
        (_a = this.dialogEl) === null || _a === void 0 ? void 0 : _a.removeEventListener('cancel', this.onCancel);
    }
    setOpen(next) {
        this.open = next;
        this.uaiModalChanged.emit({ modalStatus: next ? 'opened' : 'closed' });
    }
    syncListener() {
        if (this.open)
            document.addEventListener('keydown', this.onKeydown, false);
        else
            document.removeEventListener('keydown', this.onKeydown, false);
    }
    // The native <dialog> in modal mode puts the panel in the top layer, moves the focus into it, keeps Tab inside it,
    // makes everything behind inert and gives the focus back to the previous element on close.
    syncNativeDialog() {
        const dialog = this.dialogEl;
        if (!dialog || typeof dialog.showModal !== 'function')
            return;
        if (this.open && !dialog.open)
            dialog.showModal();
        else if (!this.open && dialog.open)
            dialog.close();
    }
    panelWidth() {
        const width = Number(this.width);
        if (this.width == null || !Number.isFinite(width) || width <= 0)
            return undefined;
        return width;
    }
    hasFooter() {
        return Array.from(this.el.children).some((child) => child.getAttribute('slot') === 'footer');
    }
    render() {
        const known = SIZES.find((candidate) => candidate === this.size);
        const size = known || 'fixed';
        if (!known)
            warnLegacyValue('uai-modal', 'size', this.size, size);
        return (h(Host, { key: 'c7784ba8dd41b2293eddf6431bba010cd25d4795' }, h("dialog", { key: '7dc7340aa92194ccea0ecfa63e0e0f014e956757', ref: (el) => (this.dialogEl = el), class: {
                modal__dialog: true,
                'modal__dialog--open': this.open,
                [`modal__dialog--${size}`]: true,
            }, part: "dialog", "aria-label": this.heading ? undefined : this.label, "aria-labelledby": this.heading ? 'modal-title' : undefined }, h("div", { key: '23ab813763c93b0e18cae58d5e9490a7f3db6d49', class: "outzone", onClick: this.onOutzoneClick, "data-test": this.dtOutzone }), h("div", { key: 'f9b16a0e8192060449ac4e9b8b028c8613c5e791', class: { modal: true, [`modal--${size}`]: true }, part: "modal", style: this.panelWidth() ? { '--modal-width': `${this.panelWidth()}rem` } : undefined }, (this.heading || this.closeButton) && (h("div", { key: '5b873ddbc95cd83cf4423ed52b81e335c84b46ea', class: "modal__header", part: "header" }, this.heading && (h("uai-typo", { key: '788b06b7adef4e5dbe6bcd94d4c67001064e34de', id: "modal-title", class: "modal__title", part: "title", tag: "h2", variant: "title-md", bold: "semibold", margin: false }, this.heading)), this.closeButton && (h("button", { key: '81c7c7cbcf5de9c3f4b8a57bce7413841be29d22', type: "button", class: "modal__close", part: "close", "aria-label": this.closeLabel, "data-test": this.dtButtonClose, onClick: () => this.setOpen(false) }, h("uai-icon", { key: '607822fbd17451acd4453f788a0c74316d6d5ceb', name: "close", size: "medium", "aria-hidden": "true" }))))), h("div", { key: '7a93d763fd5bb351b25fa81942c5188155dab841', class: "modal__body", part: "body" }, h("slot", { key: '609971587a453538e050dd501cde32f86eabc3ef' })), this.hasFooter() && (h("div", { key: 'd16fd35529c80f212bb88ae5331afe7682ed2c19', class: "modal__footer", part: "footer" }, h("slot", { key: 'ffaf29860ab0d3ebb6c4a53516477e1e5cd48fca', name: "footer" })))))));
    }
    static get is() { return "uai-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-modal.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-modal.css"]
        };
    }
    static get properties() {
        return {
            "open": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Opens or closes the modal. Use for declarative control; pair with uaiModalChanged. Avoid toggling it on every render."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "open",
                "defaultValue": "false"
            },
            "closeButton": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Shows the close button when 'true'. Use for dismissible dialogs; avoid hiding it when no other action closes the modal."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "close-button",
                "defaultValue": "true"
            },
            "size": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "UaiModalSize",
                    "resolved": "\"dynamic\" | \"fixed\"",
                    "references": {
                        "UaiModalSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-modal/uai-modal.tsx",
                            "id": "src/components/uai-modal/uai-modal.tsx::UaiModalSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Panel size. 'fixed' keeps a standard width and height; 'dynamic' grows with the content. Use 'dynamic' for variable content."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "size",
                "defaultValue": "'fixed'"
            },
            "width": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Panel width in rem, e.g. `30` for 30rem. In `fixed` it is the width; in `dynamic` it is the maximum width. Use for narrower or wider dialogs; avoid values wider than the screen, the panel never exceeds it. Defaults to 41."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "width"
            },
            "outzoneClose": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Closes the modal when the backdrop is clicked. Use 'false' for flows that need an explicit choice."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "outzone-close",
                "defaultValue": "true"
            },
            "enterClose": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Closes the modal with Escape, and with Enter when no control (button, link, field) has the focus. Use 'false' for flows that need an explicit choice."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "enter-close",
                "defaultValue": "true"
            },
            "closeLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Accessible name of the close button. Use a translated label; avoid leaving it generic."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "close-label",
                "defaultValue": "'Fechar'"
            },
            "heading": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Title shown in the header. Use a short noun phrase; it also names the dialog for assistive technology."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "heading"
            },
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Accessible name of the dialog. Use only when there is no `heading`; pair with a short sentence."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "dtOutzone": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Test selector on the backdrop. Use for automation; pair with semantic queries. Avoid styling by it."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-outzone",
                "defaultValue": "null"
            },
            "dtButtonClose": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Test selector on the close button. Use for automation; pair with semantic queries. Avoid styling by it."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-close",
                "defaultValue": "null"
            }
        };
    }
    static get events() {
        return [{
                "method": "uaiModalChanged",
                "name": "uaiModalChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the modal opens or closes. Use to sync external state; avoid duplicate handlers."
                },
                "complexType": {
                    "original": "{ modalStatus: 'opened' | 'closed' }",
                    "resolved": "{ modalStatus: \"opened\" | \"closed\"; }",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "toggle": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Opens the modal when closed and closes it when open. Use for imperative control; pair with uaiModalChanged.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "openChanged"
            }];
    }
}
