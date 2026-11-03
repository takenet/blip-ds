import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-CkbvGS8Z.js';
import { U as UaiFormControl } from './uai-form-control-BkRP7pRQ.js';
import { U as UaiOverlay } from './uai-overlay-BBMw0Oa-.js';

const uaiSelectCss = () => `:host{--input-height:var(--uai-control-height-medium, 2.5rem);--input-background:var(--uai-surface-paper, #ffffff);--input-border:var(--uai-border-input, #adb4b8);--input-content:var(--uai-content-primary, #242729);--input-label:var(--uai-content-primary, #242729);--input-message:var(--uai-content-secondary, #5f676d);--input-feedback:var(--input-content);--input-halo:color-mix(     in srgb,     var(--uai-border-ring, #242729) calc(var(--uai-opacity-focus-ring, 0.3) * 100%),     transparent   );display:block;width:var(--uai-select-width, 100%)}:host(.uai-select--size-short){--input-height:var(--uai-control-height-short, 2rem)}:host(.uai-select--danger){--input-border:var(--uai-feedback-error, #cf0022);--input-label:var(--uai-feedback-error, #cf0022);--input-message:var(--uai-feedback-error, #cf0022);--input-feedback:var(--uai-feedback-error, #cf0022);--input-halo:color-mix(     in srgb,     var(--uai-feedback-error, #cf0022) calc(var(--uai-opacity-focus-ring, 0.3) * 100%),     transparent   )}:host(.uai-select--success){--input-border:var(--uai-feedback-success, #3da329);--input-message:var(--uai-feedback-success, #3da329);--input-feedback:var(--uai-feedback-success, #3da329)}:host(.uai-select--disabled){--input-background:var(--uai-surface-muted, #f2f3f3);--input-border:var(--uai-border-default, #e4e6e7);--input-content:var(--uai-content-disabled, #848e94);--input-label:var(--uai-content-disabled, #848e94);--input-message:var(--uai-content-disabled, #848e94);--input-feedback:var(--uai-content-disabled, #848e94)}.select{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-2xs, 0.25rem)}.select__label,.select__message,.select__value,.option{--uai-typo-color:currentColor}.select__label{padding:0 var(--uai-spacing-xs, 0.5rem);color:var(--input-label)}.select__message{padding:0 var(--uai-spacing-xs, 0.5rem);color:var(--input-message)}.select__control{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;height:var(--input-height);border:var(--uai-border-width-default, 1px) solid var(--input-border);border-radius:var(--uai-radius-lg, 0.75rem);background-color:var(--input-background);color:var(--input-content);-webkit-transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.select__control{-webkit-transition:none;transition:none}}.select__control:focus-within,:host(.uai-select--open) .select__control{--input-border:var(--uai-action-primary-default, #242729);-webkit-box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo);box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo)}@media (forced-colors: active){.select__control:focus-within{-webkit-box-shadow:none;box-shadow:none;outline:var(--uai-border-width-thick, 2px) solid CanvasText}}:host(.uai-select--danger) .select__control:focus-within,:host(.uai-select--danger.uai-select--open) .select__control{--input-border:var(--uai-feedback-error, #cf0022)}:host(:not(.uai-select--disabled):not(.uai-select--danger):not(.uai-select--success)) .select__control:hover:not(:focus-within){--input-border:var(--uai-action-primary-default, #242729)}.select__button{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);min-width:0;height:100%;margin:0;padding:0 var(--uai-spacing-xs, 0.5rem);border:0;border-radius:inherit;outline:none;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer}.select__button:disabled{cursor:not-allowed}.select__icon,.select__feedback,.select__arrow{-ms-flex:none;flex:none}.select__icon{color:var(--input-content)}.select__feedback{color:var(--input-feedback)}.select__value{-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.select__value--placeholder{color:var(--uai-content-placeholder, #adb4b8)}:host(.uai-select--disabled) .select__value--placeholder{color:var(--uai-content-disabled, #848e94)}.select__arrow{-webkit-transition:-webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:-webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.select__arrow{-webkit-transition:none;transition:none}}:host(.uai-select--open) .select__arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.list{--uai-overlay-gap:var(--uai-spacing-2xs, 0.25rem);--uai-overlay-margin:var(--uai-spacing-xs, 0.5rem);position:fixed;inset:auto;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;border:0;overflow:auto;background:transparent;color:inherit;opacity:0;-webkit-transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete;transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete}.list:not(.uai-overlay--open){display:none}.list.uai-overlay--open{opacity:1}@starting-style{.list.uai-overlay--open{opacity:0}}@media (prefers-reduced-motion: reduce){.list{-webkit-transition:none;transition:none}}.list{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-2xs, 0.25rem);max-height:calc(5 * var(--uai-control-height-medium, 2.5rem));padding:var(--uai-spacing-xs, 0.5rem);border:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);border-radius:var(--uai-radius-lg, 0.75rem);background:var(--uai-surface-paper, #ffffff);-webkit-box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));color:var(--uai-content-primary, #242729);list-style:none;outline:none}@media (forced-colors: active){.list{border-color:CanvasText}}.option{display:-ms-flexbox;display:flex;-ms-flex:none;flex:none;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);padding:var(--uai-spacing-xs, 0.5rem);border-radius:var(--uai-radius-lg, 0.75rem);cursor:pointer}.option[aria-selected=true]{background:var(--uai-overlay-selected, rgba(0, 0, 0, 0.06))}.option--active{background:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08))}.option--disabled{color:var(--uai-content-disabled, #848e94);cursor:not-allowed}@media (forced-colors: active){.option--active{outline:var(--uai-border-width-thick, 2px) solid Highlight}}.option__icon{-ms-flex:none;flex:none}.option__label{-ms-flex:1 1 auto;flex:1 1 auto;min-width:0}`;

