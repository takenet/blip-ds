import { r as registerInstance, h } from './index-CkbvGS8Z.js';

const modalActionCss = () => `.modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}`;

const BdsModalAction = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '0fb6d9d6c6834004ddd43f50cf049655c741d699', class: "modal__action" }, h("slot", { key: '1e203193d5335615b4631c912f7574b8616c03ef' })));
    }
};
BdsModalAction.style = modalActionCss();

export { BdsModalAction as bds_modal_action };
