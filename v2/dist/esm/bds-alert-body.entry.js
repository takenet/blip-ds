import { r as registerInstance, h } from './index-CkbvGS8Z.js';

const alertBodyCss = () => `.alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}`;

const AlertBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '889ec5c263cbe5f99f628365290a8f5eb9a26d8b', class: "alert__body" }, h("bds-typo", { key: '41221151c1a74d389fb91849e6e0e92049a4144a', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: 'a3a8eb2ad69ddb5c3f195cf8923d4dbedff22c96' }))));
    }
};
AlertBody.style = alertBodyCss();

export { AlertBody as bds_alert_body };
