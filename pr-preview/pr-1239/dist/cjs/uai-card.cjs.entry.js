'use strict';

var index = require('./index-JW9Yq-qX.js');

const uaiCardCss = () => `:host{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;min-width:0}.card{position:relative;display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;min-width:0;overflow:hidden;border:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);border-radius:var(--uai-radius-xl, 1rem);background-color:var(--uai-surface-paper, #ffffff);color:var(--uai-content-primary, #242729);font-family:var(--uai-font-family-sans, Figtree);text-align:start}.card__media{position:relative;width:100%;overflow:hidden;-ms-flex-negative:0;flex-shrink:0}.card__image{display:block;width:100%;max-height:calc(var(--uai-sizing-4xl, 4rem) * 2.5);-o-object-fit:cover;object-fit:cover}.card__header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;gap:var(--uai-spacing-md, 1rem);-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;padding-top:var(--uai-spacing-lg, 1.5rem);padding-right:var(--uai-spacing-lg, 1.5rem);padding-bottom:var(--uai-spacing-xs, 0.5rem);padding-left:var(--uai-spacing-lg, 1.5rem);-ms-flex-negative:0;flex-shrink:0}.card__header--with-actions{gap:var(--uai-spacing-xs, 0.5rem);padding-top:var(--uai-spacing-md, 1rem);padding-right:var(--uai-spacing-md, 1rem)}.card--size-md .card__header{gap:var(--uai-spacing-lg, 1.5rem);padding-top:var(--uai-spacing-lg, 1.5rem);padding-right:var(--uai-spacing-lg, 1.5rem);padding-bottom:var(--uai-spacing-md, 1rem);padding-left:var(--uai-spacing-lg, 1.5rem)}.card--size-md .card__header--with-actions{padding-right:var(--uai-spacing-md, 1rem)}.card__icon{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-negative:0;flex-shrink:0}.card__header-main{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center;gap:var(--uai-spacing-2xs, 0.25rem);min-width:0}.card__heading{margin:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--uai-content-primary, #242729);font-family:var(--uai-font-family-sans, Figtree);font-size:var(--uai-title-font-size, 1rem);font-weight:var(--uai-font-weight-medium, 500);line-height:var(--uai-title-line-height, 1.5rem);letter-spacing:var(--uai-letter-spacing-normal, 0px)}.card__description{margin:0;width:100%;color:var(--uai-content-secondary, #5f676d);font-family:var(--uai-font-family-sans, Figtree);font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--uai-body-base-line-height, 1.375rem);letter-spacing:var(--uai-letter-spacing-normal, 0px)}.card__actions{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);-ms-flex-negative:0;flex-shrink:0}.card__body{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch;gap:var(--uai-spacing-xs, 0.5rem);-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;min-width:0;padding-top:var(--uai-spacing-lg, 1.5rem);padding-right:var(--uai-spacing-lg, 1.5rem);padding-bottom:var(--uai-spacing-lg, 1.5rem);padding-left:var(--uai-spacing-lg, 1.5rem)}.card--has-header .card__body{padding-top:var(--uai-spacing-xs, 0.5rem)}.card--size-md.card--has-header .card__body{padding-top:var(--uai-spacing-md, 1rem)}.card--has-footer .card__body{padding-bottom:var(--uai-spacing-xs, 0.5rem)}.card--size-md.card--has-footer .card__body{padding-bottom:var(--uai-spacing-md, 1rem)}.card__footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;gap:var(--uai-spacing-xs, 0.5rem);-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;padding-top:var(--uai-spacing-xs, 0.5rem);padding-right:var(--uai-spacing-lg, 1.5rem);padding-bottom:var(--uai-spacing-lg, 1.5rem);padding-left:var(--uai-spacing-lg, 1.5rem);color:var(--uai-content-secondary, #5f676d);font-family:var(--uai-font-family-sans, Figtree);font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--uai-body-base-line-height, 1.375rem);-ms-flex-negative:0;flex-shrink:0}.card--size-md .card__footer{padding-top:var(--uai-spacing-md, 1rem)}.card__region--empty,.card [hidden]{display:none}`;

const SIZES = ['sm', 'md'];
const UaiCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '3af7aa090065824d20a1ce3d594c605733176999', style: hostStyle }, index.h("div", { key: 'ad9c8962626bc83deb67050bcd476199fd4ab830', part: "card", "data-test": this.dataTest, class: {
                card: true,
                [`card--size-${size}`]: true,
                'card--has-header': showHeader,
                'card--has-footer': showFooter,
            } }, hasMedia ? (index.h("div", { class: "card__media", part: "media" }, this.imageSrc ? index.h("img", { class: "card__image", src: this.imageSrc, alt: (_a = this.imageAlt) !== null && _a !== void 0 ? _a : '' }) : null, index.h("slot", { name: "media", onSlotchange: this.syncSlotFlags }))) : (index.h("slot", { name: "media", onSlotchange: this.syncSlotFlags })), showHeader ? (index.h("div", { class: {
                card__header: true,
                'card__header--with-actions': this.hasActionsSlot,
            }, part: "header" }, this.hasIconSlot ? (index.h("div", { class: "card__icon" }, index.h("slot", { name: "icon", onSlotchange: this.syncSlotFlags }))) : (index.h("slot", { name: "icon", onSlotchange: this.syncSlotFlags })), index.h("div", { class: "card__header-main" }, index.h("slot", { name: "header", onSlotchange: this.syncSlotFlags }, hasHeadingText && index.h("p", { class: "card__heading" }, this.heading), hasDescriptionText && index.h("p", { class: "card__description" }, this.description))), this.hasActionsSlot ? (index.h("div", { class: "card__actions" }, index.h("slot", { name: "actions", onSlotchange: this.syncSlotFlags }))) : (index.h("slot", { name: "actions", onSlotchange: this.syncSlotFlags })))) : (index.h("div", { class: "card__region--empty", hidden: true }, index.h("slot", { name: "icon", onSlotchange: this.syncSlotFlags }), index.h("slot", { name: "header", onSlotchange: this.syncSlotFlags }), index.h("slot", { name: "actions", onSlotchange: this.syncSlotFlags }))), index.h("div", { key: '048295bb3204b0f79617b29a3ebbd061f97a5aea', class: "card__body", part: "body" }, index.h("slot", { key: 'c3058352a8c39f04f4f81dda9a7b5459d47bed57', onSlotchange: this.syncSlotFlags })), showFooter ? (index.h("div", { class: "card__footer", part: "footer" }, index.h("slot", { name: "footer", onSlotchange: this.syncSlotFlags }))) : (index.h("div", { class: "card__region--empty", hidden: true }, index.h("slot", { name: "footer", onSlotchange: this.syncSlotFlags }))))));
    }
    get el() { return index.getElement(this); }
};
UaiCard.style = uaiCardCss();

exports.uai_card = UaiCard;
