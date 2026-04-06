import { Host, h } from "@stencil/core";
/**
 * Bar Component - Configuration for bar in chart
 *
 * Must be used as a child of bds-chart-bar
 */
export class ChartBar {
    constructor() {
        /**
         * Color of the bar (hex, rgb, or CSS variable)
         */
        this.color = '#0d6efd';
        /**
         * Border radius of bar corners (in pixels)
         */
        this.radius = 4;
    }
    render() {
        return (h(Host, { key: '8ae07d370b82ec95ffeb3c300d4935e259b09a66', "data-bar": true, "data-data-key": this.dataKey, "data-color": this.color, "data-radius": this.radius, "data-stack-id": this.stackId, style: { display: 'none' } }));
    }
    static get is() { return "bds-bar"; }
    static get properties() {
        return {
            "dataKey": {
                "type": "string",
                "attribute": "data-key",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Key from data object to use for bar values"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Color of the bar (hex, rgb, or CSS variable)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'#0d6efd'"
            },
            "radius": {
                "type": "number",
                "attribute": "radius",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Border radius of bar corners (in pixels)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "4"
            },
            "stackId": {
                "type": "string",
                "attribute": "stack-id",
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
                    "text": "Stack identifier. Bars with the same stackId are stacked on top of each other.\nBars with different (or no) stackId are placed side-by-side."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=chart-bar-item.js.map
