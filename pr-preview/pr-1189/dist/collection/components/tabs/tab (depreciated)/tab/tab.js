import { h, Host } from "@stencil/core";
export class Tab {
    constructor() {
        /**
         * Prop to control externally if a tab will be active by default
         */
        this.active = false;
        /**
         * State to control if a tab is current active
         */
        this.isActive = false;
    }
    handleTabChange(event) {
        this.isActive = event.detail == this.group;
    }
    async onClick() {
        this.bdsTabChange.emit(this.group);
    }
    render() {
        const bold = this.isActive ? 'bold' : 'regular';
        return (h(Host, { key: 'f4db204ee53fea82e70d6c996597494189fc4fb1', class: {
                'bds-tab': true,
                ['bds-tab--selected']: this.isActive,
            }, onClick: this.onClick.bind(this) }, h("div", { key: '8adb9491ed811c2f5a79d40b25c8f278f4b45926', class: "bds-tab__text" }, h("bds-typo", { key: '4b03366759aa0364c55b73bb7fa4d6df7265f822', variant: "fs-16", bold: bold }, this.label))));
    }
    static get is() { return "bds-tab"; }
    static get originalStyleUrls() {
        return {
            "$": ["tab.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tab.css"]
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
                    "text": "Specifies the Tab group. Used to link it to the TabPanel."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "label": {
                "type": "string",
                "attribute": "label",
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
                    "text": "The text to be shown at the Tab"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "active": {
                "type": "boolean",
                "attribute": "active",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Prop to control externally if a tab will be active by default"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isActive": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsTabChange",
                "name": "bdsTabChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event to emmit when the active tab should be updated"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
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
//# sourceMappingURL=tab.js.map
