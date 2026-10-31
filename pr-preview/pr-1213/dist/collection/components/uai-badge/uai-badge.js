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
        return (h(Host, { key: 'f663f5076facfc8648d365d78f8424e89feac768', role: this.ariaLabel ? 'img' : undefined, "aria-label": this.ariaLabel || undefined }, h("div", { key: '7da2c30e2946d975aa7b4a5a66e5beae64a26b89', class: {
                badge: true,
                [`badge--${color}`]: true,
                [`badge--${type}`]: true,
                [`badge--${type === 'number' ? 'circle' : shape}`]: true,
                'badge--animated': this.animation,
            }, "data-test": this.dataTest, "aria-hidden": this.ariaLabel ? 'true' : undefined }, h("span", { key: '717259bcf2e60e80c3b449772e9e04cc23483556', class: "badge__shape", "aria-hidden": "true" }), this.animation && h("span", { key: '0c20a87d23a5d73cd67166eb5552a00fe0fff999', class: "badge__pulse", "aria-hidden": "true" }), h("div", { key: '9d99f5ef118f7f90f58b02fbe24892cfa883267b', class: "badge__content" }, type === 'number' && (h("uai-typo", { key: '0be91c44e91227391ae3deda2c272550b64a256a', tag: "span", variant: "caption", bold: "bold", margin: false }, this.number >= 999 ? '999+' : this.number)), type === 'icon' &&
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
