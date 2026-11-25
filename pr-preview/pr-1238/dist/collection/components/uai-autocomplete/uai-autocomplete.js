import { Build, Host, h, } from "@stencil/core";
import { warnDeprecated, warnLegacyValue, warnOnce } from "../../utils/deprecation";
import { UaiFormControl } from "../../utils/uai-form-control";
import { UaiOverlay } from "../../utils/uai-overlay";
import { autocompleteTerms, normalize, } from "./uai-autocomplete-interface";
const TAG = 'uai-autocomplete';
const SIZES = ['short', 'medium'];
const LANGUAGES = ['pt_BR', 'en_US', 'es_ES'];
const SELECTION_TYPES = ['single', 'multiple'];
const POSITIONS = ['auto', 'top', 'bottom'];
// The "select all" row, first in the list of a multiple choice.
const ALL = '\u0000all';
let instances = 0;
/**
 * Field to choose from a long list by typing to search it. With selectionType "single" (default) the person picks one
 * option and the field shows its label; with "multiple" the options are checkboxes and the field shows how many are
 * checked. It takes part in native forms: give it a name to submit the value (each checked value in a multiple
 * choice). Use it for lists that are too long to scan, such as people, teams or cities. Pair with a visible label.
 * Avoid it for short lists without search (use uai-select) or for free text (use uai-input with suggestions).
 * Wrap the app in UaiThemeProvider.
 *
 * @part input-container - The field box with border, icon, the search input and the buttons.
 * @part input - The native text input used to search.
 * @part input__message - The helper, error or success message below the field.
 * @part clear-button - The button that clears the choice.
 * @part list - The floating list of options.
 * @part option - Each option in the list.
 */
