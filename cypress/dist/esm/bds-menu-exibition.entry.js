import { r as registerInstance, h } from './index-611fd21e.js';

const menuExibitionCss = ".menuexibition{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:16px}.menuexibition__disabled{opacity:0.5;cursor:no-drop}.menuexibition .avatar-item{display:block;margin-right:8px}.menuexibition .content-item{width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.menuexibition .content-item .title-item{color:var(--color-content-default, #454545)}.menuexibition .content-item .subtitle-item{color:var(--color-content-disable, #636363)}.menuexibition .content-item .description-item{color:var(--color-content-default, #454545)}";

const BdsMenuExibition = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("div", { class: {
        menuexibition: true,
        [`menuexibition__disabled`]: this.disabled,
      } }, hasAvatar && (h("bds-avatar", { class: "avatar-item", name: this.avatarName, thumbnail: this.avatarThumbnail, size: this.avatarSize })), h("div", { class: "content-item" }, this.value && (h("bds-typo", { class: "title-item", variant: "fs-16", tag: "span" }, this.value)), this.subtitle && (h("bds-typo", { class: "subtitle-item", variant: "fs-10", tag: "span" }, this.subtitle)), this.description && (h("bds-typo", { class: "description-item", variant: "fs-10", tag: "span" }, this.description)))));
  }
};
BdsMenuExibition.style = menuExibitionCss;

export { BdsMenuExibition as bds_menu_exibition };
