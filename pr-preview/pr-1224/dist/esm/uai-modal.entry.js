import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-CkbvGS8Z.js';

const uaiModalCss = () => `:host{display:contents}.modal__dialog{position:fixed;inset:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;max-width:none;max-height:none;margin:0;padding:0;border:0;background:transparent;color:inherit;overflow:visible;display:none;opacity:0;-webkit-transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete;transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete}@media (prefers-reduced-motion: reduce){.modal__dialog{-webkit-transition:none;transition:none}}.modal__dialog .outzone{position:fixed;inset:0;background-color:var(--uai-overlay-default, rgba(0, 0, 0, 0.72));-webkit-backdrop-filter:blur(var(--uai-spacing-2xs, 0.25rem));backdrop-filter:blur(var(--uai-spacing-2xs, 0.25rem))}.modal__dialog--dynamic{overflow-y:auto;padding-top:var(--uai-spacing-2xl, 2.5rem);padding-bottom:var(--uai-spacing-2xl, 2.5rem)}.modal__dialog--open{display:-ms-flexbox;display:flex;opacity:1}@starting-style{.modal__dialog--open{opacity:0}}.modal__dialog--open .modal{opacity:1;-webkit-transform:none;transform:none}@starting-style{.modal__dialog--open .modal{opacity:0;-webkit-transform:translateY(var(--uai-spacing-md, 1rem));transform:translateY(var(--uai-spacing-md, 1rem))}}.modal{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:auto;--modal-default-width:calc(     var(--uai-width-dialog, 26.5rem) + var(--uai-sizing-5xl, 4.5rem) +       var(--uai-sizing-4xl, 4rem) + var(--uai-sizing-2xl, 2.5rem) +       var(--uai-sizing-xl, 2rem) + var(--uai-sizing-lg, 1.5rem)   );width:var(--modal-width, var(--modal-default-width));max-width:calc(100% - var(--uai-sizing-xl, 2rem));max-height:calc(100% - var(--uai-sizing-xl, 2rem));overflow:hidden;border:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);border-radius:var(--uai-radius-xl, 1rem);background:var(--uai-surface-paper, #ffffff);color:var(--uai-content-primary, #242729);-webkit-box-shadow:var(--uai-elevation-dialog, 0px 32px 32px -20px rgba(0, 0, 0, 0.1));box-shadow:var(--uai-elevation-dialog, 0px 32px 32px -20px rgba(0, 0, 0, 0.1));opacity:0;-webkit-transform:translateY(var(--uai-spacing-md, 1rem));transform:translateY(var(--uai-spacing-md, 1rem));-webkit-transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.modal{-webkit-transition:none;transition:none}}.modal--dynamic{width:auto;max-width:min(var(--modal-width, var(--modal-default-width)), 100% - var(--uai-sizing-xl, 2rem));max-height:none}.modal__header{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;gap:var(--uai-spacing-xs, 0.5rem);padding:var(--uai-spacing-lg, 1.5rem);border-bottom:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7)}.modal__title{-ms-flex:1 1 0px;flex:1 1 0;min-width:0;overflow-wrap:anywhere}.modal__close{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-negative:0;flex-shrink:0;-webkit-margin-start:auto;margin-inline-start:auto;width:var(--uai-control-height-medium, 2.5rem);height:var(--uai-control-height-medium, 2.5rem);padding:0;border:0;border-radius:var(--uai-radius-lg, 0.75rem);background:transparent;color:var(--uai-content-primary, #242729);cursor:pointer;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.modal__close{-webkit-transition:none;transition:none}}.modal__close:hover{background:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08))}.modal__close:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.modal__body{-ms-flex:1 1 auto;flex:1 1 auto;min-height:0;overflow-y:auto;padding:var(--uai-spacing-lg, 1.5rem)}.modal--fixed .modal__body{min-height:calc(var(--uai-width-dialog, 26.5rem) - var(--uai-sizing-5xl, 4.5rem) - var(--uai-sizing-4xl, 4rem) - var(--uai-sizing-xl, 2rem))}.modal__footer{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-pack:end;justify-content:flex-end;gap:var(--uai-spacing-xs, 0.5rem);padding:var(--uai-spacing-lg, 1.5rem)}.modal__footer--empty{display:none}`;

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
// Open modals, in the order they opened. Only the last one (the top) reacts to the keyboard, so a confirmation
// stacked over a form closes alone. The document scroll stays locked while at least one modal is open.
const openModals = [];
let scrollLocks = 0;
let previousOverflow = '';
const lockScroll = () => {
    if (scrollLocks++ === 0) {
        previousOverflow = document.body.style.getPropertyValue('overflow');
        document.body.style.setProperty('overflow', 'hidden');
    }
};
const unlockScroll = () => {
    if (scrollLocks > 0 && --scrollLocks === 0) {
        if (previousOverflow)
            document.body.style.setProperty('overflow', previousOverflow);
        else
            document.body.style.removeProperty('overflow');
    }
};
const UaiModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uaiModalChanged = createEvent(this, "uaiModalChanged");
        /** Opens or closes the modal. Use for declarative control; pair with uaiModalChanged. Avoid toggling it on every render. */
        this.open = false;
        /** Shows the close button when 'true'. Use for dismissible dialogs; avoid hiding it when no other action closes the modal. */
        this.closeButton = true;
        /** Panel size. 'fixed' keeps a standard width and height; 'dynamic' grows with the content. Use 'dynamic' for variable content. */
        this.size = 'fixed';
        /** Closes the modal when the backdrop is clicked. Use 'false' for flows that need an explicit choice. */
        this.outzoneClose = true;
        /** Closes the modal with Enter when no control (button, link, field) has the focus. Use 'false' when Enter has another meaning in the content. Escape is controlled by `escapeClose`. */
        this.enterClose = true;
        /** Closes the modal with Escape, the standard way to dismiss a dialog. Use 'false' only for flows that need an explicit choice; pair with `outzoneClose` 'false'. */
        this.escapeClose = true;
        /** Accessible name of the close button. Use a translated label; avoid leaving it generic. */
        this.closeLabel = 'Fechar';
        /** Test selector on the backdrop. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dtOutzone = null;
        /** Test selector on the close button. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dtButtonClose = null;
        /** Whether something is slotted into `footer`. The footer wrapper stays hidden while it is empty. */
        this.hasFooter = false;
        this.registered = false;
        // Runs when the content of the footer slot changes, so a footer added or removed while the modal is open
        // (a conditional footer in React, for example) shows up or goes away.
        this.onFooterSlotChange = (event) => {
            const slot = event.target;
            this.hasFooter =
                typeof slot.assignedElements === 'function' ? slot.assignedElements().length > 0 : this.hasFooterInLightDom();
        };
        // Escape arrives as the native `cancel` event of the dialog, once per dialog and only on the top one.
        this.onCancel = (event) => {
            event.preventDefault();
            if (this.escapeClose)
                this.setOpen(false);
        };
        // The browser can close the dialog without a cancelable `cancel` (Escape without a prior user gesture, for example).
        // Keep `open` in sync so the state never says "open" for a dialog that is already closed.
        this.onNativeClose = () => {
            if (this.open)
                this.setOpen(false);
        };
        // Enter closes only when it is not being used by a control, so it never closes the modal while someone
        // activates a button or types in a field, and a keyboard click cannot reopen it through toggle().
        this.onKeydown = (event) => {
            if (event.defaultPrevented || !this.enterClose || event.key !== 'Enter' || !this.isTop())
                return;
            if (!usesEnter(event))
                this.setOpen(false);
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
        if (this.open)
            this.register();
        else
            this.unregister();
    }
    sizeChanged() {
        this.warnSize();
    }
    connectedCallback() {
        if (this.open)
            this.register();
    }
    componentWillLoad() {
        this.warnSize();
        this.hasFooter = this.hasFooterInLightDom();
    }
    componentDidRender() {
        this.syncNativeDialog();
    }
    disconnectedCallback() {
        this.unregister();
    }
    register() {
        if (this.registered)
            return;
        this.registered = true;
        openModals.push(this);
        lockScroll();
        document.addEventListener('keydown', this.onKeydown, false);
    }
    unregister() {
        if (!this.registered)
            return;
        this.registered = false;
        const index = openModals.indexOf(this);
        if (index >= 0)
            openModals.splice(index, 1);
        unlockScroll();
        document.removeEventListener('keydown', this.onKeydown, false);
    }
    // The browser stacks modal dialogs in the order of showModal(), which can differ from the order the components were
    // registered in (siblings open on load render in any order). Follow the browser so Escape (native `cancel`) and
    // Enter (our listener) always target the same modal.
    bringToTop() {
        const index = openModals.indexOf(this);
        if (index < 0)
            return;
        openModals.splice(index, 1);
        openModals.push(this);
    }
    isTop() {
        return openModals[openModals.length - 1] === this;
    }
    warnSize() {
    }
    setOpen(next) {
        this.open = next;
        this.uaiModalChanged.emit({ modalStatus: next ? 'opened' : 'closed' });
    }
    // The native <dialog> in modal mode puts the panel in the top layer, moves the focus into it, keeps Tab inside it,
    // makes everything behind inert and gives the focus back to the previous element on close.
    syncNativeDialog() {
        const dialog = this.dialogEl;
        if (!dialog || typeof dialog.showModal !== 'function')
            return;
        if (this.open && !dialog.open) {
            dialog.showModal();
            this.bringToTop();
        }
        else if (!this.open && dialog.open)
            dialog.close();
    }
    panelWidth() {
        const width = Number(this.width);
        if (this.width == null || !Number.isFinite(width) || width <= 0)
            return undefined;
        return width;
    }
    hasFooterInLightDom() {
        return Array.from(this.el.children).some((child) => child.getAttribute('slot') === 'footer');
    }
    render() {
        const size = SIZES.includes(this.size) ? this.size : 'fixed';
        const width = this.panelWidth();
        return (h(Host, { key: 'f1fd8e38864bf163efc358233c3593baeb1c27de' }, h("dialog", { key: '8d1b4f2a3c76eb568c5266a638d3a01114e028de', ref: (el) => (this.dialogEl = el), class: {
                modal__dialog: true,
                'modal__dialog--open': this.open,
                [`modal__dialog--${size}`]: true,
            }, part: "dialog", "aria-label": this.heading ? undefined : this.label, "aria-labelledby": this.heading ? 'modal-title' : undefined, onCancel: this.onCancel, onClose: this.onNativeClose }, h("div", { key: '8e00352ba5a80ce7642ea043b92d3424e2acd80e', class: "outzone", onClick: this.onOutzoneClick, "data-test": this.dtOutzone }), h("div", { key: 'a06cbeb06464510483f1e8baf8a6aa2342624e22', class: { modal: true, [`modal--${size}`]: true }, part: "modal", style: width ? { '--modal-width': `${width}rem` } : undefined }, (this.heading || this.closeButton) && (h("div", { key: '136fa748e356f7908d4c4c38304113e2e2fa7bbd', class: "modal__header", part: "header" }, this.heading && (h("uai-typo", { key: '0b768577b541eaba0f6849cfc406bd66006305b6', id: "modal-title", class: "modal__title", part: "title", tag: "h2", variant: "title-md", bold: "semibold", margin: false }, this.heading)), this.closeButton && (h("button", { key: '999995a2360da6f1c6f6d8ea87f7713f9fa4ae31', type: "button", class: "modal__close", part: "close", "aria-label": this.closeLabel, "data-test": this.dtButtonClose, onClick: () => this.setOpen(false) }, h("uai-icon", { key: 'd384def6f2f73fbd7554e0a9c986f8ba85d74d40', name: "close", size: "medium", "aria-hidden": "true" }))))), h("div", { key: '9b62d7dd52f4ec95fb03c2c720261691f1e83ded', class: "modal__body", part: "body" }, h("slot", { key: '85a5bf5119feb8d2b18a4932d331cbd4cb3c737b' })), h("div", { key: '9c1561367ff70ab1eddcd6ac483ff11fa200e564', class: { modal__footer: true, 'modal__footer--empty': !this.hasFooter }, part: "footer" }, h("slot", { key: '88805e74922cf8c75659c680c675d3598f279201', name: "footer", onSlotchange: this.onFooterSlotChange }))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "open": [{
                "openChanged": 0
            }],
        "size": [{
                "sizeChanged": 0
            }]
    }; }
};
UaiModal.style = uaiModalCss();

export { UaiModal as uai_modal };
