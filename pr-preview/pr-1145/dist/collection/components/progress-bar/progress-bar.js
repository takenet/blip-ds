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
        return (h(Host, { key: '45260bbac205b7cefca95e995efdb19dc7cf0591' }, h("div", { key: '69bb68554d05b6469af65023032ffb1660f57fcd', class: { progress_bar: true, [`size_${this.size}`]: true }, "data-test": this.dataTest }, h("div", { key: '99397107698489eaa05b238de95feea5db0a1250', class: { bar_behind: true } }, h("div", { key: 'a02424dbec319b1fa284a15f5808b892b63e46b2', class: { progress: true, [`color_${this.color}`]: true }, style: styles }))), this.text && (h("div", { key: '4e0e00f2703d7f80c97ad65ad665b9d402d66945', class: { typo_progress: true } }, h("bds-typo", { key: '7c099b19eeeebfbd70dde18a594299d6666f4509', variant: "fs-14" }, this.text)))));
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
