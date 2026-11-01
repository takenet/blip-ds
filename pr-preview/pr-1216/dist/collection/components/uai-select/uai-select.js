import { Build, Host, h, } from "@stencil/core";
import { warnLegacyValue, warnOnce } from "../../utils/deprecation";
import { UaiFormControl } from "../../utils/uai-form-control";
import { UaiOverlay } from "../../utils/uai-overlay";
const TAG = 'uai-select';
const SIZES = ['short', 'medium'];
let instances = 0;
const sameValue = (a, b) => a !== null && a !== undefined && b !== null && b !== undefined && String(a) === String(b);
const normalize = (text) => String(text)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
/**
 * Field to choose one option from a list. Use it for 4 to about 15 mutually exclusive choices that do not fit as
 * radios: the field shows the chosen label and opens a listbox below or above it. It takes part in native forms:
 * give it a name to submit the chosen value. Pair with a visible label and UaiButton in forms. Avoid it for fewer than
 * 4 options, multiple choice, or searching a long list. Wrap the app in UaiThemeProvider.
 *
 * @slot - UaiSelectOption elements, when the options are written in markup instead of the options prop.
 * @part select-container - The field box with border, icon, chosen label and arrow.
 * @part select-button - The button that shows the chosen label and opens the list.
 * @part select-message - The helper, error or success message below the field.
 * @part select-list - The floating list of options.
 * @part select-option - Each option in the list.
 */
export class UaiSelect {
    constructor() {
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
        if (Build.isDev && !this.label && !this.ariaLabel) {
            warnOnce(TAG, 'accessible-name', 'Fields without a visible label require an aria-label.');
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
        warnLegacyValue(TAG, 'size', this.size, 'medium');
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
    static get is() { return "uai-select"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-select.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-select.css"]
        };
    }
    static get properties() {
        return {
            "name": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Name of the value in the submitted form data. Without it the field is not submitted."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "name"
            },
            "value": {
                "type": "any",
                "mutable": true,
                "complexType": {
                    "original": "UaiSelectValue | null",
                    "resolved": "number | string",
                    "references": {
                        "UaiSelectValue": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-select/uai-select.tsx",
                            "id": "src/components/uai-select/uai-select.tsx::UaiSelectValue"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Chosen value. Use it to preselect or control the field; pair with the uaiChange event; avoid values missing from the options."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "null"
            },
            "options": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "UaiSelectOptionData[]",
                    "resolved": "UaiSelectOptionData[]",
                    "references": {
                        "UaiSelectOptionData": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-select/uai-select.tsx",
                            "id": "src/components/uai-select/uai-select.tsx::UaiSelectOptionData"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Options as an array of { value, label, icon?, disabled? }. Use for dynamic lists; takes precedence over uai-select-option children; avoid JSON strings."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "null"
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
                    "text": "Visible label above the field. Use a short noun; pair with helperMessage; avoid it only when aria-label names the field."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "''"
            },
            "placeholder": {
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
                    "text": "Text shown while no option is chosen. Use a short prompt such as \"Selecione\"; avoid repeating the label."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder",
                "defaultValue": "''"
            },
            "icon": {
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
                    "text": "Optional UAI icon name before the chosen label. Use to reinforce the topic; avoid decorative icons."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "icon",
                "defaultValue": "''"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiSelectSize",
                    "resolved": "\"medium\" | \"short\"",
                    "references": {
                        "UaiSelectSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-select/uai-select.tsx",
                            "id": "src/components/uai-select/uai-select.tsx::UaiSelectSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Field height. Use medium by default and short in dense areas such as table toolbars and pagination."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "size",
                "defaultValue": "'medium'"
            },
            "required": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Requires a chosen option before the form is valid. Use with a visible label; pair with requiredErrorMessage."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required",
                "defaultValue": "false"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Prevents opening and changing the value. Use when the choice is unavailable; pair with explanatory text elsewhere."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "danger": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Error state. Use together with errorMessage; avoid color alone to explain the problem."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "danger",
                "defaultValue": "false"
            },
            "success": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Success state. Use after a valid choice; pair with successMessage."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "success",
                "defaultValue": "false"
            },
            "helperMessage": {
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
                    "text": "Helper text below the field. Use for format or context; avoid long text."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "helper-message",
                "defaultValue": "''"
            },
            "errorMessage": {
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
                    "text": "Error text below the field while danger is set. Use to say how to fix the choice."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error-message",
                "defaultValue": "''"
            },
            "successMessage": {
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
                    "text": "Success text below the field while success is set."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "success-message",
                "defaultValue": "''"
            },
            "requiredErrorMessage": {
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
                    "text": "Error text when required and nothing is chosen. Use a short instruction."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required-error-message",
                "defaultValue": "'Selecione uma op\u00E7\u00E3o.'"
            },
            "ariaLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Accessible name when there is no visible label. Use a short noun; avoid repeating the placeholder."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "aria-label",
                "defaultValue": "null"
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
                    "text": "Test selector on the button. Use for automation; pair with semantic queries. Avoid styling by it."
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
            "isOpen": {},
            "activeIndex": {},
            "slottedOptions": {},
            "validationDanger": {},
            "disabledByForm": {}
        };
    }
    static get events() {
        return [{
                "method": "uaiChange",
                "name": "uaiChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the person chooses an option. detail: { value, label }."
                },
                "complexType": {
                    "original": "UaiSelectChange",
                    "resolved": "UaiSelectChange",
                    "references": {
                        "UaiSelectChange": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-select/uai-select.tsx",
                            "id": "src/components/uai-select/uai-select.tsx::UaiSelectChange"
                        }
                    }
                }
            }, {
                "method": "uaiCancel",
                "name": "uaiCancel",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the list closes with Escape or a click outside, without choosing."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "uaiFocus",
                "name": "uaiFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the button receives focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "uaiBlur",
                "name": "uaiBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the button loses focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "open": {
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
                    "text": "Opens the list. Use for imperative control; pair with close; avoid calling it while disabled.",
                    "tags": []
                }
            },
            "close": {
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
                    "text": "Closes the list. Use for imperative control; pair with open.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "valueChanged"
            }, {
                "propName": "required",
                "methodName": "requiredChanged"
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
