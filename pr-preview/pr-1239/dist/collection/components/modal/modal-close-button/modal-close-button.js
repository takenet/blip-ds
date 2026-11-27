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
        return (h("div", { key: '0060bf8435156ce5c21a7490129e925f23f3c65c', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            } }, h("bds-icon", { key: '9167d5a302fadc15ae0df8c609df65d8be56bdae', size: "medium", name: "close" })));
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
