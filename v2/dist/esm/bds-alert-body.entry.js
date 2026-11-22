import { r as registerInstance, h } from './index-B3G05Lxx.js';

const alertBodyCss = () => `.alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}`;

const AlertBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '38fbe1054f05ad1a5085e0f6096939d8e431dbeb', class: "alert__body" }, h("bds-typo", { key: '7b541ffbff8a121b01ba6ac62d1cb213bdcc058d', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: '9fa9ceb25365dbd3ab2036029a711dca3f9502eb' }))));
    }
};
AlertBody.style = alertBodyCss();

export { AlertBody as bds_alert_body };
