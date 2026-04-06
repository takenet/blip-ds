import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const ChartGrid = /*@__PURE__*/ proxyCustomElement(class ChartGrid extends H {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Show vertical grid lines (X-axis)
         */
        this.vertical = false;
        /**
         * Show horizontal grid lines (Y-axis)
         */
        this.horizontal = true;
        /**
         * Grid line style: solid or dashed
         */
        this.strokeStyle = 'solid';
        /**
         * Grid line color
         */
        this.strokeColor = 'var(--color-border-1)';
        this.isVertical = false;
        this.isHorizontal = true;
    }
    updateBooleans() {
        this.isVertical = this.parseBoolean(this.vertical);
        this.isHorizontal = this.parseBoolean(this.horizontal);
    }
    componentDidLoad() {
        this.updateBooleans();
    }
    parseBoolean(value) {
        if (typeof value === 'boolean')
            return value;
        if (typeof value === 'string') {
            return value === 'true' || value === '';
        }
        return !!value;
    }
    getStrokeDasharray() {
        switch (this.strokeStyle) {
            case 'dashed':
                return '4,4';
            default:
                return '';
        }
    }
    render() {
        return (h(Host, { key: '2268b39ee2a0a56baf1473509baa9f01cbc03170', class: "chart-grid", "data-vertical": this.isVertical, "data-horizontal": this.isHorizontal, "data-stroke-style": this.strokeStyle }, h("style", { key: '08f4d8dfef60bd95b757bcb412e2d5b69fba4bec' }, `
          :host {
            --chart-grid-vertical: ${this.isVertical ? '1' : '0'};
            --chart-grid-horizontal: ${this.isHorizontal ? '1' : '0'};
            --chart-grid-stroke-style: ${this.strokeStyle};
            --chart-grid-dasharray: ${this.getStrokeDasharray()};
            --chart-grid-stroke-color: ${this.strokeColor};
          }
        `)));
    }
    static get watchers() { return {
        "vertical": ["updateBooleans"],
        "horizontal": ["updateBooleans"]
    }; }
}, [0, "bds-chart-grid", {
        "vertical": [8],
        "horizontal": [8],
        "strokeStyle": [1, "stroke-style"],
        "strokeColor": [1, "stroke-color"]
    }, undefined, {
        "vertical": ["updateBooleans"],
        "horizontal": ["updateBooleans"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-chart-grid"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-chart-grid":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ChartGrid);
            }
            break;
    } });
}

const BdsChartGrid = ChartGrid;
const defineCustomElement = defineCustomElement$1;

export { BdsChartGrid, defineCustomElement };
//# sourceMappingURL=bds-chart-grid.js.map

//# sourceMappingURL=bds-chart-grid.js.map