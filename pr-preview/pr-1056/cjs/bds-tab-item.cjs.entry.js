'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const tabItemCss = ":host{display:none}:host(.is-open){display:block;height:100%}.tab_item{height:100%}.tab_item_content{display:none;height:100%}.tab_item_content--open{display:block}";

const BdsTabItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.tabDisabled = index.createEvent(this, "tabDisabled", 7);
    this.numberElement = null;
    this.label = null;
    this.icon = null;
    this.iconPosition = 'left';
    this.iconTheme = 'outline';
    this.badge = false;
    this.badgeShape = 'circle';
    this.badgeColor = 'system';
    this.badgeIcon = null;
    this.badgeAnimation = false;
    this.badgePosition = 'left';
    this.badgeNumber = null;
    this.disable = false;
    this.open = false;
    this.dataTest = null;
  }
  async reciveNumber(number) {
    this.numberElement = number;
  }
  disableChanged() {
    this.tabDisabled.emit({ item: this.numberElement, disable: this.disable });
  }
  render() {
    return (index.h(index.Host, { class: { [`is-open`]: this.disable === true ? false : this.open } }, index.h("div", { class: { tab_item: true }, "data-test": this.dataTest }, index.h("div", { class: { tab_item_content: true, [`tab_item_content--open`]: this.open } }, index.h("slot", null)))));
  }
  static get watchers() { return {
    "disable": ["disableChanged"]
  }; }
};
BdsTabItem.style = tabItemCss;

exports.bds_tab_item = BdsTabItem;
