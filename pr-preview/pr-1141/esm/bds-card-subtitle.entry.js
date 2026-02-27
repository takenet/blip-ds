import { r as registerInstance, h } from './index-611fd21e.js';

const CardSubtitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.text = undefined;
  }
  render() {
    return (h("bds-typo", { variant: "fs-12", tag: "p", bold: "regular", margin: false }, this.text));
  }
};

export { CardSubtitle as bds_card_subtitle };
