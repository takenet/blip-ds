'use strict';

var index = require('./index-JW9Yq-qX.js');

const modalCloseButtonCss = () => `.modal__close__button-icon{opacity:0;visibility:hidden;color:var(--color-content-default, rgb(40, 40, 40));display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:16px}.modal__close__button-icon--active{opacity:1;visibility:visible}`;

const BdsModalCloseButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Used to hide or show the close button
         */
        this.active = true;
    }
    render() {
        return (index.h("div", { key: '0060bf8435156ce5c21a7490129e925f23f3c65c', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            } }, index.h("bds-icon", { key: '9167d5a302fadc15ae0df8c609df65d8be56bdae', size: "medium", name: "close" })));
    }
};
BdsModalCloseButton.style = modalCloseButtonCss();

exports.bds_modal_close_button = BdsModalCloseButton;
