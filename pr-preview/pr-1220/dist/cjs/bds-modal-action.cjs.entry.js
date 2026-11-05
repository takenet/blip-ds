'use strict';

var index = require('./index-BuAR9UTp.js');

const modalActionCss = () => `.modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}`;

const BdsModalAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'c74f566ab0e56ac583cf95176b1d14f92bac8b8b', class: "modal__action" }, index.h("slot", { key: '43ed44db33f25c5b3e3615d1b616fe2027f65c41' })));
    }
};
BdsModalAction.style = modalActionCss();

exports.bds_modal_action = BdsModalAction;
