import { h, Host } from "@stencil/core";
export class ListItemContent {
    constructor() {
        this.direction = 'column';
        this.justifyContent = 'flex-start';
        this.flexWrap = 'wrap';
        this.alignItems = 'flex-start';
    }
    render() {
        return (h(Host, { key: '867d10fd663eb97059301956fb296ba97018c4fe', class: {
                list_item_content: true,
            } }, h("bds-grid", { key: '54cbe303564aba426cf102008fb428ed37493d50', direction: this.direction, flexWrap: this.flexWrap, justifyContent: this.justifyContent, alignItems: this.alignItems, gap: this.gap }, h("slot", { key: '2597a24adbad2b81c2d5814a123bc26201ca44ce' }))));
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
                "attribute": "direction",
                "mutable": false,
                "complexType": {
                    "original": "direction",
                    "resolved": "\"column\" | \"column-reverse\" | \"row\" | \"row-reverse\"",
                    "references": {
                        "direction": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::direction"
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
                "defaultValue": "'column'"
            },
            "justifyContent": {
                "type": "string",
                "attribute": "justify-content",
                "mutable": false,
                "complexType": {
                    "original": "justifyContent",
                    "resolved": "\"center\" | \"flex-end\" | \"flex-start\" | \"space-around\" | \"space-between\" | \"space-evenly\" | \"stretch\"",
                    "references": {
                        "justifyContent": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::justifyContent"
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
                "defaultValue": "'flex-start'"
            },
            "flexWrap": {
                "type": "string",
                "attribute": "flex-wrap",
                "mutable": false,
                "complexType": {
                    "original": "flexWrap",
                    "resolved": "\"wrap\" | \"wrap-reverse\"",
                    "references": {
                        "flexWrap": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::flexWrap"
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
                "defaultValue": "'wrap'"
            },
            "alignItems": {
                "type": "string",
                "attribute": "align-items",
                "mutable": false,
                "complexType": {
                    "original": "alignItems",
                    "resolved": "\"baseline\" | \"center\" | \"flex-end\" | \"flex-start\" | \"stretch\"",
                    "references": {
                        "alignItems": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::alignItems"
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
                "defaultValue": "'flex-start'"
            },
            "gap": {
                "type": "string",
                "attribute": "gap",
                "mutable": false,
                "complexType": {
                    "original": "gap",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"half\" | \"none\"",
                    "references": {
                        "gap": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::gap"
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
                "reflect": false
            }
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=list-item-content.js.map
