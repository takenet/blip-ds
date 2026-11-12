'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiModalActionCss = () => `:host{display:block;width:100%}.modal__action{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiModalAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '54e15bd3f000bcb517077bd13f40c1591c25a053' }, index.h("div", { key: 'cf9d6fdf68c949843681d314537aeb52ca5484af', class: "modal__action", part: "action" }, index.h("slot", { key: 'e434b4f6a5ae07b3df71099a35ce472fa8f56a18' }))));
    }
};
UaiModalAction.style = uaiModalActionCss();

exports.uai_modal_action = UaiModalAction;
