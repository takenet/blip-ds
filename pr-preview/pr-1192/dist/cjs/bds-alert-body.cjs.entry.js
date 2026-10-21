'use strict';

var index = require('./index-DQyYkciT.js');

const alertBodyCss = ".alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}";

const AlertBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'ff7a3036059d041c77c79a856bee1b846d878635', class: "alert__body" }, index.h("bds-typo", { key: 'cacb3dbb5d74c1600f5b1df30a54643e15ced6f9', variant: "fs-14", bold: "regular", slot: "body" }, index.h("slot", { key: '75417badf23c0feb5d0d99facf3f9d5c0b8d862f' }))));
    }
};
AlertBody.style = alertBodyCss;

exports.bds_alert_body = AlertBody;
//# sourceMappingURL=bds-alert-body.entry.cjs.js.map

//# sourceMappingURL=bds-alert-body.cjs.entry.js.map