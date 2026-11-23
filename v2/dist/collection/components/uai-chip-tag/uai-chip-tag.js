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
        return (h(Host, { key: 'a02eca4ac7259101dd7ca8db568e194fc15667cf' }, h("div", { key: 'b4ed7e9eebbadb216b8b454a7cce451ee3ba18e2', class: { chip: true, [`chip--${color}`]: true }, part: "chip", "data-test": this.dataTest }, this.icon && h("uai-icon", { key: 'bd8577d21c7fbae2da1688d4b8c4fb015632ef8f', class: "chip__icon", size: "x-small", name: this.icon }), h("uai-typo", { key: '7c99736358f4750ae5e7611263b981210dee4f5a', class: "chip__text", tag: "span", variant: "caption", margin: false }, h("slot", { key: '1f919655e9403714f420b3f173f03eec78d67d06' })))));
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
