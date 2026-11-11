import { Host, h } from "@stencil/core";
import { warnLegacyValue } from "../../utils/deprecation";
import { supportsPopover } from "../../utils/uai-overlay";
const SIZES = ['fixed', 'dynamic'];
/**
 * Dialog that blocks the page behind a backdrop to ask for a decision or show focused content.
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
        /** Closes the modal on Enter or Escape. Use 'false' when Enter is used inside the content, such as in forms. */
        this.enterClose = true;
        /** Accessible name of the close button. Use a translated label; avoid leaving it generic. */
        this.closeLabel = 'Fechar';
        /** Test selector on the backdrop. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dtOutzone = null;
        /** Test selector on the close button. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dtButtonClose = null;
        this.onKeydown = (event) => {
            if (this.enterClose && (event.key === 'Enter' || event.key === 'Escape')) {
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
        this.syncListener();
    }
    componentDidRender() {
        this.syncTopLayer();
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this.onKeydown, false);
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
    // The dialog opens in the top layer (Popover API) so no ancestor stacking context can cover it.
    syncTopLayer() {
        var _a;
        const dialog = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.modal__dialog');
        if (!dialog || !supportsPopover() || typeof dialog.showPopover !== 'function')
            return;
        const shown = dialog.matches(':popover-open');
        if (this.open && !shown)
            dialog.showPopover();
        else if (!this.open && shown)
            dialog.hidePopover();
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
        return (h(Host, { key: 'd76be5095aa6ce287e6c7c470563973da5eb6dde' }, h("div", { key: '7d99aa167f66609911c1e745a87be9b65b939cad', class: {
                modal__dialog: true,
                'modal__dialog--open': this.open,
                [`modal__dialog--${size}`]: true,
            }, part: "dialog", popover: supportsPopover() ? 'manual' : undefined }, h("div", { key: 'af78fe3a9022b2b37815d2868e59b2a32cc32ee4', class: "outzone", onClick: this.onOutzoneClick, "data-test": this.dtOutzone }), h("div", { key: '722e95cc2b719a43564d70e2769410852145d634', class: { modal: true, [`modal--${size}`]: true }, part: "modal", role: "dialog", style: this.panelWidth() ? { '--modal-width': `${this.panelWidth()}rem` } : undefined, "aria-modal": "true", "aria-label": this.heading ? undefined : this.label, "aria-labelledby": this.heading ? 'modal-title' : undefined }, (this.heading || this.closeButton) && (h("div", { key: 'a034b2ad3487deec67b039628ba7f437a13e2f52', class: "modal__header", part: "header" }, this.heading && (h("uai-typo", { key: '2ef8853b6e50cc4f785c3b0ce7aa78e0cdd0871b', id: "modal-title", class: "modal__title", part: "title", tag: "h2", variant: "title-md", bold: "semibold", margin: false }, this.heading)), this.closeButton && (h("button", { key: 'c5abf6b241845cfe2b14a9e9e7f60c7a29d92894', type: "button", class: "modal__close", part: "close", "aria-label": this.closeLabel, "data-test": this.dtButtonClose, onClick: () => this.setOpen(false) }, h("uai-icon", { key: 'c6bc083cad4d444948928985e93163869b26290c', name: "close", size: "medium", "aria-hidden": "true" }))))), h("div", { key: 'e3e8c6eba5f02c764dc8e22621b20e4a412b5f55', class: "modal__body", part: "body" }, h("slot", { key: '4b6d86c7f77867d5ca262013275be325d9676422' })), this.hasFooter() && (h("div", { key: '86a1081608b87eff31b66749251abcbb0c2dd967', class: "modal__footer", part: "footer" }, h("slot", { key: '6ba6355f806a9d5d01006e62e203c7f9a863268e', name: "footer" })))))));
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
                    "text": "Closes the modal on Enter or Escape. Use 'false' when Enter is used inside the content, such as in forms."
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
