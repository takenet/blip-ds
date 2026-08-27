'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const cardTitleCss = "";

const CardTitle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.text = undefined;
  }
  render() {
    return (index.h("bds-typo", { variant: "fs-20", tag: "h4", margin: false, bold: "bold" }, this.text));
  }
};
CardTitle.style = cardTitleCss;

exports.bds_card_title = CardTitle;
