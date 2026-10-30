import { h } from "@stencil/core";
export class AccordionBody {
    constructor() {
        this.container = null;
        this.isOpen = false;
        this.isOpenAftAnimation = false;
        this.numberElement = null;
        this.hasDivisor = true;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.refContainer = (el) => {
            this.container = el;
        };
    }
    async toggle() {
        this.isOpen = !this.isOpen;
    }
    async open() {
        this.isOpen = true;
    }
    async close() {
        this.isOpen = false;
    }
    async divisor(valor) {
        this.hasDivisor = valor;
    }
    isOpenChanged() {
        var _a;
        this.heightContainer = this.isOpen ? (((_a = this.container) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0) : 0;
        if (this.isOpen) {
            setTimeout(() => {
                this.isOpenAftAnimation = true;
            }, 500);
        }
        else {
            this.isOpenAftAnimation = false;
        }
    }
    render() {
        return (h("div", { key: '7560ea2df32f5e906ea34673ff08c6b368063d91', class: {
                accordion_body: true,
                accordion_body_divisor: this.hasDivisor,
                accordion_body_isOpen: this.isOpenAftAnimation,
            }, style: { height: `${this.heightContainer}px` }, "data-test": this.dataTest }, h("div", { key: '8ed482f5843de6988fd83385620a86ab96ac1a03', class: "container", ref: (el) => this.refContainer(el) }, h("slot", { key: '36bf52a9b29626e5dbbfe75d94458fd6cb93e7de' }))));
    }
    static get is() { return "bds-accordion-body"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["accordion.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["accordion.css"]
        };
    }
    static get properties() {
        return {
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
            }
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "isOpenAftAnimation": {},
            "heightContainer": {},
            "numberElement": {},
            "hasDivisor": {}
        };
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
                    "text": "",
                    "tags": []
                }
            },
            "open": {
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
                    "text": "",
                    "tags": []
                }
            },
            "close": {
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
                    "text": "",
                    "tags": []
                }
            },
            "divisor": {
                "complexType": {
                    "signature": "(valor: any) => Promise<void>",
                    "parameters": [{
                            "name": "valor",
                            "type": "any",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "isOpen",
                "methodName": "isOpenChanged"
            }];
    }
}
