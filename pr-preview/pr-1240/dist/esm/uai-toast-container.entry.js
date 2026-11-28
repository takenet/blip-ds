import { r as registerInstance, h, H as Host, g as getElement } from './index-B3G05Lxx.js';
import { s as supportsPopover } from './uai-overlay-BCD7g-De.js';
import { i as isCreatedContainer, a as isModal, b as isOpenModal, t as toastContainerFor, U as UAI_TOAST_POSITIONS } from './uai-toast-4p87iJPi.js';

const uaiToastContainerCss = () => `:host{--toast-container-margin:var(--uai-spacing-xl, 2rem);--toast-stack-peek:var(--uai-spacing-sm, 0.75rem);--toast-stack-gap:var(--uai-spacing-sm, 0.75rem);--toast-stack-direction:-1;--toast-container-width:calc(     var(--uai-width-dialog, 26.5rem) + var(--uai-spacing-4xl, 3.5rem)   );position:fixed;inset:auto;-webkit-box-sizing:border-box;box-sizing:border-box;width:min(var(--toast-container-width), 100% - 2 * var(--toast-container-margin));height:auto;max-height:calc(100% - 2 * var(--toast-container-margin));margin:0;padding:0;overflow:visible;border:0;background:transparent;color:inherit;pointer-events:none}:host(.uai-toast-container--top-left),:host(.uai-toast-container--top-center),:host(.uai-toast-container--top-right){--toast-stack-direction:1;top:var(--toast-container-margin)}:host(.uai-toast-container--bottom-left),:host(.uai-toast-container--bottom-center),:host(.uai-toast-container--bottom-right){bottom:var(--toast-container-margin)}:host(.uai-toast-container--top-left),:host(.uai-toast-container--bottom-left){left:var(--toast-container-margin)}:host(.uai-toast-container--top-right),:host(.uai-toast-container--bottom-right){right:var(--toast-container-margin)}:host(.uai-toast-container--top-center),:host(.uai-toast-container--bottom-center){left:0;right:0;margin-inline:auto}@media (max-width: 40rem){:host{--toast-container-margin:var(--uai-spacing-md, 1rem)}}.stack{position:relative;pointer-events:auto;-webkit-transition:height var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:height var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.stack{-webkit-transition:none;transition:none}}::slotted(*){--toast-scale:max(0.9, calc(1 - var(--toast-index, 0) * 0.05));--toast-folded-y:calc(var(--toast-stack-direction) * var(--toast-index, 0) * var(--toast-stack-peek));--toast-unfolded-y:calc(var(--toast-stack-direction) * var(--toast-offset, 0px));--toast-away:translateY(calc(-100% * var(--toast-stack-direction))) scale(0.96);position:absolute;right:0;bottom:0;left:0;opacity:var(--toast-shown, 1);-webkit-transform:translateY(var(--toast-folded-y)) scale(var(--toast-scale));transform:translateY(var(--toast-folded-y)) scale(var(--toast-scale));-webkit-transform-origin:bottom center;transform-origin:bottom center;z-index:calc(100 - var(--toast-index, 0));pointer-events:auto;-webkit-transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-filter var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-filter var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), filter var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete;transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), filter var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-filter var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@starting-style{::slotted(.uai-toast--open){opacity:0;-webkit-transform:var(--toast-away);transform:var(--toast-away);-webkit-filter:blur(var(--uai-spacing-2xs, 0.25rem));filter:blur(var(--uai-spacing-2xs, 0.25rem))}}::slotted(:not(.uai-toast--open)){opacity:0;-webkit-transform:var(--toast-away);transform:var(--toast-away);-webkit-filter:blur(var(--uai-spacing-2xs, 0.25rem));filter:blur(var(--uai-spacing-2xs, 0.25rem))}:host(.uai-toast-container--expanded) ::slotted(.uai-toast--open){-webkit-transform:translateY(var(--toast-unfolded-y));transform:translateY(var(--toast-unfolded-y));-webkit-transition-delay:calc(var(--toast-index, 0) * var(--uai-duration-instant, 65ms) / 2);transition-delay:calc(var(--toast-index, 0) * var(--uai-duration-instant, 65ms) / 2)}::slotted([data-behind]){cursor:default}:host(.uai-toast-container--top-left) ::slotted(*),:host(.uai-toast-container--top-center) ::slotted(*),:host(.uai-toast-container--top-right) ::slotted(*){top:0;bottom:auto;-webkit-transform-origin:top center;transform-origin:top center}@media (prefers-reduced-motion: reduce){.stack{-webkit-transition:none;transition:none}::slotted(*){--toast-away:none;-webkit-transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete;transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete;-webkit-filter:none;filter:none}::slotted(.uai-toast--open),::slotted(:not(.uai-toast--open)){-webkit-filter:none;filter:none}}.live{position:absolute;width:0;height:0;overflow:hidden;-webkit-clip-path:inset(50%);clip-path:inset(50%);white-space:nowrap}`;

