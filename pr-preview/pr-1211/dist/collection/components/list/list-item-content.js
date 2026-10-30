import { h, Host } from "@stencil/core";
export class ListItemContent {
    constructor() {
        this.direction = 'column';
        this.justifyContent = 'flex-start';
        this.flexWrap = 'wrap';
        this.alignItems = 'flex-start';
    }
    render() {
        return (h(Host, { key: '815fd9e1e738cfff785612ba8bfe5e16436e5e13', class: {
                list_item_content: true,
            } }, h("bds-grid", { key: '15a57bc302cb66b03f5b3cafbb68b3b10fbe0c98', direction: this.direction, flexWrap: this.flexWrap, justifyContent: this.justifyContent, alignItems: this.alignItems, gap: this.gap }, h("slot", { key: 'dbaa41e7447698341cba5400ab9d4f4598c29905' }))));
    }
    static get is() { return "bds-list-item-content"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["list.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["list.css"]
        };
    }
    static get properties() {
        return {
            "direction": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "direction",
                    "resolved": "\"column\" | \"column-reverse\" | \"row\" | \"row-reverse\"",
                    "references": {
                        "direction": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::direction",
                            "referenceLocation": "direction"
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
                "reflect": false,
                "attribute": "direction",
                "defaultValue": "'column'"
            },
            "justifyContent": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "justifyContent",
                    "resolved": "\"center\" | \"flex-end\" | \"flex-start\" | \"space-around\" | \"space-between\" | \"space-evenly\" | \"stretch\"",
                    "references": {
                        "justifyContent": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::justifyContent",
                            "referenceLocation": "justifyContent"
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
                "reflect": false,
                "attribute": "justify-content",
                "defaultValue": "'flex-start'"
            },
            "flexWrap": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "flexWrap",
                    "resolved": "\"wrap\" | \"wrap-reverse\"",
                    "references": {
                        "flexWrap": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::flexWrap",
                            "referenceLocation": "flexWrap"
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
                "reflect": false,
                "attribute": "flex-wrap",
                "defaultValue": "'wrap'"
            },
            "alignItems": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "alignItems",
                    "resolved": "\"baseline\" | \"center\" | \"flex-end\" | \"flex-start\" | \"stretch\"",
                    "references": {
                        "alignItems": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::alignItems",
                            "referenceLocation": "alignItems"
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
                "reflect": false,
                "attribute": "align-items",
                "defaultValue": "'flex-start'"
            },
            "gap": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "gap",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"half\" | \"none\"",
                    "references": {
                        "gap": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::gap",
                            "referenceLocation": "gap"
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
                "reflect": false,
                "attribute": "gap"
            }
        };
    }
    static get elementRef() { return "hostElement"; }
}
