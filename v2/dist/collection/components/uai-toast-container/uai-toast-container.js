import { Host, h } from "@stencil/core";
import { warnLegacyValue } from "../../utils/deprecation";
import { supportsPopover } from "../../utils/uai-overlay";
import { UAI_TOAST_POSITIONS, isCreatedContainer, isModal, isOpenModal, toastContainerFor, } from "../../utils/uai-toast";
// How many toasts show in the collapsed stack; the ones behind them wait hidden until the front ones close.
const VISIBLE = 3;
/**
 * Stack of toasts fixed to a corner or edge of the screen. It opens in the top layer (Popover API), so the toasts
 * stay above modals, and announces each toast that opens to screen readers. With more than one toast, the older ones
 * stack behind the newest, peeking out and scaled down; the pointer or the focus on the stack unfolds it, and the
 * time of every toast pauses while it is unfolded.
 * Use one per position inside UaiThemeProvider; `uai-toast` `show()` creates it when the page has none.
 * Avoid placing other content in it.
 *
 * @slot - The uai-toast elements.
 * @part stack - The list that stacks the toasts.
 */
export class UaiToastContainer {
    constructor() {
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
        if (!known)
            warnLegacyValue('uai-toast-container', 'position', this.position, 'bottom-left');
        const position = known || 'bottom-left';
        return (h(Host, { key: '1c5e6c641b8f24f88826e38293dc17479826667a', popover: supportsPopover() ? 'manual' : undefined, role: "region", "aria-label": this.label, class: { [`uai-toast-container--${position}`]: true, 'uai-toast-container--expanded': this.expanded }, onFocusin: () => this.setExpanded(true), onFocusout: this.onFocusOut }, h("div", { key: '369504ab65ee81baef8a6edbccfe32a70c0fbc33', class: "stack", part: "stack", ref: (stack) => (this.stack = stack), onPointerEnter: this.onPointerEnter, onPointerLeave: this.onPointerLeave }, h("slot", { key: '66e2cd2b57258a53ccbb895bbfb73d04fadea0e6', onSlotchange: this.scheduleLayout })), h("div", { key: '6c16e9288017b21ea8322cb32997a3c26a5b4d60', class: "live", "aria-live": "polite", ref: (el) => (this.politeRegion = el) }), h("div", { key: '5955466e9bcf2838d46a44ff5757a8c5a734ef50', class: "live", "aria-live": "assertive", ref: (el) => (this.assertiveRegion = el) })));
    }
    static get is() { return "uai-toast-container"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-toast-container.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-toast-container.css"]
        };
    }
    static get properties() {
        return {
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiToastPosition",
                    "resolved": "\"bottom-center\" | \"bottom-left\" | \"bottom-right\" | \"top-center\" | \"top-left\" | \"top-right\"",
                    "references": {
                        "UaiToastPosition": {
                            "location": "import",
                            "path": "../../utils/uai-toast",
                            "id": "src/utils/uai-toast.ts::UaiToastPosition",
                            "referenceLocation": "UaiToastPosition"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Where the toasts are stacked. Use bottom positions for feedback of an action; avoid two containers in one position."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "position",
                "defaultValue": "'bottom-left'"
            },
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Accessible name of the notifications region. Use a translated label; avoid leaving it generic."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "'Notifica\u00E7\u00F5es'"
            }
        };
    }
    static get states() {
        return {
            "expanded": {}
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "uaiToastClose",
                "method": "handleToastClose",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "uaiToastOpen",
                "method": "handleToastOpen",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
