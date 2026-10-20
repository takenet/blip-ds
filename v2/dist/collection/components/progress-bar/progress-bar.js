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
        return (h(Host, { key: '83a0dca9c5306c29fef89c394af061832bc8fb62' }, h("div", { key: 'c95357c03d71648179434121335f01b51ecada31', class: { progress_bar: true, [`size_${this.size}`]: true }, "data-test": this.dataTest }, h("div", { key: '60f0a1139d9ca107d02c2514feab63ce9a81493b', class: { bar_behind: true } }, h("div", { key: '0d6b5702d1c8bfc66845a558d0fa61763ed9acff', class: { progress: true, [`color_${this.color}`]: true }, style: styles }))), this.text && (h("div", { key: 'a558820f57d99b4a2aa6bebb35f018d985f70d40', class: { typo_progress: true } }, h("bds-typo", { key: 'e18e8633adc0068606fa38880dc583b07ffcd539', variant: "fs-14" }, this.text)))));
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
