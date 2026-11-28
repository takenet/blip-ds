import { Host, h } from "@stencil/core";
import { warnLegacyValue } from "../../utils/deprecation";
const COLORS = ['system', 'outline', 'info', 'success', 'warning', 'danger', 'disabled'];
/**
 * Small passive label that categorizes or tags an item. Use for short keywords or statuses;
 * pair with a text label; avoid using color alone to convey meaning or using it as an action.
 *
 * @slot - The chip text.
 * @part chip - The chip container.
 */
export class UaiChipTag {
    constructor() {
        /** Semantic color: system, outline, info, success, warning, danger or disabled. Use for status; pair with the text; avoid arbitrary colors. The legacy default value maps to system. */
        this.color = 'system';
        /** Test selector on the chip. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dataTest = null;
    }
    resolveColor() {
        if (this.color === 'default')
            return 'system';
        const known = COLORS.find((candidate) => candidate === this.color);
        if (known)
            return known;
        warnLegacyValue('uai-chip-tag', 'color', this.color, 'system');
        return 'system';
    }
    render() {
        const color = this.resolveColor();
        return (h(Host, { key: '5b12358d0bdcd5d8b24ce7019f1fccbf57b70a68' }, h("div", { key: '53edca247f1f14dca63382aa094245c94d23af7a', class: { chip: true, [`chip--${color}`]: true }, part: "chip", "data-test": this.dataTest }, this.icon && h("uai-icon", { key: '2fdebde6c54b128c5d838eeb8b5cb26e3f1eac21', class: "chip__icon", size: "x-small", name: this.icon }), h("uai-typo", { key: '71ea259b9a04a253541c56b6d3003199bcf359a5', class: "chip__text", tag: "span", variant: "caption", margin: false, noWrap: true }, h("slot", { key: '2223028c65f72b1f5d426d6f2d3e4217b3ed1037' })))));
    }
    static get is() { return "uai-chip-tag"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-chip-tag.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-chip-tag.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Icon name shown before the text. Use to reinforce the meaning; pair with the text; avoid decorative icons."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon"
            },
            "color": {
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
                    "text": "Semantic color: system, outline, info, success, warning, danger or disabled. Use for status; pair with the text; avoid arbitrary colors. The legacy default value maps to system."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "color",
                "defaultValue": "'system'"
            },
            "dataTest": {
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
                    "text": "Test selector on the chip. Use for automation; pair with semantic queries. Avoid styling by it."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            }
        };
    }
}
