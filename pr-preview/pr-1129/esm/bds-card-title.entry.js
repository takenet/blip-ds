import { r as registerInstance, h } from './index-611fd21e.js';

const cardTitleCss = "";

const CardTitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.text = undefined;
  }
  render() {
    return (h("bds-typo", { variant: "fs-20", tag: "h4", margin: false, bold: "bold" }, this.text));
  }
};
CardTitle.style = cardTitleCss;

export { CardTitle as bds_card_title };
