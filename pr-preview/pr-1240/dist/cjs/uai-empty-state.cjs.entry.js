'use strict';

var index = require('./index-GTJCA4wH.js');

const uaiEmptyStateCss = () => `:host{--empty-state-padding-block:var(--uai-spacing-2xl, 2.5rem);--empty-state-padding-inline:var(--uai-spacing-lg, 1.5rem);--empty-state-box-size:var(--uai-sizing-2xl, 2.5rem);--empty-state-icon-size:var(--uai-sizing-lg, 1.5rem);--empty-state-icon-color:var(--uai-content-secondary, #5f676d);--empty-state-box-bg:var(--uai-surface-muted, #f2f3f3);-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);width:100%;padding:var(--empty-state-padding-block) var(--empty-state-padding-inline);font-family:var(--uai-font-family-sans, Figtree), sans-serif;text-align:center}:host([hidden]){display:none}:host(.empty-state--inline){--empty-state-padding-block:var(--uai-spacing-lg, 1.5rem);--empty-state-padding-inline:var(--uai-spacing-md, 1rem);--empty-state-box-size:var(--uai-sizing-xl, 2rem);--empty-state-icon-size:var(--uai-sizing-md, 1.25rem)}:host(.empty-state--error){--empty-state-icon-color:var(--uai-feedback-error, #cf0022);--empty-state-box-bg:var(--uai-feedback-error-subtle, #fef2f2)}[hidden]{display:none !important}.empty-state__icon-box{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:var(--empty-state-box-size);height:var(--empty-state-box-size);border-radius:var(--uai-radius-full, 624.9375rem);background:var(--empty-state-box-bg);color:var(--empty-state-icon-color)}.empty-state__icon{--uai-icon-size:var(--empty-state-icon-size)}.empty-state__heading,.empty-state__description{display:block;max-width:100%;word-break:break-word}.empty-state__heading{--uai-typo-color:var(--uai-content-primary, #242729)}.empty-state__description{--uai-typo-color:var(--uai-content-secondary, #5f676d);max-width:var(--uai-width-dialog, 26.5rem)}.empty-state__actions{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center;gap:var(--uai-spacing-xs, 0.5rem);padding-top:var(--uai-spacing-xs, 0.5rem)}`;

const VARIANTS = ['page', 'inline'];
const TONES = ['neutral', 'error'];
const HEADING_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];
const DEFAULT_ICON = { neutral: 'message-ballon', error: 'error' };
const supported = (prop, value, allowed, fallback) => {
    if (allowed.includes(value))
        return value;
    return fallback;
};
// A light child counts as content when it is an element or non-blank text.
const hasContent = (nodes) => nodes.some((node) => node.nodeType === Node.ELEMENT_NODE ? true : node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '');
const UaiEmptyState = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '96ecb3bdc735917e159e8cac0fc06a21ba3edd13', class: { [`empty-state--${variant}`]: true, [`empty-state--${tone}`]: true }, role: tone === 'error' ? 'alert' : undefined, "data-test": this.dataTest }, index.h("div", { key: '305cac1c6529cfb4094833fc19b67f2d89dce77a', class: "empty-state__icon-box", part: "icon-box", "aria-hidden": "true" }, index.h("uai-icon", { key: '99ae06ce47b4bf62e07412884fde556c822cb44a', class: "empty-state__icon", name: this.icon || DEFAULT_ICON[tone] })), this.heading && (index.h("uai-typo", { key: '0cfa3b3cc7dab5d35ae6a0f52ad6357c35d422b8', class: "empty-state__heading", part: "heading", tag: headingTag, variant: "title-sm", bold: "semibold", margin: false }, this.heading)), index.h("uai-typo", { key: '580f7a015c846f0264e79441dc95f34d045ac0db', class: "empty-state__description", part: "description", tag: "p", variant: "body-base", hidden: !hasDescription }, !this.hasDescriptionSlot && this.description, index.h("slot", { key: 'b4162a5ea548eaa64f11c4a5a2cf5ef3c82892ab', onSlotchange: this.readSlots })), index.h("div", { key: '2709e882d633fbf1d20ff520eb82bd30c9882e0e', class: "empty-state__actions", part: "actions", hidden: !this.hasActions }, index.h("slot", { key: 'c878bca4b261094670c5697e0fea490cf84ed1ac', name: "actions", onSlotchange: this.readSlots }))));
    }
    get el() { return index.getElement(this); }
};
UaiEmptyState.style = uaiEmptyStateCss();

exports.uai_empty_state = UaiEmptyState;
