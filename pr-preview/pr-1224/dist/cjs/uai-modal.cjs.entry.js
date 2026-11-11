'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiModalCss = () => `:host{display:contents}.modal__dialog{position:fixed;inset:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;max-width:none;max-height:none;margin:0;padding:0;border:0;background:transparent;color:inherit;overflow:visible;display:none;opacity:0;-webkit-transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete;transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete}@media (prefers-reduced-motion: reduce){.modal__dialog{-webkit-transition:none;transition:none}}.modal__dialog .outzone{position:absolute;inset:0;background-color:var(--uai-overlay-default, rgba(0, 0, 0, 0.72));-webkit-backdrop-filter:blur(var(--uai-spacing-2xs, 0.25rem));backdrop-filter:blur(var(--uai-spacing-2xs, 0.25rem))}.modal__dialog--dynamic{overflow-y:auto;padding-top:var(--uai-spacing-2xl, 2.5rem);padding-bottom:var(--uai-spacing-2xl, 2.5rem)}.modal__dialog--open{display:-ms-flexbox;display:flex;opacity:1}@starting-style{.modal__dialog--open{opacity:0}}.modal__dialog--open .modal{opacity:1;-webkit-transform:none;transform:none}@starting-style{.modal__dialog--open .modal{opacity:0;-webkit-transform:translateY(var(--uai-spacing-md, 1rem));transform:translateY(var(--uai-spacing-md, 1rem))}}.modal{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:auto;--modal-default-width:calc(     var(--uai-width-dialog, 26.5rem) + var(--uai-sizing-5xl, 4.5rem) +       var(--uai-sizing-4xl, 4rem) + var(--uai-sizing-2xl, 2.5rem) +       var(--uai-sizing-xl, 2rem) + var(--uai-sizing-lg, 1.5rem)   );width:var(--modal-width, var(--modal-default-width));max-width:calc(100% - var(--uai-sizing-xl, 2rem));max-height:calc(100% - var(--uai-sizing-xl, 2rem));overflow:hidden;border:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);border-radius:var(--uai-radius-xl, 1rem);background:var(--uai-surface-paper, #ffffff);color:var(--uai-content-primary, #242729);-webkit-box-shadow:var(--uai-elevation-dialog, 0px 32px 32px -20px rgba(0, 0, 0, 0.1));box-shadow:var(--uai-elevation-dialog, 0px 32px 32px -20px rgba(0, 0, 0, 0.1));opacity:0;-webkit-transform:translateY(var(--uai-spacing-md, 1rem));transform:translateY(var(--uai-spacing-md, 1rem));-webkit-transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.modal{-webkit-transition:none;transition:none}}.modal--dynamic{width:auto;max-width:min(var(--modal-width, var(--modal-default-width)), 100% - var(--uai-sizing-xl, 2rem));max-height:none}.modal__header{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;gap:var(--uai-spacing-xs, 0.5rem);padding:var(--uai-spacing-lg, 1.5rem);border-bottom:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7)}.modal__title{-ms-flex:1 1 0px;flex:1 1 0;min-width:0;overflow-wrap:anywhere}.modal__close{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-negative:0;flex-shrink:0;-webkit-margin-start:auto;margin-inline-start:auto;width:var(--uai-control-height-medium, 2.5rem);height:var(--uai-control-height-medium, 2.5rem);padding:0;border:0;border-radius:var(--uai-radius-lg, 0.75rem);background:transparent;color:var(--uai-content-primary, #242729);cursor:pointer;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.modal__close{-webkit-transition:none;transition:none}}.modal__close:hover{background:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08))}.modal__close:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.modal__body{-ms-flex:1 1 auto;flex:1 1 auto;min-height:0;overflow-y:auto;padding:var(--uai-spacing-lg, 1.5rem)}.modal--fixed .modal__body{min-height:calc(var(--uai-width-dialog, 26.5rem) - var(--uai-sizing-5xl, 4.5rem) - var(--uai-sizing-4xl, 4rem) - var(--uai-sizing-xl, 2rem))}.modal__footer{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-pack:end;justify-content:flex-end;gap:var(--uai-spacing-xs, 0.5rem);padding:var(--uai-spacing-md, 1rem)}`;

