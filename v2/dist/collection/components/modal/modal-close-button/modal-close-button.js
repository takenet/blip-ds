import { h } from "@stencil/core";
export class BdsModalCloseButton {
    constructor() {
        /**
         * Used to hide or show the close button
         */
        this.active = true;
    }
    render() {
        return (h("div", { key: '4af60a333c53152a5e4e7364ac24e8a9c404237b', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            } }, h("bds-icon", { key: '03ce77e34fe593a503904f4fb89afd77b72a2ed0', size: "medium", name: "close" })));
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
