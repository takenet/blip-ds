'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const expansionPanelHeaderCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}";

const ExpansionPanelHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.text = undefined;
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "header" }, index.h("slot", null)), index.h("bds-typo", { tag: "p", variant: "fs-12" }, this.text)));
  }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss;

exports.bds_expansion_panel_header = ExpansionPanelHeader;
