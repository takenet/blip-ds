'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const modalCloseButtonCss = ".modal__close__button-icon{opacity:0;visibility:hidden;color:var(--color-content-default, #282828);display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:16px}.modal__close__button-icon--active{opacity:1;visibility:visible}";

const BdsModalCloseButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.active = true;
  }
  render() {
    return (index.h("div", { class: {
        'modal__close__button-icon': true,
        'modal__close__button-icon--active': this.active,
      } }, index.h("bds-icon", { size: "medium", name: "close" })));
  }
};
BdsModalCloseButton.style = modalCloseButtonCss;

exports.bds_modal_close_button = BdsModalCloseButton;
