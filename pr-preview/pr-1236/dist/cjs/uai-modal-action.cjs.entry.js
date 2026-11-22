'use strict';

var index = require('./index-GTJCA4wH.js');

const uaiModalActionCss = () => `:host{display:block;width:100%}.modal__action{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiModalAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '661d616b9eff11ff559b3c2ae003864c0eafa35b' }, index.h("div", { key: 'df298c58bf832f0f1660bf13b15a940f0a367af4', class: "modal__action", part: "action" }, index.h("slot", { key: '73f376bf01372a2f0fc32c19cf514747f2ea2a48' }))));
    }
};
UaiModalAction.style = uaiModalActionCss();

exports.uai_modal_action = UaiModalAction;
