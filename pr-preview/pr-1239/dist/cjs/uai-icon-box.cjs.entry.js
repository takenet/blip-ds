'use strict';

var index = require('./index-JW9Yq-qX.js');

const uaiIconBoxCss = () => `:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0;vertical-align:middle}.icon-box{--icon-box-glyph-size:var(--uai-sizing-lg, 1.5rem);display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--uai-spacing-xs, 0.5rem);border-radius:var(--uai-radius-md, 0.5rem);background-color:var(--uai-surface-background, #f2f3f3);color:var(--uai-content-primary, #242729)}.icon-box--size-sm{--icon-box-glyph-size:var(--uai-sizing-md, 1.25rem)}.icon-box--size-md{--icon-box-glyph-size:var(--uai-sizing-lg, 1.5rem)}.icon-box--size-lg{--icon-box-glyph-size:var(--uai-sizing-xl, 2rem)}.icon-box__icon{--uai-icon-size:var(--icon-box-glyph-size);color:inherit}::slotted(*){width:var(--icon-box-glyph-size);height:var(--icon-box-glyph-size);color:inherit}`;

const SIZES = ['sm', 'md', 'lg'];
const THEMES = ['outline', 'solid'];
const ICON_SIZE = {
    sm: 'small',
    md: 'medium',
    lg: 'medium',
};
const UaiIconBox = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Name of the glyph from the UAI icon font. When omitted, renders the default slot content.
         */
        this.icon = null;
        /**
         * Style of the UAI icon glyph (`outline` or `solid`).
         */
        this.iconTheme = 'outline';
        /**
         * Scale of the icon container (`sm`, `md`, or `lg`).
         */
        this.size = 'md';
        /**
         * Accessible label when the icon box communicates standalone meaning; otherwise the box is decorative.
         */
        this.ariaLabel = null;
        /**
         * Selector attribute applied to the box container for automated tests.
         */
        this.dataTest = null;
    }
    resolveSize() {
        var _a;
        const rawSize = String((_a = this.size) !== null && _a !== void 0 ? _a : 'md');
        if (SIZES.includes(rawSize)) {
            return rawSize;
        }
        return 'md';
    }
    resolveTheme() {
        var _a;
        const rawTheme = String((_a = this.iconTheme) !== null && _a !== void 0 ? _a : 'outline');
        if (THEMES.includes(rawTheme)) {
            return rawTheme;
        }
        return 'outline';
    }
    render() {
        const size = this.resolveSize();
        const theme = this.resolveTheme();
        const ariaLabel = (this.ariaLabel || this.el.getAttribute('aria-label') || '').trim();
        return (index.h(index.Host, { key: '285f1eb9d5acd1d99fbc8290650a6912e1d5d1e3', role: ariaLabel ? 'img' : undefined, "aria-label": ariaLabel || undefined, "aria-hidden": ariaLabel ? undefined : 'true' }, index.h("div", { key: 'e8c631384032ee65cba6bd5e5f9bbaf15acd8ad3', class: {
                'icon-box': true,
                [`icon-box--size-${size}`]: true,
            }, part: "box", "data-test": this.dataTest }, this.icon ? (index.h("uai-icon", { class: "icon-box__icon", name: this.icon, theme: theme, size: ICON_SIZE[size], "aria-hidden": "true" })) : (index.h("slot", null)))));
    }
    get el() { return index.getElement(this); }
};
UaiIconBox.style = uaiIconBoxCss();

exports.uai_icon_box = UaiIconBox;
