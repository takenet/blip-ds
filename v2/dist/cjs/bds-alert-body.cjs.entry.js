'use strict';

var index = require('./index-BuAR9UTp.js');

const alertBodyCss = () => `.alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}`;

const AlertBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'e4d173a987339500087341ff0402b17b8e751d2e', class: "alert__body" }, index.h("bds-typo", { key: 'e6f385124c5068b83c806ef9d1c710fb6aa19868', variant: "fs-14", bold: "regular", slot: "body" }, index.h("slot", { key: '5ce2788ce6f335a2cf3df43ba876b8ebec5db8f1' }))));
    }
};
AlertBody.style = alertBodyCss();

exports.bds_alert_body = AlertBody;
