import { r as registerInstance, h } from './index-CkbvGS8Z.js';

const alertBodyCss = () => `.alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}`;

const AlertBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '6f73ef079771573117e5731c42ef6c3fe4099f98', class: "alert__body" }, h("bds-typo", { key: 'b5586f57a252e0992ca115d7b0eeb3f1cc88711d', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: '1d2d3d09ed78fb6d42e4c53d5a8e60ea489c1417' }))));
    }
};
AlertBody.style = alertBodyCss();

export { AlertBody as bds_alert_body };
