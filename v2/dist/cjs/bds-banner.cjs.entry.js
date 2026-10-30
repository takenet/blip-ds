'use strict';

var index = require('./index-BuAR9UTp.js');

const bannerCss = () => `:host{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;font-weight:700}:host .banner__holder{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;width:100%;padding:8px 16px;min-height:40px;color:var(--color-content-default, rgb(40, 40, 40))}:host .banner__holder--context--inside{border-radius:8px}:host .banner__holder--align--left{-ms-flex-pack:start;justify-content:flex-start}:host .banner__holder--align--right{-ms-flex-pack:start;justify-content:flex-start}:host .banner__holder--warning{background-color:var(--color-warning, rgb(253, 233, 155))}:host .banner__holder--system{background-color:var(--color-system, rgb(178, 223, 253))}:host .banner__holder--info{background-color:var(--color-info, rgb(128, 227, 235))}:host .banner__holder--error{background-color:var(--color-error, rgb(250, 190, 190))}:host .banner__holder--success{background-color:var(--color-success, rgb(132, 235, 188))}:host .banner__content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%}:host .banner__content--left{-ms-flex-pack:start;justify-content:flex-start}:host .banner__content--center{-ms-flex-pack:start;justify-content:flex-start}:host .banner__content--right{-ms-flex-pack:start;justify-content:flex-start}:host .banner__content .slot{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin-left:8px;width:100%;color:var(--color-content-default, rgb(40, 40, 40))}:host .banner__action{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}:host .banner__action .close{cursor:pointer;display:-ms-flexbox;display:flex;margin-left:8px}.space_left{display:-ms-flexbox;display:flex}:host(.banner--hide){display:none}`;

const Banner = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsBannerClose = index.createEvent(this, "bdsBannerClose");
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
        return (index.h(index.Host, { key: 'b1a5841167f53e33e92213e9ba2c35519c19e2cf', class: { banner: true, 'banner--hide': !this.visible } }, index.h("div", { key: 'e238d74219984cded0fb3a421710a656c04759a8', class: {
                banner__holder: true,
                [`banner__holder--align--${this.bannerAlign}`]: true,
                [`banner__holder--${this.variant}`]: true,
                [`banner__holder--context--${this.context}`]: true,
            } }, index.h("div", { key: '3a4e25e48ae076852fdb32ae5d66686a84ce8fb2', class: {
                banner__content: true,
            } }, this.variant === 'warning' && (index.h("bds-icon", { key: 'bb36c6840a82d9beca18085166a48b29c6eaa08c', class: "icon_left", theme: "outline", size: "medium", name: "warning" })), this.variant === 'system' && (index.h("bds-icon", { key: 'b29b5332364c7741caa6f10a89a81685fb9dec9c', class: "icon_left", theme: "outline", size: "medium", name: "info" })), this.variant === 'info' && (index.h("bds-icon", { key: 'd9ea85319859b58ecc12ced40c18c25cf1cdb29d', class: "icon_left", theme: "outline", size: "medium", name: "message-ballon" })), this.variant === 'error' && (index.h("bds-icon", { key: 'a3a3601ec053d9630c908b0907d200d622830e30', class: "icon_left", theme: "outline", size: "medium", name: "error" })), this.variant === 'success' && (index.h("bds-icon", { key: 'fcaa8322e01d32f982e2912cf0d5484ec9343dd0', class: "icon_left", theme: "outline", size: "medium", name: "checkball" })), index.h("div", { key: '9d8b8acd1072dbb81669ab7b2e352d302984b294', class: "slot" }, index.h("slot", { key: 'c28579b61db73c16faebf0b397cf7f9f9d1c5b49' }))), index.h("div", { key: '194af253bc7b0a84f91128e22afadefa206ad556', class: {
                banner__action: true,
            } }, this.buttonClose === 'true' && (index.h("div", { key: 'ac098f4a8ed37347d0e28282e7d03c33cd770257', class: "close", onClick: () => this._buttonClickHandler() }, index.h("bds-button-icon", { key: '6a06f4380ed44d9acb5cd990be361d993029b49f', dataTest: this.dtButtonClose, icon: "close", size: "short", variant: "secondary" })))))));
    }
    get el() { return index.getElement(this); }
};
Banner.style = bannerCss();

exports.bds_banner = Banner;
