import { Host, h } from "@stencil/core";
/**
 * Close icon row for custom modal layouts. Use it when the default close button of uai-modal is hidden;
 * pair with a click handler on the host; avoid it as the only way to dismiss a modal.
 *
 * @part icon - The close icon box.
 */
export class UaiModalCloseButton {
    constructor() {
        /** Shows the close icon when 'true'. Use to hide it without removing the element; avoid toggling on every render. */
        this.active = true;
    }
    render() {
        return (h(Host, { key: '58e0b222045f512cbcf048633fb93bc7727a87a9' }, h("div", { key: 'a4466b0b45b4b9c103821ced90684e6ea5a818ad', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            }, part: "icon" }, h("uai-icon", { key: '0abb2b54f44e769abc40442bc22650dc17b9812d', name: "close", size: "medium", "aria-hidden": "true" }))));
    }
    static get is() { return "uai-modal-close-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-modal-close-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-modal-close-button.css"]
        };
    }
    static get properties() {
        return {
            "active": {
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
                    "text": "Shows the close icon when 'true'. Use to hide it without removing the element; avoid toggling on every render."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "active",
                "defaultValue": "true"
            }
        };
    }
}
