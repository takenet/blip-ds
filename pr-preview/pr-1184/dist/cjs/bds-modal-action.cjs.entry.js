'use strict';

var index = require('./index-DQyYkciT.js');

const modalActionCss = ".modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}";

const BdsModalAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '1848e87dac84daf531a6cad1fe89e51588e360d3', class: "modal__action" }, index.h("slot", { key: 'c3231a296b5df6fdb78341a3f5d708ed9de43d05' })));
    }
};
BdsModalAction.style = modalActionCss;

exports.bds_modal_action = BdsModalAction;
//# sourceMappingURL=bds-modal-action.entry.cjs.js.map

//# sourceMappingURL=bds-modal-action.cjs.entry.js.map