const SIZES = ['fixed', 'dynamic'];
// Controls that use Enter themselves: pressing Enter on them must never close the modal.
const ENTER_CONTROLS = new Set(['a', 'button', 'input', 'select', 'summary', 'textarea']);
const ENTER_ROLES = new Set(['button', 'link', 'menuitem', 'option', 'switch', 'tab', 'checkbox', 'radio']);
const usesEnter = (event) => {
    const path = typeof event.composedPath === 'function' ? event.composedPath() : [event.target];
    return path.some((node) => {
        var _a;
        const element = node;
        if (!element || typeof element.tagName !== 'string')
            return false;
        return (ENTER_CONTROLS.has(element.tagName.toLowerCase()) ||
            ENTER_ROLES.has(((_a = element.getAttribute) === null || _a === void 0 ? void 0 : _a.call(element, 'role')) || '') ||
            element.isContentEditable === true);
    });
};
const UaiModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.uaiModalChanged = index.createEvent(this, "uaiModalChanged");
        /** Opens or closes the modal. Use for declarative control; pair with uaiModalChanged. Avoid toggling it on every render. */
        this.open = false;
        /** Shows the close button when 'true'. Use for dismissible dialogs; avoid hiding it when no other action closes the modal. */
        this.closeButton = true;
        /** Panel size. 'fixed' keeps a standard width and height; 'dynamic' grows with the content. Use 'dynamic' for variable content. */
        this.size = 'fixed';
        /** Closes the modal when the backdrop is clicked. Use 'false' for flows that need an explicit choice. */
        this.outzoneClose = true;
        /** Closes the modal with Escape, and with Enter when no control (button, link, field) has the focus. Use 'false' for flows that need an explicit choice. */
        this.enterClose = true;
        /** Accessible name of the close button. Use a translated label; avoid leaving it generic. */
        this.closeLabel = 'Fechar';
        /** Test selector on the backdrop. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dtOutzone = null;
        /** Test selector on the close button. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dtButtonClose = null;
        // Escape is handled by the native `cancel` event of the dialog; it only closes when enterClose is true.
        this.onCancel = (event) => {
            event.preventDefault();
            if (this.enterClose)
                this.setOpen(false);
        };
        // Enter closes only when it is not being used by a control, so it never closes the modal while someone
        // activates a button or types in a field, and a keyboard click cannot reopen it through toggle().
        this.onKeydown = (event) => {
            if (this.enterClose && event.key === 'Enter' && !usesEnter(event)) {
                this.setOpen(false);
            }
        };
        this.onOutzoneClick = () => {
            if (this.outzoneClose === true)
                this.setOpen(false);
        };
    }
    /** Opens the modal when closed and closes it when open. Use for imperative control; pair with uaiModalChanged. */
    async toggle() {
        this.setOpen(!this.open);
    }
    openChanged() {
        this.syncListener();
    }
    componentDidLoad() {
        var _a;
        (_a = this.dialogEl) === null || _a === void 0 ? void 0 : _a.addEventListener('cancel', this.onCancel);
        this.syncListener();
    }
    componentDidRender() {
        this.syncNativeDialog();
    }
    disconnectedCallback() {
        var _a;
        document.removeEventListener('keydown', this.onKeydown, false);
        (_a = this.dialogEl) === null || _a === void 0 ? void 0 : _a.removeEventListener('cancel', this.onCancel);
    }
    setOpen(next) {
        this.open = next;
        this.uaiModalChanged.emit({ modalStatus: next ? 'opened' : 'closed' });
    }
    syncListener() {
        if (this.open)
            document.addEventListener('keydown', this.onKeydown, false);
        else
            document.removeEventListener('keydown', this.onKeydown, false);
    }
    // The native <dialog> in modal mode puts the panel in the top layer, moves the focus into it, keeps Tab inside it,
    // makes everything behind inert and gives the focus back to the previous element on close.
    syncNativeDialog() {
        const dialog = this.dialogEl;
        if (!dialog || typeof dialog.showModal !== 'function')
            return;
        if (this.open && !dialog.open)
            dialog.showModal();
        else if (!this.open && dialog.open)
            dialog.close();
    }
    panelWidth() {
        const width = Number(this.width);
        if (this.width == null || !Number.isFinite(width) || width <= 0)
            return undefined;
        return width;
    }
    hasFooter() {
        return Array.from(this.el.children).some((child) => child.getAttribute('slot') === 'footer');
    }
    render() {
        const known = SIZES.find((candidate) => candidate === this.size);
        const size = known || 'fixed';
        return (index.h(index.Host, { key: 'c7784ba8dd41b2293eddf6431bba010cd25d4795' }, index.h("dialog", { key: '7dc7340aa92194ccea0ecfa63e0e0f014e956757', ref: (el) => (this.dialogEl = el), class: {
                modal__dialog: true,
                'modal__dialog--open': this.open,
                [`modal__dialog--${size}`]: true,
            }, part: "dialog", "aria-label": this.heading ? undefined : this.label, "aria-labelledby": this.heading ? 'modal-title' : undefined }, index.h("div", { key: '23ab813763c93b0e18cae58d5e9490a7f3db6d49', class: "outzone", onClick: this.onOutzoneClick, "data-test": this.dtOutzone }), index.h("div", { key: 'f9b16a0e8192060449ac4e9b8b028c8613c5e791', class: { modal: true, [`modal--${size}`]: true }, part: "modal", style: this.panelWidth() ? { '--modal-width': `${this.panelWidth()}rem` } : undefined }, (this.heading || this.closeButton) && (index.h("div", { key: '5b873ddbc95cd83cf4423ed52b81e335c84b46ea', class: "modal__header", part: "header" }, this.heading && (index.h("uai-typo", { key: '788b06b7adef4e5dbe6bcd94d4c67001064e34de', id: "modal-title", class: "modal__title", part: "title", tag: "h2", variant: "title-md", bold: "semibold", margin: false }, this.heading)), this.closeButton && (index.h("button", { key: '81c7c7cbcf5de9c3f4b8a57bce7413841be29d22', type: "button", class: "modal__close", part: "close", "aria-label": this.closeLabel, "data-test": this.dtButtonClose, onClick: () => this.setOpen(false) }, index.h("uai-icon", { key: '607822fbd17451acd4453f788a0c74316d6d5ceb', name: "close", size: "medium", "aria-hidden": "true" }))))), index.h("div", { key: '7a93d763fd5bb351b25fa81942c5188155dab841', class: "modal__body", part: "body" }, index.h("slot", { key: '609971587a453538e050dd501cde32f86eabc3ef' })), this.hasFooter() && (index.h("div", { key: 'd16fd35529c80f212bb88ae5331afe7682ed2c19', class: "modal__footer", part: "footer" }, index.h("slot", { key: 'ffaf29860ab0d3ebb6c4a53516477e1e5cd48fca', name: "footer" })))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "open": [{
                "openChanged": 0
            }]
    }; }
};
UaiModal.style = uaiModalCss();

exports.uai_modal = UaiModal;
