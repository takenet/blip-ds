import { r as registerInstance, h, H as Host } from './index-611fd21e.js';

const expansionPanelHeaderCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}";

const ExpansionPanelHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.text = undefined;
  }
  render() {
    return (h(Host, null, h("div", { class: "header" }, h("slot", null)), h("bds-typo", { tag: "p", variant: "fs-12" }, this.text)));
  }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss;

export { ExpansionPanelHeader as bds_expansion_panel_header };