// How many toasts show in the collapsed stack; the ones behind them wait hidden until the front ones close.
const VISIBLE = 3;
const UaiToastContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.frame = 0;
        /** The stack is unfolded, by the pointer or the focus on it. */
        this.expanded = false;
        /** Where the toasts are stacked. Use bottom positions for feedback of an action; avoid two containers in one position. */
        this.position = 'bottom-left';
        /** Accessible name of the notifications region. Use a translated label; avoid leaving it generic. */
        this.label = 'Notificações';
        this.scheduleLayout = () => {
            cancelAnimationFrame(this.frame);
            this.frame = requestAnimationFrame(() => this.layout());
        };
        // Places each open toast by its index from the newest (0): how far it is from the edge when unfolded (the toasts in
        // front of it and the gaps), whether its content shows, and whether it shows at all when the stack is folded. The
        // stack takes the height of what shows, so the pointer stays on it as it unfolds.
        this.layout = () => {
            var _a, _b;
            if (!this.stack)
                return;
            const toasts = this.openToasts.reverse();
            const gap = this.length('--toast-stack-gap');
            const peek = this.length('--toast-stack-peek');
            let offset = 0;
            toasts.forEach((toast, index) => {
                var _a;
                (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.observe(toast);
                const style = toast.style;
                style.setProperty('--toast-index', String(index));
                style.setProperty('--toast-offset', `${offset}px`);
                style.setProperty('--toast-content-opacity', index === 0 || this.expanded ? '1' : '0');
                style.setProperty('--toast-shown', index < VISIBLE || this.expanded ? '1' : '0');
                toast.toggleAttribute('data-behind', index > 0 && !this.expanded);
                offset += toast.offsetHeight + gap;
            });
            const front = (_b = (_a = toasts[0]) === null || _a === void 0 ? void 0 : _a.offsetHeight) !== null && _b !== void 0 ? _b : 0;
            const height = !toasts.length
                ? 0
                : this.expanded
                    ? offset - gap
                    : front + peek * (Math.min(toasts.length, VISIBLE) - 1);
            this.stack.style.height = `${height}px`;
        };
        this.onPointerEnter = () => this.setExpanded(true);
        this.onPointerLeave = () => {
            if (!this.el.matches(':focus-within'))
                this.setExpanded(false);
        };
        this.onFocusOut = (event) => {
            if (!this.el.contains(event.relatedTarget) && !this.el.matches(':hover'))
                this.setExpanded(false);
        };
    }
    componentDidLoad() {
        this.raise();
        this.watchModal();
        if (typeof ResizeObserver !== 'undefined')
            this.resizeObserver = new ResizeObserver(() => this.scheduleLayout());
        this.layout();
    }
    disconnectedCallback() {
        var _a, _b;
        if (supportsPopover() && this.el.matches(':popover-open'))
            this.el.hidePopover();
        (_a = this.modalObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.modalObserver = undefined;
        (_b = this.resizeObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
        cancelAnimationFrame(this.frame);
    }
    componentDidRender() {
        this.layout();
    }
    // ---- stack -------------------------------------------------------------------------------
    get openToasts() {
        return Array.from(this.el.children).filter((child) => child.tagName.toLowerCase().endsWith('uai-toast') && !!child.open);
    }
    // A length custom property (rem or px) of the container, in pixels.
    length(property) {
        const value = getComputedStyle(this.el).getPropertyValue(property).trim();
        const amount = parseFloat(value);
        if (Number.isNaN(amount))
            return 0;
        if (value.endsWith('rem'))
            return amount * parseFloat(getComputedStyle(document.documentElement).fontSize);
        return amount;
    }
    setExpanded(expanded) {
        if (this.expanded === expanded)
            return;
        // One toast has nothing to unfold.
        this.expanded = expanded && this.openToasts.length > 1;
    }
    handleToastClose() {
        if (this.openToasts.length <= 1)
            this.expanded = false;
        this.scheduleLayout();
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
        this.scheduleLayout();
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
        return (h(Host, { key: 'd1e2c9dded0f5f67993d496b1564a110d3abac05', popover: supportsPopover() ? 'manual' : undefined, role: "region", "aria-label": this.label, class: { [`uai-toast-container--${position}`]: true, 'uai-toast-container--expanded': this.expanded }, onFocusin: () => this.setExpanded(true), onFocusout: this.onFocusOut }, h("div", { key: 'be8574f37c4ef76e0361f4024eefacf20efac3c5', class: "stack", part: "stack", ref: (stack) => (this.stack = stack), onPointerEnter: this.onPointerEnter, onPointerLeave: this.onPointerLeave }, h("slot", { key: 'ce78192dd4408e78a99bdaa9bb217c71fb0d9704', onSlotchange: this.scheduleLayout })), h("div", { key: 'b0162710ad192b1adf68b8381fd35634119dd674', class: "live", "aria-live": "polite", ref: (el) => (this.politeRegion = el) }), h("div", { key: '5883304db217db380b5200c0a77f279433ad93e4', class: "live", "aria-live": "assertive", ref: (el) => (this.assertiveRegion = el) })));
    }
    get el() { return getElement(this); }
};
UaiToastContainer.style = uaiToastContainerCss();

export { UaiToastContainer as uai_toast_container };
