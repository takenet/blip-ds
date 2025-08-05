import { r as registerInstance, c as createEvent, h } from './index-C3J6Z5OX.js';

const modalCss = ".modal__dialog{opacity:0;visibility:hidden;width:100%;height:100%;position:fixed;top:0;left:0;-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;z-index:80000;display:none}.modal__dialog .outzone{position:absolute;inset:0;background-color:var(--color-content-din, rgb(0, 0, 0));opacity:0.7}.modal__dialog--dynamic{overflow-y:auto;padding-top:40px;padding-bottom:40px;height:-webkit-fill-available}.modal__dialog .modal{position:relative;margin:auto;width:592px;height:368px;border-radius:8px;background:var(--color-surface-1, rgb(246, 246, 246));-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));padding:32px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between}.modal__dialog .modal--dynamic{height:auto;width:auto;max-width:1000px}.modal__dialog .modal .close-button{position:relative;color:var(--color-content-default, rgb(40, 40, 40));-ms-flex-item-align:end;align-self:flex-end;margin-bottom:16px;cursor:pointer}.modal__dialog .modal .close-button::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.modal__dialog .modal .close-button:focus-visible{outline:none}.modal__dialog .modal .close-button:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.modal__dialog .modal .slot--dynamic{-ms-flex:1 1 auto;flex:1 1 auto}.modal__dialog--open{opacity:1;visibility:visible;display:-ms-flexbox;display:flex}";

const BdsModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bdsModalChanged = createEvent(this, "bdsModalChanged");
        /**
         * Used to open/close the modal
         */
        this.open = false;
        /**
         * Used to hide or show the close button
         */
        this.closeButton = true;
        /**
         * Used to change the modal heights.
         */
        this.size = 'fixed';
        /**
         * If true, the modal will close clicking outside the component.
         */
        this.outzoneClose = true;
        /**
         * If true, the modal will close keydown Enter.
         */
        this.enterClose = true;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtOutzone is the data-test to button close.
         */
        this.dtOutzone = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonClose is the data-test to button close.
         */
        this.dtButtonClose = null;
        this.listener = (event) => {
            if (this.enterClose && (event.key == 'Enter' || event.key == 'Escape')) {
                this.toggle();
            }
        };
        this.handleMouseClick = () => {
            this.open = false;
        };
        this.onClickOutzone = () => {
            if (this.outzoneClose) {
                this.open = false;
            }
        };
    }
    /**
     * Can be used outside to open/close the modal
     */
    async toggle() {
        this.open = !this.open;
    }
    isOpenChanged() {
        if (this.open) {
            document.addEventListener('keydown', this.listener, false);
            this.bdsModalChanged.emit({ modalStatus: 'opened' });
        }
        else {
            document.removeEventListener('keydown', this.listener, false);
            this.bdsModalChanged.emit({ modalStatus: 'closed' });
        }
    }
    render() {
        return (h("div", { key: '6986a98406815d14bf26cd09cbd8a0aaa69abcbe', class: {
                modal__dialog: true,
                'modal__dialog--open': this.open,
                [`modal__dialog--${this.size}`]: true,
            } }, h("div", { key: '641b0b39cfebb26d32922e3754bbc3de80d88f5a', class: { outzone: true }, onClick: () => this.onClickOutzone(), "data-test": this.dtOutzone }), h("div", { key: '519391f81689ac6e02a7731a9529b03e7180c080', class: { modal: true, [`modal--${this.size}`]: true } }, this.closeButton && (h("bds-icon", { key: '61de0c282c22b312702b61e87c6b325d28fb5582', size: "medium", class: "close-button", name: "close", tabindex: "0", onClick: this.handleMouseClick, dataTest: this.dtButtonClose })), this.size == 'fixed' && h("slot", { key: '3338b38d2bddc4204da7cf89ad139b65f99de203' }), this.size !== 'fixed' && (h("div", { key: '8238b88c265279521507f61d81c4af3a70cdd02c', class: { slot: true, [`slot--${this.size}`]: true } }, h("slot", { key: '9737f6f35d906c1c00a331446b6580a8d11d0ab6' }))))));
    }
    static get watchers() { return {
        "open": ["isOpenChanged"]
    }; }
};
BdsModal.style = modalCss;

export { BdsModal as bds_modal };
//# sourceMappingURL=bds-modal.entry.js.map

//# sourceMappingURL=bds-modal.entry.js.map