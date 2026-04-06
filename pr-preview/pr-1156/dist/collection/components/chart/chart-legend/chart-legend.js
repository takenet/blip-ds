import { Host, h } from "@stencil/core";
/**
 * ChartLegend — Renders the interactive legend for chart components.
 *
 * Must be used as a child of bds-chart-line or bds-chart-bar.
 * The parent chart pushes data via setLegendState() and listens to bdsLegendItemClick.
 *
 * Modes:
 *  - Series mode (no dataKey): reads bds-line/bds-bar siblings for color + label.
 *  - Category mode (dataKey set): reads unique values of dataKey from data,
 *    assigns palette colors to each category, and recolors bars/dots accordingly.
 */
export class ChartLegend {
    constructor() {
        this.align = 'center';
        this.items = [];
        this.activeItem = null;
        this.currentAlign = 'center';
    }
    async setLegendState(state) {
        this.items = state.items;
        this.currentAlign = state.align;
        this.activeItem = state.activeItem;
    }
    render() {
        if (this.items.length === 0) {
            return h(Host, { style: { display: 'none' } });
        }
        const justifyContent = this.currentAlign === 'left' ? 'flex-start' :
            this.currentAlign === 'right' ? 'flex-end' : 'center';
        return (h(Host, null, h("ul", { class: "chart__legend-list", style: { justifyContent } }, this.items.map(item => (h("li", { key: `legend-${item.label}`, class: `chart__legend-item${this.activeItem && this.activeItem !== item.label ? ' chart__legend-item--inactive' : ''}`, onClick: () => this.bdsLegendItemClick.emit(item.label) }, h("span", { class: "chart__legend-item-color", style: { background: item.color } }), h("bds-typo", { variant: "fs-12", tag: "span" }, item.label)))))));
    }
    static get is() { return "bds-chart-legend"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["chart-legend.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["chart-legend.css"]
        };
    }
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "align": {
                "type": "string",
                "attribute": "align",
                "mutable": false,
                "complexType": {
                    "original": "'left' | 'center' | 'right'",
                    "resolved": "\"center\" | \"left\" | \"right\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'center'"
            }
        };
    }
    static get states() {
        return {
            "items": {},
            "activeItem": {},
            "currentAlign": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsLegendItemClick",
                "name": "bdsLegendItemClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "setLegendState": {
                "complexType": {
                    "signature": "(state: LegendState) => Promise<void>",
                    "parameters": [{
                            "name": "state",
                            "type": "LegendState",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "LegendState": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/chart/chart-legend/chart-legend.tsx",
                            "id": "src/components/chart/chart-legend/chart-legend.tsx::LegendState"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
}
//# sourceMappingURL=chart-legend.js.map
