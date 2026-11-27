'use strict';

var index = require('./index-JW9Yq-qX.js');

const uaiModalCloseButtonCss = () => `:host{display:block}.modal__close__button-icon{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:var(--uai-spacing-md, 1rem);color:var(--uai-content-primary, #242729);opacity:0;visibility:hidden}.modal__close__button-icon--active{opacity:1;visibility:visible}.modal__close__button{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-negative:0;flex-shrink:0;width:var(--uai-control-height-medium, 2.5rem);height:var(--uai-control-height-medium, 2.5rem);padding:0;border:0;border-radius:var(--uai-radius-lg, 0.75rem);background:transparent;color:inherit;cursor:pointer;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.modal__close__button{-webkit-transition:none;transition:none}}.modal__close__button:hover{background:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08))}.modal__close__button:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}`;

const UaiModalCloseButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Shows the close button when 'true'. Use to hide it without removing the element; a hidden button leaves the tab order. */
        this.active = true;
        /** Accessible name of the button. Use a translated label; avoid leaving it generic. */
        this.label = 'Fechar';
        /** Test selector on the button. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dtButton = null;
    }
    render() {
        return (index.h(index.Host, { key: '23206f5903dc5884c9f94c1f1684b075a5e77b2c' }, index.h("div", { key: '677160253f73c731c6e796bc61070b19f47c62cd', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            } }, index.h("button", { key: 'b3e434a5738f75614088b8f61a3db685a55d3117', type: "button", class: "modal__close__button", part: "button", "aria-label": this.label, "data-test": this.dtButton, disabled: !this.active }, index.h("uai-icon", { key: '9782c4903b22d9b51b6097a42a95056b0e8cf377', name: "close", size: "medium", "aria-hidden": "true" })))));
    }
};
UaiModalCloseButton.style = uaiModalCloseButtonCss();

exports.uai_modal_close_button = UaiModalCloseButton;
