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
        return (h(Host, { key: '7ec2d1228f8768bffbd8590f41c73e4fb3711a3b', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, h("slot", { key: 'dee4a82d98d4979a39a3d9f3a7e901f98ae1c2f8' })));
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
