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
        return (h("div", { key: 'c5ef3f0fc33baa0e1733e6f175d07efa9b2712b3', class: {
                alert__dialog: true,
                'alert__dialog--open': this.open,
                [`alert__dialog--${this.position}`]: true,
            } }, h("div", { key: '5b1709a59898f0e729169fb53ce9ace11eef5a05', class: "alert", "data-test": this.dataTest }, h("slot", { key: '29bd522f9606a46af736acdc9e793b75190251ea' }))));
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
                "attribute": "open",
                "defaultValue": "false"
            },
            "dataTest": {
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
                    "text": "Data test is the prop to specifically test the component action object."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            },
            "position": {
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
                    "text": "Define whether the component will occupy the entire screen or just the parent."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "position",
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
