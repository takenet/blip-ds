import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const warningCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}`;

const Warning = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'cc3f36da36d5646a793213f40a0e0770872a6451' }, h("div", { key: 'f8828e862c56add57af06c6c26755bda12795584', class: "warning__body" }, h("bds-icon", { key: 'f6fe3652a0fe4f7a0bd83a2a143b9491e44bd236', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'f55a37799abadf40e82383d93ebab234c1f815d6', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '09e1e5b7c02734d515ba94af70b0cb90b9c34521' })))));
    }
};
Warning.style = warningCss();

export { Warning as bds_warning };
