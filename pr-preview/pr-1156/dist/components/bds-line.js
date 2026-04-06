import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const ChartLineItem = /*@__PURE__*/ proxyCustomElement(class ChartLineItem extends H {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Color of the line (hex, rgb, or CSS variable)
         */
        this.color = '#0d6efd';
        /**
         * Width of the line stroke (in pixels)
         */
        this.strokeWidth = 2;
        /**
         * Type of interpolation: linear or monotone (smooth)
         */
        this.curve = 'monotone';
        /**
         * Radius of data point circles (in pixels)
         */
        this.radius = 4;
        /**
         * Whether to show dots on data points
         */
        this.dot = true;
    }
    render() {
        return (h(Host, { key: '1d4717f65019f54267e390174fd06790e7bf6fc4', "data-line": true, "data-data-key": this.dataKey, "data-color": this.color, "data-stroke-width": this.strokeWidth, "data-curve": this.curve, "data-radius": this.radius, "data-dot": String(this.dot), style: { display: 'none' } }));
    }
}, [0, "bds-line", {
        "dataKey": [1, "data-key"],
        "color": [1],
        "strokeWidth": [2, "stroke-width"],
        "curve": [1],
        "radius": [2],
        "dot": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-line"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-line":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ChartLineItem);
            }
            break;
    } });
}

const BdsLine = ChartLineItem;
const defineCustomElement = defineCustomElement$1;

export { BdsLine, defineCustomElement };
//# sourceMappingURL=bds-line.js.map

//# sourceMappingURL=bds-line.js.map