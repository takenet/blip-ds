'use strict';

var index = require('./index-GTJCA4wH.js');

const modalActionCss = () => `.modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}`;

const BdsModalAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'fd15c33021f36ec716ee0920c81d2b6519d4ad2e', class: "modal__action" }, index.h("slot", { key: '79e3f09a0aa3de49764abe35be1a2a32f01cce95' })));
    }
};
BdsModalAction.style = modalActionCss();

exports.bds_modal_action = BdsModalAction;
