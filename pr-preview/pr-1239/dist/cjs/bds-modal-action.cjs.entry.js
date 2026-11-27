'use strict';

var index = require('./index-JW9Yq-qX.js');

const modalActionCss = () => `.modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}`;

const BdsModalAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '22e800186871264f7d051f943e2ecf66567f7d8b', class: "modal__action" }, index.h("slot", { key: '3eb5499b0bd63326b0ef0239c9a4fb96834f1c0d' })));
    }
};
BdsModalAction.style = modalActionCss();

exports.bds_modal_action = BdsModalAction;
