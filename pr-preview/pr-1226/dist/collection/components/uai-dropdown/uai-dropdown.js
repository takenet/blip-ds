import { Build, Host, h } from "@stencil/core";
import { warnDeprecated, warnLegacyValue, warnOnce } from "../../utils/deprecation";
import { UaiOverlay } from "../../utils/uai-overlay";
// `left` aligns the panel to the start of the activator and `right` to its end, as in bds-dropdown.
// The `*-center` values of bds-dropdown keep their side and let the alignment follow the room available.
const PLACEMENTS = {
    auto: {},
    'top-left': { side: 'top', align: 'start' },
    'top-right': { side: 'top', align: 'end' },
    'bottom-left': { side: 'bottom', align: 'start' },
    'bottom-right': { side: 'bottom', align: 'end' },
    'top-center': { side: 'top' },
    'bottom-center': { side: 'bottom' },
};
/**
 * Floating panel opened by an activator, with an optional fixed header, a scrollable body and an optional fixed footer.
 * Use for filters, pickers and short forms next to a trigger; pair with uai-button as the activator and
 * UaiThemeProvider; avoid it for a plain list of choices (use uai-select) or for blocking tasks (use uai-modal).
 *
 * @slot activator - The element that opens the panel, usually a uai-button. Use a native button or uai-button so it takes the focus.
 * @slot header - Optional fixed header, such as a title and a search field. Hidden while empty.
 * @slot - Panel body. It scrolls when the content is taller than the room available.
 * @slot footer - Optional fixed footer with the actions. Hidden while empty.
 * @part panel - The floating panel.
 * @part header - The header area.
 * @part body - The scrollable body.
 * @part footer - The footer area.
 */
