import { r as registerInstance, h } from './index-CkbvGS8Z.js';

const alertBodyCss = () => `.alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}`;

const AlertBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: 'b718f074aed9923786e539614b350620ae7641a1', class: "alert__body" }, h("bds-typo", { key: 'd712bacd127944ab172e077ea1d701c9240d91dc', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: '27d4c59430d99277b92c18bfcffad465b1dc547e' }))));
    }
};
AlertBody.style = alertBodyCss();

export { AlertBody as bds_alert_body };
