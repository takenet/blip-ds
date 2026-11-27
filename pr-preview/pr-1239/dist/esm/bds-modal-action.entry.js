import { r as registerInstance, h } from './index-DUwG7Zwx.js';

const modalActionCss = () => `.modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}`;

const BdsModalAction = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '22e800186871264f7d051f943e2ecf66567f7d8b', class: "modal__action" }, h("slot", { key: '3eb5499b0bd63326b0ef0239c9a4fb96834f1c0d' })));
    }
};
BdsModalAction.style = modalActionCss();

export { BdsModalAction as bds_modal_action };
