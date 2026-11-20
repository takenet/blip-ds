'use strict';

var index = require('./index-Bq8uwDLK.js');
var uaiOverlay = require('./uai-overlay-DRE75ayC.js');
var tagName = require('./tag-name-DCmhJ5mj.js');

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
                (tagName.isTag(child, 'uai-typo') && /^h[1-6]$/.test(child.getAttribute('tag') || ''))));
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
        return (index.h(index.Host, { key: '79bf16db01202c8f437f5baa07a8bb843e6b0a86', onFocusout: this.onFocusout }, index.h("div", { key: '08d646453ac16df1a8f4809ce80bfe4428a4bb8b', class: "dropdown__activator", ref: (el) => (this.activatorEl = el), onClick: () => this.toggle() }, index.h("slot", { key: 'f5cbd98ed6a8eb288308b30d2b73b3d5ccd397d9', name: "activator" })), index.h("div", { key: 'f49b3065ae2879cdec78e8533fc20d7307db4c16', class: "dropdown__panel", part: "panel", role: "dialog", tabindex: "-1", "aria-label": this.accessibleName(), "data-test": this.dataTest, style: panelWidth ? { '--dropdown-width': `${panelWidth}rem` } : undefined, ref: (el) => (this.panelEl = el) }, index.h("div", { key: 'd688a4f78682862a38be2e4fe87bf96e2d1a6b6c', class: { dropdown__header: true, 'dropdown__header--empty': !this.hasHeader }, part: "header" }, index.h("slot", { key: '6e605d287ebcbb8939e3626a9eb743594ee32646', name: "header", onSlotchange: this.onSlotChange('header') })), index.h("div", { key: '2b4f242d1ede112ff6eba713d1558753e1b49c55', class: "dropdown__body", part: "body" }, index.h("slot", { key: '80800157d04485dc5d1823e48a113fdab4f81343' })), index.h("div", { key: 'a525c24cdac6d7ef5961b713994d4afc9d2c0707', class: { dropdown__footer: true, 'dropdown__footer--empty': !this.hasFooter }, part: "footer" }, index.h("slot", { key: '27cdc34637279bdb1464e0d41edb38b7f63701a7', name: "footer", onSlotchange: this.onSlotChange('footer') })))));
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
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: 'c17513ddcf7e336388464849267e7a250629f470' }, index.h("div", { key: 'a99bcdcfd73f22b9f263d4e7dbdb1299c142b3a5', class: "tooltip__wrapper" }, index.h("div", { key: 'f8fd5954954585cf4a87006a69aba2afb9484b0c', class: "tooltip__trigger", onMouseEnter: () => this.setVisibility(true), onMouseLeave: () => this.setVisibility(false), onFocusin: () => this.setVisibility(true), onFocusout: () => this.setVisibility(false), onKeyDown: this.onKeyDown, "data-test": this.dataTest, "aria-describedby": this.tipId }, index.h("slot", { key: '3e7b8f522eb3d10365b6ede754048620698eba21' })), index.h("div", { key: '6259375b441a0151c28211e8d784184600a2d196', id: this.tipId, part: "tip", role: "tooltip", class: {
                tooltip__tip: true,
                [`tooltip__tip--${position}`]: true,
                'tooltip__tip--visible': this.isVisible,
            }, style: { maxWidth: this.maxWidthTooltip } }, index.h("uai-typo", { key: 'fdf0fadb1a33ce3e2a3bc6cbefd0fc024a427ef8', class: "tooltip__text", tag: "span", variant: "caption", margin: false }, this.textVerify)))));
    }
    get el() { return index.getElement(this); }
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

exports.uai_dropdown = UaiDropdown;
exports.uai_tooltip = UaiTooltip;
