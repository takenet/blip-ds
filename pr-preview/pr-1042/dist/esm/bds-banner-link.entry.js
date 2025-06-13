import { r as registerInstance, c as createEvent, h, a as getElement } from './index-COEIU3SQ.js';

const bannerLinkCss = ":Host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;text-decoration:underline;white-space:nowrap;margin-left:16px;-ms-flex-order:2;order:2}.banner__link{position:relative}.banner__link::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.banner__link:focus-visible{outline:none}.banner__link:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}";

const BannerLink = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bdsBannerLink = createEvent(this, "bdsBannerLink");
        /**
         * Set the link pass.
         */
        this.target = 'blank';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this._buttonClickHandler = () => {
            this.bdsBannerLink.emit(this.el);
            window.open(this.link, `_${this.target}`);
        };
    }
    handleKeyDown(event) {
        if (event.key == 'Enter') {
            this.bdsBannerLink.emit(this.el);
            window.open(this.link, `_${this.target}`);
        }
    }
    render() {
        const Element = 'a';
        return (h(Element, { key: 'c8568adcbe7eb31b2bcf5ac88f08357a950d30c5', class: { banner__link: true }, onClick: () => this._buttonClickHandler(), "data-test": this.dataTest, tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) }, h("slot", { key: 'eaaa13f59a5662c02459cbb12cb1cfa78c5a1120' })));
    }
    get el() { return getElement(this); }
};
BannerLink.style = bannerLinkCss;

export { BannerLink as bds_banner_link };
//# sourceMappingURL=bds-banner-link.entry.js.map

//# sourceMappingURL=bds-banner-link.entry.js.map