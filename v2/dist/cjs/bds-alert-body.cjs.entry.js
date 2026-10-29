'use strict';

var index = require('./index-BuAR9UTp.js');

const alertBodyCss = () => `.alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}`;

const AlertBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '9063d75033181df9cd3b021566a42394acaa1d83', class: "alert__body" }, index.h("bds-typo", { key: 'fd0f8fcc53c25b7daabdebef346ce2eb2e1b7262', variant: "fs-14", bold: "regular", slot: "body" }, index.h("slot", { key: '2ba09628fa332b45217c75267f36de189e679a34' }))));
    }
};
AlertBody.style = alertBodyCss();

exports.bds_alert_body = AlertBody;
