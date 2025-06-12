import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$2 } from './p-uLhI4ppg.js';
import { d as defineCustomElement$1 } from './p-3JBO9P5_.js';

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
        return (h(Host, { key: '27ee27aeb3a375d75eebafd1795fd2fc78eea48f', class: { banner: true, 'banner--hide': !this.visible } }, h("div", { key: '4e31102e5f18b2664076a0bfccab2febe07954df', class: {
                banner__holder: true,
                [`banner__holder--align--${this.bannerAlign}`]: true,
                [`banner__holder--${this.variant}`]: true,
                [`banner__holder--context--${this.context}`]: true,
            } }, h("div", { key: '08a0a493ea4ff8401eedc973240e81b025f7234d', class: {
                banner__content: true,
            } }, this.variant === 'warning' && (h("bds-icon", { key: 'ce61b43bcd1956070e0a840d3906fbb19fb0cdca', class: "icon_left", theme: "outline", size: "medium", name: "warning" })), this.variant === 'system' && (h("bds-icon", { key: 'b9e6e763066f989322fc5b239a057b0b0e8fa517', class: "icon_left", theme: "outline", size: "medium", name: "info" })), this.variant === 'info' && (h("bds-icon", { key: '59811115f02c915b9814c80b6f24eb7a73de6c80', class: "icon_left", theme: "outline", size: "medium", name: "message-ballon" })), this.variant === 'error' && (h("bds-icon", { key: 'cb5b19c054320fb6edad2b670fc1ecacd76bbad1', class: "icon_left", theme: "outline", size: "medium", name: "error" })), this.variant === 'success' && (h("bds-icon", { key: '517f3279e4403eabee3288bed1fa78d22cf9a1f0', class: "icon_left", theme: "outline", size: "medium", name: "checkball" })), h("div", { key: 'de9869683f7d64148845c28d3a4bc81b78819431', class: "slot" }, h("slot", { key: 'f2a9193db85cdff95eb723a4274d3810fe3e34d1' }))), h("div", { key: 'c0ecdffc93b26a3d27e063af01e5107fa63a5e95', class: {
                banner__action: true,
            } }, this.buttonClose === 'true' && (h("div", { key: '6a1a14d1e666787802aa54b231b70d68a13155a1', class: "close", onClick: () => this._buttonClickHandler() }, h("bds-button-icon", { key: '8c9dbc85c5ffdebc66b470b95aaaa45200bb8ba1', dataTest: this.dtButtonClose, icon: "close", size: "short", variant: "secondary" })))))));
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
//# sourceMappingURL=p-CZ1cgYFr.js.map

//# sourceMappingURL=p-CZ1cgYFr.js.map