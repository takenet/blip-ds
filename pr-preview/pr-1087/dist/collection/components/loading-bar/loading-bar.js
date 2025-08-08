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
        return (h(Host, { key: '8a86c5318f8a942d8b731fa5309a966b3ca0aa5d' }, h("div", { key: '0d856fee61837d68be3c09c8949ec681f02ada3f', class: { loading_bar: true, [`size_${this.size}`]: true }, "data-test": this.dataTest }, h("div", { key: 'bf99e339fea96af7dbb1f3a8e481e889ca684911', class: { bar_behind: true } }, h("div", { key: '0985dc5a8733d096481d4945a5437406a65e716e', class: { loading: true }, style: styles }, h("div", { key: '9262f9c270bf6ed67a87c1d3c870d3862c5312e1', class: "loader" }))))));
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
