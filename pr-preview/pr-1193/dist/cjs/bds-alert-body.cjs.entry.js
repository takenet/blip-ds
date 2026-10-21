'use strict';

var index = require('./index-DQyYkciT.js');

const alertBodyCss = ".alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}";

const AlertBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '6b327a5d7e798420c941735ef2b20745535131cb', class: "alert__body" }, index.h("bds-typo", { key: '9f37aa3033f7319b5c063864bfb0196620cc1883', variant: "fs-14", bold: "regular", slot: "body" }, index.h("slot", { key: 'c548c697ee217e296b5181a53ee980a52181e5af' }))));
    }
};
AlertBody.style = alertBodyCss;

exports.bds_alert_body = AlertBody;
//# sourceMappingURL=bds-alert-body.entry.cjs.js.map

//# sourceMappingURL=bds-alert-body.cjs.entry.js.map