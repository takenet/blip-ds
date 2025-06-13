import { r as registerInstance, h } from './index-UYZ9xe6Z.js';

const modalCloseButtonCss = ".modal__close__button-icon{opacity:0;visibility:hidden;color:var(--color-content-default, rgb(40, 40, 40));display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:16px}.modal__close__button-icon--active{opacity:1;visibility:visible}";

const BdsModalCloseButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Used to hide or show the close button
         */
        this.active = true;
    }
    render() {
        return (h("div", { key: '787d12b9c7fe37249144a558a0b72fccc3ba90e7', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            } }, h("bds-icon", { key: 'd3707e3e958da0a510d5fbb31f66f104b84d9704', size: "medium", name: "close" })));
    }
};
BdsModalCloseButton.style = modalCloseButtonCss;

export { BdsModalCloseButton as bds_modal_close_button };
//# sourceMappingURL=bds-modal-close-button.entry.js.map

//# sourceMappingURL=bds-modal-close-button.entry.js.map