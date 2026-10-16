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
        return (h(Host, { key: '2cb4066270fc5ca03707d1e9e81da301d9ce46d6', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, h("slot", { key: '1dfd4ccfb46ae9e1ab2fbda3b18241884b842ef3' })));
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
                "attribute": "group",
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
                "reflect": false
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
//# sourceMappingURL=tab-panel.js.map
