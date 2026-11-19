import { r as registerInstance, h, H as Host } from './index-D799VfbI.js';

const warningCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}`;

const Warning = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'b9aa1dad1ef8ef85e6189d274df68ffef333b31d' }, h("div", { key: '949c938185c8f7db0bf178b85e29ae39fbb2e097', class: "warning__body" }, h("bds-icon", { key: '0279d655be3260ee9efaca7b82f9fa36c1ba93a3', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: '283de6ea184975abfe689b7a4ef45b7555f2b547', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '78c60b4dcb84ed34fe72305389292b49132936eb' })))));
    }
};
Warning.style = warningCss();

export { Warning as bds_warning };
