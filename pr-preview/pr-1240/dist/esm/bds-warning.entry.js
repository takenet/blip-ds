import { r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

const warningCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}`;

const Warning = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '949e3e98b64b0d99b9e9be38bf55b2bc242cda2c' }, h("div", { key: '784fd240443ac268299886d8e197da7b6e210f5d', class: "warning__body" }, h("bds-icon", { key: '25fe645e8a24426e20caa01a293157bcbd5bb74b', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'ffd5d83833acf4065d4653c43ab803af11bbe8e3', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '77a0c869f3eb989c01bee7c00513ae09d2b0c5fd' })))));
    }
};
Warning.style = warningCss();

export { Warning as bds_warning };
