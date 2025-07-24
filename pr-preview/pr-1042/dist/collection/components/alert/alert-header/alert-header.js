import { h } from "@stencil/core";
export class AlertHeader {
    constructor() {
        /**
         * Variant. Entered as one of the variant. Can be one of:
         * 'system', 'error', 'warning', 'delete';
         */
        this.variant = 'system';
        /**
         * used for add icon the header. Uses the bds-icon component.
         */
        this.icon = null;
    }
    render() {
        return (h("div", { key: 'd43bde5580a3be573f250fc221e2907db1ea14f5', class: {
                alert__header: true,
                [`alert__header--${this.variant}`]: true,
            } }, this.icon && h("bds-icon", { key: '0f8d5cc6a6700628fb6cc19d4f1c74083e7e726d', class: "color-icon", theme: "outline", size: "x-large", name: this.icon }), h("bds-typo", { key: '03f676ffda6d3ebc5733ec493afb4fae604ad8bd', variant: "fs-16", bold: "bold" }, h("slot", { key: 'c8671c9d3b29368660de48a376a25365b5028b50' }))));
    }
    static get is() { return "bds-alert-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["alert-header.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["alert-header.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "AlertHeaderVariannt",
                    "resolved": "\"delete\" | \"error\" | \"system\" | \"warning\"",
                    "references": {
                        "AlertHeaderVariannt": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/alert/alert-header/alert-header.tsx",
                            "id": "src/components/alert/alert-header/alert-header.tsx::AlertHeaderVariannt"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Variant. Entered as one of the variant. Can be one of:\n'system', 'error', 'warning', 'delete';"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'system'"
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
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
                    "text": "used for add icon the header. Uses the bds-icon component."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "null"
            }
        };
    }
}
//# sourceMappingURL=alert-header.js.map
