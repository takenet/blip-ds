'use strict';

var index = require('./index-DQyYkciT.js');

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
        return (index.h("div", { key: '053dadd3b47ad9f33760b3a608785e9cc3cca575', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            } }, index.h("bds-icon", { key: '9fd0cc0ce1bae6867b4b3fc7b0d4262f482d6f25', size: "medium", name: "close" })));
    }
};
BdsModalCloseButton.style = modalCloseButtonCss;

exports.bds_modal_close_button = BdsModalCloseButton;
//# sourceMappingURL=bds-modal-close-button.entry.cjs.js.map

//# sourceMappingURL=bds-modal-close-button.cjs.entry.js.map