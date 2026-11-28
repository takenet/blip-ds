import { Host, h } from "@stencil/core";
/**
 * Flex wrapper for custom content inside a uai-list-item slot. Use to stack or align extra content; pair with
 * the content-area or action-area slots; avoid it for whole page layouts (use uai-grid).
 *
 * @slot - Content laid out by the inner uai-grid.
 */
export class UaiListItemContent {
    constructor() {
        /** Flex direction of the content. Use column for stacked text; pair with gap. Avoid reverse directions for reading order. */
        this.direction = 'column';
        /** Main-axis alignment. Use flex-start by default; pair with direction. Avoid space-around in narrow rows. */
        this.justifyContent = 'flex-start';
        /** Wrapping of the content. Use wrap by default; pair with gap. Avoid nowrap with long content. */
        this.flexWrap = 'wrap';
        /** Cross-axis alignment. Use flex-start by default; pair with direction. Avoid stretch with icons. */
        this.alignItems = 'flex-start';
    }
    render() {
        return (h(Host, { key: '4c97397e3809bf317ee925f8a81ad4e21e476ced', class: { list_item_content: true } }, h("uai-grid", { key: '61d6c6e82285d0ce9d73ef294fe096546f32f35b', direction: this.direction, flexWrap: this.flexWrap, justifyContent: this.justifyContent, alignItems: this.alignItems, gap: this.gap }, h("slot", { key: 'a9cd0dc5d5271854c6be3f946fff645b9b047561' }))));
    }
    static get is() { return "uai-list-item-content"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-list-item-content.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-list-item-content.css"]
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
                    "text": "Flex direction of the content. Use column for stacked text; pair with gap. Avoid reverse directions for reading order."
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
                    "text": "Main-axis alignment. Use flex-start by default; pair with direction. Avoid space-around in narrow rows."
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
                    "text": "Wrapping of the content. Use wrap by default; pair with gap. Avoid nowrap with long content."
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
                    "text": "Cross-axis alignment. Use flex-start by default; pair with direction. Avoid stretch with icons."
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
                    "text": "Space between children, in the uai-grid gap scale. Use for separated content; pair with direction. Avoid margins on the children."
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
