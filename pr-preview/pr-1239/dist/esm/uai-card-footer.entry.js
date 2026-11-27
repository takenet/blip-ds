import { r as registerInstance, h, H as Host, g as getElement } from './index-DUwG7Zwx.js';

const uaiCardFooterCss = () => `:host{display:-ms-flexbox;display:flex;width:100%;min-width:0}`;

const ALIGNS = [
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
];
const UaiCardFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Horizontal distribution of children inside the footer.
         * Use `flex-end` for action buttons or `space-between` for dual metadata; pair with `UaiCard`; avoid invalid CSS alignment values.
         */
        this.align = 'flex-end';
    }
    componentWillLoad() {
        var _a, _b;
        if (((_b = (_a = this.el) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.tagName) === 'UAI-CARD' && !this.el.hasAttribute('slot')) {
            this.el.setAttribute('slot', 'footer');
        }
    }
    resolveAlign() {
        var _a;
        const candidate = (_a = this.align) !== null && _a !== void 0 ? _a : 'flex-end';
        if (ALIGNS.includes(candidate))
            return candidate;
        return 'flex-end';
    }
    render() {
        const align = this.resolveAlign();
        return (h(Host, { key: '4fa35b28ddc081dfd285ff9dbef18928ab2433fb' }, h("uai-grid", { key: 'c9f349ee18186df87dffff5a552e32b398604aa7', xxs: "12", direction: "row", gap: "2", justifyContent: align, alignItems: "center" }, h("slot", { key: 'd332cab4eddeb94dd63a247412ba9b86c4965b68' }))));
    }
    get el() { return getElement(this); }
};
UaiCardFooter.style = uaiCardFooterCss();

export { UaiCardFooter as uai_card_footer };
