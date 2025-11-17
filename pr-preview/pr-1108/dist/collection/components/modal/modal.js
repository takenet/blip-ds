import { h } from "@stencil/core";
export class BdsModal {
    constructor() {
        /**
         * Used to open/close the modal
         */
        this.open = false;
        /**
         * Used to hide or show the close button
         */
        this.closeButton = true;
        /**
         * Used to change the modal heights.
         */
        this.size = 'fixed';
        /**
         * If true, the modal will close clicking outside the component.
         */
        this.outzoneClose = true;
        /**
         * If true, the modal will close keydown Enter.
         */
        this.enterClose = true;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtOutzone is the data-test to button close.
         */
        this.dtOutzone = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonClose is the data-test to button close.
         */
        this.dtButtonClose = null;
        this.listener = (event) => {
            if (this.enterClose && (event.key == 'Enter' || event.key == 'Escape')) {
                this.toggle();
            }
        };
        this.handleMouseClick = () => {
            this.open = false;
            this.bdsModalChanged.emit({ modalStatus: 'closed' });
        };
        this.onClickCloseButtom = () => {
            if (this.outzoneClose === true) {
                this.open = false;
                this.bdsModalChanged.emit({ modalStatus: 'closed' });
            }
        };
    }
    /**
     * Can be used outside to open/close the modal
     */
    async toggle() {
        this.open = !this.open;
        if (this.open) {
            this.bdsModalChanged.emit({ modalStatus: 'opened' });
        }
        else {
            this.bdsModalChanged.emit({ modalStatus: 'closed' });
        }
    }
    isOpenChanged() {
        if (this.open) {
            document.addEventListener('keydown', this.listener, false);
        }
        else
            document.removeEventListener('keydown', this.listener, false);
    }
    render() {
        return (h("div", { key: '7c2245485dc05607d6bf3abc4ba765dcc1a56c26', class: {
                modal__dialog: true,
                'modal__dialog--open': this.open,
                [`modal__dialog--${this.size}`]: true,
            } }, h("div", { key: '5129cec6e970ab5688100a916e55b28f615208ac', class: { outzone: true }, onClick: () => this.onClickCloseButtom(), "data-test": this.dtOutzone }), h("div", { key: '3ae0b0b3cdad6485c8cf435ed6fbf053435a8b82', class: { modal: true, [`modal--${this.size}`]: true } }, this.closeButton && (h("bds-icon", { key: 'a8907580ef453f5227559bbcdd5af19f5c82e2b2', size: "medium", class: "close-button", name: "close", tabindex: "0", onClick: this.handleMouseClick, dataTest: this.dtButtonClose })), this.size == 'fixed' && h("slot", { key: '96c3a2963b970ddd6a98c2905e6d5c5c58463828' }), this.size !== 'fixed' && (h("div", { key: '61969dce2b8f71df5295ebd738fab61c9d50d367', class: { slot: true, [`slot--${this.size}`]: true } }, h("slot", { key: '37d83792edd16c2ce7a7807dfcb722375fd98119' }))))));
    }
    static get is() { return "bds-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["modal.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["modal.css"]
        };
    }
    static get properties() {
        return {
            "open": {
                "type": "boolean",
                "attribute": "open",
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
                    "text": "Used to open/close the modal"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "closeButton": {
                "type": "boolean",
                "attribute": "close-button",
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
                "defaultValue": "true"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": true,
                "complexType": {
                    "original": "sizes",
                    "resolved": "\"dynamic\" | \"fixed\"",
                    "references": {
                        "sizes": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/modal/modal.tsx",
                            "id": "src/components/modal/modal.tsx::sizes"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Used to change the modal heights."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'fixed'"
            },
            "outzoneClose": {
                "type": "boolean",
                "attribute": "outzone-close",
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
                    "text": "If true, the modal will close clicking outside the component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "enterClose": {
                "type": "boolean",
                "attribute": "enter-close",
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
                    "text": "If true, the modal will close keydown Enter."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "dtOutzone": {
                "type": "string",
                "attribute": "dt-outzone",
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtOutzone is the data-test to button close."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "dtButtonClose": {
                "type": "string",
                "attribute": "dt-button-close",
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtButtonClose is the data-test to button close."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            }
        };
    }
    static get events() {
        return [{
                "method": "bdsModalChanged",
                "name": "bdsModalChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when modal status has changed."
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
                    "text": "Can be used outside to open/close the modal",
                    "tags": []
                }
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "isOpenChanged"
            }];
    }
}
//# sourceMappingURL=modal.js.map
