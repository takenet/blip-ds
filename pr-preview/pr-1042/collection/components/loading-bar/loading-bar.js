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
        return (h(Host, { key: 'ab13fc090bf94745c71f3d56e6320a257ba10c1f' }, h("div", { key: '095d285f30264f774df03300ddf48f6ca0058f82', class: { loading_bar: true, [`size_${this.size}`]: true }, "data-test": this.dataTest }, h("div", { key: '4eab84a057402bd546602c38d951a4985884a23a', class: { bar_behind: true } }, h("div", { key: '710b82f465f6194c3b3952ede57de1f4d176ce72', class: { loading: true }, style: styles }, h("div", { key: '0675600ee02ca4efe2f7a1a460efb07f622a988c', class: "loader" }))))));
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
