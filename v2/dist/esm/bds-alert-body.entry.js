import { r as registerInstance, h } from './index-CkbvGS8Z.js';

const alertBodyCss = () => `.alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}`;

const AlertBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: 'e093f5a362d2981dd37892bdadf5dfcb31631206', class: "alert__body" }, h("bds-typo", { key: '4a0ff05bb27ffba899be505104e7fa636a79e892', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: 'c94026f01ecdbdf0112ece9b6d02438f3fb82bfd' }))));
    }
};
AlertBody.style = alertBodyCss();

export { AlertBody as bds_alert_body };
