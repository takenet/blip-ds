import { Host, h } from "@stencil/core";
export class BdsProgressBar {
    constructor() {
        /**
         * Percent, property to enter the progress bar status percentage value.
         */
        this.percent = 0;
        /**
         * Size, property to define size of component.
         */
        this.size = 'default';
        /**
         * Text, property to define status of component.
         */
        this.color = 'default';
        /**
         * Text, property to enable the bar info text.
         */
        this.text = '';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    render() {
        const styles = { width: `${this.percent ? (this.percent > 100 ? 100 : this.percent) : 0}%` };
        return (h(Host, { key: 'e9b0c2808b8d5e3e417f228f90cf8b8f88d7f28a' }, h("div", { key: 'a22838e950ada1be2ab18c0671bb04dd72c67167', class: { progress_bar: true, [`size_${this.size}`]: true }, "data-test": this.dataTest }, h("div", { key: 'fbf4eaf26ccdb84513cf881ddb2ab5ba45068301', class: { bar_behind: true } }, h("div", { key: '172fc6bc7c23a90a3b0787e1b1ac84294352c2a5', class: { progress: true, [`color_${this.color}`]: true }, style: styles }))), this.text && (h("div", { key: '1b15492bcd477f83e0626f27f8568572564c317d', class: { typo_progress: true } }, h("bds-typo", { key: '74abf932552e1c254e9f0f7e78d302b248f2cfbc', variant: "fs-14" }, this.text)))));
    }
    static get is() { return "bds-progress-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["progress-bar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["progress-bar.css"]
        };
    }
    static get properties() {
        return {
            "percent": {
                "type": "number",
                "attribute": "percent",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Percent, property to enter the progress bar status percentage value."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "progressBarSize",
                    "resolved": "\"default\" | \"small\"",
                    "references": {
                        "progressBarSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/progress-bar/progress-bar.tsx",
                            "id": "src/components/progress-bar/progress-bar.tsx::progressBarSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Size, property to define size of component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'default'"
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "progressBarColor",
                    "resolved": "\"default\" | \"information\" | \"positive\" | \"warning\"",
                    "references": {
                        "progressBarColor": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/progress-bar/progress-bar.tsx",
                            "id": "src/components/progress-bar/progress-bar.tsx::progressBarColor"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Text, property to define status of component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'default'"
            },
            "text": {
                "type": "string",
                "attribute": "text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Text, property to enable the bar info text."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "dataTest": {
                "type": "string",
                "attribute": "data-test",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Data test is the prop to specifically test the component action object."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            }
        };
    }
}
//# sourceMappingURL=progress-bar.js.map