const SIZES = ['short', 'medium'];
let instances = 0;
const sameValue = (a, b) => a !== null && a !== undefined && b !== null && b !== undefined && String(a) === String(b);
const normalize = (text) => String(text)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
const UaiSelect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uaiChange = createEvent(this, "uaiChange");
        this.uaiCancel = createEvent(this, "uaiCancel");
        this.uaiFocus = createEvent(this, "uaiFocus");
        this.uaiBlur = createEvent(this, "uaiBlur");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this.isOpen = false;
        this.activeIndex = -1;
        this.slottedOptions = [];
        this.validationDanger = false;
        this.disabledByForm = false;
        this.defaultValue = null;
        this.selectId = `uai-select-${++instances}`;
        /** Chosen value. Use it to preselect or control the field; pair with the uaiChange event; avoid values missing from the options. */
        this.value = null;
        /** Options as an array of { value, label, icon?, disabled? }. Use for dynamic lists; takes precedence over uai-select-option children; avoid JSON strings. */
        this.options = null;
        /** Visible label above the field. Use a short noun; pair with helperMessage; avoid it only when aria-label names the field. */
        this.label = '';
        /** Text shown while no option is chosen. Use a short prompt such as "Selecione"; avoid repeating the label. */
        this.placeholder = '';
        /** Optional UAI icon name before the chosen label. Use to reinforce the topic; avoid decorative icons. */
        this.icon = '';
        /** Field height. Use medium by default and short in dense areas such as table toolbars and pagination. */
        this.size = 'medium';
        /** Requires a chosen option before the form is valid. Use with a visible label; pair with requiredErrorMessage. */
        this.required = false;
        /** Prevents opening and changing the value. Use when the choice is unavailable; pair with explanatory text elsewhere. */
        this.disabled = false;
        /** Error state. Use together with errorMessage; avoid color alone to explain the problem. */
        this.danger = false;
        /** Success state. Use after a valid choice; pair with successMessage. */
        this.success = false;
        /** Helper text below the field. Use for format or context; avoid long text. */
        this.helperMessage = '';
        /** Error text below the field while danger is set. Use to say how to fix the choice. */
        this.errorMessage = '';
        /** Success text below the field while success is set. */
        this.successMessage = '';
        /** Error text when required and nothing is chosen. Use a short instruction. */
        this.requiredErrorMessage = 'Selecione uma opção.';
        /** Accessible name when there is no visible label. Use a short noun; avoid repeating the placeholder. */
        this.ariaLabel = null;
        /** Test selector on the button. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dataTest = null;
        this.onOverlayClose = (reason) => {
            if (this.isOpen)
                this.isOpen = false;
            if (reason === 'escape' || reason === 'outside')
                this.uaiCancel.emit();
            this.showValidation(true);
        };
        this.onButtonClick = () => {
            if (this.isOpen)
                this.closeList();
            else
                this.openList();
        };
        this.onButtonKeyDown = (event) => {
            if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                event.preventDefault();
                this.openList();
            }
        };
        this.onListKeyDown = (event) => {
            const last = this.items.length - 1;
            const keys = {
                ArrowDown: () => this.moveActive(this.activeIndex + 1, 1),
                ArrowUp: () => this.moveActive(this.activeIndex - 1, -1),
                Home: () => this.moveActive(0, 1),
                End: () => this.moveActive(last, -1),
                Enter: () => this.select(this.activeIndex),
                ' ': () => this.select(this.activeIndex),
            };
            if (keys[event.key]) {
                event.preventDefault();
                keys[event.key]();
            }
            else if (event.key === 'Tab') {
                this.closeList();
            }
            else if (event.key.length === 1 && /\p{L}/u.test(event.key)) {
                event.preventDefault();
                this.typeAhead(event.key);
            }
        };
        this.onFocus = () => {
            this.uaiFocus.emit();
        };
        this.onBlur = () => {
            if (!this.isOpen)
                this.showValidation(true);
            this.uaiBlur.emit();
        };
    }
    /** Opens the list. Use for imperative control; pair with close; avoid calling it while disabled. */
    async open() {
        this.openList();
    }
    /** Closes the list. Use for imperative control; pair with open. */
    async close() {
        this.closeList();
    }
    valueChanged() {
        this.syncFormValue();
    }
    requiredChanged() {
        this.syncValidity();
    }
    componentWillLoad() {
        var _a, _b;
        this.defaultValue = (_a = this.value) !== null && _a !== void 0 ? _a : null;
        this.readSlotted();
        if (typeof ((_b = this.internals) === null || _b === void 0 ? void 0 : _b.setFormValue) === 'function') {
            this.formControl = new UaiFormControl({
                internals: this.internals,
                defaultValue: () => (this.defaultValue === null ? null : String(this.defaultValue)),
                onReset: () => {
                    this.validationDanger = false;
                    this.value = this.defaultValue;
                },
                onDisabledChange: (disabled) => {
                    queueMicrotask(() => {
                        var _a, _b;
                        const formDisabled = (_b = (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.disabled) !== null && _b !== void 0 ? _b : disabled;
                        if (!this.disabled && this.disabledByForm !== formDisabled)
                            this.disabledByForm = formDisabled;
                        if (formDisabled)
                            this.closeList();
                    });
                },
            });
            this.syncFormValue();
        }
    }
    componentDidLoad() {
        if (this.button && this.list) {
            this.overlay = new UaiOverlay({
                trigger: this.button,
                panel: this.list,
                matchTriggerWidth: true,
                onClose: this.onOverlayClose,
            });
        }
        if (typeof MutationObserver !== 'undefined') {
            this.observer = new MutationObserver(() => this.readSlotted());
            this.observer.observe(this.el, {
                childList: true,
                subtree: true,
                characterData: true,
                attributes: true,
                attributeFilter: ['value', 'disabled', 'icon'],
            });
        }
    }
    componentDidRender() {
        var _a, _b, _c, _d;
        if (this.isOpen && this.overlay && !this.overlay.isOpen) {
            this.overlay.open();
            (_a = this.list) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
        }
        if (this.isOpen) {
            (_b = this.overlay) === null || _b === void 0 ? void 0 : _b.update();
            (_d = (_c = this.activeOption()) === null || _c === void 0 ? void 0 : _c.scrollIntoView) === null || _d === void 0 ? void 0 : _d.call(_c, { block: 'nearest' });
        }
        this.syncValidity();
    }
    disconnectedCallback() {
        var _a, _b;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = this.observer) === null || _b === void 0 ? void 0 : _b.disconnect();
    }
    formResetCallback() {
        var _a;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.reset();
    }
    formDisabledCallback(disabled) {
        var _a;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setDisabled(disabled);
    }
    formStateRestoreCallback(state) {
        if (typeof state === 'string')
            this.value = state;
    }
    readSlotted() {
        const children = Array.from(this.el.querySelectorAll('uai-select-option'));
        this.slottedOptions = children.map((child) => {
            var _a;
            return ({
                value: (_a = child.getAttribute('value')) !== null && _a !== void 0 ? _a : '',
                label: (child.textContent || '').trim(),
                icon: child.getAttribute('icon') || undefined,
                disabled: child.hasAttribute('disabled') && child.getAttribute('disabled') !== 'false',
            });
        });
    }
    get items() {
        return Array.isArray(this.options) && this.options.length ? this.options : this.slottedOptions;
    }
    get sizeValue() {
        if (SIZES.includes(this.size))
            return this.size;
        return 'medium';
    }
    get isDisabled() {
        return this.disabled || this.disabledByForm;
    }
    get selectedIndex() {
        return this.items.findIndex((item) => sameValue(item.value, this.value));
    }
    syncFormValue() {
        var _a;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValue(this.value === null || this.value === undefined ? null : String(this.value));
    }
    validityFlags() {
        const empty = this.value === null || this.value === undefined || this.value === '';
        return this.required && empty
            ? { invalid: true, message: this.requiredErrorMessage }
            : { invalid: false, message: '' };
    }
    syncValidity() {
        var _a;
        const { invalid, message } = this.validityFlags();
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValidity({ valueMissing: invalid }, message, this.button);
    }
    showValidation(show) {
        const danger = show && this.validityFlags().invalid;
        if (danger !== this.validationDanger)
            this.validationDanger = danger;
    }
    activeOption() {
        var _a;
        return ((_a = this.list) === null || _a === void 0 ? void 0 : _a.querySelector('.option--active')) || null;
    }
    firstEnabled(from, step) {
        const items = this.items;
        for (let index = from; index >= 0 && index < items.length; index += step) {
            if (!items[index].disabled)
                return index;
        }
        return -1;
    }
    openList() {
        if (this.isDisabled || this.isOpen || !this.items.length)
            return;
        const selected = this.selectedIndex;
        this.activeIndex = selected >= 0 ? selected : this.firstEnabled(0, 1);
        this.isOpen = true;
    }
    closeList(reason = 'api') {
        var _a;
        if (!this.isOpen)
            return;
        this.isOpen = false;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.close(reason);
    }
    select(index) {
        var _a;
        const item = this.items[index];
        if (!item || item.disabled)
            return;
        this.closeList();
        (_a = this.button) === null || _a === void 0 ? void 0 : _a.focus();
        if (sameValue(item.value, this.value))
            return;
        this.value = item.value;
        this.showValidation(true);
        this.uaiChange.emit({ value: item.value, label: item.label });
    }
    moveActive(target, step) {
        const next = this.firstEnabled(Math.min(Math.max(target, 0), this.items.length - 1), step);
        if (next >= 0)
            this.activeIndex = next;
    }
    // Activates the next enabled option whose label starts with the typed letter, cycling from the active one.
    typeAhead(letter) {
        const items = this.items;
        const target = normalize(letter);
        for (let step = 1; step <= items.length; step++) {
            const index = (this.activeIndex + step) % items.length;
            if (!items[index].disabled && normalize(items[index].label).startsWith(target)) {
                this.activeIndex = index;
                return;
            }
        }
    }
    renderOptions() {
        if (!this.isOpen)
            return null;
        return this.items.map((item, index) => {
            const selected = sameValue(item.value, this.value);
            return (h("li", { id: `${this.selectId}-option-${index}`, key: `${item.value}`, role: "option", part: "select-option", "aria-selected": selected ? 'true' : 'false', "aria-disabled": item.disabled ? 'true' : null, class: { option: true, 'option--active': index === this.activeIndex, 'option--disabled': !!item.disabled }, onClick: () => this.select(index), onPointerMove: () => {
                    if (!item.disabled && this.activeIndex !== index)
                        this.activeIndex = index;
                } }, item.icon && h("uai-icon", { class: "option__icon", name: item.icon, size: "medium" }), h("uai-typo", { class: "option__label", variant: "body-base", tag: "span", margin: false }, item.label)));
        });
    }
    render() {
        const disabled = this.isDisabled;
        const validity = this.validityFlags();
        const validationText = this.validationDanger && validity.invalid ? validity.message : '';
        const invalid = this.danger || !!validationText;
        const success = this.success && !invalid;
        const message = this.danger
            ? this.errorMessage || validationText
            : validationText
                ? validationText
                : success
                    ? this.successMessage
                    : this.helperMessage;
        const selected = this.items[this.selectedIndex];
        return (h(Host, { key: 'bda75fb2516806be31430d834a7a52ceccb2b7a0', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-select--size-${this.sizeValue}`]: true,
                'uai-select--danger': invalid,
                'uai-select--success': success,
                'uai-select--disabled': disabled,
                'uai-select--open': this.isOpen,
                'uai-select--filled': !!selected,
            } }, h("div", { key: '6afec536e344dcf56916fae3f29f159a0c3364c6', class: "select" }, this.label && (h("label", { key: '1e8fb5e7687104049b46130c446f4ef847fe0aa6', class: "select__label", for: this.selectId }, h("uai-typo", { key: '82f0c9e599475644e957d94d2f6785c3fea6ed45', variant: "caption", bold: "semibold", tag: "span", margin: false }, this.label))), h("div", { key: '7a64e4d83295e984aa7bcaa548c6bdc8b27d9b4c', class: "select__control", part: "select-container" }, h("button", { key: 'e857a0b710e67b44d1b42d08f8fe66b4f1a0f90d', id: this.selectId, type: "button", ref: (button) => (this.button = button), class: "select__button", part: "select-button", role: "combobox", "aria-haspopup": "listbox", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-controls": `${this.selectId}-list`, "aria-label": this.ariaLabel || null, "aria-invalid": invalid ? 'true' : null, "aria-required": this.required ? 'true' : null, "aria-describedby": message ? `${this.selectId}-message` : null, disabled: disabled, "data-test": this.dataTest, onClick: this.onButtonClick, onKeyDown: this.onButtonKeyDown, onFocus: this.onFocus, onBlur: this.onBlur }, this.icon && h("uai-icon", { key: '2fd46057ea752db6da23ae1bab713efd12634666', class: "select__icon", name: this.icon, size: "medium" }), h("uai-typo", { key: '18494f5f85ca2774afca5271e6b0d7181fd03d74', class: { select__value: true, 'select__value--placeholder': !selected }, variant: "body-base", tag: "span", margin: false }, selected ? selected.label : this.placeholder), invalid && h("uai-icon", { key: '46262885000b0449193e27a4c2fa53306fc4b284', class: "select__feedback", name: "error", theme: "outline", size: "medium" }), success && h("uai-icon", { key: '170e45474f70b9f1bcbd23855c7b0fc0074997b2', class: "select__feedback", name: "checkball", theme: "solid", size: "medium" }), h("uai-icon", { key: 'b15bfe69026b7964ebde3e30d6400b507328bd56', class: "select__arrow", name: "arrow-down", size: "medium" }))), message && (h("div", { key: 'cb18f2e5d9ea6e8be7018d9350d2eb7051b6b36f', id: `${this.selectId}-message`, class: "select__message", part: "select-message" }, h("uai-typo", { key: '912a15c06579331319b3e91c5faf6ae902125c8a', variant: "caption", tag: "span", margin: false }, message)))), h("ul", { key: 'f6966e522fa0dbf83c32e10947f16fbd0c6dc4ac', id: `${this.selectId}-list`, ref: (list) => (this.list = list), class: "list", part: "select-list", role: "listbox", tabindex: "-1", "aria-label": this.label || this.ariaLabel || null, "aria-activedescendant": this.isOpen && this.activeIndex >= 0 ? `${this.selectId}-option-${this.activeIndex}` : null, onKeyDown: this.onListKeyDown }, this.renderOptions()), h("slot", { key: '76f12b1b17a55dbc694ed9cd86ac05976a986636' })));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "value": [{
                "valueChanged": 0
            }],
        "required": [{
                "requiredChanged": 0
            }]
    }; }
};
UaiSelect.style = uaiSelectCss();

export { UaiSelect as uai_select };
