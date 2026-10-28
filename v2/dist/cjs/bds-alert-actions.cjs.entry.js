'use strict';

var index = require('./index-BuAR9UTp.js');

const alertActionsCss = () => `.alert__actions{width:100%;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;position:relative;padding:12px 16px;-webkit-box-sizing:border-box;box-sizing:border-box}.alert__actions ::slotted(bds-button:nth-child(1)){margin-right:16px !important}`;

const AlertActions = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'cf98eafed4c3a989c4dfe1513038d4d73f734646', class: "alert__actions" }, index.h("slot", { key: 'c29911f704fadb15c21dba3d59fb77ca8cd63a0d' })));
    }
};
AlertActions.style = alertActionsCss();

exports.bds_alert_actions = AlertActions;
