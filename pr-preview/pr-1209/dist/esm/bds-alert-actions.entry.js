import { r as registerInstance, h } from './index-CkbvGS8Z.js';

const alertActionsCss = () => `.alert__actions{width:100%;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;position:relative;padding:12px 16px;-webkit-box-sizing:border-box;box-sizing:border-box}.alert__actions ::slotted(bds-button:nth-child(1)){margin-right:16px !important}`;

const AlertActions = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: 'f5b084c5636699486a995d8c458fa67a1ff99740', class: "alert__actions" }, h("slot", { key: 'cc86b2924d44ced4c51b6c42c6ac4a26c1d61728' })));
    }
};
AlertActions.style = alertActionsCss();

export { AlertActions as bds_alert_actions };
