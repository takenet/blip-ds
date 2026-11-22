import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-B3G05Lxx.js';
import { U as UaiOverlay } from './uai-overlay-BCD7g-De.js';
import { i as isTag } from './tag-name-C_DDxI_a.js';

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
        registerInstance(this, hostRef);
        this.uaiToggle = createEvent(this, "uaiToggle");
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
        this.overlay = new UaiOverlay(Object.assign({ trigger: this.activatorEl, panel: this.panelEl, onClose: this.onOverlayClose }, this.placement()));
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
                (isTag(child, 'uai-typo') && /^h[1-6]$/.test(child.getAttribute('tag') || ''))));
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
        return (h(Host, { key: 'a6c05f238beec5bb0990880bf6e141396e167b95', onFocusout: this.onFocusout }, h("div", { key: '1de7974fd99cfecd69531395cf1deb023fcd94ef', class: "dropdown__activator", ref: (el) => (this.activatorEl = el), onClick: () => this.toggle() }, h("slot", { key: '05ab5a733fbf9ecdc44ca054e355047d973518c6', name: "activator" })), h("div", { key: 'bf27886748a2bbfcf9a6b63fb6f1089d2e2b3263', class: "dropdown__panel", part: "panel", role: "dialog", tabindex: "-1", "aria-label": this.accessibleName(), "data-test": this.dataTest, style: panelWidth ? { '--dropdown-width': `${panelWidth}rem` } : undefined, ref: (el) => (this.panelEl = el) }, h("div", { key: '661fc2d043794030daa6f6b01da9d5344bb74848', class: { dropdown__header: true, 'dropdown__header--empty': !this.hasHeader }, part: "header" }, h("slot", { key: '337a12d5a145867b09b1325a7861efb554c58aa2', name: "header", onSlotchange: this.onSlotChange('header') })), h("div", { key: '6d9b61b35e64f6d3de5be7fb72e889ffc5f3e75b', class: "dropdown__body", part: "body" }, h("slot", { key: '772fcfc7aec4a15826a5b89a1cd7898fc7f74eda' })), h("div", { key: 'fe6c392b8b14bac779fac4bcd60b155a4db8a006', class: { dropdown__footer: true, 'dropdown__footer--empty': !this.hasFooter }, part: "footer" }, h("slot", { key: '58842d4a098f78d991743f4ede01dda17d261cfb', name: "footer", onSlotchange: this.onSlotChange('footer') })))));
    }
    get el() { return getElement(this); }
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

const uaiTooltipCss = () => `:host{display:inline-block;vertical-align:middle}.tooltip__wrapper{display:inline-block;position:relative}.tooltip__trigger{display:inline-block}.tooltip__tip{--tooltip-bg:var(--uai-surface-inverse, #242729);--tooltip-arrow-size:var(--uai-sizing-2xs, 0.5rem);--tooltip-hairline:var(--uai-border-width-default, 1px);--tooltip-gap:calc(var(--tooltip-arrow-size) + var(--uai-spacing-3xs, 0.125rem));position:absolute;left:50%;-webkit-box-sizing:border-box;box-sizing:border-box;width:-webkit-max-content;width:-moz-max-content;width:max-content;min-width:var(--uai-sizing-lg, 1.5rem);max-width:var(--uai-width-tooltip, 15rem);padding:var(--uai-spacing-xs, 0.5rem);border-radius:var(--uai-radius-md, 0.5rem);background:var(--tooltip-bg);-webkit-box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));color:var(--uai-content-inverse, #ffffff);font-family:var(--uai-font-family-sans, Figtree), sans-serif;white-space:break-spaces;cursor:default;z-index:9000;visibility:hidden;opacity:0;pointer-events:none;-webkit-transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), visibility var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), visibility var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.tooltip__tip{-webkit-transition:none;transition:none}}.tooltip__tip--visible{visibility:visible;opacity:1}.tooltip__tip::before{content:"";left:50%;border:solid transparent;height:0;width:0;position:absolute;pointer-events:none;margin-left:calc(-1 * var(--tooltip-arrow-size));border-width:var(--tooltip-arrow-size)}.tooltip__tip--top-center,.tooltip__tip--top-left,.tooltip__tip--top-right{bottom:calc(100% + var(--tooltip-gap))}.tooltip__tip--top-center::before,.tooltip__tip--top-left::before,.tooltip__tip--top-right::before{top:100%;border-top-color:var(--tooltip-bg)}.tooltip__tip--top-left{left:0;-webkit-transform:translateX(-15%);transform:translateX(-15%)}.tooltip__tip--top-left::before{left:calc(15% + var(--tooltip-arrow-size))}.tooltip__tip--top-right{left:initial;right:0;-webkit-transform:translateX(15%);transform:translateX(15%)}.tooltip__tip--top-right::before{left:calc(85% - var(--tooltip-arrow-size))}.tooltip__tip--bottom-center,.tooltip__tip--top-center{-webkit-transform:translateX(-50%);transform:translateX(-50%)}.tooltip__tip--left-center,.tooltip__tip--right-center{-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%)}.tooltip__tip--right-center,.tooltip__tip--right-top,.tooltip__tip--right-bottom{left:calc(100% + var(--tooltip-gap));top:50%}.tooltip__tip--right-center::before,.tooltip__tip--right-top::before,.tooltip__tip--right-bottom::before{left:calc(var(--tooltip-hairline) - var(--tooltip-arrow-size));top:50%;-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%);border-right-color:var(--tooltip-bg)}.tooltip__tip--right-top{top:0}.tooltip__tip--right-top::before{top:40%}.tooltip__tip--right-bottom{top:initial;bottom:0}.tooltip__tip--right-bottom::before{top:60%}.tooltip__tip--bottom-center,.tooltip__tip--bottom-right,.tooltip__tip--bottom-left{top:calc(100% + var(--tooltip-gap))}.tooltip__tip--bottom-center::before,.tooltip__tip--bottom-right::before,.tooltip__tip--bottom-left::before{bottom:100%;border-bottom-color:var(--tooltip-bg)}.tooltip__tip--bottom-right{left:initial;right:0;-webkit-transform:translateX(15%);transform:translateX(15%)}.tooltip__tip--bottom-right::before{left:calc(85% - var(--tooltip-arrow-size))}.tooltip__tip--bottom-left{left:0;-webkit-transform:translateX(-15%);transform:translateX(-15%)}.tooltip__tip--bottom-left::before{left:calc(15% + var(--tooltip-arrow-size))}.tooltip__tip--left-center,.tooltip__tip--left-top,.tooltip__tip--left-bottom{left:auto;right:calc(100% + var(--tooltip-gap));top:50%}.tooltip__tip--left-center::before,.tooltip__tip--left-top::before,.tooltip__tip--left-bottom::before{left:auto;right:calc(var(--tooltip-hairline) - 2 * var(--tooltip-arrow-size));top:50%;-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%);border-left-color:var(--tooltip-bg)}.tooltip__tip--left-top{top:0}.tooltip__tip--left-top::before{top:40%}.tooltip__tip--left-bottom{top:initial;bottom:0}.tooltip__tip--left-bottom::before{top:60%}.tooltip__text{--uai-typo-color:currentColor;display:block;white-space:break-spaces}`;

