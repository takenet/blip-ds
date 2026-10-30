'use strict';

var index = require('./index-BuAR9UTp.js');

const alertActionsCss = () => `.alert__actions{width:100%;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;position:relative;padding:12px 16px;-webkit-box-sizing:border-box;box-sizing:border-box}.alert__actions ::slotted(bds-button:nth-child(1)){margin-right:16px !important}`;

const AlertActions = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '3862d440cdf0795decc8c245e6ec4f21d7bfc1e4', class: "alert__actions" }, index.h("slot", { key: '07ff2a7544f2887000420ae70563e67eeb2ccc57' })));
    }
};
AlertActions.style = alertActionsCss();

exports.bds_alert_actions = AlertActions;
