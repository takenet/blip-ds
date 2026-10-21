'use strict';

var index = require('./index-DQyYkciT.js');

const modalActionCss = ".modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}";

const BdsModalAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '5c028f643e184b18f1885a3838348a6fd7474a0b', class: "modal__action" }, index.h("slot", { key: 'db6f0a9585b077ef973984df226c3ddc91c6d39f' })));
    }
};
BdsModalAction.style = modalActionCss;

exports.bds_modal_action = BdsModalAction;
//# sourceMappingURL=bds-modal-action.entry.cjs.js.map

//# sourceMappingURL=bds-modal-action.cjs.entry.js.map