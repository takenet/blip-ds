import { Host, h } from "@stencil/core";
/**
 * XAxis Component - Configuration for X-axis
 *
 * Must be used as a child of bds-chart-line or bds-chart-bar
 */
export class ChartXAxis {
    constructor() {
        /**
         * Key from data object to use for X-axis labels
         */
        this.dataKey = 'label';
        /**
         * Show tick lines
         */
        this.tickLine = true;
        /**
         * Color of tick lines and axis line
         */
        this.lineColor = 'var(--color-border-1)';
        /**
         * Color of axis labels
         */
        this.labelColor = 'var(--color-content-default)';
        /**
         * Margin between tick and label (in pixels)
         */
        this.tickMargin = 10;
        /**
         * Show axis line
         */
        this.axisLine = true;
        /**
         * Number of ticks to display on the Y-axis (default: 5)
         * Note: This applies only to numeric axes with calculated scales
         */
        this.tickCount = 5;
        /**
         * Show X-axis labels
         */
        this.show = true;
    }
    render() {
        return (h(Host, { key: 'c8bfa39640de514a1b7fcbcb51f679e1deb0dd63', "data-x-axis": true, "data-data-key": this.dataKey, "data-tick-line": this.tickLine, "data-line-color": this.lineColor, "data-label-color": this.labelColor, "data-tick-margin": this.tickMargin, "data-axis-line": this.axisLine, "data-tick-formatter": this.tickFormatter, "data-tick-count": this.tickCount, style: { display: 'none' } }));
    }
    static get is() { return "bds-x-axis"; }
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
                    "text": "Key from data object to use for X-axis labels"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'label'"
            },
            "tickLine": {
                "type": "boolean",
                "attribute": "tick-line",
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
                    "text": "Show tick lines"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "lineColor": {
                "type": "string",
                "attribute": "line-color",
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
                    "text": "Color of tick lines and axis line"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'var(--color-border-1)'"
            },
            "labelColor": {
                "type": "string",
                "attribute": "label-color",
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
                    "text": "Color of axis labels"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'var(--color-content-default)'"
            },
            "tickMargin": {
                "type": "number",
                "attribute": "tick-margin",
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
                    "text": "Margin between tick and label (in pixels)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "10"
            },
            "axisLine": {
                "type": "boolean",
                "attribute": "axis-line",
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
                    "text": "Show axis line"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "tickFormatter": {
                "type": "string",
                "attribute": "tick-formatter",
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
                    "text": "Format function for tick labels (receives value, returns formatted string)\nNote: In HTML attributes, use comma-separated string for simple transformations\nExample: \"slice,0,3\" to get first 3 characters"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "tickCount": {
                "type": "number",
                "attribute": "tick-count",
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
                    "text": "Number of ticks to display on the Y-axis (default: 5)\nNote: This applies only to numeric axes with calculated scales"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "5"
            },
            "show": {
                "type": "boolean",
                "attribute": "show",
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
                    "text": "Show X-axis labels"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
}
//# sourceMappingURL=chart-x-axis.js.map
