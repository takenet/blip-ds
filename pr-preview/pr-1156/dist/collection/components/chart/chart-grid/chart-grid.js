import { Host, h } from "@stencil/core";
/**
 * CartesianGrid - Simple grid line renderer
 *
 * Props:
 * - vertical: boolean - Show vertical grid lines
 * - horizontal: boolean - Show horizontal grid lines
 * - strokeStyle: 'solid' | 'dashed' - Line style
 *
 * Usage: Pass gridLines data via context or parent coordination
 */
export class ChartGrid {
    constructor() {
        /**
         * Show vertical grid lines (X-axis)
         */
        this.vertical = false;
        /**
         * Show horizontal grid lines (Y-axis)
         */
        this.horizontal = true;
        /**
         * Grid line style: solid or dashed
         */
        this.strokeStyle = 'solid';
        /**
         * Grid line color
         */
        this.strokeColor = 'var(--color-border-1)';
        this.isVertical = false;
        this.isHorizontal = true;
    }
    updateBooleans() {
        this.isVertical = this.parseBoolean(this.vertical);
        this.isHorizontal = this.parseBoolean(this.horizontal);
    }
    componentDidLoad() {
        this.updateBooleans();
    }
    parseBoolean(value) {
        if (typeof value === 'boolean')
            return value;
        if (typeof value === 'string') {
            return value === 'true' || value === '';
        }
        return !!value;
    }
    getStrokeDasharray() {
        switch (this.strokeStyle) {
            case 'dashed':
                return '4,4';
            default:
                return '';
        }
    }
    render() {
        return (h(Host, { key: '2268b39ee2a0a56baf1473509baa9f01cbc03170', class: "chart-grid", "data-vertical": this.isVertical, "data-horizontal": this.isHorizontal, "data-stroke-style": this.strokeStyle }, h("style", { key: '08f4d8dfef60bd95b757bcb412e2d5b69fba4bec' }, `
          :host {
            --chart-grid-vertical: ${this.isVertical ? '1' : '0'};
            --chart-grid-horizontal: ${this.isHorizontal ? '1' : '0'};
            --chart-grid-stroke-style: ${this.strokeStyle};
            --chart-grid-dasharray: ${this.getStrokeDasharray()};
            --chart-grid-stroke-color: ${this.strokeColor};
          }
        `)));
    }
    static get is() { return "bds-chart-grid"; }
    static get properties() {
        return {
            "vertical": {
                "type": "any",
                "attribute": "vertical",
                "mutable": false,
                "complexType": {
                    "original": "boolean | string",
                    "resolved": "boolean | string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Show vertical grid lines (X-axis)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "horizontal": {
                "type": "any",
                "attribute": "horizontal",
                "mutable": false,
                "complexType": {
                    "original": "boolean | string",
                    "resolved": "boolean | string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Show horizontal grid lines (Y-axis)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "strokeStyle": {
                "type": "string",
                "attribute": "stroke-style",
                "mutable": false,
                "complexType": {
                    "original": "'solid' | 'dashed'",
                    "resolved": "\"dashed\" | \"solid\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Grid line style: solid or dashed"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'solid'"
            },
            "strokeColor": {
                "type": "string",
                "attribute": "stroke-color",
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
                    "text": "Grid line color"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'var(--color-border-1)'"
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "vertical",
                "methodName": "updateBooleans"
            }, {
                "propName": "horizontal",
                "methodName": "updateBooleans"
            }];
    }
}
//# sourceMappingURL=chart-grid.js.map
