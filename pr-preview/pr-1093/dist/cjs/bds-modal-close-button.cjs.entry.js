'use strict';

var index = require('./index-D_zq0Z7d.js');

const modalCloseButtonCss = ".modal__close__button-icon{opacity:0;visibility:hidden;color:var(--color-content-default, rgb(40, 40, 40));display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:16px}.modal__close__button-icon--active{opacity:1;visibility:visible}";

const BdsModalCloseButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Used to hide or show the close button
         */
        this.active = true;
    }
    render() {
        return (index.h("div", { key: '550543d8c7adc0f28847af57b247be54335b177e', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            } }, index.h("bds-icon", { key: 'e466606576851be0f31cd5459048b2337aa44f15', size: "medium", name: "close" })));
    }
};
BdsModalCloseButton.style = modalCloseButtonCss;

exports.bds_modal_close_button = BdsModalCloseButton;
//# sourceMappingURL=bds-modal-close-button.entry.cjs.js.map

//# sourceMappingURL=bds-modal-close-button.cjs.entry.js.map