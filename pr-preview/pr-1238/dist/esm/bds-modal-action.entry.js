import { r as registerInstance, h } from './index-B3G05Lxx.js';

const modalActionCss = () => `.modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}`;

const BdsModalAction = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '213693438fd4e9ab3ef5100eb735869a5c441f1e', class: "modal__action" }, h("slot", { key: '4a9d30cd594fdae914d6a752a9ca23895a74a9b8' })));
    }
};
BdsModalAction.style = modalActionCss();

export { BdsModalAction as bds_modal_action };
