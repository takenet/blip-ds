import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const chartLegendCss = ":host{display:block;-ms-flex-negative:0;flex-shrink:0;padding:6px 8px 2px}.chart__legend-list{list-style:none;margin:0;padding:0;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:4px 8px}.chart__legend-item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:6px;cursor:pointer;padding:4px 8px;border-radius:4px;font-size:12px;-webkit-transition:opacity 0.2s ease, background 0.15s ease;transition:opacity 0.2s ease, background 0.15s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.chart__legend-item:hover{background:rgba(0, 0, 0, 0.05)}.chart__legend-item--inactive{opacity:0.35}.chart__legend-item-color{width:10px;height:10px;border-radius:50%;-ms-flex-negative:0;flex-shrink:0}";

const ChartLegend = /*@__PURE__*/ proxyCustomElement(class ChartLegend extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.bdsLegendItemClick = createEvent(this, "bdsLegendItemClick");
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
    static get style() { return chartLegendCss; }
}, [1, "bds-chart-legend", {
        "dataKey": [1, "data-key"],
        "align": [1],
        "items": [32],
        "activeItem": [32],
        "currentAlign": [32],
        "setLegendState": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-chart-legend", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-chart-legend":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ChartLegend);
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsChartLegend = ChartLegend;
const defineCustomElement = defineCustomElement$1;

export { BdsChartLegend, defineCustomElement };
//# sourceMappingURL=bds-chart-legend.js.map

//# sourceMappingURL=bds-chart-legend.js.map