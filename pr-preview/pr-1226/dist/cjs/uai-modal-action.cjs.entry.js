'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiModalActionCss = () => `:host{display:block;width:100%}.modal__action{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiModalAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'df84fc51ccd3ef99257ffb4a67de5b837d769eff' }, index.h("div", { key: 'b00412a1553498ffb76a92abddef1854d1a801a7', class: "modal__action", part: "action" }, index.h("slot", { key: '8e594af6e164420fff1d9f62db378392259f9096' }))));
    }
};
UaiModalAction.style = uaiModalActionCss();

exports.uai_modal_action = UaiModalAction;
