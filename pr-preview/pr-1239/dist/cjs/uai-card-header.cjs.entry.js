'use strict';

var index = require('./index-JW9Yq-qX.js');

const uaiCardHeaderCss = () => `:host{display:-ms-flexbox;display:flex;width:100%;min-width:0}`;

const ALIGNS = [
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
];
const UaiCardHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Horizontal distribution of children inside the header.
         * Use `space-between` for title + actions or `flex-start` for stacked headings; pair with `UaiCardTitle`; avoid invalid CSS alignment values.
         */
        this.align = 'space-between';
    }
    componentWillLoad() {
        var _a, _b;
        if (((_b = (_a = this.el) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.tagName) === 'UAI-CARD' && !this.el.hasAttribute('slot')) {
            this.el.setAttribute('slot', 'header');
        }
    }
    resolveAlign() {
        var _a;
        const candidate = (_a = this.align) !== null && _a !== void 0 ? _a : 'space-between';
        if (ALIGNS.includes(candidate))
            return candidate;
        return 'space-between';
    }
    render() {
        const align = this.resolveAlign();
        return (index.h(index.Host, { key: '9053af4facbfa1960875cc449b0dd62cb909849c' }, index.h("uai-grid", { key: 'ecfaeff99322eb8ad3e236b1cc1a1cc3207b8e6a', xxs: "12", direction: "row", gap: "1", justifyContent: align, alignItems: "center" }, index.h("slot", { key: 'b221ecc9752c7a8b154610d29f6bb543b7b8acc0' }))));
    }
    get el() { return index.getElement(this); }
};
UaiCardHeader.style = uaiCardHeaderCss();

exports.uai_card_header = UaiCardHeader;
