import { Host, h } from "@stencil/core";
import { warnLegacyValue } from "../../utils/deprecation";
const ALIGNS = [
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
];
/**
 * Header container for `UaiCard` when composing with subcomponents.
 * Use inside `uai-card` (or prefer `heading`/`description` and `slot="actions"` directly on `uai-card`);
 * pair with `UaiCardTitle` and `UaiCardSubtitle`; avoid using outside a card context.
 *
 * @slot - Header elements such as `uai-card-title`, `uai-card-subtitle`, and action buttons.
 */
export class UaiCardHeader {
    constructor() {
        /**
         * Horizontal distribution of children inside the header.
         * Use `space-between` for title + actions or `flex-start` for stacked headings; pair with `UaiCardTitle`; avoid invalid CSS alignment values.
         */
        this.align = 'space-between';
    }
    componentWillLoad() {
        var _a, _b;
        if (((_b = (_a = this.el) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.tagName) === 'UAI-CARD' && !this.el.hasAttribute('slot')) {
            this.el.setAttribute('slot', 'header');
        }
    }
    resolveAlign() {
        var _a;
        const candidate = (_a = this.align) !== null && _a !== void 0 ? _a : 'space-between';
        if (ALIGNS.includes(candidate))
            return candidate;
        warnLegacyValue('uai-card-header', 'align', candidate, 'space-between');
        return 'space-between';
    }
    render() {
        const align = this.resolveAlign();
        return (h(Host, { key: '9053af4facbfa1960875cc449b0dd62cb909849c' }, h("uai-grid", { key: 'ecfaeff99322eb8ad3e236b1cc1a1cc3207b8e6a', xxs: "12", direction: "row", gap: "1", justifyContent: align, alignItems: "center" }, h("slot", { key: 'b221ecc9752c7a8b154610d29f6bb543b7b8acc0' }))));
    }
    static get is() { return "uai-card-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-card-header.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-card-header.css"]
        };
    }
    static get properties() {
        return {
            "align": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiCardJustifyContent",
                    "resolved": "\"center\" | \"flex-end\" | \"flex-start\" | \"space-around\" | \"space-between\" | \"space-evenly\"",
                    "references": {
                        "UaiCardJustifyContent": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-card-header/uai-card-header.tsx",
                            "id": "src/components/uai-card-header/uai-card-header.tsx::UaiCardJustifyContent"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Horizontal distribution of children inside the header.\nUse `space-between` for title + actions or `flex-start` for stacked headings; pair with `UaiCardTitle`; avoid invalid CSS alignment values."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "align",
                "defaultValue": "'space-between'"
            }
        };
    }
    static get elementRef() { return "el"; }
}
