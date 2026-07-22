import { r as registerInstance, h } from './index-611fd21e.js';

const cardFooterCss = ":host{width:100%}";

const CardFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.align = 'flex-end';
  }
  render() {
    return (h("bds-grid", { xxs: "12", direction: "row", gap: "2", justifyContent: this.align }, h("slot", null)));
  }
};
CardFooter.style = cardFooterCss;

export { CardFooter as bds_card_footer };
