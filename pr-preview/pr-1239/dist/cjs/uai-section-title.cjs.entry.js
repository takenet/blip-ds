'use strict';

var index = require('./index-JW9Yq-qX.js');

const uaiSectionTitleCss = () => `:host{display:block;min-width:0}.section-title{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;gap:var(--uai-spacing-md, 1rem);-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--uai-spacing-xs, 0.5rem) var(--uai-spacing-md, 1rem)}.section-title__content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex:1 1 auto;flex:1 1 auto;gap:var(--uai-spacing-none, 0rem);min-width:0}.section-title__heading{margin:0;font-family:var(--uai-font-family-sans, Figtree);font-size:var(--uai-heading-md-font-size, 1.25rem);line-height:var(--uai-heading-md-line-height, 1.75rem);font-weight:var(--uai-font-weight-medium, 500);letter-spacing:var(--uai-letter-spacing-normal, 0px);color:var(--uai-content-primary, #242729);overflow-wrap:anywhere}.section-title__description{margin:0;font-family:var(--uai-font-family-sans, Figtree);font-size:var(--uai-body-base-font-size, 0.875rem);line-height:var(--uai-body-base-line-height, 1.375rem);font-weight:var(--uai-font-weight-regular, 400);letter-spacing:var(--uai-letter-spacing-normal, 0px);color:var(--uai-content-secondary, #5f676d);overflow-wrap:anywhere}.section-title__actions{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-negative:0;flex-shrink:0;gap:var(--uai-spacing-xs, 0.5rem);-webkit-margin-start:auto;margin-inline-start:auto}`;

const HEADING_TAGS = ['h2', 'h3', 'h4'];
const UaiSectionTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.hasActions = false;
        /**
         * Main text of the section heading.
         */
        this.heading = '';
        /**
         * Optional supporting description rendered below the heading when non-empty.
         */
        this.description = '';
        /**
         * HTML heading element tag (`h2`, `h3`, or `h4`) to preserve document outline hierarchy.
         */
        this.headingTag = 'h2';
        /**
         * Selector attribute applied to the container for automated tests.
         */
        this.dataTest = null;
        this.syncActionsSlot = () => {
            this.hasActions = Array.from(this.el.children).some((child) => child.getAttribute('slot') === 'actions');
        };
    }
    componentWillLoad() {
        this.syncActionsSlot();
    }
    connectedCallback() {
        if (typeof MutationObserver === 'undefined' || this.childObserver)
            return;
        // The actions wrapper is not rendered while empty, so `slotchange` cannot detect late-added actions.
        this.childObserver = new MutationObserver(this.syncActionsSlot);
        this.childObserver.observe(this.el, { childList: true, attributes: true, attributeFilter: ['slot'], subtree: true });
    }
    disconnectedCallback() {
        var _a;
        (_a = this.childObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.childObserver = undefined;
    }
    resolveHeadingTag() {
        var _a;
        const rawTag = String((_a = this.headingTag) !== null && _a !== void 0 ? _a : 'h2');
        if (HEADING_TAGS.includes(rawTag)) {
            return rawTag;
        }
        return 'h2';
    }
    render() {
        const HeadingTag = this.resolveHeadingTag();
        const hasDescription = Boolean(this.description && this.description.trim().length > 0);
        return (index.h(index.Host, { key: 'e2762b7a9b387897072eff2c67779fd14ad3c82d' }, index.h("div", { key: 'd7c047332b4df072e669c894eb89331055d112a2', class: "section-title", part: "container", "data-test": this.dataTest }, index.h("div", { key: '0b5c220f38e05188041a1ad7fb1e38dd492d4d89', class: "section-title__content" }, index.h(HeadingTag, { key: 'ad63f3e310f4427474e712281c87582bf26b5abc', class: "section-title__heading", part: "heading" }, this.heading), hasDescription && (index.h("p", { key: '0688328ece1a3744d7953f3fad9fcb9d4b92b908', class: "section-title__description", part: "description" }, this.description))), this.hasActions && (index.h("div", { key: 'df2f24865be64809383956a907dd33b5924499ca', class: "section-title__actions", part: "actions" }, index.h("slot", { key: 'c3dd286a7f40fab75de136f2ea4dc6fa41ec5aa0', name: "actions", onSlotchange: this.syncActionsSlot }))))));
    }
    get el() { return index.getElement(this); }
};
UaiSectionTitle.style = uaiSectionTitleCss();

exports.uai_section_title = UaiSectionTitle;
