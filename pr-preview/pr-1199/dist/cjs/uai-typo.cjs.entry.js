'use strict';

var index = require('./index-DQyYkciT.js');
var deprecation = require('./deprecation-CPbpnLSd.js');

const uaiTypoCss = ":host{color:var(--uai-typo-color, var(--uai-content-primary, #242729))}.typo{margin:0;padding:0;border:0;font-family:var(--uai-font-family-sans, Figtree), \"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-style:normal}.typo--variant-display{font-size:var(--uai-display-font-size, 2.5rem);line-height:var(--uai-display-line-height, 3rem)}.typo--variant-heading-xl{font-size:var(--uai-heading-xl-font-size, 2rem);line-height:var(--uai-heading-xl-line-height, 2.5rem)}.typo--variant-heading-lg{font-size:var(--uai-heading-lg-font-size, 1.5rem);line-height:var(--uai-heading-lg-line-height, 2rem)}.typo--variant-heading-md{font-size:var(--uai-heading-md-font-size, 1.25rem);line-height:var(--uai-heading-md-line-height, 1.75rem)}.typo--variant-title-lg{font-size:var(--uai-title-lg-font-size, 1.125rem);line-height:var(--uai-title-lg-line-height, 1.5rem)}.typo--variant-title-md{font-size:var(--uai-title-md-font-size, 1rem);line-height:var(--uai-title-md-line-height, 1.5rem)}.typo--variant-title-sm{font-size:var(--uai-title-sm-font-size, 0.875rem);line-height:var(--uai-title-sm-line-height, 1.25rem)}.typo--variant-title{font-size:var(--uai-title-font-size, 1rem);line-height:var(--uai-title-line-height, 1.5rem)}.typo--variant-body-lg{font-size:var(--uai-body-lg-font-size, 1rem);line-height:var(--uai-body-lg-line-height, 1.5rem)}.typo--variant-body-base{font-size:var(--uai-body-base-font-size, 0.875rem);line-height:var(--uai-body-base-line-height, 1.375rem)}.typo--variant-body-sm{font-size:var(--uai-body-sm-font-size, 0.75rem);line-height:var(--uai-body-sm-line-height, 1.25rem)}.typo--variant-caption{font-size:var(--uai-caption-font-size, 0.75rem);line-height:var(--uai-caption-line-height, 1.25rem)}.typo--variant-overline{font-size:var(--uai-overline-font-size, 0.625rem);line-height:var(--uai-overline-line-height, 1rem)}.typo--variant-display{font-family:var(--uai-font-family-display, Figtree), \"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif}.typo--bold-regular{font-weight:var(--uai-font-weight-regular, 400)}.typo--bold-medium{font-weight:var(--uai-font-weight-medium, 500)}.typo--bold-semibold{font-weight:var(--uai-font-weight-semibold, 600)}.typo--bold-bold{font-weight:var(--uai-font-weight-bold, 700)}.typo--letter-spacing-normal{letter-spacing:var(--uai-letter-spacing-normal, 0px)}.typo--letter-spacing-expanded{letter-spacing:var(--uai-letter-spacing-expanded, 2.8px)}.typo--italic{font-style:italic}.typo--no-wrap{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.typo--paragraph{margin-bottom:var(--uai-spacing-md, 1rem)}.typo--margin{margin-bottom:var(--uai-spacing-lg, 1.5rem)}";

const VARIANTS = [
    'display',
    'heading-xl',
    'heading-lg',
    'heading-md',
    'title-lg',
    'title-md',
    'title-sm',
    'title',
    'body-lg',
    'body-base',
    'body-sm',
    'caption',
    'overline',
];
const BOLDS = ['regular', 'medium', 'semibold', 'bold'];
const LETTER_SPACINGS = ['normal', 'expanded'];
const TAGS = ['p', 'h1', 'h2', 'h3', 'h4', 'span'];
const MARGIN_VARIANTS = ['display', 'heading-xl', 'heading-lg', 'heading-md'];
const supported = (prop, value, allowed, fallback) => {
    if (allowed.includes(value))
        return value;
    return fallback;
};
const hasThemeRoot = (el) => {
    let node = el;
    while (node) {
        if (node.nodeType === Node.ELEMENT_NODE && node.hasAttribute('data-uai-theme'))
            return true;
        node = node.parentNode || node.host || null;
    }
    return false;
};
const UaiTypo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Text style role from the UAI typography scale. Can be one of:
         * 'display', 'heading-xl', 'heading-lg', 'heading-md', 'title-lg', 'title-md', 'title-sm', 'title',
         * 'body-lg', 'body-base', 'body-sm', 'caption', 'overline'.
         */
        this.variant = 'body-base';
        /**
         * Font weight. Can be one of: 'regular', 'medium', 'semibold', 'bold'.
         */
        this.bold = 'regular';
        /**
         * Letter spacing. 'expanded' matches the spaced body text style.
         */
        this.letterSpacing = 'normal';
        /**
         * Adds font style italic.
         */
        this.italic = false;
        /**
         * Keeps the text on one line and truncates it with an ellipsis.
         */
        this.noWrap = false;
        /**
         * Adds a bottom margin for paragraphs.
         */
        this.paragraph = false;
        /**
         * If true, adds the default bottom margin to display and heading variants.
         */
        this.margin = true;
        /**
         * Element tag. Use it to give the text the right semantics.
         */
        this.tag = 'p';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    warnDeprecated() {
    }
    componentWillLoad() {
        this.warnDeprecated();
    }
    componentDidLoad() {
        if (!hasThemeRoot(this.el)) {
            deprecation.warnOnce('uai-typo', 'theme-root', 'No [data-uai-theme] ancestor found. Wrap UAI components in <uai-theme-provider>.');
        }
    }
    render() {
        const variant = supported('variant', this.variant, VARIANTS, 'body-base');
        const bold = supported('bold', this.bold, BOLDS, 'regular');
        const letterSpacing = supported('letterSpacing', this.letterSpacing, LETTER_SPACINGS, 'normal');
        const Tag = supported('tag', this.tag, TAGS, 'p');
        return (index.h(Tag, { key: '966d21fc61d5a3b87a558a2ec7a6f91a6dcb5d2a', class: {
                typo: true,
                [`typo--variant-${variant}`]: true,
                [`typo--bold-${bold}`]: true,
                [`typo--letter-spacing-${letterSpacing}`]: true,
                'typo--margin': this.margin && MARGIN_VARIANTS.includes(variant),
                'typo--paragraph': this.paragraph,
                'typo--italic': this.italic,
                'typo--no-wrap': this.noWrap,
            }, part: "uai-typo__text", "data-test": this.dataTest }, index.h("slot", { key: '312f4db91f3fe5fb50385961168873825cdf2a96' })));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "lineHeight": ["warnDeprecated"]
    }; }
};
UaiTypo.style = uaiTypoCss;

exports.uai_typo = UaiTypo;
//# sourceMappingURL=uai-typo.entry.cjs.js.map

//# sourceMappingURL=uai-typo.cjs.entry.js.map