'use strict';

var index = require('./index-GTJCA4wH.js');

const modalActionCss = () => `.modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}`;

const BdsModalAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '213693438fd4e9ab3ef5100eb735869a5c441f1e', class: "modal__action" }, index.h("slot", { key: '4a9d30cd594fdae914d6a752a9ca23895a74a9b8' })));
    }
};
BdsModalAction.style = modalActionCss();

exports.bds_modal_action = BdsModalAction;
