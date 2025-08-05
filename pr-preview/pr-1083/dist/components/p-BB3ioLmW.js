import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$2 } from './p-BlC8WqrE.js';
import { d as defineCustomElement$1 } from './p-BHBVuzyo.js';

const bannerCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;font-weight:700}:host .banner__holder{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;width:100%;padding:8px 16px;min-height:40px;color:var(--color-content-default, rgb(40, 40, 40))}:host .banner__holder--context--inside{border-radius:8px}:host .banner__holder--align--left{-ms-flex-pack:start;justify-content:flex-start}:host .banner__holder--align--right{-ms-flex-pack:start;justify-content:flex-start}:host .banner__holder--warning{background-color:var(--color-warning, rgb(253, 233, 155))}:host .banner__holder--system{background-color:var(--color-system, rgb(178, 223, 253))}:host .banner__holder--info{background-color:var(--color-info, rgb(128, 227, 235))}:host .banner__holder--error{background-color:var(--color-error, rgb(250, 190, 190))}:host .banner__holder--success{background-color:var(--color-success, rgb(132, 235, 188))}:host .banner__content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%}:host .banner__content--left{-ms-flex-pack:start;justify-content:flex-start}:host .banner__content--center{-ms-flex-pack:start;justify-content:flex-start}:host .banner__content--right{-ms-flex-pack:start;justify-content:flex-start}:host .banner__content .slot{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin-left:8px;width:100%;color:var(--color-content-default, rgb(40, 40, 40))}:host .banner__action{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}:host .banner__action .close{cursor:pointer;display:-ms-flexbox;display:flex;margin-left:8px}.space_left{display:-ms-flexbox;display:flex}:host(.banner--hide){display:none}";

const Banner = /*@__PURE__*/ proxyCustomElement(class Banner extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.bdsBannerClose = createEvent(this, "bdsBannerClose");
        this.visible = true;
        /**
         * Set the banner aligment, it can be one of: 'center', 'right' or 'left'.
         */
        this.bannerAlign = 'center';
        /**
         * Set if show up the close button.
         */
        this.buttonClose = 'false';
        /**
         * Set if the banner is external or internal.
         */
        this.context = 'outside';
        /**
         * Set the banner varient, it can be 'system' or 'warning'.
         */
        this.variant = 'system';
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonClose is the data-test to button close.
         */
        this.dtButtonClose = null;
        this._buttonClickHandler = () => {
            this.bdsBannerClose.emit();
            this.visible = false;
        };
    }
    async toggle() {
        this.visible = !this.visible;
    }
    render() {
        return (h(Host, { key: 'f0384baea98835d4d011db4ef0abebd8533406c1', class: { banner: true, 'banner--hide': !this.visible } }, h("div", { key: 'de2c63f4940cf3ffd59e3fb76b634c1dae186b89', class: {
                banner__holder: true,
                [`banner__holder--align--${this.bannerAlign}`]: true,
                [`banner__holder--${this.variant}`]: true,
                [`banner__holder--context--${this.context}`]: true,
            } }, h("div", { key: '952418446181d3a85039a41747679ed08c6ebea4', class: {
                banner__content: true,
            } }, this.variant === 'warning' && (h("bds-icon", { key: 'ff0f1d4fd5a2784d68329c34f87ca41e198766aa', class: "icon_left", theme: "outline", size: "medium", name: "warning" })), this.variant === 'system' && (h("bds-icon", { key: '95ff2ee0c03694a435e839fa7da073478cdd9b55', class: "icon_left", theme: "outline", size: "medium", name: "info" })), this.variant === 'info' && (h("bds-icon", { key: '8353a8b66a6f0173cc4a1a201c3c227a83977666', class: "icon_left", theme: "outline", size: "medium", name: "message-ballon" })), this.variant === 'error' && (h("bds-icon", { key: 'a44b21772b512ddca13ce2fa549e24554dbde707', class: "icon_left", theme: "outline", size: "medium", name: "error" })), this.variant === 'success' && (h("bds-icon", { key: '7f897b2d6af5cddcedaca823196b2f51b8aff780', class: "icon_left", theme: "outline", size: "medium", name: "checkball" })), h("div", { key: 'fe81eb83dbc95af83a568f5175f2ba1eafba487e', class: "slot" }, h("slot", { key: '9169dd2c2936b6a39db1bbd908f055e0a26675da' }))), h("div", { key: '1d3908eddbd49e64cc143774e3402fd9c9903203', class: {
                banner__action: true,
            } }, this.buttonClose === 'true' && (h("div", { key: 'f625832b442182ff176f9b5c9a82b1ce21865840', class: "close", onClick: () => this._buttonClickHandler() }, h("bds-button-icon", { key: 'f047b12fcb054a1457472055669ab6efded3b02a', dataTest: this.dtButtonClose, icon: "close", size: "short", variant: "secondary" })))))));
    }
    get el() { return this; }
    static get style() { return bannerCss; }
}, [1, "bds-banner", {
        "bannerAlign": [1, "banner-align"],
        "buttonClose": [1, "button-close"],
        "context": [1],
        "variant": [1],
        "dtButtonClose": [1, "dt-button-close"],
        "visible": [32],
        "toggle": [64]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-banner", "bds-button-icon", "bds-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-banner":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Banner);
            }
            break;
        case "bds-button-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "bds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { Banner as B, defineCustomElement as d };
//# sourceMappingURL=p-BB3ioLmW.js.map

//# sourceMappingURL=p-BB3ioLmW.js.map