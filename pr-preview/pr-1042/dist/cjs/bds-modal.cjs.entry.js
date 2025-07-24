'use strict';

var index = require('./index-D_zq0Z7d.js');

const modalCss = ".modal__dialog{opacity:0;visibility:hidden;width:100%;height:100%;position:fixed;top:0;left:0;-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;z-index:80000;display:none}.modal__dialog .outzone{position:absolute;inset:0;background-color:var(--color-content-din, rgb(0, 0, 0));opacity:0.7}.modal__dialog--dynamic{overflow-y:auto;padding-top:40px;padding-bottom:40px;height:-webkit-fill-available}.modal__dialog .modal{position:relative;margin:auto;width:592px;height:368px;border-radius:8px;background:var(--color-surface-1, rgb(246, 246, 246));-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));padding:32px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between}.modal__dialog .modal--dynamic{height:auto;width:auto;max-width:1000px}.modal__dialog .modal .close-button{position:relative;color:var(--color-content-default, rgb(40, 40, 40));-ms-flex-item-align:end;align-self:flex-end;margin-bottom:16px;cursor:pointer}.modal__dialog .modal .close-button::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.modal__dialog .modal .close-button:focus-visible{outline:none}.modal__dialog .modal .close-button:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.modal__dialog .modal .slot--dynamic{-ms-flex:1 1 auto;flex:1 1 auto}.modal__dialog--open{opacity:1;visibility:visible;display:-ms-flexbox;display:flex}";

const BdsModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsModalChanged = index.createEvent(this, "bdsModalChanged");
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
        return (index.h("div", { key: '3a82682d2fa331315a99d2ed594e58437d76d8b7', class: {
                modal__dialog: true,
                'modal__dialog--open': this.open,
                [`modal__dialog--${this.size}`]: true,
            } }, index.h("div", { key: '94dd90b69a47fa57c2033efeaf356d413922c09f', class: { outzone: true }, onClick: () => this.onClickOutzone(), "data-test": this.dtOutzone }), index.h("div", { key: '4f8c5fc5915a1ccc96bfbe6d567cdfa8ddd5aa13', class: { modal: true, [`modal--${this.size}`]: true } }, this.closeButton && (index.h("bds-icon", { key: 'c1c5d0e581f5e12b701d883e499c9b1d01382ac5', size: "medium", class: "close-button", name: "close", tabindex: "0", onClick: this.handleMouseClick, dataTest: this.dtButtonClose })), this.size == 'fixed' && index.h("slot", { key: 'f8dbec96027b15fe74507b081c9181306c980a62' }), this.size !== 'fixed' && (index.h("div", { key: '62c76b08122932e90f7d09e6b0e81d3ea2d474a9', class: { slot: true, [`slot--${this.size}`]: true } }, index.h("slot", { key: '0b3a9d7a888423f052d5b03dd7c92c05d77d4310' }))))));
    }
    static get watchers() { return {
        "open": ["isOpenChanged"]
    }; }
};
BdsModal.style = modalCss;

exports.bds_modal = BdsModal;
//# sourceMappingURL=bds-modal.entry.cjs.js.map

//# sourceMappingURL=bds-modal.cjs.entry.js.map