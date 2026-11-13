import { r as registerInstance, h } from './index-CkbvGS8Z.js';

const modalActionCss = () => `.modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}`;

const BdsModalAction = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: 'cf64167250bcab6a34402fa07d0b8af2c2903e51', class: "modal__action" }, h("slot", { key: '592fe9b22e2030893e57a0636ec45d6b94722de3' })));
    }
};
BdsModalAction.style = modalActionCss();

export { BdsModalAction as bds_modal_action };
