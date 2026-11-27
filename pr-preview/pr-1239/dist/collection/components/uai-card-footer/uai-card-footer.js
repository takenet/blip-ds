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
 * Footer container for `UaiCard` when composing with subcomponents.
 * Use inside `uai-card` (or place content directly with `slot="footer"`);
 * pair with `UaiButton` or supporting trend/goal metadata; avoid using outside a card context.
 *
 * @slot - Footer elements such as metadata labels, trend indicators, or action buttons.
 */
export class UaiCardFooter {
    constructor() {
        /**
         * Horizontal distribution of children inside the footer.
         * Use `flex-end` for action buttons or `space-between` for dual metadata; pair with `UaiCard`; avoid invalid CSS alignment values.
         */
        this.align = 'flex-end';
    }
    componentWillLoad() {
        var _a, _b;
        if (((_b = (_a = this.el) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.tagName) === 'UAI-CARD' && !this.el.hasAttribute('slot')) {
            this.el.setAttribute('slot', 'footer');
        }
    }
    resolveAlign() {
        var _a;
        const candidate = (_a = this.align) !== null && _a !== void 0 ? _a : 'flex-end';
        if (ALIGNS.includes(candidate))
            return candidate;
        warnLegacyValue('uai-card-footer', 'align', candidate, 'flex-end');
        return 'flex-end';
    }
    render() {
        const align = this.resolveAlign();
        return (h(Host, { key: '4fa35b28ddc081dfd285ff9dbef18928ab2433fb' }, h("uai-grid", { key: 'c9f349ee18186df87dffff5a552e32b398604aa7', xxs: "12", direction: "row", gap: "2", justifyContent: align, alignItems: "center" }, h("slot", { key: 'd332cab4eddeb94dd63a247412ba9b86c4965b68' }))));
    }
    static get is() { return "uai-card-footer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-card-footer.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-card-footer.css"]
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
                            "location": "import",
                            "path": "../uai-card-header/uai-card-header",
                            "id": "src/components/uai-card-header/uai-card-header.tsx::UaiCardJustifyContent",
                            "referenceLocation": "UaiCardJustifyContent"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Horizontal distribution of children inside the footer.\nUse `flex-end` for action buttons or `space-between` for dual metadata; pair with `UaiCard`; avoid invalid CSS alignment values."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "align",
                "defaultValue": "'flex-end'"
            }
        };
    }
    static get elementRef() { return "el"; }
}
