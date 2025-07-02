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
        return (h("div", { key: '0c0a7d72486b8e738b8a949c53fef0a82213fa77', class: {
                'counter-text': true,
                'counter-text--active': this.active,
                [`counter-text--${state}`]: true,
            } }, h("bds-typo", { key: 'd0f91f1733aea8e3b914c1b2617c43a382afe55c', variant: "fs-10" }, actualLength)));
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
                "attribute": "length",
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
                "reflect": false
            },
            "max": {
                "type": "number",
                "attribute": "max",
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
                "reflect": false
            },
            "active": {
                "type": "boolean",
                "attribute": "active",
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
                "defaultValue": "false"
            },
            "warning": {
                "type": "unknown",
                "attribute": "warning",
                "mutable": true,
                "complexType": {
                    "original": "CounterTextRule",
                    "resolved": "{ max: number; min: number; }",
                    "references": {
                        "CounterTextRule": {
                            "location": "import",
                            "path": "./counter-text-interface",
                            "id": "src/components/counter-text/counter-text-interface.ts::CounterTextRule"
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
                "attribute": "delete",
                "mutable": true,
                "complexType": {
                    "original": "CounterTextRule",
                    "resolved": "{ max: number; min: number; }",
                    "references": {
                        "CounterTextRule": {
                            "location": "import",
                            "path": "./counter-text-interface",
                            "id": "src/components/counter-text/counter-text-interface.ts::CounterTextRule"
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
//# sourceMappingURL=counter-text.js.map
