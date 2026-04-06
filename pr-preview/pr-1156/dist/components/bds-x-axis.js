import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const ChartXAxis = /*@__PURE__*/ proxyCustomElement(class ChartXAxis extends H {
    constructor() {
        super();
        this.__registerHost();
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
}, [0, "bds-x-axis", {
        "dataKey": [1, "data-key"],
        "tickLine": [4, "tick-line"],
        "lineColor": [1, "line-color"],
        "labelColor": [1, "label-color"],
        "tickMargin": [2, "tick-margin"],
        "axisLine": [4, "axis-line"],
        "tickFormatter": [1, "tick-formatter"],
        "tickCount": [2, "tick-count"],
        "show": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-x-axis"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-x-axis":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ChartXAxis);
            }
            break;
    } });
}

const BdsXAxis = ChartXAxis;
const defineCustomElement = defineCustomElement$1;

export { BdsXAxis, defineCustomElement };
//# sourceMappingURL=bds-x-axis.js.map

//# sourceMappingURL=bds-x-axis.js.map