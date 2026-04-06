import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const ChartHeatmapCell = /*@__PURE__*/ proxyCustomElement(class ChartHeatmapCell extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'f0e5a1ff8d31bcef0c54f0023a5f15a31f31263a', "data-heatmap-cell": true, "data-color": this.color, "data-radius": this.radius, "data-value-key": this.valueKey, style: { display: 'none' } }));
    }
}, [0, "bds-heatmap-cell", {
        "color": [1],
        "radius": [2],
        "valueKey": [1, "value-key"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-heatmap-cell"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-heatmap-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ChartHeatmapCell);
            }
            break;
    } });
}

const BdsHeatmapCell = ChartHeatmapCell;
const defineCustomElement = defineCustomElement$1;

export { BdsHeatmapCell, defineCustomElement };
//# sourceMappingURL=bds-heatmap-cell.js.map

//# sourceMappingURL=bds-heatmap-cell.js.map