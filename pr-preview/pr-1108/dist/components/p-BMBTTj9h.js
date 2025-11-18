import { p as proxyCustomElement, H, c as createEvent, h } from './index.js';
import { d as defineCustomElement$1 } from './p-19uyXyEx.js';

const modalCss = ".modal__dialog{opacity:0;visibility:hidden;width:100%;height:100%;position:fixed;top:0;left:0;-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;z-index:80000;display:none}.modal__dialog .outzone{position:absolute;inset:0;background-color:var(--color-content-din, rgb(0, 0, 0));opacity:0.7}.modal__dialog--dynamic{overflow-y:auto;padding-top:40px;padding-bottom:40px;height:-webkit-fill-available}.modal__dialog .modal{position:relative;margin:auto;width:592px;height:368px;border-radius:8px;background:var(--color-surface-1, rgb(246, 246, 246));-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));padding:32px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between}.modal__dialog .modal--dynamic{height:auto;width:auto;max-width:1000px}.modal__dialog .modal .close-button{position:relative;color:var(--color-content-default, rgb(40, 40, 40));-ms-flex-item-align:end;align-self:flex-end;margin-bottom:16px;cursor:pointer}.modal__dialog .modal .close-button::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.modal__dialog .modal .close-button:focus-visible{outline:none}.modal__dialog .modal .close-button:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.modal__dialog .modal .slot--dynamic{-ms-flex:1 1 auto;flex:1 1 auto}.modal__dialog--open{opacity:1;visibility:visible;display:-ms-flexbox;display:flex}";

const BdsModal = /*@__PURE__*/ proxyCustomElement(class BdsModal extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
            this.bdsModalChanged.emit({ modalStatus: 'closed' });
        };
        this.onClickCloseButtom = () => {
            if (this.outzoneClose === true) {
                this.open = false;
                this.bdsModalChanged.emit({ modalStatus: 'closed' });
            }
        };
    }
    /**
     * Can be used outside to open/close the modal
     */
    async toggle() {
        this.open = !this.open;
        if (this.open) {
            this.bdsModalChanged.emit({ modalStatus: 'opened' });
        }
        else {
            this.bdsModalChanged.emit({ modalStatus: 'closed' });
        }
    }
    isOpenChanged() {
        if (this.open) {
            document.addEventListener('keydown', this.listener, false);
        }
        else
            document.removeEventListener('keydown', this.listener, false);
    }
    render() {
        return (h("div", { key: '7c2245485dc05607d6bf3abc4ba765dcc1a56c26', class: {
                modal__dialog: true,
                'modal__dialog--open': this.open,
                [`modal__dialog--${this.size}`]: true,
            } }, h("div", { key: '5129cec6e970ab5688100a916e55b28f615208ac', class: { outzone: true }, onClick: () => this.onClickCloseButtom(), "data-test": this.dtOutzone }), h("div", { key: '3ae0b0b3cdad6485c8cf435ed6fbf053435a8b82', class: { modal: true, [`modal--${this.size}`]: true } }, this.closeButton && (h("bds-icon", { key: 'a8907580ef453f5227559bbcdd5af19f5c82e2b2', size: "medium", class: "close-button", name: "close", tabindex: "0", onClick: this.handleMouseClick, dataTest: this.dtButtonClose })), this.size == 'fixed' && h("slot", { key: '96c3a2963b970ddd6a98c2905e6d5c5c58463828' }), this.size !== 'fixed' && (h("div", { key: '61969dce2b8f71df5295ebd738fab61c9d50d367', class: { slot: true, [`slot--${this.size}`]: true } }, h("slot", { key: '37d83792edd16c2ce7a7807dfcb722375fd98119' }))))));
    }
    static get watchers() { return {
        "open": ["isOpenChanged"]
    }; }
    static get style() { return modalCss; }
}, [1, "bds-modal", {
        "open": [1540],
        "closeButton": [1540, "close-button"],
        "size": [1537],
        "outzoneClose": [4, "outzone-close"],
        "enterClose": [4, "enter-close"],
        "dtOutzone": [1, "dt-outzone"],
        "dtButtonClose": [1, "dt-button-close"],
        "toggle": [64]
    }, undefined, {
        "open": ["isOpenChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-modal", "bds-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-modal":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BdsModal);
            }
            break;
        case "bds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { BdsModal as B, defineCustomElement as d };
//# sourceMappingURL=p-BMBTTj9h.js.map

//# sourceMappingURL=p-BMBTTj9h.js.map