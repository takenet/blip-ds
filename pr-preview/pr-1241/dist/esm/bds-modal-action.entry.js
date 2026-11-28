import { r as registerInstance, h } from './index-B3G05Lxx.js';

const modalActionCss = () => `.modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}`;

const BdsModalAction = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: 'c9459d144787283973835f6b5b42ee0de7ed65b6', class: "modal__action" }, h("slot", { key: 'b4071e3ae8cebd3a38ac40f375b11e1a810b134d' })));
    }
};
BdsModalAction.style = modalActionCss();

export { BdsModalAction as bds_modal_action };
