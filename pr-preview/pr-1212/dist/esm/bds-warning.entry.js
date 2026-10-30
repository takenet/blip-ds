import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const warningCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}`;

const Warning = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '3c7abed6d45312616fdd8a2d8c02de2141601d1f' }, h("div", { key: '9b2a7305506d6102045e4e50964fcd7a2af42eff', class: "warning__body" }, h("bds-icon", { key: '64482ce872d7f434d446440a77b69602287772be', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'ce0b792c78fffe03a8bde5452d26cc4e66889301', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: 'ed1ab41655e6478f8a077051d3f47b706f78d3f6' })))));
    }
};
Warning.style = warningCss();

export { Warning as bds_warning };
