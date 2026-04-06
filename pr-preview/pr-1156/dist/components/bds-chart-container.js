import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const chartContainerCss = ":host{display:block;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box}";

const ChartContainer = /*@__PURE__*/ proxyCustomElement(class ChartContainer extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'bb90810b2f222322e2bd56e09d8be754176fb5ca' }, h("slot", { key: '0ac289e948a70f0cdec975ee473e974aa1e50050' })));
    }
    static get style() { return chartContainerCss; }
}, [1, "bds-chart-container"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-chart-container"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-chart-container":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ChartContainer);
            }
            break;
    } });
}

const BdsChartContainer = ChartContainer;
const defineCustomElement = defineCustomElement$1;

export { BdsChartContainer, defineCustomElement };
//# sourceMappingURL=bds-chart-container.js.map

//# sourceMappingURL=bds-chart-container.js.map