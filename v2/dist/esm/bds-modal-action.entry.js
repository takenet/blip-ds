import { r as registerInstance, h } from './index-D799VfbI.js';

const modalActionCss = () => `.modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}`;

const BdsModalAction = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: 'cec2dd1d12eea760598dffd918adb7ecf7ad5abd', class: "modal__action" }, h("slot", { key: 'd8a4435e85ee167bf08bfe7b7a510d9bf1fcfa42' })));
    }
};
BdsModalAction.style = modalActionCss();

export { BdsModalAction as bds_modal_action };
