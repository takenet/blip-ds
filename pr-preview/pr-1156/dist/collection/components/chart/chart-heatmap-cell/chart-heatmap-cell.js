import { Host, h } from "@stencil/core";
/**
 * HeatmapCell — Configuration slot for bds-chart-heatmap.
 *
 * Place as a child of <bds-chart-heatmap> to override cell appearance.
 * Renders as display:none — parent reads props via getAttribute().
 *
 * @example
 * <bds-chart-heatmap data="...">
 *   <bds-heatmap-cell color="#0d6efd" radius="6"></bds-heatmap-cell>
 * </bds-chart-heatmap>
 */
export class ChartHeatmapCell {
    render() {
        return (h(Host, { key: 'f0e5a1ff8d31bcef0c54f0023a5f15a31f31263a', "data-heatmap-cell": true, "data-color": this.color, "data-radius": this.radius, "data-value-key": this.valueKey, style: { display: 'none' } }));
    }
    static get is() { return "bds-heatmap-cell"; }
    static get properties() {
        return {
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
                    "text": "Base fill color of the cells. Overrides bds-chart-heatmap color prop."
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "Border-radius of cells in pixels. Overrides bds-chart-heatmap cellRadius prop."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "valueKey": {
                "type": "string",
                "attribute": "value-key",
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
                    "text": "Data field key for intensity value. Overrides bds-chart-heatmap valueKey prop."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=chart-heatmap-cell.js.map
