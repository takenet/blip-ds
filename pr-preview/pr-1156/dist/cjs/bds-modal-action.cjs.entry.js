'use strict';

var index = require('./index-t1DDWEYz.js');

const modalActionCss = ".modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}";

const BdsModalAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'ebe79c0f5e218d99d6d66bee77b445f8f676dba6', class: "modal__action" }, index.h("slot", { key: '97ae98d57d4d9735bb404ad3baf75fabf9067c3f' })));
    }
};
BdsModalAction.style = modalActionCss;

exports.bds_modal_action = BdsModalAction;
//# sourceMappingURL=bds-modal-action.entry.cjs.js.map

//# sourceMappingURL=bds-modal-action.cjs.entry.js.map