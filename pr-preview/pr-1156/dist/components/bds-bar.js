import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const ChartBar = /*@__PURE__*/ proxyCustomElement(class ChartBar extends H {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Color of the bar (hex, rgb, or CSS variable)
         */
        this.color = '#0d6efd';
        /**
         * Border radius of bar corners (in pixels)
         */
        this.radius = 4;
    }
    render() {
        return (h(Host, { key: '8ae07d370b82ec95ffeb3c300d4935e259b09a66', "data-bar": true, "data-data-key": this.dataKey, "data-color": this.color, "data-radius": this.radius, "data-stack-id": this.stackId, style: { display: 'none' } }));
    }
}, [0, "bds-bar", {
        "dataKey": [1, "data-key"],
        "color": [1],
        "radius": [2],
        "stackId": [1, "stack-id"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-bar"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-bar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ChartBar);
            }
            break;
    } });
}

const BdsBar = ChartBar;
const defineCustomElement = defineCustomElement$1;

export { BdsBar, defineCustomElement };
//# sourceMappingURL=bds-bar.js.map

//# sourceMappingURL=bds-bar.js.map