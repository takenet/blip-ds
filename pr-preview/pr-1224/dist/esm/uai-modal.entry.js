import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-CkbvGS8Z.js';
import { s as supportsPopover } from './uai-overlay-BHU2NQyQ.js';

const uaiModalCss = () => `:host{display:contents}.modal__dialog{position:fixed;inset:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;max-width:none;max-height:none;margin:0;padding:0;border:0;background:transparent;color:inherit;overflow:visible;z-index:9999;display:none;opacity:0;-webkit-transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete;transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete}@media (prefers-reduced-motion: reduce){.modal__dialog{-webkit-transition:none;transition:none}}.modal__dialog .outzone{position:absolute;inset:0;background-color:var(--uai-overlay-default, rgba(0, 0, 0, 0.72));-webkit-backdrop-filter:blur(var(--uai-spacing-2xs, 0.25rem));backdrop-filter:blur(var(--uai-spacing-2xs, 0.25rem))}.modal__dialog--dynamic{overflow-y:auto;padding-top:var(--uai-spacing-2xl, 2.5rem);padding-bottom:var(--uai-spacing-2xl, 2.5rem)}.modal__dialog--open{display:-ms-flexbox;display:flex;opacity:1}@starting-style{.modal__dialog--open{opacity:0}}.modal__dialog--open .modal{opacity:1;-webkit-transform:none;transform:none}@starting-style{.modal__dialog--open .modal{opacity:0;-webkit-transform:translateY(var(--uai-spacing-md, 1rem));transform:translateY(var(--uai-spacing-md, 1rem))}}.modal{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:auto;--modal-default-width:calc(     var(--uai-width-dialog, 26.5rem) + var(--uai-sizing-5xl, 4.5rem) +       var(--uai-sizing-4xl, 4rem) + var(--uai-sizing-2xl, 2.5rem) +       var(--uai-sizing-xl, 2rem) + var(--uai-sizing-lg, 1.5rem)   );width:var(--modal-width, var(--modal-default-width));max-width:calc(100% - var(--uai-sizing-xl, 2rem));max-height:calc(100% - var(--uai-sizing-xl, 2rem));overflow:hidden;border:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);border-radius:var(--uai-radius-xl, 1rem);background:var(--uai-surface-paper, #ffffff);color:var(--uai-content-primary, #242729);-webkit-box-shadow:var(--uai-elevation-dialog, 0px 32px 32px -20px rgba(0, 0, 0, 0.1));box-shadow:var(--uai-elevation-dialog, 0px 32px 32px -20px rgba(0, 0, 0, 0.1));opacity:0;-webkit-transform:translateY(var(--uai-spacing-md, 1rem));transform:translateY(var(--uai-spacing-md, 1rem));-webkit-transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.modal{-webkit-transition:none;transition:none}}.modal--dynamic{width:auto;max-width:min(var(--modal-width, var(--modal-default-width)), 100% - var(--uai-sizing-xl, 2rem));max-height:none}.modal__header{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;gap:var(--uai-spacing-xs, 0.5rem);padding:var(--uai-spacing-lg, 1.5rem);border-bottom:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7)}.modal__title{-ms-flex:1 1 0px;flex:1 1 0;min-width:0;overflow-wrap:anywhere}.modal__close{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-negative:0;flex-shrink:0;-webkit-margin-start:auto;margin-inline-start:auto;width:var(--uai-control-height-medium, 2.5rem);height:var(--uai-control-height-medium, 2.5rem);padding:0;border:0;border-radius:var(--uai-radius-lg, 0.75rem);background:transparent;color:var(--uai-content-primary, #242729);cursor:pointer;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.modal__close{-webkit-transition:none;transition:none}}.modal__close:hover{background:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08))}.modal__close:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.modal__body{-ms-flex:1 1 auto;flex:1 1 auto;min-height:0;overflow-y:auto;padding:var(--uai-spacing-lg, 1.5rem)}.modal--fixed .modal__body{min-height:calc(var(--uai-width-dialog, 26.5rem) - var(--uai-sizing-5xl, 4.5rem) - var(--uai-sizing-4xl, 4rem) - var(--uai-sizing-xl, 2rem))}.modal__footer{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-pack:end;justify-content:flex-end;gap:var(--uai-spacing-xs, 0.5rem);padding:var(--uai-spacing-md, 1rem)}`;

