'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const cardHeaderCss = ":host{width:100%}";

const CardHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.align = 'space-between';
  }
  render() {
    return (index.h("bds-grid", { xxs: "12", direction: "row", gap: "1", justifyContent: this.align, alignItems: "center" }, index.h("slot", null)));
  }
};
CardHeader.style = cardHeaderCss;

exports.bds_card_header = CardHeader;
