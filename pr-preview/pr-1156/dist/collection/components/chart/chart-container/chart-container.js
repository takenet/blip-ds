import { Host, h } from "@stencil/core";
export class ChartContainer {
    render() {
        return (h(Host, { key: 'bb90810b2f222322e2bd56e09d8be754176fb5ca' }, h("slot", { key: '0ac289e948a70f0cdec975ee473e974aa1e50050' })));
    }
    static get is() { return "bds-chart-container"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["chart-container.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["chart-container.css"]
        };
    }
}
//# sourceMappingURL=chart-container.js.map
