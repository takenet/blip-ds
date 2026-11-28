import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-B3G05Lxx.js';

const uaiListItemCss = () => `:host{display:block;width:100%}.list-item{position:relative;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-md, 1rem);border-radius:var(--uai-radius-none, 0rem);color:var(--uai-content-primary, #242729);font-family:var(--uai-font-family-sans, Figtree), sans-serif}.list-item--tall{padding:var(--uai-spacing-md, 1rem)}.list-item--standard{padding:var(--uai-spacing-xs, 0.5rem) var(--uai-spacing-md, 1rem)}.list-item--short{padding:var(--uai-spacing-xs, 0.5rem)}.list-item--border-radius{border-radius:var(--uai-radius-md, 0.5rem)}.list-item::before,.list-item::after{position:absolute;inset:0;border-radius:inherit;content:"";pointer-events:none}.list-item::before{background-color:transparent;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.list-item::before{-webkit-transition:none;transition:none}}.list-item--active::after{background-color:var(--uai-overlay-selected, rgba(0, 0, 0, 0.06))}.list-item--clickable{gap:var(--uai-spacing-xs, 0.5rem);cursor:pointer}.list-item--clickable:hover::before{background-color:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08))}.list-item--clickable:active::before{background-color:var(--uai-overlay-pressed, rgba(0, 0, 0, 0.16))}.list-item--clickable:focus{outline:none}.list-item--clickable:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:calc(-1 * var(--uai-spacing-3xs, 0.125rem))}.list-item>*{position:relative}.control{display:-ms-inline-flexbox;display:inline-flex;-ms-flex:none;flex:none;pointer-events:none}.avatar-item{display:block;-ms-flex:none;flex:none}.icon-item{-ms-flex:none;flex:none;color:var(--uai-content-primary, #242729)}.content-slot{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}.content-item{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-3xs, 0.125rem);min-width:0}.title-item{--uai-typo-color:var(--uai-content-primary, #242729)}.subtitle-item{--uai-typo-color:var(--uai-content-secondary, #5f676d)}.grow-up{-ms-flex-positive:2;flex-grow:2}.content-area{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);min-width:0}.content-area .internal-chips,.content-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:var(--uai-spacing-xs, 0.5rem)}.chip{display:-ms-inline-flexbox;display:inline-flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;height:var(--uai-sizing-lg, 1.5rem);padding:0 var(--uai-spacing-xs, 0.5rem);border:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);border-radius:var(--uai-radius-full, 624.9375rem);background-color:var(--uai-surface-muted, #f2f3f3);color:var(--uai-content-primary, #242729);font-size:var(--uai-caption-font-size, 0.75rem);font-weight:var(--uai-font-weight-medium, 500);line-height:var(--uai-caption-line-height, 1.25rem);white-space:nowrap}.action-area{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.action-area .internal-actions-buttons,.action-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:var(--uai-spacing-none, 0rem);color:var(--uai-content-primary, #242729)}@media (forced-colors: active){.list-item--active{outline:var(--uai-border-width-default, 1px) solid Highlight}.chip{border-color:CanvasText}}`;

