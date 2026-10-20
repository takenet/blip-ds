import { h } from "@stencil/core";
export class BdsAlert {
    constructor() {
        /**
         * Used to open/close the alert
         */
        this.open = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        /**
         * Define whether the component will occupy the entire screen or just the parent.
         */
        this.position = 'fixed';
        this.listener = (event) => {
            if (event.key == 'Enter' || event.key == 'Escape') {
                this.toggle();
            }
        };
    }
    /**
     * Can be used outside to open/close the alert
     */
    async toggle() {
        this.open = !this.open;
        if (this.open) {
            this.bdsAlertChanged.emit({ alertStatus: 'opened' });
        }
        else {
            this.bdsAlertChanged.emit({ alertStatus: 'closed' });
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
        return (h("div", { key: '53b7fbb22a38788cd76b827ae5aaf29db20c4fbc', class: {
                alert__dialog: true,
                'alert__dialog--open': this.open,
                [`alert__dialog--${this.position}`]: true,
            } }, h("div", { key: 'c076bd0a8626a1f3271bfe60f86a4e6e68c8993b', class: "alert", "data-test": this.dataTest }, h("slot", { key: 'e79559b82493e9efc52a221479c5c603a6b0a25a' }))));
    }
    static get is() { return "bds-alert"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["alert.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["alert.css"]
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
                    "text": "Used to open/close the alert"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "dataTest": {
                "type": "string",
                "attribute": "data-test",
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
                    "text": "Data test is the prop to specifically test the component action object."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "position": {
                "type": "string",
                "attribute": "position",
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
                    "text": "Define whether the component will occupy the entire screen or just the parent."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'fixed'"
            }
        };
    }
    static get events() {
        return [{
                "method": "bdsAlertChanged",
                "name": "bdsAlertChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when modal status has changed."
                },
                "complexType": {
                    "original": "{ alertStatus: string }",
                    "resolved": "{ alertStatus: string; }",
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
                    "text": "Can be used outside to open/close the alert",
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
//# sourceMappingURL=alert.js.map
