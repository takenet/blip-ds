'use strict';

var index = require('./index-DQyYkciT.js');

const alertBodyCss = ".alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}";

const AlertBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'a6b9dcae8ec98e4f52e2fc3193c6e5ce6fb08198', class: "alert__body" }, index.h("bds-typo", { key: '4b66b0049aacdb61da6d75775bd90b2b3e79af9b', variant: "fs-14", bold: "regular", slot: "body" }, index.h("slot", { key: 'b057c3c9f66edebbd27792361f31da3b97899b5a' }))));
    }
};
AlertBody.style = alertBodyCss;

exports.bds_alert_body = AlertBody;
//# sourceMappingURL=bds-alert-body.entry.cjs.js.map

//# sourceMappingURL=bds-alert-body.cjs.entry.js.map