import { Host, h } from "@stencil/core";
/**
 * @deprecated Use `uai-progress-bar` instead.
 */
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
        return (h(Host, { key: 'd3253d3ecab0d3126df9b834dcb49df1a316bd30' }, h("div", { key: '8a2fec9ffbfd8dc9fca1f434604d613bffbacf07', class: { progress_bar: true, [`size_${this.size}`]: true }, "data-test": this.dataTest }, h("div", { key: 'd563863ac7d21d268af45a4791eb23081c68491c', class: { bar_behind: true } }, h("div", { key: 'f078fe0f6e35de5c964e915a241023ed9ec02684', class: { progress: true, [`color_${this.color}`]: true }, style: styles }))), this.text && (h("div", { key: 'bd070f915d02e5bbeab22ec954a8ddc155ee03f5', class: { typo_progress: true } }, h("bds-typo", { key: 'bc1d11e0eed6e36d1593835b4087b049d4dda613', variant: "fs-14" }, this.text)))));
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
                "attribute": "percent",
                "defaultValue": "0"
            },
            "size": {
                "type": "string",
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
                "attribute": "size",
                "defaultValue": "'default'"
            },
            "color": {
                "type": "string",
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
                "attribute": "color",
                "defaultValue": "'default'"
            },
            "text": {
                "type": "string",
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
                "attribute": "text",
                "defaultValue": "''"
            },
            "dataTest": {
                "type": "string",
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
                "attribute": "data-test",
                "defaultValue": "null"
            }
        };
    }
}
