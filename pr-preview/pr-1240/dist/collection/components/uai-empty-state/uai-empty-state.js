import { Host, h } from "@stencil/core";
import { warnLegacyValue } from "../../utils/deprecation";
const VARIANTS = ['page', 'inline'];
const TONES = ['neutral', 'error'];
const HEADING_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];
const DEFAULT_ICON = { neutral: 'message-ballon', error: 'error' };
const supported = (prop, value, allowed, fallback) => {
    if (allowed.includes(value))
        return value;
    warnLegacyValue('uai-empty-state', prop, value, fallback);
    return fallback;
};
// A light child counts as content when it is an element or non-blank text.
const hasContent = (nodes) => nodes.some((node) => node.nodeType === Node.ELEMENT_NODE ? true : node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '');
/**
 * Empty or error state of a page, panel, card or list: a decorative icon, a title, a short description and optional actions.
 * Use when a region has nothing to show or failed to load; pair with uai-button in the actions slot and uai-paper around a page state;
 * avoid it for loading (use a skeleton) and for transient feedback (use a toast).
 *
 * @slot - Rich description, such as text with a link. When filled, it replaces the description prop.
 * @slot actions - One or two uai-button (page: variant="outline" size="short"; inline: variant="text" size="short"). Hidden when empty.
 * @part icon-box - The circle around the icon.
 * @part heading - The title.
 * @part description - The description.
 * @part actions - The actions row.
 */
export class UaiEmptyState {
    constructor() {
        this.hasDescriptionSlot = false;
        this.hasActions = false;
        /** Density: 'page' for a page or panel, 'inline' for a narrow column, card or side list. Use the one that fits the region; avoid 'page' in narrow columns. */
        this.variant = 'page';
        /** 'error' tints the icon with feedback-error and announces the state with role="alert". Use it for load failures; pair the title with what failed; avoid color alone to convey it. */
        this.tone = 'neutral';
        /** UAI icon name, always decorative. Use one that matches the situation; without it, 'message-ballon' (neutral) or 'error' (error) is used. Avoid icons that carry meaning the text does not. */
        this.icon = null;
        /** Visible title (required). Use a short sentence that says what happened, without a final period; avoid generic titles such as "Erro". */
        this.heading = null;
        /** Semantic element of the title; the look is always title-sm semibold. Use the level that fits the page outline; avoid choosing it by size. */
        this.headingTag = 'h2';
        /** Short supporting text. Use it to say what the person can do now; the default slot replaces it. Avoid long paragraphs. */
        this.description = null;
        /** Test selector on the host (data-test). Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dataTest = null;
        this.readSlots = () => {
            const children = Array.from(this.el.childNodes);
            this.hasActions = children.some((node) => node.nodeType === Node.ELEMENT_NODE && node.getAttribute('slot') === 'actions');
            this.hasDescriptionSlot = hasContent(children.filter((node) => node.nodeType !== Node.ELEMENT_NODE || !node.hasAttribute('slot')));
        };
    }
    componentWillLoad() {
        this.readSlots();
    }
    render() {
        const variant = supported('variant', this.variant, VARIANTS, 'page');
        const tone = supported('tone', this.tone, TONES, 'neutral');
        const headingTag = supported('headingTag', this.headingTag, HEADING_TAGS, 'h2');
        const hasDescription = this.hasDescriptionSlot || !!this.description;
        return (h(Host, { key: '96ecb3bdc735917e159e8cac0fc06a21ba3edd13', class: { [`empty-state--${variant}`]: true, [`empty-state--${tone}`]: true }, role: tone === 'error' ? 'alert' : undefined, "data-test": this.dataTest }, h("div", { key: '305cac1c6529cfb4094833fc19b67f2d89dce77a', class: "empty-state__icon-box", part: "icon-box", "aria-hidden": "true" }, h("uai-icon", { key: '99ae06ce47b4bf62e07412884fde556c822cb44a', class: "empty-state__icon", name: this.icon || DEFAULT_ICON[tone] })), this.heading && (h("uai-typo", { key: '0cfa3b3cc7dab5d35ae6a0f52ad6357c35d422b8', class: "empty-state__heading", part: "heading", tag: headingTag, variant: "title-sm", bold: "semibold", margin: false }, this.heading)), h("uai-typo", { key: '580f7a015c846f0264e79441dc95f34d045ac0db', class: "empty-state__description", part: "description", tag: "p", variant: "body-base", hidden: !hasDescription }, !this.hasDescriptionSlot && this.description, h("slot", { key: 'b4162a5ea548eaa64f11c4a5a2cf5ef3c82892ab', onSlotchange: this.readSlots })), h("div", { key: '2709e882d633fbf1d20ff520eb82bd30c9882e0e', class: "empty-state__actions", part: "actions", hidden: !this.hasActions }, h("slot", { key: 'c878bca4b261094670c5697e0fea490cf84ed1ac', name: "actions", onSlotchange: this.readSlots }))));
    }
    static get is() { return "uai-empty-state"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-empty-state.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-empty-state.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiEmptyStateVariant",
                    "resolved": "\"inline\" | \"page\"",
                    "references": {
                        "UaiEmptyStateVariant": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-empty-state/uai-empty-state.tsx",
                            "id": "src/components/uai-empty-state/uai-empty-state.tsx::UaiEmptyStateVariant"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Density: 'page' for a page or panel, 'inline' for a narrow column, card or side list. Use the one that fits the region; avoid 'page' in narrow columns."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "variant",
                "defaultValue": "'page'"
            },
            "tone": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiEmptyStateTone",
                    "resolved": "\"error\" | \"neutral\"",
                    "references": {
                        "UaiEmptyStateTone": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-empty-state/uai-empty-state.tsx",
                            "id": "src/components/uai-empty-state/uai-empty-state.tsx::UaiEmptyStateTone"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "'error' tints the icon with feedback-error and announces the state with role=\"alert\". Use it for load failures; pair the title with what failed; avoid color alone to convey it."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "tone",
                "defaultValue": "'neutral'"
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
                    "text": "UAI icon name, always decorative. Use one that matches the situation; without it, 'message-ballon' (neutral) or 'error' (error) is used. Avoid icons that carry meaning the text does not."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon",
                "defaultValue": "null"
            },
            "heading": {
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
                    "text": "Visible title (required). Use a short sentence that says what happened, without a final period; avoid generic titles such as \"Erro\"."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "heading",
                "defaultValue": "null"
            },
            "headingTag": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiEmptyStateHeadingTag",
                    "resolved": "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"h6\" | \"p\"",
                    "references": {
                        "UaiEmptyStateHeadingTag": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-empty-state/uai-empty-state.tsx",
                            "id": "src/components/uai-empty-state/uai-empty-state.tsx::UaiEmptyStateHeadingTag"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Semantic element of the title; the look is always title-sm semibold. Use the level that fits the page outline; avoid choosing it by size."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "heading-tag",
                "defaultValue": "'h2'"
            },
            "description": {
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
                    "text": "Short supporting text. Use it to say what the person can do now; the default slot replaces it. Avoid long paragraphs."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "description",
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
                    "text": "Test selector on the host (data-test). Use for automation; pair with semantic queries. Avoid styling by it."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "hasDescriptionSlot": {},
            "hasActions": {}
        };
    }
    static get elementRef() { return "el"; }
}
