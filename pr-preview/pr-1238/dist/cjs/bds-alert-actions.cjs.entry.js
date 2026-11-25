'use strict';

var index = require('./index-GTJCA4wH.js');

const alertActionsCss = () => `.alert__actions{width:100%;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;position:relative;padding:12px 16px;-webkit-box-sizing:border-box;box-sizing:border-box}.alert__actions ::slotted(${index.transformTag("bds-button")}:nth-child(1)){margin-right:16px !important}`;

const AlertActions = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '4c3c3713b86c0099f5ac7434b913dedf02c0a37e', class: "alert__actions" }, index.h("slot", { key: 'c99250c4ece770e920823d4784f34aecc192d49f' })));
    }
};
AlertActions.style = alertActionsCss();

exports.bds_alert_actions = AlertActions;
