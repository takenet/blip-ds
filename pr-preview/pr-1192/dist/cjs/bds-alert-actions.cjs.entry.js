'use strict';

var index = require('./index-DQyYkciT.js');

const alertActionsCss = ".alert__actions{width:100%;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;position:relative;padding:12px 16px;-webkit-box-sizing:border-box;box-sizing:border-box}.alert__actions ::slotted(bds-button:nth-child(1)){margin-right:16px !important}";

const AlertActions = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'ce6b28c327d40c664b05fbbfe661ca456fdfad10', class: "alert__actions" }, index.h("slot", { key: 'b2a3680e37100719bbcdc6262a548d9496b06b7b' })));
    }
};
AlertActions.style = alertActionsCss;

exports.bds_alert_actions = AlertActions;
//# sourceMappingURL=bds-alert-actions.entry.cjs.js.map

//# sourceMappingURL=bds-alert-actions.cjs.entry.js.map