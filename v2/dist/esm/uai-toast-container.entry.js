import { r as registerInstance, h, H as Host, g as getElement } from './index-D799VfbI.js';
import { s as supportsPopover } from './uai-overlay-BCD7g-De.js';
import { i as isCreatedContainer, a as isModal, b as isOpenModal, t as toastContainerFor, U as UAI_TOAST_POSITIONS } from './uai-toast-BVmCGk8O.js';

const uaiToastContainerCss = () => `:host{--toast-container-margin:var(--uai-spacing-xl, 2rem);--toast-container-width:calc(     var(--uai-width-dialog, 26.5rem) + var(--uai-spacing-4xl, 3.5rem)   );position:fixed;inset:auto;-webkit-box-sizing:border-box;box-sizing:border-box;width:min(var(--toast-container-width), 100% - 2 * var(--toast-container-margin));height:auto;max-height:calc(100% - 2 * var(--toast-container-margin));margin:0;padding:0;overflow:visible;border:0;background:transparent;color:inherit;pointer-events:none}:host(.uai-toast-container--top-left),:host(.uai-toast-container--top-center),:host(.uai-toast-container--top-right){top:var(--toast-container-margin)}:host(.uai-toast-container--bottom-left),:host(.uai-toast-container--bottom-center),:host(.uai-toast-container--bottom-right){bottom:var(--toast-container-margin)}:host(.uai-toast-container--top-left),:host(.uai-toast-container--bottom-left){left:var(--toast-container-margin)}:host(.uai-toast-container--top-right),:host(.uai-toast-container--bottom-right){right:var(--toast-container-margin)}:host(.uai-toast-container--top-center),:host(.uai-toast-container--bottom-center){left:0;right:0;margin-inline:auto}@media (max-width: 40rem){:host{--toast-container-margin:var(--uai-spacing-md, 1rem)}}.stack{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-xs, 0.5rem)}:host(.uai-toast-container--top-left) .stack,:host(.uai-toast-container--top-center) .stack,:host(.uai-toast-container--top-right) .stack{-ms-flex-direction:column-reverse;flex-direction:column-reverse}::slotted(*){pointer-events:auto}.live{position:absolute;width:0;height:0;overflow:hidden;-webkit-clip-path:inset(50%);clip-path:inset(50%);white-space:nowrap}`;

const UaiToastContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Where the toasts are stacked. Use bottom positions for feedback of an action; avoid two containers in one position. */
        this.position = 'bottom-left';
        /** Accessible name of the notifications region. Use a translated label; avoid leaving it generic. */
        this.label = 'Notificações';
    }
    componentDidLoad() {
        this.raise();
        this.watchModal();
    }
    disconnectedCallback() {
        var _a;
        if (supportsPopover() && this.el.matches(':popover-open'))
            this.el.hidePopover();
        (_a = this.modalObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.modalObserver = undefined;
    }
    // A container that show() created inside an open modal hands its open toasts over to the page when the modal closes,
    // so a toast shown right before closing the modal stays on the screen.
    watchModal() {
        const parent = this.el.parentElement;
        if (!isCreatedContainer(this.el) || !isModal(parent))
            return;
        // The modal can close before the container loads (React closes it in the same click).
        if (!isOpenModal(parent)) {
            this.handOver(parent);
            return;
        }
        // uai-modal and dialog reflect `open`; closing by the prop emits no event, so the attribute is observed.
        this.modalObserver = new MutationObserver(() => {
            if (!isOpenModal(parent))
                this.handOver(parent);
        });
        this.modalObserver.observe(parent, { attributes: true, attributeFilter: ['open'] });
    }
    handOver(modal) {
        var _a;
        (_a = this.modalObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.modalObserver = undefined;
        const open = Array.from(this.el.children).filter((toast) => toast.open);
        if (open.length) {
            const target = toastContainerFor(this.position, modal);
            for (const toast of open)
                target.appendChild(toast);
        }
        this.el.remove();
    }
    // A toast that opens moves the stack to the top of the top layer, above a modal opened after it, and is announced.
    handleToastOpen(event) {
        this.raise();
        this.announce(event.target);
    }
    raise() {
        if (!supportsPopover() || !this.el.isConnected)
            return;
        // Set here too: a toast can open before the first render of the container applies the attribute.
        if (this.el.getAttribute('popover') !== 'manual')
            this.el.setAttribute('popover', 'manual');
        if (this.el.matches(':popover-open'))
            this.el.hidePopover();
        this.el.showPopover();
    }
    // Live regions only announce changes, so the text of the toast is written into a region that already exists.
    announce(toast) {
        const urgent = toast.variant === 'warning' || toast.variant === 'error';
        const region = urgent ? this.assertiveRegion : this.politeRegion;
        if (!region)
            return;
        const text = [toast.heading, toast.message, toast.textContent]
            .map((part) => (part || '').trim())
            .filter(Boolean)
            .join('. ');
        region.textContent = '';
        requestAnimationFrame(() => requestAnimationFrame(() => (region.textContent = text)));
    }
    render() {
        const known = UAI_TOAST_POSITIONS.find((candidate) => candidate === this.position);
        const position = known || 'bottom-left';
        return (h(Host, { key: '646d653eb5455d844363cf51fa836b3994d02014', popover: supportsPopover() ? 'manual' : undefined, role: "region", "aria-label": this.label, class: { [`uai-toast-container--${position}`]: true } }, h("div", { key: 'c38168d31f6fb8bcadb690b5d2a1847f5c0e0764', class: "stack", part: "stack" }, h("slot", { key: '22a347ced0a075edc4fbba581dec71b00168b150' })), h("div", { key: 'd06f672132fbb09d6111bd017e641c2ad1490d18', class: "live", "aria-live": "polite", ref: (el) => (this.politeRegion = el) }), h("div", { key: '5854f1ee13210fac83801e99a61f9322baec3436', class: "live", "aria-live": "assertive", ref: (el) => (this.assertiveRegion = el) })));
    }
    get el() { return getElement(this); }
};
UaiToastContainer.style = uaiToastContainerCss();

export { UaiToastContainer as uai_toast_container };
