'use strict';

var index = require('./index-GTJCA4wH.js');

const modalActionCss = () => `.modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}`;

const BdsModalAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'f8f9a9ed118655b7bc440ee4489db7d216ebea06', class: "modal__action" }, index.h("slot", { key: 'fbaf152b23ec3a92d1f70cbf7c898c402944365c' })));
    }
};
BdsModalAction.style = modalActionCss();

exports.bds_modal_action = BdsModalAction;
