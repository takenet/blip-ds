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
    hasFooterInLightDom() {
        return Array.from(this.el.children).some((child) => child.getAttribute('slot') === 'footer');
    }
    render() {
        const size = SIZES.includes(this.size) ? this.size : 'fixed';
        const width = this.panelWidth();
        return (h(Host, { key: '552a82d2a9779f6f63db37af06982637e8523366' }, h("dialog", { key: 'ec36823413ac4978db89653fd12689a2fee845e3', ref: (el) => (this.dialogEl = el), class: {
                modal__dialog: true,
                'modal__dialog--open': this.open,
                [`modal__dialog--${size}`]: true,
            }, part: "dialog", "aria-label": this.heading ? undefined : this.label, "aria-labelledby": this.heading ? 'modal-title' : undefined, onCancel: this.onCancel }, h("div", { key: 'f6c5ee6331ae39b41ad39f2cd78f3b4f9e8565f8', class: "outzone", onClick: this.onOutzoneClick, "data-test": this.dtOutzone }), h("div", { key: '1068ea80cd87984e8103618dca027bcc445e3d3d', class: { modal: true, [`modal--${size}`]: true }, part: "modal", style: width ? { '--modal-width': `${width}rem` } : undefined }, (this.heading || this.closeButton) && (h("div", { key: '450cfc2776a21dde9cdc00398ade447e233d7974', class: "modal__header", part: "header" }, this.heading && (h("uai-typo", { key: 'eea83aea37dd5ddd72dafcffb109d802e42580e2', id: "modal-title", class: "modal__title", part: "title", tag: "h2", variant: "title-md", bold: "semibold", margin: false }, this.heading)), this.closeButton && (h("button", { key: '2b4bc33c015b3476d9a827214c4c998e841f30b3', type: "button", class: "modal__close", part: "close", "aria-label": this.closeLabel, "data-test": this.dtButtonClose, onClick: () => this.setOpen(false) }, h("uai-icon", { key: 'd1d79a9f59ab810ce5ab8a30b540bc2cd872b3c3', name: "close", size: "medium", "aria-hidden": "true" }))))), h("div", { key: 'c2e795776bfed9359540934a1552d5676c8c4498', class: "modal__body", part: "body" }, h("slot", { key: '6fb2f18591716a9bdd4531565e6117b6f0046502' })), h("div", { key: '3a5c27f6185eff5798266914d8f0ee05c4285039', class: { modal__footer: true, 'modal__footer--empty': !this.hasFooter }, part: "footer" }, h("slot", { key: '432bcee25dd12eef4704f8bac2ec8724c1c0cb24', name: "footer", onSlotchange: this.onFooterSlotChange }))))));
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
