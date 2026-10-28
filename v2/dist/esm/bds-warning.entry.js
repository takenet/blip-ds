import { r as registerInstance, h, H as Host } from './index-BnSR_zce.js';

const warningCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}`;

const Warning = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '49af1bb68c2ccfd9bae6abc52300a470418a8665' }, h("div", { key: 'd3837e80791799bba7d106e6779fae3c5a06ec94', class: "warning__body" }, h("bds-icon", { key: 'f4d4fc74464f7a311f30a9fdebde43fd3415469f', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: '02ed1838d9f63a77fb9edc71360421482d382ee5', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '35d2147299833c6740bbe88d7d993ec7480a2850' })))));
    }
};
Warning.style = warningCss();

export { Warning as bds_warning };
