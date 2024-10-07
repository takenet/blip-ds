import { r as registerInstance, h, H as Host } from './index-611fd21e.js';

const warningCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#f8fbfb;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}";

const Warning = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", { class: "warning__body" }, h("bds-icon", { class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", null)))));
  }
};
Warning.style = warningCss;

export { Warning as bds_warning };
