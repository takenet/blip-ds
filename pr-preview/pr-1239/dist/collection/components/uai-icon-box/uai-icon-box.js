import { Host, h } from "@stencil/core";
import { warnLegacyValue } from "../../utils/deprecation";
const SIZES = ['sm', 'md', 'lg'];
const THEMES = ['outline', 'solid'];
const ICON_SIZE = {
    sm: 'small',
    md: 'medium',
    lg: 'medium',
};
/**
 * Passive rounded surface container that frames a UAI icon or custom slotted graphic.
 * Use alongside card headings or KPI indicators; pair with `aria-label` only when the icon conveys standalone meaning;
 * avoid using it as an interactive button (use `uai-icon-button` instead).
 *
 * @slot - Optional custom icon content.
 * @part box - The icon box container.
 */
export class UaiIconBox {
    constructor() {
        /**
         * Name of the glyph from the UAI icon font. When omitted, renders the default slot content.
         */
        this.icon = null;
        /**
         * Style of the UAI icon glyph (`outline` or `solid`).
         */
        this.iconTheme = 'outline';
        /**
         * Scale of the icon container (`sm`, `md`, or `lg`).
         */
        this.size = 'md';
        /**
         * Accessible label when the icon box communicates standalone meaning; otherwise the box is decorative.
         */
        this.ariaLabel = null;
        /**
         * Selector attribute applied to the box container for automated tests.
         */
        this.dataTest = null;
    }
    resolveSize() {
        var _a;
        const rawSize = String((_a = this.size) !== null && _a !== void 0 ? _a : 'md');
        if (SIZES.includes(rawSize)) {
            return rawSize;
        }
        warnLegacyValue('uai-icon-box', 'size', rawSize, 'md');
        return 'md';
    }
    resolveTheme() {
        var _a;
        const rawTheme = String((_a = this.iconTheme) !== null && _a !== void 0 ? _a : 'outline');
        if (THEMES.includes(rawTheme)) {
            return rawTheme;
        }
        warnLegacyValue('uai-icon-box', 'iconTheme', rawTheme, 'outline');
        return 'outline';
    }
    render() {
        const size = this.resolveSize();
        const theme = this.resolveTheme();
        const ariaLabel = (this.ariaLabel || this.el.getAttribute('aria-label') || '').trim();
        return (h(Host, { key: '285f1eb9d5acd1d99fbc8290650a6912e1d5d1e3', role: ariaLabel ? 'img' : undefined, "aria-label": ariaLabel || undefined, "aria-hidden": ariaLabel ? undefined : 'true' }, h("div", { key: 'e8c631384032ee65cba6bd5e5f9bbaf15acd8ad3', class: {
                'icon-box': true,
                [`icon-box--size-${size}`]: true,
            }, part: "box", "data-test": this.dataTest }, this.icon ? (h("uai-icon", { class: "icon-box__icon", name: this.icon, theme: theme, size: ICON_SIZE[size], "aria-hidden": "true" })) : (h("slot", null)))));
    }
    static get is() { return "uai-icon-box"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-icon-box.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-icon-box.css"]
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
                    "text": "Name of the glyph from the UAI icon font. When omitted, renders the default slot content."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "icon",
                "defaultValue": "null"
            },
            "iconTheme": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiIconBoxTheme",
                    "resolved": "\"outline\" | \"solid\"",
                    "references": {
                        "UaiIconBoxTheme": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-icon-box/uai-icon-box.tsx",
                            "id": "src/components/uai-icon-box/uai-icon-box.tsx::UaiIconBoxTheme"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Style of the UAI icon glyph (`outline` or `solid`)."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "icon-theme",
                "defaultValue": "'outline'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiIconBoxSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "UaiIconBoxSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-icon-box/uai-icon-box.tsx",
                            "id": "src/components/uai-icon-box/uai-icon-box.tsx::UaiIconBoxSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Scale of the icon container (`sm`, `md`, or `lg`)."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "size",
                "defaultValue": "'md'"
            },
            "ariaLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | null",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Accessible label when the icon box communicates standalone meaning; otherwise the box is decorative."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "aria-label",
                "defaultValue": "null"
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
                    "text": "Selector attribute applied to the box container for automated tests."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            }
        };
    }
    static get elementRef() { return "el"; }
}
