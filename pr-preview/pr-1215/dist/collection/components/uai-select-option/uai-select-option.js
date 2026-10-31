import { Host, h } from "@stencil/core";
/**
 * Declarative option of UaiSelect. Use it as a child of uai-select when the options are written in markup; the text
 * is the visible label. Pair with value; avoid it together with the options prop, which takes precedence. It renders
 * nothing by itself.
 *
 * @slot - Option label.
 */
export class UaiSelectOption {
    constructor() {
        /** Prevents choosing the option. Use for unavailable choices; pair with explanatory text elsewhere; avoid hiding options by disabling them all. */
        this.disabled = false;
        /** Optional UAI icon name shown before the label. Use to reinforce the label; pair with the label text; avoid icons without meaning. */
        this.icon = null;
    }
    render() {
        return (h(Host, { key: '50fd404ec677c86b6417e79377f1b4068f229eeb', hidden: true }, h("slot", { key: '0ed87af4e0c8e122b30969b8bf47f7b65ab22e99' })));
    }
    static get is() { return "uai-select-option"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-select-option.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-select-option.css"]
        };
    }
    static get properties() {
        return {
            "value": {
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
                    "text": "Value submitted and emitted when the option is chosen. Use a short stable string; pair with the label text; avoid duplicates inside one select."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "value"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Prevents choosing the option. Use for unavailable choices; pair with explanatory text elsewhere; avoid hiding options by disabling them all."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "icon": {
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
                    "text": "Optional UAI icon name shown before the label. Use to reinforce the label; pair with the label text; avoid icons without meaning."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "icon",
                "defaultValue": "null"
            }
        };
    }
}
