import { r as registerInstance, h, H as Host } from './index-611fd21e.js';

const expansionPanelBodyCss = ":host{display:block}.expansion-content{display:-ms-flexbox;display:flex;padding-left:22px}.expansion-content .with-line{border-left:2px solid #8ca0b3;padding-left:9px;padding-top:16px;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-direction:column;flex-direction:column;width:100%}.expansion-content .circle{width:8px;height:8px;border-radius:50%;background-color:#8ca0b3;position:relative;right:14px}.expansion-content .text{right:28px;width:37px;height:30px;position:relative;background:#d2dfe6;-ms-flex-pack:center;justify-content:center;border-radius:8px;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-style:normal;font-weight:600;font-size:14px;line-height:22px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#202c44;top:10px}";

const ExpansionPanelBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.open = false;
    this.text = null;
  }
  render() {
    return (h(Host, null, h("div", { class: "expansion-content", hidden: this.open }, h("div", { class: "with-line" }, h("slot", null), this.text ? (h("div", { class: "text" }, h("p", null, this.text))) : (h("div", { class: "circle" }))))));
  }
};
ExpansionPanelBody.style = expansionPanelBodyCss;

export { ExpansionPanelBody as bds_expansion_panel_body };
