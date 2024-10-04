'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const menuExibitionCss = ".menuexibition{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:16px}.menuexibition__disabled{opacity:0.5;cursor:no-drop}.menuexibition .avatar-item{display:block;margin-right:8px}.menuexibition .content-item{width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.menuexibition .content-item .title-item{color:var(--color-content-default, #454545)}.menuexibition .content-item .subtitle-item{color:var(--color-content-disable, #636363)}.menuexibition .content-item .description-item{color:var(--color-content-default, #454545)}";

const BdsMenuExibition = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.avatarName = null;
    this.avatarThumbnail = null;
    this.avatarSize = 'standard';
    this.value = null;
    this.subtitle = null;
    this.description = null;
    this.disabled = false;
  }
  render() {
    const hasAvatar = this.avatarName || this.avatarThumbnail;
    return (index.h("div", { class: {
        menuexibition: true,
        [`menuexibition__disabled`]: this.disabled,
      } }, hasAvatar && (index.h("bds-avatar", { class: "avatar-item", name: this.avatarName, thumbnail: this.avatarThumbnail, size: this.avatarSize })), index.h("div", { class: "content-item" }, this.value && (index.h("bds-typo", { class: "title-item", variant: "fs-16", tag: "span" }, this.value)), this.subtitle && (index.h("bds-typo", { class: "subtitle-item", variant: "fs-10", tag: "span" }, this.subtitle)), this.description && (index.h("bds-typo", { class: "description-item", variant: "fs-10", tag: "span" }, this.description)))));
  }
};
BdsMenuExibition.style = menuExibitionCss;

exports.bds_menu_exibition = BdsMenuExibition;
