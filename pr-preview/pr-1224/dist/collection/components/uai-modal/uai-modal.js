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
// Open modals, in the order they opened. Only the last one (the top) reacts to the keyboard, so a confirmation
// stacked over a form closes alone. The document scroll stays locked while at least one modal is open.
const openModals = [];
let scrollLocks = 0;
let previousOverflow = '';
const lockScroll = () => {
    if (scrollLocks++ === 0) {
        previousOverflow = document.body.style.getPropertyValue('overflow');
        document.body.style.setProperty('overflow', 'hidden');
    }
};
const unlockScroll = () => {
    if (scrollLocks > 0 && --scrollLocks === 0) {
        if (previousOverflow)
            document.body.style.setProperty('overflow', previousOverflow);
        else
            document.body.style.removeProperty('overflow');
    }
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
        /** Closes the modal with Enter when no control (button, link, field) has the focus. Use 'false' when Enter has another meaning in the content. Escape is controlled by `escapeClose`. */
        this.enterClose = true;
        /** Closes the modal with Escape, the standard way to dismiss a dialog. Use 'false' only for flows that need an explicit choice; pair with `outzoneClose` 'false'. */
        this.escapeClose = true;
        /** Accessible name of the close button. Use a translated label; avoid leaving it generic. */
        this.closeLabel = 'Fechar';
        /** Test selector on the backdrop. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dtOutzone = null;
        /** Test selector on the close button. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dtButtonClose = null;
        /** Whether something is slotted into `footer`. The footer wrapper stays hidden while it is empty. */
        this.hasFooter = false;
        this.registered = false;
        // Runs when the content of the footer slot changes, so a footer added or removed while the modal is open
        // (a conditional footer in React, for example) shows up or goes away.
        this.onFooterSlotChange = (event) => {
            const slot = event.target;
            this.hasFooter =
                typeof slot.assignedElements === 'function' ? slot.assignedElements().length > 0 : this.hasFooterInLightDom();
        };
        // Escape arrives as the native `cancel` event of the dialog, once per dialog and only on the top one.
        this.onCancel = (event) => {
            event.preventDefault();
            if (this.escapeClose)
                this.setOpen(false);
        };
        // Enter closes only when it is not being used by a control, so it never closes the modal while someone
        // activates a button or types in a field, and a keyboard click cannot reopen it through toggle().
        this.onKeydown = (event) => {
            if (event.defaultPrevented || !this.enterClose || event.key !== 'Enter' || !this.isTop())
                return;
            if (!usesEnter(event))
                this.setOpen(false);
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
        if (this.open)
            this.register();
        else
            this.unregister();
    }
    sizeChanged() {
        this.warnSize();
    }
    connectedCallback() {
        if (this.open)
            this.register();
    }
    componentWillLoad() {
        this.warnSize();
        this.hasFooter = this.hasFooterInLightDom();
    }
    componentDidRender() {
        this.syncNativeDialog();
    }
    disconnectedCallback() {
        this.unregister();
    }
    register() {
        if (this.registered)
            return;
        this.registered = true;
        openModals.push(this);
        lockScroll();
        document.addEventListener('keydown', this.onKeydown, false);
    }
    unregister() {
        if (!this.registered)
            return;
        this.registered = false;
        const index = openModals.indexOf(this);
        if (index >= 0)
            openModals.splice(index, 1);
        unlockScroll();
        document.removeEventListener('keydown', this.onKeydown, false);
    }
    isTop() {
        return openModals[openModals.length - 1] === this;
    }
    warnSize() {
        if (!SIZES.includes(this.size))
            warnLegacyValue('uai-modal', 'size', this.size, 'fixed');
    }
    setOpen(next) {
        this.open = next;
        this.uaiModalChanged.emit({ modalStatus: next ? 'opened' : 'closed' });
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
    hasFooterInLightDom() {
        return Array.from(this.el.children).some((child) => child.getAttribute('slot') === 'footer');
    }
    render() {
        const size = SIZES.includes(this.size) ? this.size : 'fixed';
        const width = this.panelWidth();
        return (h(Host, { key: '552a82d2a9779f6f63db37af06982637e8523366' }, h("dialog", { key: 'ec36823413ac4978db89653fd12689a2fee845e3', ref: (el) => (this.dialogEl = el), class: {
                modal__dialog: true,
                'modal__dialog--open': this.open,
                [`modal__dialog--${size}`]: true,
            }, part: "dialog", "aria-label": this.heading ? undefined : this.label, "aria-labelledby": this.heading ? 'modal-title' : undefined, onCancel: this.onCancel }, h("div", { key: 'f6c5ee6331ae39b41ad39f2cd78f3b4f9e8565f8', class: "outzone", onClick: this.onOutzoneClick, "data-test": this.dtOutzone }), h("div", { key: '1068ea80cd87984e8103618dca027bcc445e3d3d', class: { modal: true, [`modal--${size}`]: true }, part: "modal", style: width ? { '--modal-width': `${width}rem` } : undefined }, (this.heading || this.closeButton) && (h("div", { key: '450cfc2776a21dde9cdc00398ade447e233d7974', class: "modal__header", part: "header" }, this.heading && (h("uai-typo", { key: 'eea83aea37dd5ddd72dafcffb109d802e42580e2', id: "modal-title", class: "modal__title", part: "title", tag: "h2", variant: "title-md", bold: "semibold", margin: false }, this.heading)), this.closeButton && (h("button", { key: '2b4bc33c015b3476d9a827214c4c998e841f30b3', type: "button", class: "modal__close", part: "close", "aria-label": this.closeLabel, "data-test": this.dtButtonClose, onClick: () => this.setOpen(false) }, h("uai-icon", { key: 'd1d79a9f59ab810ce5ab8a30b540bc2cd872b3c3', name: "close", size: "medium", "aria-hidden": "true" }))))), h("div", { key: 'c2e795776bfed9359540934a1552d5676c8c4498', class: "modal__body", part: "body" }, h("slot", { key: '6fb2f18591716a9bdd4531565e6117b6f0046502' })), h("div", { key: '3a5c27f6185eff5798266914d8f0ee05c4285039', class: { modal__footer: true, 'modal__footer--empty': !this.hasFooter }, part: "footer" }, h("slot", { key: '432bcee25dd12eef4704f8bac2ec8724c1c0cb24', name: "footer", onSlotchange: this.onFooterSlotChange }))))));
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
                    "text": "Closes the modal with Enter when no control (button, link, field) has the focus. Use 'false' when Enter has another meaning in the content. Escape is controlled by `escapeClose`."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "enter-close",
                "defaultValue": "true"
            },
            "escapeClose": {
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
                    "text": "Closes the modal with Escape, the standard way to dismiss a dialog. Use 'false' only for flows that need an explicit choice; pair with `outzoneClose` 'false'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "escape-close",
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
    static get states() {
        return {
            "hasFooter": {}
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
            }, {
                "propName": "size",
                "methodName": "sizeChanged"
            }];
    }
}
