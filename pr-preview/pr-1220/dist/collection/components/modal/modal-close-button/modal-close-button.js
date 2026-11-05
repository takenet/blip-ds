import { h } from "@stencil/core";
export class BdsModalCloseButton {
    constructor() {
        /**
         * Used to hide or show the close button
         */
        this.active = true;
    }
    render() {
        return (h("div", { key: '4989cf333b360a074cf6b658d98bf9f53d0583c8', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            } }, h("bds-icon", { key: '9ab540262b89c1e0b3b147d5c2c9bef07441a022', size: "medium", name: "close" })));
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
