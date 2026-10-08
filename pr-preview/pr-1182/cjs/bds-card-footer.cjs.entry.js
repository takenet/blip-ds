'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const cardFooterCss = ":host{width:100%}";

const CardFooter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.align = 'flex-end';
  }
  render() {
    return (index.h("bds-grid", { xxs: "12", direction: "row", gap: "2", justifyContent: this.align }, index.h("slot", null)));
  }
};
CardFooter.style = cardFooterCss;

exports.bds_card_footer = CardFooter;
