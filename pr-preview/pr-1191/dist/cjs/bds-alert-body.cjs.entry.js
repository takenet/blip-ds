'use strict';

var index = require('./index-DQyYkciT.js');

const alertBodyCss = ".alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}";

const AlertBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '724cab3d776ea0d70de0958b43ee1cec05964c26', class: "alert__body" }, index.h("bds-typo", { key: '9b130ace1d70838867edd3d26ca57ed3c999d045', variant: "fs-14", bold: "regular", slot: "body" }, index.h("slot", { key: '2d6bf86775417c9929c0fce86b933b8342ad9f92' }))));
    }
};
AlertBody.style = alertBodyCss;

exports.bds_alert_body = AlertBody;
//# sourceMappingURL=bds-alert-body.entry.cjs.js.map

//# sourceMappingURL=bds-alert-body.cjs.entry.js.map