export class UaiDropdown {
    constructor() {
        /** Opens or closes the panel. Use for declarative control; pair with uaiToggle. Avoid toggling it on every render. */
        this.open = false;
        /**
         * Where the panel opens: 'auto' picks the side and alignment with the room available; the others fix the side
         * (top or bottom) and the alignment with the activator (left aligns to its start, right to its end). The panel
         * still flips or moves when it would leave the screen. 'top-center' and 'bottom-center' come from bds-dropdown: they
         * fix the side and leave the alignment automatic. Use 'auto' unless the layout needs a fixed side.
         */
        this.position = 'auto';
        /**
         * How the activator opens the panel. Only 'click' is supported; 'hover' is kept for compatibility and behaves as
         * 'click'.
         * @deprecated The panel opens on click only.
         */
        this.activeMode = 'click';
        /** Test selector on the panel. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dataTest = null;
        /** Whether something is slotted into `header` and `footer`. The wrappers stay hidden while empty. */
        this.hasHeader = false;
        this.hasFooter = false;
        this.onOverlayClose = (reason) => {
            if (this.open)
                this.open = false;
            if (reason === 'escape')
                this.focusActivator();
        };
        // Tabbing out of the dropdown (to anything that is not the activator or the panel) closes it.
        this.onFocusout = (event) => {
            const next = event.relatedTarget;
            if (this.open && next && !this.el.contains(next))
                this.open = false;
        };
        this.onSlotChange = (name) => (event) => {
            const slot = event.target;
            const filled = typeof slot.assignedElements === 'function' ? slot.assignedElements().length > 0 : this.hasSlotted(name);
            if (name === 'header')
                this.hasHeader = filled;
            else
                this.hasFooter = filled;
        };
    }
    /** Opens the panel when closed and closes it when open. Use for imperative control; pair with uaiToggle. */
    async toggle() {
        this.open = !this.open;
    }
    /** Opens the panel. Use when opening from code, for example after an async load. */
    async setOpen() {
        this.open = true;
    }
    /** Closes the panel. Use to close it from an action inside the panel, such as Save. */
    async setClose() {
        this.open = false;
    }
    openChanged(open) {
        this.uaiToggle.emit({ value: open });
    }
    positionChanged() {
        var _a;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.setPlacement(this.placement());
    }
    componentWillLoad() {
        if (this.activeMode === 'hover') {
            warnDeprecated('uai-dropdown', 'activeMode', 'The panel opens on click; hover is not supported.');
        }
        this.hasHeader = this.hasSlotted('header');
        this.hasFooter = this.hasSlotted('footer');
    }
    componentDidLoad() {
        this.createOverlay();
        // The first render happens before the overlay exists, so a dropdown that starts open is opened here, without
        // taking the focus away from the page.
        this.syncOverlay(false);
    }
    // Moving the element in the DOM (a keyed list in React, for example) disconnects and reconnects it: the overlay is
    // destroyed on disconnect, so it is created again here.
    connectedCallback() {
        if (this.overlay || !this.activatorEl || !this.panelEl)
            return;
        this.createOverlay();
        this.syncOverlay(false);
    }
    componentDidRender() {
        this.syncOverlay();
        this.syncActivatorAria();
        if (Build.isDev && !this.accessibleName()) {
            warnOnce('uai-dropdown', 'accessible-name', 'The panel has no accessible name. Set label or slot a heading into the header.');
        }
    }
    disconnectedCallback() {
        var _a;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.destroy();
        this.overlay = undefined;
    }
    createOverlay() {
        if (!this.activatorEl || !this.panelEl)
            return;
        this.overlay = new UaiOverlay(Object.assign({ trigger: this.activatorEl, panel: this.panelEl, onClose: this.onOverlayClose }, this.placement()));
    }
    placement() {
        const placement = PLACEMENTS[this.position];
        if (placement)
            return placement;
        warnLegacyValue('uai-dropdown', 'position', this.position, 'auto');
        return {};
    }
    hasSlotted(name) {
        return Array.from(this.el.children).some((child) => child.getAttribute('slot') === name);
    }
    // A heading slotted into the header names the panel when there is no label. aria-labelledby cannot point from the
    // Shadow DOM to an element in the page, so the heading text is used as the aria-label.
    accessibleName() {
        var _a;
        if (this.label)
            return this.label;
        const heading = Array.from(this.el.children).find((child) => child.getAttribute('slot') === 'header' &&
            (/^H[1-6]$/.test(child.tagName) ||
                child.getAttribute('role') === 'heading' ||
                (child.tagName === 'UAI-TYPO' && /^h[1-6]$/.test(child.getAttribute('tag') || ''))));
        const text = (_a = heading === null || heading === void 0 ? void 0 : heading.textContent) === null || _a === void 0 ? void 0 : _a.trim();
        return text || undefined;
    }
    activator() {
        return Array.from(this.el.children).find((child) => child.getAttribute('slot') === 'activator');
    }
    // Opens and closes the floating panel to match `open`. Closing from the outside (Escape, a click elsewhere, the
    // activator leaving the screen) comes back through onOverlayClose.
    // `focus` moves the focus into the panel so Tab starts inside it; it is off when the dropdown starts open.
    syncOverlay(focus = true) {
        var _a;
        const overlay = this.overlay;
        if (!overlay)
            return;
        if (this.open && !overlay.isOpen) {
            overlay.open();
            if (focus)
                (_a = this.panelEl) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
        }
        else if (!this.open && overlay.isOpen) {
            overlay.close('api');
        }
        if (this.open)
            overlay.update();
    }
    syncActivatorAria() {
        const activator = this.activator();
        if (!activator)
            return;
        activator.setAttribute('aria-haspopup', 'dialog');
        activator.setAttribute('aria-expanded', this.open ? 'true' : 'false');
    }
    // A uai-button keeps its native button in the Shadow DOM and exposes setFocus(); other activators take the focus
    // themselves.
    focusActivator() {
        const activator = this.activator();
        if (!activator)
            return;
        if (typeof activator.setFocus === 'function')
            void activator.setFocus();
        else
            activator.focus({ preventScroll: true });
    }
    render() {
        const width = Number(this.width);
        const panelWidth = this.width != null && Number.isFinite(width) && width > 0 ? width : undefined;
        return (h(Host, { key: '9f6cf734435eb58af3f2132a7c3d86adc67218a0', onFocusout: this.onFocusout }, h("div", { key: '10ee274c4760b527894bd7d90ae8865be8786166', class: "dropdown__activator", ref: (el) => (this.activatorEl = el), onClick: () => this.toggle() }, h("slot", { key: '40a385191fdebd74e680d6c3193fd71d2286a111', name: "activator" })), h("div", { key: '1aac55536835b64edd5f4c38fbcd217078511d07', class: "dropdown__panel", part: "panel", role: "dialog", tabindex: "-1", "aria-label": this.accessibleName(), "data-test": this.dataTest, style: panelWidth ? { '--dropdown-width': `${panelWidth}rem` } : undefined, ref: (el) => (this.panelEl = el) }, h("div", { key: 'b2d82989d7f489ccb65bf03b25ed26968cf9b9ce', class: { dropdown__header: true, 'dropdown__header--empty': !this.hasHeader }, part: "header" }, h("slot", { key: '093c3bfe834c52a5c97660c5b5f2841f380c908d', name: "header", onSlotchange: this.onSlotChange('header') })), h("div", { key: '671e47c10b204e77b898c53d5265077e420ba1df', class: "dropdown__body", part: "body" }, h("slot", { key: 'cbf4970c0badcf1a7dd3c22f1104e2f06bf43cd3' })), h("div", { key: 'bd183c38ed2e0dfe1adc6aaa8fcd810a5df2cba1', class: { dropdown__footer: true, 'dropdown__footer--empty': !this.hasFooter }, part: "footer" }, h("slot", { key: '3c35d4c0e91829ba323109c4db120d13f0c21681', name: "footer", onSlotchange: this.onSlotChange('footer') })))));
    }
    static get is() { return "uai-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-dropdown.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-dropdown.css"]
        };
    }
    static get properties() {
        return {
            "open": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Opens or closes the panel. Use for declarative control; pair with uaiToggle. Avoid toggling it on every render."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "open",
                "defaultValue": "false"
            },
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiDropdownPosition",
                    "resolved": "\"auto\" | \"bottom-center\" | \"bottom-left\" | \"bottom-right\" | \"top-center\" | \"top-left\" | \"top-right\"",
                    "references": {
                        "UaiDropdownPosition": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-dropdown/uai-dropdown.tsx",
                            "id": "src/components/uai-dropdown/uai-dropdown.tsx::UaiDropdownPosition"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Where the panel opens: 'auto' picks the side and alignment with the room available; the others fix the side\n(top or bottom) and the alignment with the activator (left aligns to its start, right to its end). The panel\nstill flips or moves when it would leave the screen. 'top-center' and 'bottom-center' come from bds-dropdown: they\nfix the side and leave the alignment automatic. Use 'auto' unless the layout needs a fixed side."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "position",
                "defaultValue": "'auto'"
            },
            "activeMode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiDropdownActiveMode",
                    "resolved": "\"click\" | \"hover\"",
                    "references": {
                        "UaiDropdownActiveMode": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-dropdown/uai-dropdown.tsx",
                            "id": "src/components/uai-dropdown/uai-dropdown.tsx::UaiDropdownActiveMode"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "The panel opens on click only."
                        }],
                    "text": "How the activator opens the panel. Only 'click' is supported; 'hover' is kept for compatibility and behaves as\n'click'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "active-mode",
                "defaultValue": "'click'"
            },
            "width": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Panel width in rem, e.g. `24` for 24rem. Use for narrower or wider panels; the panel never exceeds the screen. Defaults to 21."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "width"
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
                    "text": "Accessible name of the panel. Without it, the panel is named by the first heading slotted into `header`\n(h1 to h6, role=\"heading\" or uai-typo with an h tag). Use a short noun phrase when the header has no title."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "dataTest": {
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
                    "text": "Test selector on the panel. Use for automation; pair with semantic queries. Avoid styling by it."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "hasHeader": {},
            "hasFooter": {}
        };
    }
    static get events() {
        return [{
                "method": "uaiToggle",
                "name": "uaiToggle",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the panel opens or closes, with `value` true when it opened. Use to sync external state."
                },
                "complexType": {
                    "original": "{ value: boolean }",
                    "resolved": "{ value: boolean; }",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "toggle": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Opens the panel when closed and closes it when open. Use for imperative control; pair with uaiToggle.",
                    "tags": []
                }
            },
            "setOpen": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Opens the panel. Use when opening from code, for example after an async load.",
                    "tags": []
                }
            },
            "setClose": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Closes the panel. Use to close it from an action inside the panel, such as Save.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "openChanged"
            }, {
                "propName": "position",
                "methodName": "positionChanged"
            }];
    }
}
