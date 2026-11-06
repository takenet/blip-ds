import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const warningCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}`;

const Warning = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '076aab05e4486582d6b0495574dd49255b03bd35' }, h("div", { key: '60b70b1f3b9f22b0d1269c4f779001b8feeaf113', class: "warning__body" }, h("bds-icon", { key: '9d53eb292c08f9359bc36febaeec703fb6526288', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: '9c091700334b05201e65172c801ea67546ad06ce', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: 'c6e91e35bf4943802ca77741d45271e5a45e57f4' })))));
    }
};
Warning.style = warningCss();

export { Warning as bds_warning };
