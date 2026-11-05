import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const warningCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}`;

const Warning = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'e6cf5389e89741e0ce4b8c2a790e63ca1946ad5d' }, h("div", { key: '76ab611bf61f6cc5cc4c40787776cba11fff199d', class: "warning__body" }, h("bds-icon", { key: '0a13a48497dab84bf2f095deeb1d84758d7a0f77', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'ac389321a78809cb219bf60bf58a79af15477a88', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '8a7f5aac1a57ad90031a623a028aa5c32c5f28c9' })))));
    }
};
Warning.style = warningCss();

export { Warning as bds_warning };
