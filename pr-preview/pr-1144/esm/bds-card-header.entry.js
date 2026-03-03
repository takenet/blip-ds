import { r as registerInstance, h } from './index-611fd21e.js';

const cardHeaderCss = ":host{width:100%}";

const CardHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.align = 'space-between';
  }
  render() {
    return (h("bds-grid", { xxs: "12", direction: "row", gap: "1", justifyContent: this.align, alignItems: "center" }, h("slot", null)));
  }
};
CardHeader.style = cardHeaderCss;

export { CardHeader as bds_card_header };
