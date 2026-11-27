import { Host, h } from "@stencil/core";
import { warnLegacyValue } from "../../utils/deprecation";
const SIZES = ['sm', 'md'];
/**
 * Structured surface for grouping related information, metrics, charts, and actions.
 * Use with `heading`, `description`, and named slots (`icon`, `actions`, `media`, `footer`) or `uai-card-*` subcomponents;
 * pair with `UaiGrid` for multi-card rows; to make a whole card navigable, wrap it in a link or button instead of making the card itself interactive.
 *
 * @slot - Main body content of the card (metrics, progress bars, charts, text, or `uai-card-body`).
 * @slot media - Optional top media or cover image.
 * @slot icon - Optional leading icon or `uai-icon-box` in the header.
 * @slot header - Optional custom header content or `uai-card-header`.
 * @slot actions - Optional trailing action controls (such as `uai-icon-button`) in the header.
 * @slot footer - Optional footer content or `uai-card-footer`.
 * @part card - The card surface container.
 * @part media - The top media container when rendered.
 * @part header - The header region when rendered.
 * @part body - The main content slot container.
 * @part footer - The footer region when rendered.
 */
export class UaiCard {
    constructor() {
        this.hasMediaSlot = false;
        this.hasIconSlot = false;
        this.hasHeaderSlot = false;
        this.hasActionsSlot = false;
        this.hasFooterSlot = false;
        /**
         * Spacing preset of the card layout (`sm` or `md`).
         * Use `sm` for compact KPI/indicator cards and `md` for cards with subtitle or full charts; pair with `heading` and `description`; avoid arbitrary padding overrides.
         */
        this.size = 'sm';
        /**
         * Primary title displayed in the card header.
         * Use a short noun phrase; pair with `description` or `slot="actions"`; avoid duplicating a `uai-card-title` inside `slot="header"`.
         */
        this.heading = '';
        /**
         * Supporting description displayed below `heading` in the card header.
         * Use to clarify metric scope or period; pair with `heading` and `size="md"`; avoid long paragraphs.
         */
        this.description = '';
        /**
         * Optional cover image URL rendered in the top media region.
         * Use for illustrated or editorial cards; pair with `imageAlt` when informative; avoid combining with `slot="media"`.
         */
        this.imageSrc = null;
        /**
         * Accessible alternative text for `imageSrc` (empty string when decorative).
         * Use to describe informative media; pair with `imageSrc`; avoid repeating the `heading` text.
         */
        this.imageAlt = '';
        /**
         * Explicit CSS height applied to the card host.
         * Use token-based values or `100%` when stretching in a grid; pair with `width`; avoid hardcoded pixel heights that clip dynamic content.
         */
        this.height = null;
        /**
         * Explicit CSS width applied to the card host.
         * Use `100%` or `fit-content` according to layout; pair with `UaiGrid` in multi-column rows; avoid fixed pixel widths in responsive layouts.
         */
        this.width = null;
        /**
         * Automation selector applied to the inner card surface.
         * Use in automated tests; pair with accessible role queries; avoid styling by this attribute.
         */
        this.dataTest = null;
        this.syncSlotFlags = () => {
            if (!this.el)
                return;
            this.routeLegacySubcomponents();
            this.hasMediaSlot = Boolean(this.el.querySelector('[slot="media"]'));
            this.hasIconSlot = Boolean(this.el.querySelector('[slot="icon"]'));
            this.hasHeaderSlot = Boolean(this.el.querySelector('[slot="header"]'));
            this.hasActionsSlot = Boolean(this.el.querySelector('[slot="actions"]'));
            this.hasFooterSlot = Boolean(this.el.querySelector('[slot="footer"]'));
        };
    }
    componentWillLoad() {
        this.routeLegacySubcomponents();
        this.syncSlotFlags();
    }
    routeLegacySubcomponents() {
        var _a;
        if (!((_a = this.el) === null || _a === void 0 ? void 0 : _a.children))
            return;
        Array.from(this.el.children).forEach((child) => {
            if (child.hasAttribute('slot'))
                return;
            if (child.tagName === 'UAI-CARD-HEADER')
                child.setAttribute('slot', 'header');
            if (child.tagName === 'UAI-CARD-FOOTER')
                child.setAttribute('slot', 'footer');
        });
    }
    resolveSize() {
        var _a;
        const candidate = (_a = this.size) !== null && _a !== void 0 ? _a : 'sm';
        if (SIZES.includes(candidate))
            return candidate;
        warnLegacyValue('uai-card', 'size', candidate, 'sm');
        return 'sm';
    }
    render() {
        var _a;
        const size = this.resolveSize();
        const hasMedia = Boolean(this.imageSrc) || this.hasMediaSlot;
        const hasHeadingText = Boolean(this.heading && this.heading.trim());
        const hasDescriptionText = Boolean(this.description && this.description.trim());
        const showHeader = hasHeadingText || hasDescriptionText || this.hasIconSlot || this.hasHeaderSlot || this.hasActionsSlot;
        const showFooter = this.hasFooterSlot;
        const hostStyle = {};
        if (this.width)
            hostStyle.width = this.width;
        if (this.height)
            hostStyle.height = this.height;
        return (h(Host, { key: '3af7aa090065824d20a1ce3d594c605733176999', style: hostStyle }, h("div", { key: 'ad9c8962626bc83deb67050bcd476199fd4ab830', part: "card", "data-test": this.dataTest, class: {
                card: true,
                [`card--size-${size}`]: true,
                'card--has-header': showHeader,
                'card--has-footer': showFooter,
            } }, hasMedia ? (h("div", { class: "card__media", part: "media" }, this.imageSrc ? h("img", { class: "card__image", src: this.imageSrc, alt: (_a = this.imageAlt) !== null && _a !== void 0 ? _a : '' }) : null, h("slot", { name: "media", onSlotchange: this.syncSlotFlags }))) : (h("slot", { name: "media", onSlotchange: this.syncSlotFlags })), showHeader ? (h("div", { class: {
                card__header: true,
                'card__header--with-actions': this.hasActionsSlot,
            }, part: "header" }, this.hasIconSlot ? (h("div", { class: "card__icon" }, h("slot", { name: "icon", onSlotchange: this.syncSlotFlags }))) : (h("slot", { name: "icon", onSlotchange: this.syncSlotFlags })), h("div", { class: "card__header-main" }, h("slot", { name: "header", onSlotchange: this.syncSlotFlags }, hasHeadingText && h("p", { class: "card__heading" }, this.heading), hasDescriptionText && h("p", { class: "card__description" }, this.description))), this.hasActionsSlot ? (h("div", { class: "card__actions" }, h("slot", { name: "actions", onSlotchange: this.syncSlotFlags }))) : (h("slot", { name: "actions", onSlotchange: this.syncSlotFlags })))) : (h("div", { class: "card__region--empty", hidden: true }, h("slot", { name: "icon", onSlotchange: this.syncSlotFlags }), h("slot", { name: "header", onSlotchange: this.syncSlotFlags }), h("slot", { name: "actions", onSlotchange: this.syncSlotFlags }))), h("div", { key: '048295bb3204b0f79617b29a3ebbd061f97a5aea', class: "card__body", part: "body" }, h("slot", { key: 'c3058352a8c39f04f4f81dda9a7b5459d47bed57', onSlotchange: this.syncSlotFlags })), showFooter ? (h("div", { class: "card__footer", part: "footer" }, h("slot", { name: "footer", onSlotchange: this.syncSlotFlags }))) : (h("div", { class: "card__region--empty", hidden: true }, h("slot", { name: "footer", onSlotchange: this.syncSlotFlags }))))));
    }
    static get is() { return "uai-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-card.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-card.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiCardSize",
                    "resolved": "\"md\" | \"sm\"",
                    "references": {
                        "UaiCardSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-card/uai-card.tsx",
                            "id": "src/components/uai-card/uai-card.tsx::UaiCardSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Spacing preset of the card layout (`sm` or `md`).\nUse `sm` for compact KPI/indicator cards and `md` for cards with subtitle or full charts; pair with `heading` and `description`; avoid arbitrary padding overrides."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'sm'"
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
                    "text": "Primary title displayed in the card header.\nUse a short noun phrase; pair with `description` or `slot=\"actions\"`; avoid duplicating a `uai-card-title` inside `slot=\"header\"`."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "heading",
                "defaultValue": "''"
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
                    "text": "Supporting description displayed below `heading` in the card header.\nUse to clarify metric scope or period; pair with `heading` and `size=\"md\"`; avoid long paragraphs."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "description",
                "defaultValue": "''"
            },
            "imageSrc": {
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
                    "text": "Optional cover image URL rendered in the top media region.\nUse for illustrated or editorial cards; pair with `imageAlt` when informative; avoid combining with `slot=\"media\"`."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "image-src",
                "defaultValue": "null"
            },
            "imageAlt": {
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
                    "text": "Accessible alternative text for `imageSrc` (empty string when decorative).\nUse to describe informative media; pair with `imageSrc`; avoid repeating the `heading` text."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "image-alt",
                "defaultValue": "''"
            },
            "height": {
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
                    "text": "Explicit CSS height applied to the card host.\nUse token-based values or `100%` when stretching in a grid; pair with `width`; avoid hardcoded pixel heights that clip dynamic content."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "height",
                "defaultValue": "null"
            },
            "width": {
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
                    "text": "Explicit CSS width applied to the card host.\nUse `100%` or `fit-content` according to layout; pair with `UaiGrid` in multi-column rows; avoid fixed pixel widths in responsive layouts."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "width",
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
                    "text": "Automation selector applied to the inner card surface.\nUse in automated tests; pair with accessible role queries; avoid styling by this attribute."
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
            "hasMediaSlot": {},
            "hasIconSlot": {},
            "hasHeaderSlot": {},
            "hasActionsSlot": {},
            "hasFooterSlot": {}
        };
    }
    static get elementRef() { return "el"; }
}
