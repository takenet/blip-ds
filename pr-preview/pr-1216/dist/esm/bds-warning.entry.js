import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const warningCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}`;

const Warning = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '534bae9453ef03d6329dbc6c6582ba3d4dfb282a' }, h("div", { key: '47bba595dc0ef40de01618c6bd2a1e8d237ba4e4', class: "warning__body" }, h("bds-icon", { key: '26f42883bb30a948362237f1c4801f296af8b46a', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: '7dab75ace867302c5ec72f80c6ab409323b50722', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '9a65d03cb72cf6de8fd390d18a07a783786a1a8d' })))));
    }
};
Warning.style = warningCss();

export { Warning as bds_warning };
