import { r as registerInstance, h } from './index-CkbvGS8Z.js';

const alertBodyCss = () => `.alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}`;

const AlertBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '42a725278676da0877658f460f666b542c567aa7', class: "alert__body" }, h("bds-typo", { key: '7707331ac3e75a37ebe376785bf607b6f0a34334', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: '839bced36600ebcf36a15e487da56ab4c9967463' }))));
    }
};
AlertBody.style = alertBodyCss();

export { AlertBody as bds_alert_body };
