import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const ChartPieConfig = /*@__PURE__*/ proxyCustomElement(class ChartPieConfig extends H {
    constructor() {
        super();
        this.__registerHost();
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
}, [0, "bds-pie-config", {
        "innerRadius": [2, "inner-radius"],
        "padAngle": [2, "pad-angle"],
        "cornerRadius": [2, "corner-radius"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-pie-config"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-pie-config":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ChartPieConfig);
            }
            break;
    } });
}

const BdsPieConfig = ChartPieConfig;
const defineCustomElement = defineCustomElement$1;

export { BdsPieConfig, defineCustomElement };
//# sourceMappingURL=bds-pie-config.js.map

//# sourceMappingURL=bds-pie-config.js.map