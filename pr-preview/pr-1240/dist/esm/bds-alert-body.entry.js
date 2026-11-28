import { r as registerInstance, h } from './index-B3G05Lxx.js';

const alertBodyCss = () => `.alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}`;

const AlertBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: 'c67aceee95698bf2f19866e0c8a01745f7728c60', class: "alert__body" }, h("bds-typo", { key: '2689558a0ca839eec458ad1f0930fc9082053767', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: '9c946e4d3e6a0337b33dc167770ece352ddba9fc' }))));
    }
};
AlertBody.style = alertBodyCss();

export { AlertBody as bds_alert_body };
