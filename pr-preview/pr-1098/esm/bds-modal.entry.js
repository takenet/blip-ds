import { r as registerInstance, c as createEvent, h } from './index-611fd21e.js';

const modalCss = ".modal__dialog{opacity:0;visibility:hidden;width:100%;height:100%;position:fixed;top:0;left:0;-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;z-index:80000;display:none}.modal__dialog .outzone{position:absolute;inset:0;background-color:var(--color-content-din, black);opacity:0.7}.modal__dialog--dynamic{overflow-y:auto;padding-top:40px;padding-bottom:40px;height:-webkit-fill-available}.modal__dialog .modal{position:relative;margin:auto;width:592px;height:368px;border-radius:8px;background:var(--color-surface-1, #f6f6f6);-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));padding:32px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between}.modal__dialog .modal--dynamic{height:auto;width:auto;max-width:1000px}.modal__dialog .modal .close-button{position:relative;color:var(--color-content-default, #282828);-ms-flex-item-align:end;align-self:flex-end;margin-bottom:16px;cursor:pointer}.modal__dialog .modal .close-button::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.modal__dialog .modal .close-button:focus-visible{outline:none}.modal__dialog .modal .close-button:focus-visible::before{border-color:var(--color-focus, #c226fb)}.modal__dialog .modal .slot--dynamic{-ms-flex:1 1 auto;flex:1 1 auto}.modal__dialog--open{opacity:1;visibility:visible;display:-ms-flexbox;display:flex}";

const BdsModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bdsModalChanged = createEvent(this, "bdsModalChanged", 7);
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
    this.open = false;
    this.closeButton = true;
    this.size = 'fixed';
    this.outzoneClose = true;
    this.enterClose = true;
    this.dtOutzone = null;
    this.dtButtonClose = null;
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
    return (h("div", { class: {
        modal__dialog: true,
        'modal__dialog--open': this.open,
        [`modal__dialog--${this.size}`]: true,
      } }, h("div", { class: { outzone: true }, onClick: () => this.onClickCloseButtom(), "data-test": this.dtOutzone }), h("div", { class: { modal: true, [`modal--${this.size}`]: true } }, this.closeButton && (h("bds-icon", { size: "medium", class: "close-button", name: "close", tabindex: "0", onClick: this.handleMouseClick, dataTest: this.dtButtonClose })), this.size == 'fixed' && h("slot", null), this.size !== 'fixed' && (h("div", { class: { slot: true, [`slot--${this.size}`]: true } }, h("slot", null))))));
  }
  static get watchers() { return {
    "open": ["isOpenChanged"]
  }; }
};
BdsModal.style = modalCss;

export { BdsModal as bds_modal };
