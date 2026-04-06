'use strict';

var index = require('./index-t1DDWEYz.js');

const chartLegendCss = ":host{display:block;-ms-flex-negative:0;flex-shrink:0;padding:6px 8px 2px}.chart__legend-list{list-style:none;margin:0;padding:0;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:4px 8px}.chart__legend-item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:6px;cursor:pointer;padding:4px 8px;border-radius:4px;font-size:12px;-webkit-transition:opacity 0.2s ease, background 0.15s ease;transition:opacity 0.2s ease, background 0.15s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.chart__legend-item:hover{background:rgba(0, 0, 0, 0.05)}.chart__legend-item--inactive{opacity:0.35}.chart__legend-item-color{width:10px;height:10px;border-radius:50%;-ms-flex-negative:0;flex-shrink:0}";

const ChartLegend = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsLegendItemClick = index.createEvent(this, "bdsLegendItemClick");
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
            return index.h(index.Host, { style: { display: 'none' } });
        }
        const justifyContent = this.currentAlign === 'left' ? 'flex-start' :
            this.currentAlign === 'right' ? 'flex-end' : 'center';
        return (index.h(index.Host, null, index.h("ul", { class: "chart__legend-list", style: { justifyContent } }, this.items.map(item => (index.h("li", { key: `legend-${item.label}`, class: `chart__legend-item${this.activeItem && this.activeItem !== item.label ? ' chart__legend-item--inactive' : ''}`, onClick: () => this.bdsLegendItemClick.emit(item.label) }, index.h("span", { class: "chart__legend-item-color", style: { background: item.color } }), index.h("bds-typo", { variant: "fs-12", tag: "span" }, item.label)))))));
    }
};
ChartLegend.style = chartLegendCss;

exports.bds_chart_legend = ChartLegend;
//# sourceMappingURL=bds-chart-legend.entry.cjs.js.map

//# sourceMappingURL=bds-chart-legend.cjs.entry.js.map