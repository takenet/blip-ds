import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const warningCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}`;

const Warning = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'bb8e94e14da600e77a6e9faecbef8c883fdfebd6' }, h("div", { key: 'b45794867e4046d8fcedd20a39b44f80ae363072', class: "warning__body" }, h("bds-icon", { key: '14bf31c644def7067f41e8152163dc03c9262e69', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'd33f3cc6eb336fb82411069219c869ed142a819c', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: 'eef83092820f0f799dfb53557664cb4826570ad5' })))));
    }
};
Warning.style = warningCss();

export { Warning as bds_warning };
