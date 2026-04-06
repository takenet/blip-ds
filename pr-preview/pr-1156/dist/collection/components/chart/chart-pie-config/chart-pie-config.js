import { Host, h } from "@stencil/core";
/**
 * PieConfig — Visual configuration slot for bds-chart-pie.
 *
 * Place as a child of <bds-chart-pie> to override default appearance.
 * Renders as display:none — parent reads props via getAttribute().
 *
 * @example
 * <bds-chart-pie data="...">
 *   <bds-pie-config inner-radius="70" pad-angle="0.03"></bds-pie-config>
 * </bds-chart-pie>
 */
export class ChartPieConfig {
    constructor() {
        /**
         * Inner radius as a percentage of the outer radius (0 = pie, 60 = donut).
         * Default: 60
         */
        this.innerRadius = 60;
        /**
         * Gap between slices in radians.
         * Default: 0.02
         */
        this.padAngle = 0.02;
        /**
         * Corner radius of each slice end-cap in pixels (0 = sharp corners).
         * Default: 3
         */
        this.cornerRadius = 3;
    }
    render() {
        return (h(Host, { key: '5c897dc10930fc0aee1b561537c108fc87080655', "data-pie-config": true, "data-inner-radius": this.innerRadius, "data-pad-angle": this.padAngle, "data-corner-radius": this.cornerRadius, style: { display: 'none' } }));
    }
    static get is() { return "bds-pie-config"; }
    static get properties() {
        return {
            "innerRadius": {
                "type": "number",
                "attribute": "inner-radius",
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
                    "text": "Inner radius as a percentage of the outer radius (0 = pie, 60 = donut).\nDefault: 60"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "60"
            },
            "padAngle": {
                "type": "number",
                "attribute": "pad-angle",
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
                    "text": "Gap between slices in radians.\nDefault: 0.02"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0.02"
            },
            "cornerRadius": {
                "type": "number",
                "attribute": "corner-radius",
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
                    "text": "Corner radius of each slice end-cap in pixels (0 = sharp corners).\nDefault: 3"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "3"
            }
        };
    }
}
//# sourceMappingURL=chart-pie-config.js.map
