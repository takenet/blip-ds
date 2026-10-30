import { r as registerInstance, h } from './index-CkbvGS8Z.js';

const modalActionCss = () => `.modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}`;

const BdsModalAction = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '04bd57f741c94e1dfa79cb444e421ca60cc615f0', class: "modal__action" }, h("slot", { key: '950da5a6e2d4718a2327dd0152f4945ade0356f0' })));
    }
};
BdsModalAction.style = modalActionCss();

export { BdsModalAction as bds_modal_action };