export class UaiAutocomplete {
    constructor() {
        this.isOpen = false;
        this.isFocused = false;
        /** The text typed to search, or null while the field shows the choice. */
        this.term = null;
        this.activeIndex = -1;
        this.checkedValues = [];
        this.validationDanger = false;
        this.disabledByForm = false;
        this.defaultValue = null;
        this.defaultChecked = [];
        this.inputId = `uai-autocomplete-${++instances}`;
        /**
         * One option or many. Can be one of: 'single' (default), 'multiple'. With 'multiple', options are checkboxes and
         * uaiMultiselectedChange tells the checked ones.
         */
        this.selectionType = 'single';
        /** Title shown above the options of a multiple choice. */
        this.selectionTitle = '';
        /** With selectionType "multiple": if true (default), the first row checks or unchecks all options. */
        this.selectedAll = true;
        /** Label shown above the field. Without a visible label, set aria-label. */
        this.label = '';
        /** Text shown while the field is empty, such as "Buscar pessoa". Do not use it as the label. */
        this.placeholder = '';
        /** UaiIcon name shown before the text, for example "search". */
        this.icon = '';
        /** Height of the field. Can be one of: 'short', 'medium' (default). */
        this.size = 'medium';
        /** Side of the list. Can be one of: 'auto' (default, where there is room), 'top', 'bottom'. */
        this.optionsPosition = 'auto';
        /** If true, the clear button shows only while the field has the focus. */
        this.clearIconOnFocus = false;
        /** If true, the list shows that the options are loading. Pair with uaiInput to search on a server. */
        this.loading = false;
        /** Language of the default texts. Can be one of: 'pt_BR' (default), 'en_US', 'es_ES'. */
        this.language = 'pt_BR';
        /** If true, the form is invalid while nothing is chosen. Pair with requiredErrorMessage. */
        this.required = false;
        /** If true, the field cannot be used and is left out of the form data. */
        this.disabled = false;
        /** If true, shows the error state and errorMessage. Has priority over success. */
        this.danger = false;
        /** If true, shows the success state and successMessage. */
        this.success = false;
        /** Message below the field that helps to fill it. */
        this.helperMessage = '';
        /** Message below the field while danger is true. */
        this.errorMessage = '';
        /** Message below the field while success is true. */
        this.successMessage = '';
        /** Accessible name of the field when there is no visible label. */
        this.ariaLabel = null;
        /** Data test id, set on the native input. */
        this.dataTest = null;
        this.onOverlayClose = (reason) => {
            var _a;
            if (this.isOpen)
                this.isOpen = false;
            if (reason !== 'api')
                this.endSearch();
            if (reason === 'escape')
                (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
            if (reason === 'outside')
                this.showValidation(true);
        };
        // ---- events --------------------------------------------------------------------------------
        this.onInput = (event) => {
            this.term = event.target.value;
            if (!this.isOpen)
                this.openList();
            this.activeIndex = this.firstEnabled(0, 1);
            this.uaiInput.emit(event);
        };
        this.onKeyDown = (event) => {
            var _a, _b;
            if (event.isComposing)
                return;
            if (!this.isOpen) {
                if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                    event.preventDefault();
                    this.openList();
                }
                else if (event.key === 'Enter') {
                    (_b = (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.form) === null || _b === void 0 ? void 0 : _b.requestSubmit();
                }
                return;
            }
            const keys = {
                ArrowDown: () => this.moveActive(this.activeIndex + 1, 1),
                ArrowUp: () => this.moveActive(this.activeIndex - 1, -1),
                Enter: () => this.pick(this.activeIndex),
            };
            if (keys[event.key]) {
                event.preventDefault();
                keys[event.key]();
            }
            else if (event.key === 'Tab') {
                this.closeList();
            }
        };
        this.onFocus = () => {
            this.isFocused = true;
            this.uaiFocus.emit();
        };
        this.onBlur = () => {
            this.isFocused = false;
            this.closeList();
            this.showValidation(true);
            this.uaiBlur.emit();
        };
        // A click on the field opens the list; on the arrow, it opens or closes it.
        this.onControlClick = (event) => {
            var _a, _b, _c;
            if (this.isDisabled)
                return;
            const target = event.target;
            if ((_a = target === null || target === void 0 ? void 0 : target.closest) === null || _a === void 0 ? void 0 : _a.call(target, '.clear'))
                return;
            if (((_b = target === null || target === void 0 ? void 0 : target.closest) === null || _b === void 0 ? void 0 : _b.call(target, '.arrow')) && this.isOpen) {
                this.closeList();
                return;
            }
            (_c = this.nativeInput) === null || _c === void 0 ? void 0 : _c.focus();
            this.openList();
        };
        this.onClear = (event) => {
            var _a;
            event.stopPropagation();
            this.clearChoice();
            (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
        };
    }
    /** Moves the focus to the field. */
    async setFocus() {
        var _a;
        (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
    }
    /** Opens the list. */
    async open() {
        this.openList();
    }
    /** Closes the list. */
    async close() {
        this.closeList();
    }
    /** Unchecks every option of a multiple choice, or clears the choice of a single one. */
    async cleanMultipleSelection() {
        this.clearChoice();
    }
    optionsChanged() {
        if (this.isMultiple)
            this.checkedValues = this.items.filter((item) => item.checked).map((item) => item.value);
        this.syncFormValue();
    }
    valueChanged() {
        this.syncFormValue();
    }
    // Native form validation of the host (submit or checkValidity) shows the error state.
    onInvalid() {
        this.showValidation(true);
    }
    positionChanged() {
        var _a;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.setPlacement({ side: this.side });
    }
    componentWillLoad() {
        var _a, _b;
        if (this.isMultiple)
            this.checkedValues = this.items.filter((item) => item.checked).map((item) => item.value);
        this.defaultValue = (_a = this.value) !== null && _a !== void 0 ? _a : null;
        this.defaultChecked = [...this.checkedValues];
        if (typeof ((_b = this.internals) === null || _b === void 0 ? void 0 : _b.setFormValue) === 'function') {
            this.formControl = new UaiFormControl({
                internals: this.internals,
                defaultValue: () => this.formValue(this.defaultValue, this.defaultChecked),
                onReset: () => {
                    this.validationDanger = false;
                    this.term = null;
                    this.value = this.defaultValue;
                    this.checkedValues = [...this.defaultChecked];
                    this.syncFormValue();
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
        if (this.searchOnlyTitle !== undefined)
            warnDeprecated(TAG, 'searchOnlyTitle', 'The search always uses the label.');
        if (Build.isDev && !this.label && !this.ariaLabel) {
            warnOnce(TAG, 'accessible-name', 'Fields without a visible label require an aria-label.');
        }
    }
    componentDidLoad() {
        if (this.control && this.list) {
            this.overlay = new UaiOverlay({
                trigger: this.control,
                panel: this.list,
                matchTriggerWidth: true,
                side: this.side,
                onClose: this.onOverlayClose,
            });
        }
    }
    componentDidRender() {
        var _a, _b, _c, _d;
        if (this.isOpen && this.overlay && !this.overlay.isOpen)
            this.overlay.open();
        if (this.isOpen) {
            (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.update();
            (_d = (_c = (_b = this.list) === null || _b === void 0 ? void 0 : _b.querySelector('.option--active')) === null || _c === void 0 ? void 0 : _c.scrollIntoView) === null || _d === void 0 ? void 0 : _d.call(_c, { block: 'nearest' });
        }
        this.syncValidity();
    }
    disconnectedCallback() {
        var _a;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.destroy();
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
        else if (state instanceof FormData && this.name)
            this.checkedValues = state.getAll(this.name).map(String);
    }
    // ---- options -------------------------------------------------------------------------------
    get items() {
        let options = this.options;
        if (typeof options === 'string') {
            try {
                options = JSON.parse(options);
            }
            catch (_a) {
                warnOnce(TAG, 'options', 'options must be an array or a JSON array of { value, label }.');
                return [];
            }
        }
        if (!Array.isArray(options))
            return [];
        return options
            .filter((option) => option && option.value !== undefined && option.value !== null)
            .map((option) => { var _a; return (Object.assign(Object.assign({}, option), { value: String(option.value), label: String((_a = option.label) !== null && _a !== void 0 ? _a : option.value) })); });
    }
    get filtered() {
        var _a;
        const term = normalize((_a = this.term) !== null && _a !== void 0 ? _a : '').trim();
        if (!term)
            return this.items;
        return this.items.filter((item) => normalize(item.label).includes(term));
    }
    // The rows the arrows go through: "select all" (multiple, without a search) and the options found.
    get rows() {
        const all = this.isMultiple && this.selectedAll && !this.term ? [{ value: ALL, label: this.terms.allSelected }] : [];
        return [...all, ...this.filtered];
    }
    get isMultiple() {
        if (SELECTION_TYPES.includes(this.selectionType))
            return this.selectionType === 'multiple';
        warnLegacyValue(TAG, 'selectionType', this.selectionType, 'single');
        return false;
    }
    get languageValue() {
        if (LANGUAGES.includes(this.language))
            return this.language;
        warnLegacyValue(TAG, 'language', this.language, 'pt_BR');
        return 'pt_BR';
    }
    get terms() {
        return autocompleteTerms(this.languageValue);
    }
    get sizeValue() {
        if (SIZES.includes(this.size))
            return this.size;
        warnLegacyValue(TAG, 'size', this.size, 'medium');
        return 'medium';
    }
    get side() {
        if (!POSITIONS.includes(this.optionsPosition)) {
            warnLegacyValue(TAG, 'optionsPosition', this.optionsPosition, 'auto');
            return undefined;
        }
        return this.optionsPosition === 'auto' ? undefined : this.optionsPosition;
    }
    get isDisabled() {
        return this.disabled || this.disabledByForm;
    }
    get chosen() {
        if (this.value === null || this.value === undefined || this.value === '')
            return undefined;
        return this.items.find((item) => item.value === String(this.value));
    }
    get checkedOptions() {
        return this.items.filter((item) => this.checkedValues.includes(item.value));
    }
    get hasChoice() {
        return this.isMultiple ? this.checkedValues.length > 0 : !!this.chosen;
    }
    // What the field shows while nobody searches: the chosen label, or how many are checked.
    get summary() {
        var _a, _b;
        if (!this.isMultiple)
            return (_b = (_a = this.chosen) === null || _a === void 0 ? void 0 : _a.label) !== null && _b !== void 0 ? _b : '';
        const checked = this.checkedOptions;
        if (checked.length === 1)
            return checked[0].label;
        return checked.length ? this.terms.selected(checked.length) : '';
    }
    // ---- form ----------------------------------------------------------------------------------
    formValue(value, checked) {
        if (!this.isMultiple)
            return value === null || value === undefined || value === '' ? null : String(value);
        if (!this.name || !checked.length)
            return null;
        const data = new FormData();
        checked.forEach((item) => data.append(this.name, item));
        return data;
    }
    syncFormValue() {
        var _a, _b;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValue(this.formValue((_b = this.value) !== null && _b !== void 0 ? _b : null, this.checkedValues));
    }
    validityFlags() {
        return this.required && !this.hasChoice
            ? { invalid: true, message: this.requiredErrorMessage || this.terms.required }
            : { invalid: false, message: '' };
    }
    syncValidity() {
        var _a;
        const { invalid, message } = this.validityFlags();
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValidity({ valueMissing: invalid }, message, this.nativeInput);
    }
    showValidation(show) {
        const danger = show && this.validityFlags().invalid;
        if (danger !== this.validationDanger)
            this.validationDanger = danger;
    }
    // ---- list ----------------------------------------------------------------------------------
    firstEnabled(from, step) {
        const rows = this.rows;
        for (let index = from; index >= 0 && index < rows.length; index += step) {
            if (!rows[index].disabled)
                return index;
        }
        return -1;
    }
    openList() {
        if (this.isDisabled || this.isOpen)
            return;
        const rows = this.rows;
        const chosen = this.isMultiple ? -1 : rows.findIndex((row) => { var _a; return row.value === ((_a = this.chosen) === null || _a === void 0 ? void 0 : _a.value); });
        this.activeIndex = chosen >= 0 ? chosen : this.firstEnabled(0, 1);
        this.isOpen = true;
    }
    closeList(reason = 'api') {
        var _a;
        if (!this.isOpen)
            return;
        this.isOpen = false;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.close(reason);
        this.endSearch();
    }
    // Leaving the search: an emptied single choice is cleared; otherwise the field shows the choice again.
    endSearch() {
        if (this.term === '' && !this.isMultiple && this.chosen)
            this.choose(null);
        this.term = null;
    }
    choose(option) {
        var _a;
        const value = option ? option.value : null;
        if (((_a = this.value) !== null && _a !== void 0 ? _a : null) === value)
            return;
        this.value = value;
        this.uaiChange.emit({ value });
        if (option)
            this.uaiSelectedChange.emit({ value: option.value, label: option.label });
        this.showValidation(true);
    }
    setChecked(values) {
        this.checkedValues = values;
        this.syncFormValue();
        this.uaiMultiselectedChange.emit({ value: this.checkedOptions.map((item) => (Object.assign(Object.assign({}, item), { checked: true }))) });
        this.showValidation(true);
    }
    toggleAll() {
        const enabled = this.items.filter((item) => !item.disabled).map((item) => item.value);
        const all = enabled.every((value) => this.checkedValues.includes(value));
        const kept = this.checkedValues.filter((value) => !enabled.includes(value));
        this.setChecked(all ? kept : [...kept, ...enabled]);
    }
    pick(index) {
        const row = this.rows[index];
        if (!row || row.disabled)
            return;
        this.activeIndex = index;
        if (!this.isMultiple) {
            this.choose(row);
            this.term = null;
            this.closeList();
            return;
        }
        if (row.value === ALL)
            return this.toggleAll();
        const checked = this.checkedValues.includes(row.value);
        this.setChecked(checked ? this.checkedValues.filter((value) => value !== row.value) : [...this.checkedValues, row.value]);
    }
    clearChoice() {
        if (this.isDisabled)
            return;
        if (this.isMultiple) {
            if (this.checkedValues.length)
                this.setChecked([]);
        }
        else {
            this.choose(null);
        }
        this.term = null;
        this.uaiCancel.emit({ value: '' });
    }
    moveActive(target, step) {
        const rows = this.rows;
        if (!rows.length)
            return;
        const next = this.firstEnabled(Math.min(Math.max(target, 0), rows.length - 1), step);
        if (next >= 0)
            this.activeIndex = next;
    }
    // ---- render --------------------------------------------------------------------------------
    optionId(index) {
        return `${this.inputId}-option-${index}`;
    }
    renderRows() {
        if (!this.isOpen)
            return null;
        const terms = this.terms;
        const rows = this.rows;
        const status = (text) => (h("li", { class: "status", role: "presentation" }, h("uai-typo", { variant: "body-base", tag: "span", margin: false }, text)));
        if (this.loading)
            return status(terms.loading);
        const title = this.isMultiple && this.selectionTitle && (h("li", { class: "title", role: "presentation" }, h("uai-typo", { variant: "caption", bold: "semibold", tag: "span", margin: false }, this.selectionTitle)));
        if (!this.filtered.length)
            return [title, status(terms.empty)];
        const enabled = this.items.filter((item) => !item.disabled);
        const allChecked = enabled.length > 0 && enabled.every((item) => this.checkedValues.includes(item.value));
        const someChecked = enabled.some((item) => this.checkedValues.includes(item.value));
        return [
            title,
            ...rows.map((row, index) => {
                var _a;
                const isAll = row.value === ALL;
                const selected = isAll
                    ? allChecked
                    : this.isMultiple
                        ? this.checkedValues.includes(row.value)
                        : row.value === ((_a = this.chosen) === null || _a === void 0 ? void 0 : _a.value);
                const mixed = isAll && !allChecked && someChecked;
                return (h("li", { id: this.optionId(index), key: row.value, role: "option", part: "option", "aria-selected": selected ? 'true' : 'false', "aria-disabled": row.disabled ? 'true' : null, class: {
                        option: true,
                        'option--active': index === this.activeIndex,
                        'option--disabled': !!row.disabled,
                        'option--all': isAll,
                    }, onClick: () => this.pick(index), onPointerMove: () => {
                        if (!row.disabled && this.activeIndex !== index)
                            this.activeIndex = index;
                    } }, this.isMultiple && (h("span", { class: { check: true, 'check--checked': selected, 'check--mixed': mixed }, "aria-hidden": "true" }, (selected || mixed) && h("uai-icon", { name: mixed ? 'less' : 'check', size: "small" }))), row.icon && h("uai-icon", { class: "option__icon", name: row.icon, size: "medium" }), h("uai-typo", { class: "option__label", variant: "body-base", tag: "span", margin: false }, row.label), !this.isMultiple && selected && h("uai-icon", { class: "option__chosen", name: "check", size: "medium" })));
            }),
        ];
    }
    render() {
        var _a;
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
        const listId = `${this.inputId}-list`;
        // A multiple choice searches from an empty field; a single one shows the choice until the person types.
        const shown = (_a = this.term) !== null && _a !== void 0 ? _a : (this.isMultiple && this.isFocused ? '' : this.summary);
        const showClear = this.hasChoice && !disabled && (!this.clearIconOnFocus || this.isFocused);
        return (h(Host, { key: 'f4e9c6c1bd7cd1a889fb5dcb4b3f74b075de78fd', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-autocomplete--size-${this.sizeValue}`]: true,
                'uai-autocomplete--danger': invalid,
                'uai-autocomplete--success': success,
                'uai-autocomplete--disabled': disabled,
                'uai-autocomplete--open': this.isOpen,
            } }, h("div", { key: '23bd493d167c4b67ef8baa5b2fac616bb91d9332', class: "input" }, this.label && (h("label", { key: 'fc5334d6d73042519260b950d7fb92ac41283440', class: "input__label", for: this.inputId }, h("uai-typo", { key: '315b93e22e60d749b93a5795b0faadddc206ee4f', variant: "caption", bold: "semibold", tag: "span", margin: false }, this.label))), h("div", { key: '6fe728e0c5a2936d6e0e5a5cd714e86ae4a3ed2f', class: "input__control", part: "input-container", ref: (control) => (this.control = control), onClick: this.onControlClick }, this.icon && h("uai-icon", { key: '76e13d21bbf35b6d215c941b3c0b638b0350a40a', class: "input__icon", name: this.icon, size: "medium" }), h("input", { key: '6696857094a0066f27b42a3d4416c874a36b4ee3', id: this.inputId, ref: (input) => (this.nativeInput = input), class: "input__native", part: "input", type: "text", role: "combobox", autocomplete: "off", "aria-autocomplete": "list", "aria-haspopup": "listbox", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-controls": listId, "aria-activedescendant": this.isOpen && this.activeIndex >= 0 ? this.optionId(this.activeIndex) : null, "aria-label": this.label ? null : this.ariaLabel, "aria-invalid": invalid ? 'true' : null, "aria-required": this.required ? 'true' : null, "aria-describedby": message ? `${this.inputId}-message` : null, value: shown, placeholder: this.placeholder, disabled: disabled, "data-test": this.dataTest, onInput: this.onInput, onKeyDown: this.onKeyDown, onFocus: this.onFocus, onBlur: this.onBlur }), invalid && h("uai-icon", { key: 'db28767c8462b97d1e12fee445f7d291785cbfd3', class: "input__feedback", name: "error", theme: "outline", size: "medium" }), success && h("uai-icon", { key: 'aaa9d6ea595b67078bcb96ffc278a733d9ed279e', class: "input__feedback", name: "checkball", theme: "solid", size: "medium" }), showClear && (h("button", { key: '11ad5ae45fa36d87599594fd3424b70fce1c4a0c', type: "button", class: "clear", part: "clear-button", "aria-label": this.terms.clear, onPointerDown: (event) => event.preventDefault(), onClick: this.onClear }, h("uai-icon", { key: '08c82f879c77bc9d7b9972e76534133292a56c7f', name: "close", size: "small" }))), h("uai-icon", { key: 'c35c6dc149226d3c598c6e29b260ec8e0b13d6c1', class: "arrow", name: "arrow-down", size: "medium", "aria-hidden": "true" })), message && (h("div", { key: 'aca0c05b6d90430018b614cd6de9ace5b46a645c', id: `${this.inputId}-message`, class: "input__message", part: "input__message" }, h("uai-typo", { key: '80b4c664e579b09ca2e74b2a5c575587ef1dd1c8', variant: "caption", tag: "span", margin: false }, message)))), h("ul", { key: 'b69b22e2d7898774f1a77360c08bb35b6b8a440a', id: listId, ref: (list) => (this.list = list), class: "list", part: "list", role: "listbox", "aria-label": this.label || this.ariaLabel || null, "aria-multiselectable": this.isMultiple ? 'true' : null, onPointerDown: (event) => event.preventDefault() }, this.renderRows())));
    }
    static get is() { return "uai-autocomplete"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-autocomplete.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-autocomplete.css"]
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
                    "text": "Name of the value in the submitted form data. Without it, the field is not submitted."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "name"
            },
            "options": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | UaiAutocompleteOption[]",
                    "resolved": "UaiAutocompleteOption[] | string",
                    "references": {
                        "UaiAutocompleteOption": {
                            "location": "import",
                            "path": "./uai-autocomplete-interface",
                            "id": "src/components/uai-autocomplete/uai-autocomplete-interface.ts::UaiAutocompleteOption",
                            "referenceLocation": "UaiAutocompleteOption"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The options, as an array of { value, label, icon?, disabled?, checked? } or, in HTML, a JSON array\n(options='[{\"value\": \"sp\", \"label\": \"S\u00E3o Paulo\"}]'). With selectionType \"multiple\", checked marks the options\nchecked: change the array to control them."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "options"
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string | null",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Chosen value, with selectionType \"single\". Use it to preselect or control the field; pair with uaiChange. Typing\nonly searches: the value changes when the person picks or clears."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value"
            },
            "selectionType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiAutocompleteSelectionType",
                    "resolved": "\"multiple\" | \"single\"",
                    "references": {
                        "UaiAutocompleteSelectionType": {
                            "location": "import",
                            "path": "./uai-autocomplete-interface",
                            "id": "src/components/uai-autocomplete/uai-autocomplete-interface.ts::UaiAutocompleteSelectionType",
                            "referenceLocation": "UaiAutocompleteSelectionType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "One option or many. Can be one of: 'single' (default), 'multiple'. With 'multiple', options are checkboxes and\nuaiMultiselectedChange tells the checked ones."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "selection-type",
                "defaultValue": "'single'"
            },
            "selectionTitle": {
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
                    "text": "Title shown above the options of a multiple choice."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "selection-title",
                "defaultValue": "''"
            },
            "selectedAll": {
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
                    "text": "With selectionType \"multiple\": if true (default), the first row checks or unchecks all options."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "selected-all",
                "defaultValue": "true"
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
                    "text": "Label shown above the field. Without a visible label, set aria-label."
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
                    "text": "Text shown while the field is empty, such as \"Buscar pessoa\". Do not use it as the label."
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
                    "text": "UaiIcon name shown before the text, for example \"search\"."
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
                    "original": "UaiAutocompleteSize",
                    "resolved": "\"medium\" | \"short\"",
                    "references": {
                        "UaiAutocompleteSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-autocomplete/uai-autocomplete.tsx",
                            "id": "src/components/uai-autocomplete/uai-autocomplete.tsx::UaiAutocompleteSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Height of the field. Can be one of: 'short', 'medium' (default)."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "size",
                "defaultValue": "'medium'"
            },
            "optionsPosition": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiAutocompleteOptionsPosition",
                    "resolved": "\"auto\" | \"bottom\" | \"top\"",
                    "references": {
                        "UaiAutocompleteOptionsPosition": {
                            "location": "import",
                            "path": "./uai-autocomplete-interface",
                            "id": "src/components/uai-autocomplete/uai-autocomplete-interface.ts::UaiAutocompleteOptionsPosition",
                            "referenceLocation": "UaiAutocompleteOptionsPosition"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Side of the list. Can be one of: 'auto' (default, where there is room), 'top', 'bottom'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "options-position",
                "defaultValue": "'auto'"
            },
            "clearIconOnFocus": {
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
                    "text": "If true, the clear button shows only while the field has the focus."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "clear-icon-on-focus",
                "defaultValue": "false"
            },
            "loading": {
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
                    "text": "If true, the list shows that the options are loading. Pair with uaiInput to search on a server."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "loading",
                "defaultValue": "false"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiAutocompleteLanguage",
                    "resolved": "\"en_US\" | \"es_ES\" | \"pt_BR\"",
                    "references": {
                        "UaiAutocompleteLanguage": {
                            "location": "import",
                            "path": "./uai-autocomplete-interface",
                            "id": "src/components/uai-autocomplete/uai-autocomplete-interface.ts::UaiAutocompleteLanguage",
                            "referenceLocation": "UaiAutocompleteLanguage"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Language of the default texts. Can be one of: 'pt_BR' (default), 'en_US', 'es_ES'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'pt_BR'"
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
                    "text": "If true, the form is invalid while nothing is chosen. Pair with requiredErrorMessage."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required",
                "defaultValue": "false"
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
                    "text": "Message shown when required and nothing is chosen. Without it, the default text of the language is shown."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required-error-message"
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
                    "text": "If true, the field cannot be used and is left out of the form data."
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
                    "text": "If true, shows the error state and errorMessage. Has priority over success."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "danger",
                "defaultValue": "false"
            },
            "success": {
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
                    "text": "If true, shows the success state and successMessage."
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
                    "text": "Message below the field that helps to fill it."
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
                    "text": "Message below the field while danger is true."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error-message",
                "defaultValue": "''"
            },
            "successMessage": {
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
                    "text": "Message below the field while success is true."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "success-message",
                "defaultValue": "''"
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
                    "text": "Accessible name of the field when there is no visible label."
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
                    "text": "Data test id, set on the native input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            },
            "searchOnlyTitle": {
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "Options have only a label, which the search always uses. Has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "search-only-title"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "isFocused": {},
            "term": {},
            "activeIndex": {},
            "checkedValues": {},
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
                    "text": "Emitted when the chosen value changes, by picking or clearing (selectionType \"single\"). detail: { value }."
                },
                "complexType": {
                    "original": "UaiAutocompleteChange",
                    "resolved": "UaiAutocompleteChange",
                    "references": {
                        "UaiAutocompleteChange": {
                            "location": "import",
                            "path": "./uai-autocomplete-interface",
                            "id": "src/components/uai-autocomplete/uai-autocomplete-interface.ts::UaiAutocompleteChange",
                            "referenceLocation": "UaiAutocompleteChange"
                        }
                    }
                }
            }, {
                "method": "uaiSelectedChange",
                "name": "uaiSelectedChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the person picks an option (selectionType \"single\"). detail: { value, label }."
                },
                "complexType": {
                    "original": "UaiAutocompleteSelectedChange",
                    "resolved": "UaiAutocompleteSelectedChange",
                    "references": {
                        "UaiAutocompleteSelectedChange": {
                            "location": "import",
                            "path": "./uai-autocomplete-interface",
                            "id": "src/components/uai-autocomplete/uai-autocomplete-interface.ts::UaiAutocompleteSelectedChange",
                            "referenceLocation": "UaiAutocompleteSelectedChange"
                        }
                    }
                }
            }, {
                "method": "uaiMultiselectedChange",
                "name": "uaiMultiselectedChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the checked options change (selectionType \"multiple\"). detail: { value } with the checked options."
                },
                "complexType": {
                    "original": "UaiAutocompleteMultiselectedChange",
                    "resolved": "UaiAutocompleteMultiselectedChange",
                    "references": {
                        "UaiAutocompleteMultiselectedChange": {
                            "location": "import",
                            "path": "./uai-autocomplete-interface",
                            "id": "src/components/uai-autocomplete/uai-autocomplete-interface.ts::UaiAutocompleteMultiselectedChange",
                            "referenceLocation": "UaiAutocompleteMultiselectedChange"
                        }
                    }
                }
            }, {
                "method": "uaiInput",
                "name": "uaiInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted on every keystroke in the search with the native InputEvent."
                },
                "complexType": {
                    "original": "InputEvent",
                    "resolved": "InputEvent",
                    "references": {
                        "InputEvent": {
                            "location": "global",
                            "id": "global::InputEvent"
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
                    "text": "Emitted when the choice is cleared with the clear button. detail: { value: '' }."
                },
                "complexType": {
                    "original": "UaiAutocompleteChange",
                    "resolved": "UaiAutocompleteChange",
                    "references": {
                        "UaiAutocompleteChange": {
                            "location": "import",
                            "path": "./uai-autocomplete-interface",
                            "id": "src/components/uai-autocomplete/uai-autocomplete-interface.ts::UaiAutocompleteChange",
                            "referenceLocation": "UaiAutocompleteChange"
                        }
                    }
                }
            }, {
                "method": "uaiFocus",
                "name": "uaiFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the field receives focus."
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
                    "text": "Emitted when the field loses focus."
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
            "setFocus": {
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
                    "text": "Moves the focus to the field.",
                    "tags": []
                }
            },
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
                    "text": "Opens the list.",
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
                    "text": "Closes the list.",
                    "tags": []
                }
            },
            "cleanMultipleSelection": {
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
                    "text": "Unchecks every option of a multiple choice, or clears the choice of a single one.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "options",
                "methodName": "optionsChanged"
            }, {
                "propName": "value",
                "methodName": "valueChanged"
            }, {
                "propName": "optionsPosition",
                "methodName": "positionChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "invalid",
                "method": "onInvalid",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
