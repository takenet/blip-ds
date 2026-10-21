import { r as registerInstance, h } from './index-gowA9FoV.js';

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
        return (h("div", { key: 'bf772261c89fea8f97ad2e9476138afd923d00b9', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            } }, h("bds-icon", { key: '7dab162acabf259e2065f3938b48697b885f2452', size: "medium", name: "close" })));
    }
};
BdsModalCloseButton.style = modalCloseButtonCss;

export { BdsModalCloseButton as bds_modal_close_button };
//# sourceMappingURL=bds-modal-close-button.entry.js.map

//# sourceMappingURL=bds-modal-close-button.entry.js.map