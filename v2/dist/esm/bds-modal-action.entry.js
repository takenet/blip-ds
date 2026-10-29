import { r as registerInstance, h } from './index-CkbvGS8Z.js';

const modalActionCss = () => `.modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}`;

const BdsModalAction = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '59ab4cb518f333ff15683ef778f811c307392cfd', class: "modal__action" }, h("slot", { key: 'f191b3787b620f6dc9c6800569c10aeb75c1cb98' })));
    }
};
BdsModalAction.style = modalActionCss();

export { BdsModalAction as bds_modal_action };
