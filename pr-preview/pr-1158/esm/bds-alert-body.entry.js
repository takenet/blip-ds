import { r as registerInstance, h } from './index-611fd21e.js';

const alertBodyCss = ".alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}";

const AlertBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "alert__body" }, h("bds-typo", { variant: "fs-14", bold: "regular", slot: "body" }, h("slot", null))));
  }
};
AlertBody.style = alertBodyCss;

export { AlertBody as bds_alert_body };
