import { Host, h } from "@stencil/core";
export class BdsloadingBar {
    constructor() {
        /**
         * Percent, property to enter the loading bar status percentage value.
         */
        this.percent = 0;
        /**
         * Size, property to define size of component.
         */
        this.size = 'default';
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
        return (h(Host, { key: 'acf50999b50326a9bb4ee43f9a7a63d23b7f0b21' }, h("div", { key: '6a6a2ef9b824f6c22e2eda1d5b71e07a0bbcec4d', class: { loading_bar: true, [`size_${this.size}`]: true }, "data-test": this.dataTest }, h("div", { key: '67d2a15016f5aad9dcb4d86ace562c95362ad4ba', class: { bar_behind: true } }, h("div", { key: 'be826a82995a31b03e64515de95a6eda1e7f3ab4', class: { loading: true }, style: styles }, h("div", { key: 'eeb6af21a18ce5434a5aec71131ab765059231a7', class: "loader" }))))));
    }
    static get is() { return "bds-loading-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["loading-bar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["loading-bar.css"]
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
                    "text": "Percent, property to enter the loading bar status percentage value."
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
                    "original": "loadingBarSize",
                    "resolved": "\"default\" | \"small\"",
                    "references": {
                        "loadingBarSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/loading-bar/loading-bar.tsx",
                            "id": "src/components/loading-bar/loading-bar.tsx::loadingBarSize"
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
//# sourceMappingURL=loading-bar.js.map
