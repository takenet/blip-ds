'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const expansionPanelBodyCss = ":host{display:block}.expansion-content{display:-ms-flexbox;display:flex;padding-left:22px}.expansion-content .with-line{border-left:2px solid #8ca0b3;padding-left:9px;padding-top:16px;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-direction:column;flex-direction:column;width:100%}.expansion-content .circle{width:8px;height:8px;border-radius:50%;background-color:#8ca0b3;position:relative;right:14px}.expansion-content .text{right:28px;width:37px;height:30px;position:relative;background:#d2dfe6;-ms-flex-pack:center;justify-content:center;border-radius:8px;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-style:normal;font-weight:600;font-size:14px;line-height:22px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#202c44;top:10px}";

const ExpansionPanelBody = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.open = false;
    this.text = null;
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "expansion-content", hidden: this.open }, index.h("div", { class: "with-line" }, index.h("slot", null), this.text ? (index.h("div", { class: "text" }, index.h("p", null, this.text))) : (index.h("div", { class: "circle" }))))));
  }
};
ExpansionPanelBody.style = expansionPanelBodyCss;

exports.bds_expansion_panel_body = ExpansionPanelBody;
