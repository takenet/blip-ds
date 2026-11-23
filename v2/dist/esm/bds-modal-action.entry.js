import { r as registerInstance, h } from './index-B3G05Lxx.js';

const modalActionCss = () => `.modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}`;

const BdsModalAction = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '6610343e04d83a52684c8beccf392682f635776d', class: "modal__action" }, h("slot", { key: '15480c41180c0393266947759a28b8f76a076305' })));
    }
};
BdsModalAction.style = modalActionCss();

export { BdsModalAction as bds_modal_action };