const POSITIONS = [
    'top-center',
    'top-left',
    'top-right',
    'left-center',
    'left-top',
    'left-bottom',
    'bottom-center',
    'bottom-right',
    'bottom-left',
    'right-center',
    'right-top',
    'right-bottom',
];
let tooltipIds = 0;
const formatText = (text) => (text ? text.replace(/<br>/gi, '\r\n') : '');
const UaiTooltip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isVisible = false;
        this.tipId = `uai-tooltip-${++tooltipIds}`;
        /** Tooltip text; <br> breaks the line. Use short hints; pair with the wrapped element; avoid essential information. */
        this.tooltipText = 'Tooltip';
        /** Prevents the tooltip from showing. Use when the wrapped element is unavailable; pair with explanatory text elsewhere. */
        this.disabled = false;
        /** Placement relative to the wrapped element. Use the side with free space; avoid covering related content. */
        this.position = 'left-center';
        /** Maximum tooltip width as a CSS length. Defaults to the width/tooltip token; use for long text; avoid widths narrower than the content needs. */
        this.maxWidth = null;
        /** Test selector on the trigger wrapper. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dataTest = null;
        this.onKeyDown = (event) => {
            if (event.key === 'Escape' && this.isVisible)
                this.isVisible = false;
        };
    }
    /** Shows the tooltip. Use for imperative control; pair with invisible. Avoid calling it while disabled. */
    async visible() {
        this.isVisible = true;
    }
    /** Hides the tooltip. Use for imperative control; pair with visible. Avoid leaving it open after the task ends. */
    async invisible() {
        this.isVisible = false;
    }
    tooltipTextChanged() {
        this.textVerify = formatText(this.tooltipText);
    }
    maxWidthChanged() {
        this.maxWidthTooltip = this.maxWidth;
    }
    disabledChanged() {
        if (this.disabled)
            this.isVisible = false;
    }
    componentWillLoad() {
        this.textVerify = formatText(this.tooltipText);
        this.maxWidthTooltip = this.maxWidth;
    }
    setVisibility(value) {
        this.isVisible = this.disabled ? false : value;
    }
    render() {
        const position = POSITIONS.find((candidate) => candidate === this.position) || 'left-center';
        return (h(Host, { key: '8d29b8978af6e04ef64172d5a692b76934a365fc' }, h("div", { key: '73f58cdea388d031ac8169abdf71db8cc32d46c6', class: "tooltip__wrapper" }, h("div", { key: 'e9407c3adc12220845adb715d913332f80bcc263', class: "tooltip__trigger", onMouseEnter: () => this.setVisibility(true), onMouseLeave: () => this.setVisibility(false), onFocusin: () => this.setVisibility(true), onFocusout: () => this.setVisibility(false), onKeyDown: this.onKeyDown, "data-test": this.dataTest, "aria-describedby": this.tipId }, h("slot", { key: 'b5ad02cc5b149fe8cf7a9ebe4de3ceccc2ea5b7f' })), h("div", { key: '3dcd41d08826604ff699cb86c606d5b078ce4667', id: this.tipId, part: "tip", role: "tooltip", class: {
                tooltip__tip: true,
                [`tooltip__tip--${position}`]: true,
                'tooltip__tip--visible': this.isVisible,
            }, style: { maxWidth: this.maxWidthTooltip } }, h("uai-typo", { key: '034b54322abc409d47595e4a4d76784079ececfd', class: "tooltip__text", tag: "span", variant: "caption", margin: false }, this.textVerify)))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "tooltipText": [{
                "tooltipTextChanged": 0
            }],
        "maxWidth": [{
                "maxWidthChanged": 0
            }],
        "disabled": [{
                "disabledChanged": 0
            }]
    }; }
};
UaiTooltip.style = uaiTooltipCss();

export { UaiDropdown as uai_dropdown, UaiTooltip as uai_tooltip };
