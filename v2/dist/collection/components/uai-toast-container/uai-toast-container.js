import { Host, h } from "@stencil/core";
import { warnLegacyValue } from "../../utils/deprecation";
import { supportsPopover } from "../../utils/uai-overlay";
import { UAI_TOAST_POSITIONS, isCreatedContainer, isModal, isOpenModal, toastContainerFor, } from "../../utils/uai-toast";
/**
 * Stack of toasts fixed to a corner or edge of the screen. It opens in the top layer (Popover API), so the toasts
 * stay above modals, and announces each toast that opens to screen readers.
 * Use one per position inside UaiThemeProvider; `uai-toast` `show()` creates it when the page has none.
 * Avoid placing other content in it.
 *
 * @slot - The uai-toast elements.
 * @part stack - The list that stacks the toasts.
 */
export class UaiToastContainer {
    constructor() {
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
        if (!known)
            warnLegacyValue('uai-toast-container', 'position', this.position, 'bottom-left');
        const position = known || 'bottom-left';
        return (h(Host, { key: '646d653eb5455d844363cf51fa836b3994d02014', popover: supportsPopover() ? 'manual' : undefined, role: "region", "aria-label": this.label, class: { [`uai-toast-container--${position}`]: true } }, h("div", { key: 'c38168d31f6fb8bcadb690b5d2a1847f5c0e0764', class: "stack", part: "stack" }, h("slot", { key: '22a347ced0a075edc4fbba581dec71b00168b150' })), h("div", { key: 'd06f672132fbb09d6111bd017e641c2ad1490d18', class: "live", "aria-live": "polite", ref: (el) => (this.politeRegion = el) }), h("div", { key: '5854f1ee13210fac83801e99a61f9322baec3436', class: "live", "aria-live": "assertive", ref: (el) => (this.assertiveRegion = el) })));
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
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "uaiToastOpen",
                "method": "handleToastOpen",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
