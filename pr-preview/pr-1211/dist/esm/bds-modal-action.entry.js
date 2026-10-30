import { r as registerInstance, h } from './index-CkbvGS8Z.js';

const modalActionCss = () => `.modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}`;

const BdsModalAction = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '054d9ee4d6b2e710547b59be6a198ff7e90946dc', class: "modal__action" }, h("slot", { key: '1324ce596316427f1de5374d1732d1b521bbc2f5' })));
    }
};
BdsModalAction.style = modalActionCss();

export { BdsModalAction as bds_modal_action };
