import { r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

const warningCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}`;

const Warning = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'acd1edde3d422914067c8214951901c857ee6c63' }, h("div", { key: 'cddb29bec222245680448403fce9ba9868cc5a7b', class: "warning__body" }, h("bds-icon", { key: 'd632547a261754b2b9937e3e9ac050620dd6bfa0', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'd9d8abf79cb26ef8e991fc726df51282960de28a', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: 'd75984da3b5b4f46bd7b9cd6f39928d9d4fa8a83' })))));
    }
};
Warning.style = warningCss();

export { Warning as bds_warning };
