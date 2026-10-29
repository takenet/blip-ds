import { r as registerInstance, h } from './index-CkbvGS8Z.js';

const alertActionsCss = () => `.alert__actions{width:100%;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;position:relative;padding:12px 16px;-webkit-box-sizing:border-box;box-sizing:border-box}.alert__actions ::slotted(bds-button:nth-child(1)){margin-right:16px !important}`;

const AlertActions = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '3ec160d829d2d75d45e3b40b63e0e6ab8cd7626e', class: "alert__actions" }, h("slot", { key: 'bfa04b85f0c58b9d1be960438e6c22ba3a4ab2f9' })));
    }
};
AlertActions.style = alertActionsCss();

export { AlertActions as bds_alert_actions };
