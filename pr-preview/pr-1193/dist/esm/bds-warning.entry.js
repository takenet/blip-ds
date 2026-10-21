import { r as registerInstance, h, H as Host } from './index-gowA9FoV.js';

const warningCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}";

const Warning = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'dde6714cdd0c497194091cbc73aec4cbd2277ba0' }, h("div", { key: 'f30261a4cb010ba12e3959a05dfd65e33fbbff58', class: "warning__body" }, h("bds-icon", { key: 'c01c4cf23bf0d1d5310087e78b7526ed665e1f3e', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: '6986c4a6075226b17e8238c9b2149be062c27e92', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '7b60dc98c4c51b867a49c64f5a187221d049d9f7' })))));
    }
};
Warning.style = warningCss;

export { Warning as bds_warning };
//# sourceMappingURL=bds-warning.entry.js.map

//# sourceMappingURL=bds-warning.entry.js.map