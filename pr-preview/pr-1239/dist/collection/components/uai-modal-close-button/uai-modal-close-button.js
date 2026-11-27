import { Host, h } from "@stencil/core";
/**
 * Close button for custom modal layouts. It is a native button with an accessible name, so it takes the focus and
 * works with Enter and Space. Use it when the default close button of uai-modal is hidden; listen to `click` on it
 * to close the modal; avoid it as the only way to dismiss a modal.
 *
 * @part button - The native close button.
 */
export class UaiModalCloseButton {
    constructor() {
        /** Shows the close button when 'true'. Use to hide it without removing the element; a hidden button leaves the tab order. */
        this.active = true;
        /** Accessible name of the button. Use a translated label; avoid leaving it generic. */
        this.label = 'Fechar';
        /** Test selector on the button. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dtButton = null;
    }
    render() {
        return (h(Host, { key: '23206f5903dc5884c9f94c1f1684b075a5e77b2c' }, h("div", { key: '677160253f73c731c6e796bc61070b19f47c62cd', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            } }, h("button", { key: 'b3e434a5738f75614088b8f61a3db685a55d3117', type: "button", class: "modal__close__button", part: "button", "aria-label": this.label, "data-test": this.dtButton, disabled: !this.active }, h("uai-icon", { key: '9782c4903b22d9b51b6097a42a95056b0e8cf377', name: "close", size: "medium", "aria-hidden": "true" })))));
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
                    "text": "Shows the close button when 'true'. Use to hide it without removing the element; a hidden button leaves the tab order."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "active",
                "defaultValue": "true"
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
                    "text": "Accessible name of the button. Use a translated label; avoid leaving it generic."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "'Fechar'"
            },
            "dtButton": {
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
                    "text": "Test selector on the button. Use for automation; pair with semantic queries. Avoid styling by it."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button",
                "defaultValue": "null"
            }
        };
    }
}
