'use strict';

var index = require('./index-DQyYkciT.js');

const alertActionsCss = ".alert__actions{width:100%;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;position:relative;padding:12px 16px;-webkit-box-sizing:border-box;box-sizing:border-box}.alert__actions ::slotted(bds-button:nth-child(1)){margin-right:16px !important}";

const AlertActions = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'fe2bb127c1ca57f346b34a51ca244e4c183c86b9', class: "alert__actions" }, index.h("slot", { key: 'd56da8892036a113cbd95e70c208a435829635bc' })));
    }
};
AlertActions.style = alertActionsCss;

exports.bds_alert_actions = AlertActions;
//# sourceMappingURL=bds-alert-actions.entry.cjs.js.map

//# sourceMappingURL=bds-alert-actions.cjs.entry.js.map