import { h, Host } from "@stencil/core";
export class TabPanel {
    constructor() {
        /**
         * State to control if a tab panel is current active
         */
        this.isActive = false;
    }
    handleTabChange(event) {
        this.isActive = event.detail == this.group;
    }
    render() {
        return (h(Host, { key: '89399c4b74484c985757aaff21bce45af290c3af', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, h("slot", { key: 'd8b520f78fbb7272122c12b15632ee04ee127d0a' })));
    }
    static get is() { return "bds-tab-panel"; }
    static get originalStyleUrls() {
        return {
            "$": ["tab-panel.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tab-panel.css"]
        };
    }
    static get properties() {
        return {
            "group": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies the TabPanel group. Used to link it to the Tab."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "group"
            }
        };
    }
    static get states() {
        return {
            "isActive": {}
        };
    }
    static get listeners() {
        return [{
                "name": "bdsTabChange",
                "method": "handleTabChange",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "bdsTabInit",
                "method": "handleTabChange",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
