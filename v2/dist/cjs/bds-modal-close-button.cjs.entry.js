'use strict';

var index = require('./index-BuAR9UTp.js');

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
        return (index.h("div", { key: '4af60a333c53152a5e4e7364ac24e8a9c404237b', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            } }, index.h("bds-icon", { key: '03ce77e34fe593a503904f4fb89afd77b72a2ed0', size: "medium", name: "close" })));
    }
};
BdsModalCloseButton.style = modalCloseButtonCss();

exports.bds_modal_close_button = BdsModalCloseButton;
