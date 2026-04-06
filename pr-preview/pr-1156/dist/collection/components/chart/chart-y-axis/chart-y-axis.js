import { Host, h } from "@stencil/core";
/**
 * YAxis Component - Configuration for Y-axis
 *
 * Must be used as a child of bds-chart-line or bds-chart-bar
 */
export class ChartYAxis {
    constructor() {
        /**
         * Key from data object to use for Y-axis scale
         */
        this.dataKey = 'value';
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
         * Increase to show more ticks (e.g., 10 for 20, 25, 30, 35, 40...)
         */
        this.tickCount = 5;
        /**
         * Show Y-axis labels
         */
        this.show = true;
    }
    render() {
        return (h(Host, { key: 'fd16befc52a9c304ff3678e3987ebaff318ab2d8', "data-y-axis": true, "data-data-key": this.dataKey, "data-tick-line": this.tickLine, "data-line-color": this.lineColor, "data-label-color": this.labelColor, "data-tick-margin": this.tickMargin, "data-axis-line": this.axisLine, "data-tick-formatter": this.tickFormatter, "data-tick-count": this.tickCount, "data-show": this.show, style: { display: 'none' } }));
    }
    static get is() { return "bds-y-axis"; }
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
                    "text": "Key from data object to use for Y-axis scale"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'value'"
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
                    "text": "Format function for tick labels (receives value, returns formatted string)"
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
                    "text": "Number of ticks to display on the Y-axis (default: 5)\nIncrease to show more ticks (e.g., 10 for 20, 25, 30, 35, 40...)"
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
                    "text": "Show Y-axis labels"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
}
//# sourceMappingURL=chart-y-axis.js.map
