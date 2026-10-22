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
        return (index.h("div", { key: '662240b4cd2f01292d78bb66168ca174db8cb92f', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            } }, index.h("bds-icon", { key: 'a1afff112a51924d20d772c901651698f1f03cff', size: "medium", name: "close" })));
    }
};
BdsModalCloseButton.style = modalCloseButtonCss;

exports.bds_modal_close_button = BdsModalCloseButton;
//# sourceMappingURL=bds-modal-close-button.entry.cjs.js.map

//# sourceMappingURL=bds-modal-close-button.cjs.entry.js.map