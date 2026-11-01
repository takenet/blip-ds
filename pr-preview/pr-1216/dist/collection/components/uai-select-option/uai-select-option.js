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
        return (h(Host, { key: 'ebe1c2bad8d904d5c4c6c8ff486161d2f4c050ab', hidden: true }, h("slot", { key: '9667e02322d0e177dbd2b6aa3a1cff9ca64faed4' })));
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
