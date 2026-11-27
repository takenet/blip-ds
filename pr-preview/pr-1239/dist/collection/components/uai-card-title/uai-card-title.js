import { Host, h } from "@stencil/core";
/**
 * Title element for `UaiCardHeader` when composing with subcomponents.
 * Use inside `uai-card-header` (or pass `heading` directly to `uai-card`);
 * pair with `UaiCardSubtitle`; avoid long sentences that wrap onto multiple lines.
 *
 * @slot - Optional title content when `text` is not provided.
 */
export class UaiCardTitle {
    constructor() {
        /**
         * Text rendered as the card title.
         * Use a concise label; pair with `UaiCardHeader`; avoid duplicating the default slot content.
         */
        this.text = '';
    }
    render() {
        return (h(Host, { key: 'd3d5ee76ec5151df8b8e96f0c6ad850cb518baa7' }, h("uai-typo", { key: '24dba5df9e40efe3b48964ad1fa9fe4d7dc54200', class: "card-title__text", variant: "title", tag: "h4", bold: "medium", margin: false }, this.text ? this.text : h("slot", null))));
    }
    static get is() { return "uai-card-title"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-card-title.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-card-title.css"]
        };
    }
    static get properties() {
        return {
            "text": {
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
                    "text": "Text rendered as the card title.\nUse a concise label; pair with `UaiCardHeader`; avoid duplicating the default slot content."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "text",
                "defaultValue": "''"
            }
        };
    }
}
