import { Host, h } from "@stencil/core";
/**
 * Subtitle element for `UaiCardHeader` when composing with subcomponents.
 * Use inside `uai-card-header` (or pass `description` directly to `uai-card`);
 * pair with `UaiCardTitle`; avoid using without a corresponding title.
 *
 * @slot - Optional subtitle content when `text` is not provided.
 */
export class UaiCardSubtitle {
    constructor() {
        /**
         * Text rendered as the card subtitle.
         * Use for secondary context such as timestamps or scope; pair with `UaiCardTitle`; avoid duplicating the default slot.
         */
        this.text = '';
    }
    render() {
        return (h(Host, { key: 'e56c752429c8e0d03ad125842b86b96056e30542' }, h("uai-typo", { key: 'f91fcb6ab3744c155e59644a0901b7ba14652f68', variant: "body-base", tag: "p", bold: "regular", margin: false }, this.text ? this.text : h("slot", null))));
    }
    static get is() { return "uai-card-subtitle"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-card-subtitle.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-card-subtitle.css"]
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
                    "text": "Text rendered as the card subtitle.\nUse for secondary context such as timestamps or scope; pair with `UaiCardTitle`; avoid duplicating the default slot."
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
