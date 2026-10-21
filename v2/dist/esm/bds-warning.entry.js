import { r as registerInstance, h, H as Host } from './index-gowA9FoV.js';

const warningCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}";

const Warning = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '3e38a2530dbf87f6ff5fb8ba57274b3ca8275768' }, h("div", { key: 'dab6670fbfea81f21e26c6faa69715f712ae85cc', class: "warning__body" }, h("bds-icon", { key: '7d6c3440b64b1ae100ddebe9442de06082b3e6f4', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: '359dcee01a415ded77788a3014989ecbd9d1bfb6', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '6bb868aa12aeb55031e9a7df3aff38fb686d8172' })))));
    }
};
Warning.style = warningCss;

export { Warning as bds_warning };
//# sourceMappingURL=bds-warning.entry.js.map

//# sourceMappingURL=bds-warning.entry.js.map