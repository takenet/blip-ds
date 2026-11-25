'use strict';

var index = require('./index-GTJCA4wH.js');

const uaiModalActionCss = () => `:host{display:block;width:100%}.modal__action{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiModalAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '3d547f6fb8cb93bcf601ba4bc1adf3c548bfbe67' }, index.h("div", { key: '097108164d21ef92ad4b5576d6ff9eafe0647524', class: "modal__action", part: "action" }, index.h("slot", { key: '94fe2c763ec069d41faf05e67530e6a718e0a516' }))));
    }
};
UaiModalAction.style = uaiModalActionCss();

exports.uai_modal_action = UaiModalAction;
