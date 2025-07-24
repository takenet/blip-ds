import { p as proxyCustomElement, H, c as createEvent, h } from './index.js';

const bannerLinkCss = ":Host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;text-decoration:underline;white-space:nowrap;margin-left:16px;-ms-flex-order:2;order:2}.banner__link{position:relative}.banner__link::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.banner__link:focus-visible{outline:none}.banner__link:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}";

const BannerLink = /*@__PURE__*/ proxyCustomElement(class BannerLink extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
        return (h(Element, { key: '5d7ce8c2e9663e11c34610edfb8133e893f407d8', class: { banner__link: true }, onClick: () => this._buttonClickHandler(), "data-test": this.dataTest, tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) }, h("slot", { key: 'c3f618d5db27a6aeef57f661b53802ea3af9137d' })));
    }
    get el() { return this; }
    static get style() { return bannerLinkCss; }
}, [1, "bds-banner-link", {
        "link": [1],
        "target": [1],
        "dataTest": [1, "data-test"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-banner-link"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-banner-link":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BannerLink);
            }
            break;
    } });
}

const BdsBannerLink = BannerLink;
const defineCustomElement = defineCustomElement$1;

export { BdsBannerLink, defineCustomElement };
//# sourceMappingURL=bds-banner-link.js.map

//# sourceMappingURL=bds-banner-link.js.map