import { r as registerInstance, h } from './index-BnSR_zce.js';

const alertActionsCss = () => `.alert__actions{width:100%;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;position:relative;padding:12px 16px;-webkit-box-sizing:border-box;box-sizing:border-box}.alert__actions ::slotted(bds-button:nth-child(1)){margin-right:16px !important}`;

const AlertActions = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '40b2323c307e310f7a8386e3e10b2c372e7506c0', class: "alert__actions" }, h("slot", { key: 'e468f7caba1e57d7cde9d4ab1d15b4af90134bc5' })));
    }
};
AlertActions.style = alertActionsCss();

export { AlertActions as bds_alert_actions };
