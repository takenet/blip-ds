'use strict';

var index = require('./index-DQyYkciT.js');

const alertBodyCss = ".alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}";

const AlertBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'ec87d9ac0a21be0c20cd426ade201bf0efbf91ea', class: "alert__body" }, index.h("bds-typo", { key: '01d58f13f3291a46c97ee61a2ce37dd88adf0140', variant: "fs-14", bold: "regular", slot: "body" }, index.h("slot", { key: 'a294e62cceb02fb08fd20a3c5363d7b38d49665e' }))));
    }
};
AlertBody.style = alertBodyCss;

exports.bds_alert_body = AlertBody;
//# sourceMappingURL=bds-alert-body.entry.cjs.js.map

//# sourceMappingURL=bds-alert-body.cjs.entry.js.map