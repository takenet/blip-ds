'use strict';

var index = require('./index-D_zq0Z7d.js');

const alertActionsCss = ".alert__actions{width:100%;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;position:relative;padding:12px 16px;-webkit-box-sizing:border-box;box-sizing:border-box}.alert__actions ::slotted(bds-button:nth-child(1)){margin-right:16px !important}";

const AlertActions = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '9515b5db923454883f96819e0f22a041ea0c19af', class: "alert__actions" }, index.h("slot", { key: '3d647c77228153d4c87ee547ab7d15e6f3f210a9' })));
    }
};
AlertActions.style = alertActionsCss;

exports.bds_alert_actions = AlertActions;
//# sourceMappingURL=bds-alert-actions.entry.cjs.js.map

//# sourceMappingURL=bds-alert-actions.cjs.entry.js.map