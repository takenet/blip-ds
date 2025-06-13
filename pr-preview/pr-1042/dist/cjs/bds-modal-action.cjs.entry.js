'use strict';

var index = require('./index-DnryYWxm.js');

const modalActionCss = ".modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}";

const BdsModalAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'd5b97cda116ceeca2ec39f20a131abc5c03ea018', class: "modal__action" }, index.h("slot", { key: '9cd8201ca880d4a3ce292331970f08b5839e04b7' })));
    }
};
BdsModalAction.style = modalActionCss;

exports.bds_modal_action = BdsModalAction;
//# sourceMappingURL=bds-modal-action.entry.cjs.js.map

//# sourceMappingURL=bds-modal-action.cjs.entry.js.map