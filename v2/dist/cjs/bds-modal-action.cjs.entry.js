'use strict';

var index = require('./index-BuAR9UTp.js');

const modalActionCss = () => `.modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}`;

const BdsModalAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'cf64167250bcab6a34402fa07d0b8af2c2903e51', class: "modal__action" }, index.h("slot", { key: '592fe9b22e2030893e57a0636ec45d6b94722de3' })));
    }
};
BdsModalAction.style = modalActionCss();

exports.bds_modal_action = BdsModalAction;
