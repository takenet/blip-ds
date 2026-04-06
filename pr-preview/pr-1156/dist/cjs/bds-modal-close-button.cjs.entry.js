'use strict';

var index = require('./index-t1DDWEYz.js');

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
        return (index.h("div", { key: 'd6ea492d18d91f1f45ab03be24329f0261ae0122', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            } }, index.h("bds-icon", { key: '9bcd8954b21597228d34a3d85bf7c4d7527f1018', size: "medium", name: "close" })));
    }
};
BdsModalCloseButton.style = modalCloseButtonCss;

exports.bds_modal_close_button = BdsModalCloseButton;
//# sourceMappingURL=bds-modal-close-button.entry.cjs.js.map

//# sourceMappingURL=bds-modal-close-button.cjs.entry.js.map