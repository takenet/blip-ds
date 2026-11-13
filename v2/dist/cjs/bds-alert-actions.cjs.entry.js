'use strict';

var index = require('./index-BuAR9UTp.js');

const alertActionsCss = () => `.alert__actions{width:100%;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;position:relative;padding:12px 16px;-webkit-box-sizing:border-box;box-sizing:border-box}.alert__actions ::slotted(bds-button:nth-child(1)){margin-right:16px !important}`;

const AlertActions = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'c99d042de4e1f15e0583bf7e9efc7b31ba92bfb8', class: "alert__actions" }, index.h("slot", { key: '5037720f7f25a341ca6517e0b1d187d666de617a' })));
    }
};
AlertActions.style = alertActionsCss();

exports.bds_alert_actions = AlertActions;
