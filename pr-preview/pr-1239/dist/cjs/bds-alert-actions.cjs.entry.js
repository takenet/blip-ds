'use strict';

var index = require('./index-JW9Yq-qX.js');

const alertActionsCss = () => `.alert__actions{width:100%;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;position:relative;padding:12px 16px;-webkit-box-sizing:border-box;box-sizing:border-box}.alert__actions ::slotted(${index.transformTag("bds-button")}:nth-child(1)){margin-right:16px !important}`;

const AlertActions = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '6ae09f1c41cf3abf4695c4069f184b785ab53eba', class: "alert__actions" }, index.h("slot", { key: '72a5436d63308fe084bb8ff2feeec64e5fa55cc8' })));
    }
};
AlertActions.style = alertActionsCss();

exports.bds_alert_actions = AlertActions;