const SIZES = ['fixed', 'dynamic'];
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
        /** Closes the modal on Enter or Escape. Use 'false' when Enter is used inside the content, such as in forms. */
        this.enterClose = true;
        /** Accessible name of the close button. Use a translated label; avoid leaving it generic. */
        this.closeLabel = 'Fechar';
        /** Test selector on the backdrop. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dtOutzone = null;
        /** Test selector on the close button. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dtButtonClose = null;
        this.onKeydown = (event) => {
            if (this.enterClose && (event.key === 'Enter' || event.key === 'Escape')) {
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
        this.syncListener();
    }
    componentDidRender() {
        this.syncTopLayer();
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this.onKeydown, false);
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
    // The dialog opens in the top layer (Popover API) so no ancestor stacking context can cover it.
    syncTopLayer() {
        var _a;
        const dialog = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.modal__dialog');
        if (!dialog || !supportsPopover() || typeof dialog.showPopover !== 'function')
            return;
        const shown = dialog.matches(':popover-open');
        if (this.open && !shown)
            dialog.showPopover();
        else if (!this.open && shown)
            dialog.hidePopover();
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
        return (h(Host, { key: 'd76be5095aa6ce287e6c7c470563973da5eb6dde' }, h("div", { key: '7d99aa167f66609911c1e745a87be9b65b939cad', class: {
                modal__dialog: true,
                'modal__dialog--open': this.open,
                [`modal__dialog--${size}`]: true,
            }, part: "dialog", popover: supportsPopover() ? 'manual' : undefined }, h("div", { key: 'af78fe3a9022b2b37815d2868e59b2a32cc32ee4', class: "outzone", onClick: this.onOutzoneClick, "data-test": this.dtOutzone }), h("div", { key: '722e95cc2b719a43564d70e2769410852145d634', class: { modal: true, [`modal--${size}`]: true }, part: "modal", role: "dialog", style: this.panelWidth() ? { '--modal-width': `${this.panelWidth()}rem` } : undefined, "aria-modal": "true", "aria-label": this.heading ? undefined : this.label, "aria-labelledby": this.heading ? 'modal-title' : undefined }, (this.heading || this.closeButton) && (h("div", { key: 'a034b2ad3487deec67b039628ba7f437a13e2f52', class: "modal__header", part: "header" }, this.heading && (h("uai-typo", { key: '2ef8853b6e50cc4f785c3b0ce7aa78e0cdd0871b', id: "modal-title", class: "modal__title", part: "title", tag: "h2", variant: "title-md", bold: "semibold", margin: false }, this.heading)), this.closeButton && (h("button", { key: 'c5abf6b241845cfe2b14a9e9e7f60c7a29d92894', type: "button", class: "modal__close", part: "close", "aria-label": this.closeLabel, "data-test": this.dtButtonClose, onClick: () => this.setOpen(false) }, h("uai-icon", { key: 'c6bc083cad4d444948928985e93163869b26290c', name: "close", size: "medium", "aria-hidden": "true" }))))), h("div", { key: 'e3e8c6eba5f02c764dc8e22621b20e4a412b5f55', class: "modal__body", part: "body" }, h("slot", { key: '4b6d86c7f77867d5ca262013275be325d9676422' })), this.hasFooter() && (h("div", { key: '86a1081608b87eff31b66749251abcbb0c2dd967', class: "modal__footer", part: "footer" }, h("slot", { key: '6ba6355f806a9d5d01006e62e203c7f9a863268e', name: "footer" })))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "open": [{
                "openChanged": 0
            }]
    }; }
};
UaiModal.style = uaiModalCss();

export { UaiModal as uai_modal };
