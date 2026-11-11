import { h } from "@stencil/core";
/**
 * @deprecated Use uai-modal-close-button with UaiThemeProvider for tokenized styling.
 */
export class BdsModalCloseButton {
    constructor() {
        /**
         * Used to hide or show the close button
         */
        this.active = true;
    }
    render() {
        return (h("div", { key: '8e12fc89505df9dce9910ccd4fffd568166744ae', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            } }, h("bds-icon", { key: '25292b4bbd341d077a58423aae29030be22325ea', size: "medium", name: "close" })));
    }
    static get is() { return "bds-modal-close-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["modal-close-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["modal-close-button.css"]
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
                    "text": "Used to hide or show the close button"
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
