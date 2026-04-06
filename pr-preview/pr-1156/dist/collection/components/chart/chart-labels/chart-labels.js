import { Host, h } from "@stencil/core";
import { calculateGridsAndLabels } from "../utils/chart-math";
export class ChartLabels {
    constructor() {
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
    static get is() { return "bds-chart-labels"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["chart-labels.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["chart-labels.css"]
        };
    }
    static get properties() {
        return {
            "data": {
                "type": "string",
                "attribute": "data",
                "mutable": false,
                "complexType": {
                    "original": "string | object[]",
                    "resolved": "object[] | string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'[]'"
            },
            "xkey": {
                "type": "string",
                "attribute": "xkey",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'label'"
            },
            "ykey": {
                "type": "string",
                "attribute": "ykey",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'value'"
            },
            "width": {
                "type": "number",
                "attribute": "width",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "720"
            },
            "height": {
                "type": "number",
                "attribute": "height",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "320"
            }
        };
    }
    static get elementRef() { return "host"; }
}
//# sourceMappingURL=chart-labels.js.map
