'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const CardSubtitle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.text = undefined;
  }
  render() {
    return (index.h("bds-typo", { variant: "fs-12", tag: "p", bold: "regular", margin: false }, this.text));
  }
};

exports.bds_card_subtitle = CardSubtitle;
