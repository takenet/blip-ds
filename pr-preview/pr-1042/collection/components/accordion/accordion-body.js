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
        this.heightContainer = this.isOpen ? this.container.offsetHeight : 0;
        if (this.isOpen) {
            setTimeout(() => {
                this.isOpenAftAnimation = !this.isOpenAftAnimation;
            }, 500);
        }
        else {
            this.isOpenAftAnimation = !this.isOpenAftAnimation;
        }
    }
    render() {
        return (h("div", { key: '4b8bba0c905958a7dec1b1538357ae287ee94aa2', class: {
                accordion_body: true,
                accordion_body_divisor: this.hasDivisor,
                accordion_body_isOpen: this.isOpenAftAnimation,
            }, style: { height: `${this.heightContainer}px` }, "data-test": this.dataTest }, h("div", { key: 'e1a03b79db5c3d94016f0055484f36e1ae5e0228', class: "container", ref: (el) => this.refContainer(el) }, h("slot", { key: '668217497b33854a7e3c20267bd7dea955814866' }))));
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
//# sourceMappingURL=accordion-body.js.map
