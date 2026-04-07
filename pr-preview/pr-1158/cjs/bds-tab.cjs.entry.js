'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const tabCss = ".bds-tab{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:content-box;box-sizing:content-box;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;max-width:270px;height:46px;max-height:48px;cursor:pointer;text-align:center;color:var(--color-content-disable, #595959);border-bottom:2px solid transparent}.bds-tab:not(:last-child){margin-right:32px}.bds-tab:hover{color:var(--color-content-default, #282828)}.bds-tab--selected{-webkit-animation-name:selectFade;animation-name:selectFade;-webkit-animation-duration:0.75s;animation-duration:0.75s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.bds-tab__text{min-width:90px;max-width:270px}@-webkit-keyframes selectFade{from{border-bottom:2px solid transparent;color:var(--color-content-default, #282828)}to{border-bottom:2px solid var(--color-brand, #0096fa);color:var(--color-content-default, #282828)}}@keyframes selectFade{from{border-bottom:2px solid transparent;color:var(--color-content-default, #282828)}to{border-bottom:2px solid var(--color-brand, #0096fa);color:var(--color-content-default, #282828)}}@media (max-width: 599px){.bds-tab{min-width:110px;text-overflow:ellipsis}}";

const Tab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bdsTabChange = index.createEvent(this, "bdsTabChange", 7);
    this.group = undefined;
    this.label = undefined;
    this.active = false;
    this.isActive = false;
  }
  handleTabChange(event) {
    this.isActive = event.detail == this.group;
  }
  async onClick() {
    this.bdsTabChange.emit(this.group);
  }
  render() {
    const bold = this.isActive ? 'bold' : 'regular';
    return (index.h(index.Host, { class: {
        'bds-tab': true,
        ['bds-tab--selected']: this.isActive,
      }, onClick: this.onClick.bind(this) }, index.h("div", { class: "bds-tab__text" }, index.h("bds-typo", { variant: "fs-16", bold: bold }, this.label))));
  }
};
Tab.style = tabCss;

exports.bds_tab = Tab;
