import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const ChartYAxis = /*@__PURE__*/ proxyCustomElement(class ChartYAxis extends H {
    constructor() {
        super();
        this.__registerHost();
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
}, [0, "bds-y-axis", {
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
    const components = ["bds-y-axis"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-y-axis":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ChartYAxis);
            }
            break;
    } });
}

const BdsYAxis = ChartYAxis;
const defineCustomElement = defineCustomElement$1;

export { BdsYAxis, defineCustomElement };
//# sourceMappingURL=bds-y-axis.js.map

//# sourceMappingURL=bds-y-axis.js.map