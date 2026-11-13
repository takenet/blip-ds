'use strict';

var index = require('./index-BuAR9UTp.js');
var uaiOverlay = require('./uai-overlay-BfPyY4-s.js');

const uaiDropdownCss = () => `:host{display:inline-block}.dropdown__activator{display:-ms-inline-flexbox;display:inline-flex}.dropdown__panel{--uai-overlay-gap:var(--uai-spacing-2xs, 0.25rem);--uai-overlay-margin:var(--uai-spacing-xs, 0.5rem);position:fixed;inset:auto;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;border:0;overflow:auto;background:transparent;color:inherit;opacity:0;-webkit-transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete;transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete}.dropdown__panel:not(.uai-overlay--open){display:none}.dropdown__panel.uai-overlay--open{opacity:1}@starting-style{.dropdown__panel.uai-overlay--open{opacity:0}}@media (prefers-reduced-motion: reduce){.dropdown__panel{-webkit-transition:none;transition:none}}.dropdown__panel{--dropdown-default-width:calc(     var(--uai-width-panel, 18rem) + var(--uai-sizing-3xl, 3rem)   );-ms-flex-direction:column;flex-direction:column;width:var(--dropdown-width, var(--dropdown-default-width));overflow:hidden;border:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);border-radius:var(--uai-radius-xl, 1rem);background:var(--uai-surface-paper, #ffffff);color:var(--uai-content-primary, #242729);-webkit-box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16))}.dropdown__panel.uai-overlay--open{display:-ms-flexbox;display:flex}.dropdown__panel:focus{outline:none}.dropdown__header,.dropdown__footer{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;padding:var(--uai-spacing-md, 1rem)}.dropdown__header--empty,.dropdown__footer--empty{display:none}.dropdown__header{-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-md, 1rem);border-bottom:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7)}.dropdown__body{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-xs, 0.5rem);min-height:0;overflow-y:auto;padding:var(--uai-spacing-md, 1rem)}.dropdown__footer{-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;gap:var(--uai-spacing-xs, 0.5rem);border-top:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7)}`;

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
const UaiDropdown = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.uaiToggle = index.createEvent(this, "uaiToggle");
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
    }
    disconnectedCallback() {
        var _a;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.destroy();
        this.overlay = undefined;
    }
    createOverlay() {
        if (!this.activatorEl || !this.panelEl)
            return;
        this.overlay = new uaiOverlay.UaiOverlay(Object.assign({ trigger: this.activatorEl, panel: this.panelEl, onClose: this.onOverlayClose }, this.placement()));
    }
    placement() {
        const placement = PLACEMENTS[this.position];
        if (placement)
            return placement;
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
        return (index.h(index.Host, { key: '9f6cf734435eb58af3f2132a7c3d86adc67218a0', onFocusout: this.onFocusout }, index.h("div", { key: '10ee274c4760b527894bd7d90ae8865be8786166', class: "dropdown__activator", ref: (el) => (this.activatorEl = el), onClick: () => this.toggle() }, index.h("slot", { key: '40a385191fdebd74e680d6c3193fd71d2286a111', name: "activator" })), index.h("div", { key: '1aac55536835b64edd5f4c38fbcd217078511d07', class: "dropdown__panel", part: "panel", role: "dialog", tabindex: "-1", "aria-label": this.accessibleName(), "data-test": this.dataTest, style: panelWidth ? { '--dropdown-width': `${panelWidth}rem` } : undefined, ref: (el) => (this.panelEl = el) }, index.h("div", { key: 'b2d82989d7f489ccb65bf03b25ed26968cf9b9ce', class: { dropdown__header: true, 'dropdown__header--empty': !this.hasHeader }, part: "header" }, index.h("slot", { key: '093c3bfe834c52a5c97660c5b5f2841f380c908d', name: "header", onSlotchange: this.onSlotChange('header') })), index.h("div", { key: '671e47c10b204e77b898c53d5265077e420ba1df', class: "dropdown__body", part: "body" }, index.h("slot", { key: 'cbf4970c0badcf1a7dd3c22f1104e2f06bf43cd3' })), index.h("div", { key: 'bd183c38ed2e0dfe1adc6aaa8fcd810a5df2cba1', class: { dropdown__footer: true, 'dropdown__footer--empty': !this.hasFooter }, part: "footer" }, index.h("slot", { key: '3c35d4c0e91829ba323109c4db120d13f0c21681', name: "footer", onSlotchange: this.onSlotChange('footer') })))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "open": [{
                "openChanged": 0
            }],
        "position": [{
                "positionChanged": 0
            }]
    }; }
};
UaiDropdown.style = uaiDropdownCss();

exports.uai_dropdown = UaiDropdown;
