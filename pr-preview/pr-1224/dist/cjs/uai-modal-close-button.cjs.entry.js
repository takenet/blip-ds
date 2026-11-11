'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiModalCloseButtonCss = () => `:host{display:block}.modal__close__button-icon{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:var(--uai-spacing-md, 1rem);color:var(--uai-content-primary, #242729);opacity:0;visibility:hidden}.modal__close__button-icon--active{opacity:1;visibility:visible}`;

const UaiModalCloseButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Shows the close icon when 'true'. Use to hide it without removing the element; avoid toggling on every render. */
        this.active = true;
    }
    render() {
        return (index.h(index.Host, { key: '58e0b222045f512cbcf048633fb93bc7727a87a9' }, index.h("div", { key: 'a4466b0b45b4b9c103821ced90684e6ea5a818ad', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            }, part: "icon" }, index.h("uai-icon", { key: '0abb2b54f44e769abc40442bc22650dc17b9812d', name: "close", size: "medium", "aria-hidden": "true" }))));
    }
};
UaiModalCloseButton.style = uaiModalCloseButtonCss();

exports.uai_modal_close_button = UaiModalCloseButton;
