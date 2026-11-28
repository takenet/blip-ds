'use strict';

var index = require('./index-GTJCA4wH.js');

const uaiModalActionCss = () => `:host{display:block;width:100%}.modal__action{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiModalAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'b46474090f1cf11103469313da3b8f69a411f042' }, index.h("div", { key: '918ae30ef4585f347c3f95c79c3eb2a8abced961', class: "modal__action", part: "action" }, index.h("slot", { key: 'c26198e90d2a1d09fb636b1a604c4aa3e26e0a61' }))));
    }
};
UaiModalAction.style = uaiModalActionCss();

exports.uai_modal_action = UaiModalAction;