/** Chips longer than this are cut with "..." and show the full text in a tooltip, as in bds-list-item. */
const CHIP_LIMIT = 30;
const CONTROL_TYPES = ['checkbox', 'radio', 'switch'];
const parseList = (value, current) => {
    if (!value)
        return [];
    if (typeof value !== 'string')
        return value;
    // Keep the current list if AngularJS has not interpolated the attribute yet; the watcher reloads it.
    try {
        return JSON.parse(value);
    }
    catch (_a) {
        return current;
    }
};
const UaiListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uaiChecked = createEvent(this, "uaiChecked");
        this.uaiClickActionButtom = createEvent(this, "uaiClickActionButtom");
        this.uaiClickActionButton = createEvent(this, "uaiClickActionButton");
        this.internalChips = [];
        this.internalActionsButtons = [];
        /** Selected state of the control. Use with typeList checkbox, radio or switch; pair with uaiChecked. Avoid it on default rows, where it has no visual. */
        this.checked = false;
        /** Control of the row: checkbox and radio on the left, switch on the right; default or null has none. Use the same value in every row of a list; pair with uai-list typeList. Avoid mixing controls in one list. */
        this.typeList = null;
        /** Name shown as avatar initials. Use for people or entities; pair with avatarThumbnail. Avoid it together with icon: the avatar wins. */
        this.avatarName = null;
        /** Avatar photo URL. Use for people; pair with avatarName as fallback. Avoid decorative images. */
        this.avatarThumbnail = null;
        /** UAI icon name shown before the text; solid when active. Use to identify the row type; pair with text. Avoid it with an avatar, which takes priority. */
        this.icon = null;
        /** Row identifier sent in the events. Use a unique value per list; pair with uai-list value for radios. Avoid duplicates. */
        this.value = null;
        /** Main text of the row. Use a short label; pair with secondaryText for details. Avoid long paragraphs. */
        this.text = null;
        /** Supporting text below the main text. Use for details; pair with text. Avoid repeating the main text. */
        this.secondaryText = null;
        /**
         * Chips shown after the text, as a JSON string or an array: chips='["chip1", "chip2"]'. Use for short tags;
         * pair with text. Avoid long labels: they are cut with a tooltip.
         */
        this.chips = [];
        /**
         * UAI icon names of the action buttons on the right, as a JSON string or an array:
         * actions-buttons='["copy", "settings-general", "more-options-horizontal"]'. Use with typeList null or default;
         * pair with uaiClickActionButtom. Avoid them with controls: they are not shown.
         */
        this.actionsButtons = [];
        /** Shows the hover and pressed states and makes the row focusable. Use when the row does something on click; pair with a click handler. Controls are always clickable. */
        this.clickable = false;
        /** Highlights the row as the current one: selected overlay, solid icon and bold text. Use for the current item; pair with navigation. Avoid it to mean checked. */
        this.active = false;
        /** Rounds the row corners with radius/md. Use for rows that float on a surface; pair with spacing between rows. Avoid it in full-bleed lists. */
        this.borderRadius = false;
        /** Row padding: tall, standard or short. Use standard by default; pair with the density of the screen. Avoid mixing sizes in one list. */
        this.size = 'standard';
        /** Test selector on the row. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dataTest = null;
        // SOLFAC-117 (b, bug 3): a click on an action button does not toggle checked.
        this.onClick = (event) => {
            const fromActionButton = event
                .composedPath()
                .some((node) => { var _a; return (_a = node.classList) === null || _a === void 0 ? void 0 : _a.contains('action-button'); });
            if (!fromActionButton)
                this.toggle();
        };
        // SOLFAC-117 (a): Enter and Space act like a click on focusable rows.
        this.onKeyDown = (event) => {
            if (event.composedPath()[0] !== this.itemElement)
                return;
            if (event.key !== 'Enter' && event.key !== ' ')
                return;
            event.preventDefault();
            if (!event.repeat)
                this.toggle();
        };
        this.clickActionButtons = (icon, event) => {
            const detail = { value: this.value, icon, elementButton: event.composedPath()[0] };
            this.uaiClickActionButtom.emit(detail);
            // SOLFAC-117 (c): corrected spelling, emitted with the same detail.
            this.uaiClickActionButton.emit(detail);
        };
        // Inner controls are visual only: the row owns focus, role and state, so their own change events stay inside.
        this.stopControlEvent = (event) => event.stopPropagation();
    }
    componentWillLoad() {
        this.hasActionAreaSlot = !!this.hostElement.querySelector('[slot="action-area"]');
        this.hasContentAreaSlot = !!this.hostElement.querySelector('[slot="content-area"]');
        this.chipsChanged();
        this.actionsButtonsChanged();
    }
    chipsChanged() {
        this.internalChips = parseList(this.chips, this.internalChips);
    }
    actionsButtonsChanged() {
        this.internalActionsButtons = parseList(this.actionsButtons, this.internalActionsButtons);
    }
    get isControl() {
        return CONTROL_TYPES.includes(this.typeList);
    }
    // SOLFAC-117 (b, bug 4): uaiChecked is emitted only for user interaction, never for changes made by code.
    toggle() {
        const next = this.typeList == 'radio' ? true : !this.checked;
        if (next === this.checked)
            return;
        this.checked = next;
        this.uaiChecked.emit({
            value: this.value,
            text: this.text,
            secondaryText: this.secondaryText,
            typeList: this.typeList,
            checked: next,
        });
    }
    renderChips() {
        return this.internalChips.map((chip, index) => {
            const id = index.toString();
            if (chip.length <= CHIP_LIMIT) {
                return (h("span", { class: "chip", id: id, key: id }, chip));
            }
            return (h("uai-tooltip", { key: id, position: "top-center", "tooltip-text": chip }, h("span", { class: "chip", id: id }, `${chip.slice(0, CHIP_LIMIT)} ...`)));
        });
    }
    renderActionsButtons() {
        return this.internalActionsButtons.map((button, index) => (h("uai-button", { key: index.toString(), class: "action-button", variant: "outline", color: "content", size: "short", icon: button, "aria-label": button, onClick: (event) => this.clickActionButtons(button, event) })));
    }
    renderControl() {
        const label = this.text || this.value || this.typeList;
        return (h("span", { class: `control control--${this.typeList}`, "aria-hidden": "true", inert: true }, this.typeList == 'radio' && h("uai-radio", { value: this.value, checked: this.checked, "aria-label": label, onUaiChange: this.stopControlEvent }), this.typeList == 'checkbox' && h("uai-checkbox", { checked: this.checked, "aria-label": label, onUaiChange: this.stopControlEvent }), this.typeList == 'switch' && h("uai-switch", { checked: this.checked, "aria-label": label, onUaiChange: this.stopControlEvent })));
    }
    role() {
        if (this.isControl)
            return this.typeList;
        return this.clickable ? 'button' : null;
    }
    render() {
        const interactive = this.clickable || this.isControl;
        const hasLeftInput = this.typeList == 'checkbox' || this.typeList == 'radio';
        const hasAvatar = this.avatarName || this.avatarThumbnail;
        const size = ['tall', 'standard', 'short'].includes(this.size) ? this.size : 'standard';
        // SOLFAC-117 (b, bug 5): the text grows when there are no chips and no content or action slots.
        const textGrows = !this.hasActionAreaSlot && !this.hasContentAreaSlot && this.internalChips.length === 0;
        return (h(Host, { key: 'adfc77c9d4dad1b15b807e3ba3d7afb9a9efd689' }, h("div", { key: '73a2dc73b7bf6a5acd3f832b086c7bbff54d128f', ref: (element) => (this.itemElement = element), part: "item", class: {
                'list-item': true,
                'list-item--clickable': interactive,
                'list-item--active': this.active,
                'list-item--border-radius': this.borderRadius,
                [`list-item--${size}`]: true,
            }, role: this.role(), "aria-checked": this.isControl ? String(!!this.checked) : null, "aria-labelledby": this.text ? 'list-item-text' : null, "aria-describedby": this.secondaryText ? 'list-item-secondary-text' : null, tabindex: interactive ? '0' : null, "data-test": this.dataTest, onClick: this.onClick, onKeyDown: interactive ? this.onKeyDown : null }, hasLeftInput && this.renderControl(), hasAvatar ? (h("uai-avatar", { class: "avatar-item", name: this.avatarName, thumbnail: this.avatarThumbnail, size: "extra-small" })) : (this.icon && (h("uai-icon", { class: "icon-item", size: "medium", name: this.icon, theme: this.active ? 'solid' : 'outline' }))), h("div", { key: '18cd4d49055ab256f2d5a6848c9104ae7a736abb', class: "content-slot" }, h("slot", { key: '968d5578680b58a231538f53281f513f6608fc1c' })), (this.text || this.secondaryText) && (h("div", { key: '9809ea1537c10bd49a5030ec1d75cb4b3abfa191', class: { 'content-item': true, 'grow-up': textGrows } }, this.text && (h("uai-typo", { key: 'b0ea3b0ac4cc5a6aace90a7247899c042d348a0b', id: "list-item-text", class: "title-item", variant: "body-lg", tag: "span", margin: false, bold: this.active ? 'bold' : 'regular' }, this.text)), this.secondaryText && (h("uai-typo", { key: 'ab949ab15fe5c4394dd36a57013020a18346de5f', id: "list-item-secondary-text", class: "subtitle-item", variant: "caption", tag: "span", margin: false }, this.secondaryText)))), h("div", { key: 'ffbc7e877166debd34215fdded485a4d472c82ec', class: "content-area grow-up" }, this.internalChips.length > 0 && h("div", { key: '7f42f5b32c23132d95978f1b2ca65dc0fa7e4c5b', class: "internal-chips" }, this.renderChips()), h("slot", { key: 'fbd382d47a52d2d34ad4c76726443e035f8aeb3b', name: "content-area" })), (!this.typeList || this.typeList == 'default') && (h("div", { key: '7b104542f550f45f9be76f1b8befebad847be5f8', class: "action-area" }, this.internalActionsButtons.length > 0 && (h("div", { key: '912b930e348f0b5f0412665dc58d79260f5de01f', class: "internal-actions-buttons" }, this.renderActionsButtons())), h("slot", { key: 'aae05b73e83bccc7ade3347f1bd418bc7429736d', name: "action-area" }))), this.typeList == 'switch' && this.renderControl())));
    }
    get hostElement() { return getElement(this); }
    static get watchers() { return {
        "chips": [{
                "chipsChanged": 0
            }],
        "actionsButtons": [{
                "actionsButtonsChanged": 0
            }]
    }; }
};
UaiListItem.style = uaiListItemCss();

export { UaiListItem as uai_list_item };
