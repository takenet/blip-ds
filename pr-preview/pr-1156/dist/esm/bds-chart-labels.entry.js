import { r as registerInstance, h, H as Host, a as getElement } from './index-BALoTlPi.js';
import { d as calculateGridsAndLabels } from './chart-math-CLjGJy6L.js';

const chartLabelsCss = ".chart-labels{position:absolute;top:0;left:0;pointer-events:none}.chart-labels__x text,.chart-labels__y text{font-size:12px;fill:rgba(0, 0, 0, 0.6);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.chart-labels__x{text-anchor:middle}.chart-labels__y{text-anchor:end}";

const ChartLabels = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.data = '[]';
        this.xkey = 'label';
        this.ykey = 'value';
        this.width = 720;
        this.height = 320;
    }
    getGridData() {
        try {
            return calculateGridsAndLabels(this.data, this.xkey, this.ykey, this.width, this.height);
        }
        catch (_a) {
            return { xGridLines: [], yGridLines: [], margin: { top: 20, right: 40, bottom: 60, left: 50 } };
        }
    }
    render() {
        const { xGridLines, yGridLines, margin } = this.getGridData();
        // Get label visibility from computed styles (set by parent container)
        const computedStyle = getComputedStyle(this.host);
        const showXLabels = computedStyle.getPropertyValue('--chart-show-x-labels').trim() === '1';
        const showYLabels = computedStyle.getPropertyValue('--chart-show-y-labels').trim() === '1';
        return (h(Host, { key: 'f0141e888bfe43fb6597743dfb19d5013eb8ee60' }, h("svg", { key: '2245f6a5b96c396bbc44768d2a128a06dc8208c2', width: this.width, height: this.height, class: "chart-labels", "aria-hidden": "true" }, showXLabels && (h("g", { key: '407cff7daadb54101875044c8f60d334537d7c7e', class: "chart-labels__x", "text-anchor": "middle", "font-size": "12", fill: "rgba(0,0,0,0.6)" }, xGridLines.map((label, idx) => (h("text", { key: `x-label-${idx}`, x: margin.left + label.x, y: this.height - margin.bottom + 18, class: "chart-labels__x-label" }, label.label))))), showYLabels && (h("g", { key: 'e83a4e4f6d796e41f9256fe242c8f6628399d936', class: "chart-labels__y", "text-anchor": "end", "font-size": "12", fill: "rgba(0,0,0,0.6)" }, yGridLines.map((label, idx) => (h("text", { key: `y-label-${idx}`, x: margin.left - 8, y: margin.top + label.y + 4, class: "chart-labels__y-label" }, label.label))))))));
    }
    get host() { return getElement(this); }
};
ChartLabels.style = chartLabelsCss;

export { ChartLabels as bds_chart_labels };
//# sourceMappingURL=bds-chart-labels.entry.js.map

//# sourceMappingURL=bds-chart-labels.entry.js.map