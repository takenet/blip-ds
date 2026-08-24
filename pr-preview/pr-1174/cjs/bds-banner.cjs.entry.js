'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const bannerCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;font-weight:700}:host .banner__holder{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;width:100%;padding:8px 16px;min-height:40px;color:var(--color-content-default, #282828)}:host .banner__holder--context--inside{border-radius:8px}:host .banner__holder--align--left{-ms-flex-pack:start;justify-content:flex-start}:host .banner__holder--align--right{-ms-flex-pack:start;justify-content:flex-start}:host .banner__holder--warning{background-color:var(--color-warning, #fde99b)}:host .banner__holder--system{background-color:var(--color-system, #b2dffd)}:host .banner__holder--info{background-color:var(--color-info, #80e3eb)}:host .banner__holder--error{background-color:var(--color-error, #fabebe)}:host .banner__holder--success{background-color:var(--color-success, #84ebbc)}:host .banner__content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%}:host .banner__content--left{-ms-flex-pack:start;justify-content:flex-start}:host .banner__content--center{-ms-flex-pack:start;justify-content:flex-start}:host .banner__content--right{-ms-flex-pack:start;justify-content:flex-start}:host .banner__content .slot{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin-left:8px;width:100%;color:var(--color-content-default, #282828)}:host .banner__action{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}:host .banner__action .close{cursor:pointer;display:-ms-flexbox;display:flex;margin-left:8px}.space_left{display:-ms-flexbox;display:flex}:host(.banner--hide){display:none}";

const Banner = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bdsBannerClose = index.createEvent(this, "bdsBannerClose", 7);
    this._buttonClickHandler = () => {
      this.bdsBannerClose.emit();
      this.visible = false;
    };
    this.visible = true;
    this.bannerAlign = 'center';
    this.buttonClose = 'false';
    this.context = 'outside';
    this.variant = 'system';
    this.dtButtonClose = null;
  }
  async toggle() {
    this.visible = !this.visible;
  }
  render() {
    return (index.h(index.Host, { class: { banner: true, 'banner--hide': !this.visible } }, index.h("div", { class: {
        banner__holder: true,
        [`banner__holder--align--${this.bannerAlign}`]: true,
        [`banner__holder--${this.variant}`]: true,
        [`banner__holder--context--${this.context}`]: true,
      } }, index.h("div", { class: {
        banner__content: true,
      } }, this.variant === 'warning' && (index.h("bds-icon", { class: "icon_left", theme: "outline", size: "medium", name: "warning" })), this.variant === 'system' && (index.h("bds-icon", { class: "icon_left", theme: "outline", size: "medium", name: "info" })), this.variant === 'info' && (index.h("bds-icon", { class: "icon_left", theme: "outline", size: "medium", name: "message-ballon" })), this.variant === 'error' && (index.h("bds-icon", { class: "icon_left", theme: "outline", size: "medium", name: "error" })), this.variant === 'success' && (index.h("bds-icon", { class: "icon_left", theme: "outline", size: "medium", name: "checkball" })), index.h("div", { class: "slot" }, index.h("slot", null))), index.h("div", { class: {
        banner__action: true,
      } }, this.buttonClose === 'true' && (index.h("div", { class: "close", onClick: () => this._buttonClickHandler() }, index.h("bds-button-icon", { dataTest: this.dtButtonClose, icon: "close", size: "short", variant: "secondary" })))))));
  }
  get el() { return index.getElement(this); }
};
Banner.style = bannerCss;

exports.bds_banner = Banner;
