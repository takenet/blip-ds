import { r as registerInstance, h } from './index-CkbvGS8Z.js';

const modalCloseButtonCss = () => `.modal__close__button-icon{opacity:0;visibility:hidden;color:var(--color-content-default, rgb(40, 40, 40));display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:16px}.modal__close__button-icon--active{opacity:1;visibility:visible}`;

const BdsModalCloseButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Used to hide or show the close button
         */
        this.active = true;
    }
    render() {
        return (h("div", { key: '4989cf333b360a074cf6b658d98bf9f53d0583c8', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            } }, h("bds-icon", { key: '9ab540262b89c1e0b3b147d5c2c9bef07441a022', size: "medium", name: "close" })));
    }
};
BdsModalCloseButton.style = modalCloseButtonCss();

export { BdsModalCloseButton as bds_modal_close_button };
