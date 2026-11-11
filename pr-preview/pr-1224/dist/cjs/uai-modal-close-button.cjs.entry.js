'use strict';

var index = require('./index-BuAR9UTp.js');

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
        return (index.h(index.Host, { key: '0ec82da032a53f1bc28706c0f3d8e568cb5cc7ca' }, index.h("div", { key: '5e7394bf62da22981fa6aa0a6673d71d24679224', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            } }, index.h("button", { key: '1890c9980452e70cef3ebebd332dd0da2af318be', type: "button", class: "modal__close__button", part: "button", "aria-label": this.label, "data-test": this.dtButton, disabled: !this.active }, index.h("uai-icon", { key: 'ab3cfc252645ac2b39cd6cab07a4eecac49d5e7e', name: "close", size: "medium", "aria-hidden": "true" })))));
    }
};
UaiModalCloseButton.style = uaiModalCloseButtonCss();

exports.uai_modal_close_button = UaiModalCloseButton;
