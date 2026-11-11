'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiModalActionCss = () => `:host{display:block;width:100%}.modal__action{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiModalAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '2acbb3a911d02c8be6df2a40984910908055cbd5' }, index.h("div", { key: '93a7d65e067504759e7c0ddfc52fdc04df3b221e', class: "modal__action", part: "action" }, index.h("slot", { key: '7f111bfe638a5a76c1157cc6cd95b8bc602fc231' }))));
    }
};
UaiModalAction.style = uaiModalActionCss();

exports.uai_modal_action = UaiModalAction;
