'use strict';

var index = require('./index-BuAR9UTp.js');

const modalActionCss = () => `.modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}`;

const BdsModalAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '59ab4cb518f333ff15683ef778f811c307392cfd', class: "modal__action" }, index.h("slot", { key: 'f191b3787b620f6dc9c6800569c10aeb75c1cb98' })));
    }
};
BdsModalAction.style = modalActionCss();

exports.bds_modal_action = BdsModalAction;
