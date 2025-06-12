import { h } from "@stencil/core";
export class Accordion {
    constructor() {
        this.accGroup = null;
        this.accheaders = null;
        this.accBodies = null;
        this.isOpen = false;
        this.numberElement = null;
        this.condition = false;
        this.startOpen = false;
        this.divisor = true;
    }
    async toggle() {
        this.isOpen = !this.isOpen;
        this.bdsToggle.emit({ value: this.isOpen });
    }
    async open() {
        this.accheaders?.open();
        this.accBodies?.open();
        this.isOpen = true;
    }
    async close() {
        this.accheaders?.close();
        this.accBodies?.close();
        this.isOpen = false;
    }
    async notStart() {
        this.startOpen = false;
    }
    async reciveNumber(number) {
        this.numberElement = number;
    }
    isOpenChanged(value) {
        if (value) {
            if (this.accGroup.collapse == 'single' && this.condition === false) {
                this.accGroup?.closeAll(this.numberElement);
            }
            this.accheaders?.open();
            this.accBodies?.open();
            this.bdsAccordionOpen.emit();
        }
        else {
            this.accheaders?.close();
            this.accBodies?.close();
            this.bdsAccordionClose.emit();
        }
        this.condition = false;
    }
    divisorChanged(newValue) {
        const accordionBody = this.element.querySelector('bds-accordion-body');
        if (accordionBody) {
            accordionBody.divisor(newValue);
        }
    }
    componentWillLoad() {
        this.accGroup =
            this.element.parentElement.tagName == 'BDS-ACCORDION-GROUP' &&
                this.element.parentElement;
        this.accheaders = this.element.children[0];
        this.accBodies = this.element.children[1];
        // Passar a prop divisor para o AccordionBody
        const accordionBody = this.element.querySelector('bds-accordion-body');
        if (accordionBody) {
            accordionBody.divisor(this.divisor);
        }
        if (this.startOpen === true) {
            this.condition = true;
            this.isOpen = true;
        }
    }
    render() {
        return (h("div", { key: '6eccc3d0a35c8460a98dc2ad4dbbece19e8260b0', class: "accordion_group" }, h("slot", { key: '48b84b3db8e76028dc5a98161bef920c5ec12650' })));
    }
    static get is() { return "bds-accordion"; }
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
            "startOpen": {
                "type": "boolean",
                "attribute": "start-open",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "divisor": {
                "type": "boolean",
                "attribute": "divisor",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "numberElement": {},
            "condition": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsToggle",
                "name": "bdsToggle",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bdsAccordionOpen",
                "name": "bdsAccordionOpen",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bdsAccordionClose",
                "name": "bdsAccordionClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
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
            "notStart": {
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
            "reciveNumber": {
                "complexType": {
                    "signature": "(number: any) => Promise<void>",
                    "parameters": [{
                            "name": "number",
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
    static get elementRef() { return "element"; }
    static get watchers() {
        return [{
                "propName": "isOpen",
                "methodName": "isOpenChanged"
            }, {
                "propName": "divisor",
                "methodName": "divisorChanged"
            }];
    }
}
//# sourceMappingURL=accordion.js.map
