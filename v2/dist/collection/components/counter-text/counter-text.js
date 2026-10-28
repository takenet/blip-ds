import { h } from "@stencil/core";
import { CounterTextState } from "./counter-text-interface";
export class CounterText {
    constructor() {
        this.active = false;
        this.warning = { max: 20, min: 2 };
        this.delete = { max: 1, min: 0 };
    }
    getState() {
        const actualLength = this.getActualLength();
        if (actualLength >= this.warning.min && actualLength <= this.warning.max) {
            return CounterTextState.Warning;
        }
        if (actualLength <= this.delete.max) {
            return CounterTextState.Delete;
        }
        return CounterTextState.Default;
    }
    getActualLength() {
        return this.max - this.length;
    }
    render() {
        const state = this.getState();
        const actualLength = this.getActualLength();
        return (h("div", { key: '6faeb9dc159b1fffa595b6006d63c134fee78d70', class: {
                'counter-text': true,
                'counter-text--active': this.active,
                [`counter-text--${state}`]: true,
            } }, h("bds-typo", { key: 'b01eaa61e1de9e509c601d97f484d9fcb3336efe', variant: "fs-10" }, actualLength)));
    }
    static get is() { return "bds-counter-text"; }
    static get originalStyleUrls() {
        return {
            "$": ["counter-text.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["counter-text.css"]
        };
    }
    static get properties() {
        return {
            "length": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "length"
            },
            "max": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "max"
            },
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "active",
                "defaultValue": "false"
            },
            "warning": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "CounterTextRule",
                    "resolved": "{ max: number; min: number; }",
                    "references": {
                        "CounterTextRule": {
                            "location": "import",
                            "path": "./counter-text-interface",
                            "id": "src/components/counter-text/counter-text-interface.ts::CounterTextRule",
                            "referenceLocation": "CounterTextRule"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{ max: 20, min: 2 }"
            },
            "delete": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "CounterTextRule",
                    "resolved": "{ max: number; min: number; }",
                    "references": {
                        "CounterTextRule": {
                            "location": "import",
                            "path": "./counter-text-interface",
                            "id": "src/components/counter-text/counter-text-interface.ts::CounterTextRule",
                            "referenceLocation": "CounterTextRule"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{ max: 1, min: 0 }"
            }
        };
    }
}
