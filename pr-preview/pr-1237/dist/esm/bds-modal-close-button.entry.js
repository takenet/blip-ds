import { r as registerInstance, h } from './index-B3G05Lxx.js';

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
        return (h("div", { key: 'e4417b88e6c50cc72b6986d59b8f7b6ec9aa591f', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            } }, h("bds-icon", { key: '06723e6f72c675aed7b4ed36b76fac5d4dd1259f', size: "medium", name: "close" })));
    }
};
BdsModalCloseButton.style = modalCloseButtonCss();

export { BdsModalCloseButton as bds_modal_close_button };
