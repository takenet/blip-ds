'use strict';

var index = require('./index-D_zq0Z7d.js');

const alertActionsCss = ".alert__actions{width:100%;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;position:relative;padding:12px 16px;-webkit-box-sizing:border-box;box-sizing:border-box}.alert__actions ::slotted(bds-button:nth-child(1)){margin-right:16px !important}";

const AlertActions = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '3dabe1d71e6636d7dcb2674b954ddfba99998f04', class: "alert__actions" }, index.h("slot", { key: '51aa1a3b95f55efeaca11b3a59496a92c78a8247' })));
    }
};
AlertActions.style = alertActionsCss;

exports.bds_alert_actions = AlertActions;
//# sourceMappingURL=bds-alert-actions.entry.cjs.js.map

//# sourceMappingURL=bds-alert-actions.cjs.entry.js.map