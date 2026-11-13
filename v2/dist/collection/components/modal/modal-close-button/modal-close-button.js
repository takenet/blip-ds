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
        return (h("div", { key: '91bdbc8cf2d9d4963a5e62241173b75c6927a18a', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            } }, h("bds-icon", { key: '3b4f648f3da20e268b5bcdb5271c65c8697f9f51', size: "medium", name: "close" })));
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
