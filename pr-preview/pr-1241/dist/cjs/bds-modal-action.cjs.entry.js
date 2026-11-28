'use strict';

var index = require('./index-GTJCA4wH.js');

const modalActionCss = () => `.modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}`;

const BdsModalAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'c9459d144787283973835f6b5b42ee0de7ed65b6', class: "modal__action" }, index.h("slot", { key: 'b4071e3ae8cebd3a38ac40f375b11e1a810b134d' })));
    }
};
BdsModalAction.style = modalActionCss();

exports.bds_modal_action = BdsModalAction;
