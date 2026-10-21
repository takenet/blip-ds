'use strict';

var index = require('./index-DQyYkciT.js');

const modalActionCss = ".modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}";

const BdsModalAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '28d98797402ea00e105d336ecef9f1f674007db5', class: "modal__action" }, index.h("slot", { key: '78649472f6d839b1432896f047a023dd76122046' })));
    }
};
BdsModalAction.style = modalActionCss;

exports.bds_modal_action = BdsModalAction;
//# sourceMappingURL=bds-modal-action.entry.cjs.js.map

//# sourceMappingURL=bds-modal-action.cjs.entry.js.map