import { Host, h } from "@stencil/core";
import { isUaiIcon } from "../../globals/uai-icons";
import { warnLegacyValue } from "../../utils/deprecation";
const SHAPES = ['circle', 'triangle', 'triangle-reverse', 'polygon', 'square'];
const COLORS = ['system', 'danger', 'warning', 'success', 'neutral'];
const supported = (prop, value, values, fallback) => {
    const known = values.find((candidate) => candidate === value);
    if (known)
        return known;
    warnLegacyValue('uai-badge', prop, value, fallback);
    return fallback;
};
/**
 * Passive status, icon or count indicator. Use for supplementary information;
 * pair with an explanatory label; avoid using color alone to convey meaning.
 */
export class UaiBadge {
    constructor() {
        /** Semantic color: system, danger, warning, success or neutral. Use for status; pair with a label; avoid arbitrary colors. */
        this.color = 'system';
        /** Indicator shape. Use for status, icon or empty badges; pair with color; avoid expecting numeric capsules to change shape. */
        this.shape = 'circle';
        /** UAI or legacy icon name. Use when no count is supplied; pair with ariaLabel; avoid relying on an unnamed icon for meaning. */
        this.icon = null;
        /** Enables a pulse unless reduced motion is requested. Use sparingly; pair with meaningful status; avoid continuous distraction. */
        this.animation = false;
        /** Inner visual element data-test marker. Use for automation; pair with semantic queries; avoid treating it as an accessible label. */
        this.dataTest = null;
        /** Accessible indicator description, mapped to aria-label. Use for standalone meaning; pair with status or icon; avoid duplicate announcements. */
        this.ariaLabel = null;
    }
    render() {
        const shape = supported('shape', this.shape, SHAPES, 'circle');
        const color = supported('color', this.color, COLORS, 'system');
        const hasNumber = this.number !== null && this.number !== undefined;
        const type = hasNumber ? (this.number === 0 ? 'empty' : 'number') : this.icon ? 'icon' : 'status';
        const compactIcon = shape === 'triangle' || shape === 'triangle-reverse' || shape === 'polygon';
        return (h(Host, { key: '24cd84676a67da348bccd717c0f1a73b2f53f43c', role: this.ariaLabel ? 'img' : undefined, "aria-label": this.ariaLabel || undefined }, h("div", { key: '01c6f6bf94571ccb7958204db7652cb2c107d485', class: {
                badge: true,
                [`badge--${color}`]: true,
                [`badge--${type}`]: true,
                [`badge--${type === 'number' ? 'circle' : shape}`]: true,
                'badge--animated': this.animation,
            }, "data-test": this.dataTest, "aria-hidden": this.ariaLabel ? 'true' : undefined }, h("span", { key: '1d19fef8ca0aa90d0b5e3a8bb0d890ae3c567e16', class: "badge__shape", "aria-hidden": "true" }), this.animation && h("span", { key: '2aadcf3a2c06c5e5bceeaa84d3cccc9568aa9754', class: "badge__pulse", "aria-hidden": "true" }), h("div", { key: 'd6796e66d636dd696d30e1cf2c13bfde31b9dc5a', class: "badge__content" }, type === 'number' && (h("uai-typo", { key: '99a31f46cf761f02188f559c77a83b509bfde245', tag: "span", variant: "caption", bold: "bold", margin: false }, this.number >= 999 ? '999+' : this.number)), type === 'icon' &&
            (isUaiIcon('outline', this.icon) ? (h("uai-icon", { class: "badge__icon", name: this.icon, size: "x-small", "aria-hidden": "true" })) : (h("bds-icon", { class: "badge__icon", name: this.icon, theme: "outline", size: compactIcon ? 'xx-small' : 'x-small', color: "currentColor", "aria-hidden": "true" })))))));
    }
    static get is() { return "uai-badge"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-badge.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-badge.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Semantic color: system, danger, warning, success or neutral. Use for status; pair with a label; avoid arbitrary colors."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "color",
                "defaultValue": "'system'"
            },
            "shape": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiBadgeShape",
                    "resolved": "\"circle\" | \"polygon\" | \"square\" | \"triangle\" | \"triangle-reverse\"",
                    "references": {
                        "UaiBadgeShape": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-badge/uai-badge.tsx",
                            "id": "src/components/uai-badge/uai-badge.tsx::UaiBadgeShape"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Indicator shape. Use for status, icon or empty badges; pair with color; avoid expecting numeric capsules to change shape."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "shape",
                "defaultValue": "'circle'"
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
                    "text": "UAI or legacy icon name. Use when no count is supplied; pair with ariaLabel; avoid relying on an unnamed icon for meaning."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon",
                "defaultValue": "null"
            },
            "number": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Count, visually capped at 999+ inclusively. Use zero for an empty indicator; pair with a label; avoid using counts as actions."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "number"
            },
            "animation": {
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
                    "text": "Enables a pulse unless reduced motion is requested. Use sparingly; pair with meaningful status; avoid continuous distraction."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "animation",
                "defaultValue": "false"
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
                    "text": "Inner visual element data-test marker. Use for automation; pair with semantic queries; avoid treating it as an accessible label."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            },
            "ariaLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Accessible indicator description, mapped to aria-label. Use for standalone meaning; pair with status or icon; avoid duplicate announcements."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "aria-label",
                "defaultValue": "null"
            }
        };
    }
}
