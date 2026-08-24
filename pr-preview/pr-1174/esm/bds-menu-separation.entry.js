import { r as registerInstance, h } from './index-611fd21e.js';

const menuSeparationCss = ".menuseparation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 16px}.menuseparation__small{margin:8px 0}.menuseparation__default{margin:12px 0}.menuseparation__large{margin:16px 0}.menuseparation .dividor-item{height:1px;width:100%;background-color:#d2dfe6}.menuseparation .title-item{margin-right:8px;margin-top:-4px;color:#6e7b91}";

const BdsMenuSeparation = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.value = null;
    this.size = null;
  }
  render() {
    return (h("div", { class: {
        menuseparation: true,
        [`menuseparation__${this.size}`]: true,
      } }, this.value && (h("bds-typo", { class: "title-item", variant: "fs-10", tag: "span" }, this.value)), h("div", { class: "dividor-item" })));
  }
};
BdsMenuSeparation.style = menuSeparationCss;

export { BdsMenuSeparation as bds_menu_separation };
