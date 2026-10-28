import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const warningCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}`;

const Warning = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'c66988304d638713cd70d33e0068b30cb315ad03' }, h("div", { key: 'fa357e0584b57bd7383de29e4a67b73de1adb4d0', class: "warning__body" }, h("bds-icon", { key: '4f860180d1500574a64e206786413f44303525e5', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'bfd819b12328f30692d08dfdcfa48678c3fb9605', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '58bd6ed2f53877ea0890b4de4079775a1ca58e24' })))));
    }
};
Warning.style = warningCss();

export { Warning as bds_warning };
