'use strict';

var index = require('./index-GTJCA4wH.js');

const alertActionsCss = () => `.alert__actions{width:100%;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;position:relative;padding:12px 16px;-webkit-box-sizing:border-box;box-sizing:border-box}.alert__actions ::slotted(${index.transformTag("bds-button")}:nth-child(1)){margin-right:16px !important}`;

const AlertActions = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '0bdb6b6c3fd493027d4aa0ce7a93470de16950d6', class: "alert__actions" }, index.h("slot", { key: 'bc386a1e608d637c2a3de213871e8ce957a99b8c' })));
    }
};
AlertActions.style = alertActionsCss();

exports.bds_alert_actions = AlertActions;
