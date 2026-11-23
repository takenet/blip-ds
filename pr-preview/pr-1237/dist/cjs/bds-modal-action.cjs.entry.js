'use strict';

var index = require('./index-GTJCA4wH.js');

const modalActionCss = () => `.modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}`;

const BdsModalAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '6610343e04d83a52684c8beccf392682f635776d', class: "modal__action" }, index.h("slot", { key: '15480c41180c0393266947759a28b8f76a076305' })));
    }
};
BdsModalAction.style = modalActionCss();

exports.bds_modal_action = BdsModalAction;
