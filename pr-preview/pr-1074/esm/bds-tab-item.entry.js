import { r as registerInstance, c as createEvent, h, H as Host } from './index-611fd21e.js';

const tabItemCss = ":host{display:none}:host(.is-open){display:block;height:100%}.tab_item{height:100%}.tab_item_content{display:none;height:100%}.tab_item_content--open{display:block}";

const BdsTabItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tabDisabled = createEvent(this, "tabDisabled", 7);
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
    this.error = false;
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
    return (h(Host, { class: { [`is-open`]: this.disable === true ? false : this.open } }, h("div", { class: { tab_item: true }, "data-test": this.dataTest }, h("div", { class: { tab_item_content: true, [`tab_item_content--open`]: this.open } }, h("slot", null)))));
  }
  static get watchers() { return {
    "disable": ["disableChanged"]
  }; }
};
BdsTabItem.style = tabItemCss;

export { BdsTabItem as bds_tab_item };
