import { t as transformTag, r as registerInstance, h } from './index-B3G05Lxx.js';

const alertActionsCss = () => `.alert__actions{width:100%;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;position:relative;padding:12px 16px;-webkit-box-sizing:border-box;box-sizing:border-box}.alert__actions ::slotted(${transformTag("bds-button")}:nth-child(1)){margin-right:16px !important}`;

const AlertActions = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '1403f4d6fbbdbbf855e0949aaffe8d0ebd894fec', class: "alert__actions" }, h("slot", { key: 'a45d441c5d98b38febf690cc4926d8c1e67bed53' })));
    }
};
AlertActions.style = alertActionsCss();

export { AlertActions as bds_alert_actions };
