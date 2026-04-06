import { Host, h } from "@stencil/core";
/**
 * Line Component - Configuration for line in chart
 *
 * Must be used as a child of bds-chart-line
 */
export class ChartLineItem {
    constructor() {
        /**
         * Color of the line (hex, rgb, or CSS variable)
         */
        this.color = '#0d6efd';
        /**
         * Width of the line stroke (in pixels)
         */
        this.strokeWidth = 2;
        /**
         * Type of interpolation: linear or monotone (smooth)
         */
        this.curve = 'monotone';
        /**
         * Radius of data point circles (in pixels)
         */
        this.radius = 4;
        /**
         * Whether to show dots on data points
         */
        this.dot = true;
    }
    render() {
        return (h(Host, { key: '1d4717f65019f54267e390174fd06790e7bf6fc4', "data-line": true, "data-data-key": this.dataKey, "data-color": this.color, "data-stroke-width": this.strokeWidth, "data-curve": this.curve, "data-radius": this.radius, "data-dot": String(this.dot), style: { display: 'none' } }));
    }
    static get is() { return "bds-line"; }
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
                    "text": "Key from data object to use for line values"
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
                    "text": "Color of the line (hex, rgb, or CSS variable)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'#0d6efd'"
            },
            "strokeWidth": {
                "type": "number",
                "attribute": "stroke-width",
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
                    "text": "Width of the line stroke (in pixels)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "2"
            },
            "curve": {
                "type": "string",
                "attribute": "curve",
                "mutable": false,
                "complexType": {
                    "original": "'linear' | 'monotone'",
                    "resolved": "\"linear\" | \"monotone\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Type of interpolation: linear or monotone (smooth)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'monotone'"
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
                    "text": "Radius of data point circles (in pixels)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "4"
            },
            "dot": {
                "type": "boolean",
                "attribute": "dot",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether to show dots on data points"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
}
//# sourceMappingURL=chart-line-item.js.map
