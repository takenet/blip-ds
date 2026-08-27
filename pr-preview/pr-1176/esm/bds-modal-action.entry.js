import { r as registerInstance, h } from './index-611fd21e.js';

const modalActionCss = ".modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}";

const BdsModalAction = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "modal__action" }, h("slot", null)));
  }
};
BdsModalAction.style = modalActionCss;

export { BdsModalAction as bds_modal_action };
