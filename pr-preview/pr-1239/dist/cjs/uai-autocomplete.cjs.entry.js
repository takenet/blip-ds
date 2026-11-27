'use strict';

var index = require('./index-JW9Yq-qX.js');
var deprecation = require('./deprecation-DQqFZBv-.js');
var uaiFormControl = require('./uai-form-control-B_Rr3WRq.js');
var uaiOverlay = require('./uai-overlay-DRE75ayC.js');

const TERMS = {
    pt_BR: {
        selected: (count) => `${count} selecionados`,
        allSelected: 'Selecionar todos',
        loading: 'Carregando…',
        empty: 'Nenhum resultado',
        clear: 'Limpar',
        required: 'Selecione uma opção.',
    },
    en_US: {
        selected: (count) => `${count} selected`,
        allSelected: 'Select all',
        loading: 'Loading…',
        empty: 'No results',
        clear: 'Clear',
        required: 'Select an option.',
    },
    es_ES: {
        selected: (count) => `${count} seleccionados`,
        allSelected: 'Seleccionar todos',
        loading: 'Cargando…',
        empty: 'Sin resultados',
        clear: 'Limpiar',
        required: 'Seleccione una opción.',
    },
};
const autocompleteTerms = (language) => TERMS[language];
/** Text without accents and in lower case, so "São" matches "sao". */
const normalize = (text) => String(text !== null && text !== void 0 ? text : '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

const uaiAutocompleteCss = () => `:host{--input-height:var(--uai-control-height-medium, 2.5rem);--input-background:var(--uai-surface-paper, #ffffff);--input-border:var(--uai-border-input, #adb4b8);--input-content:var(--uai-content-primary, #242729);--input-label:var(--uai-content-primary, #242729);--input-message:var(--uai-content-secondary, #5f676d);--input-feedback:var(--input-content);--input-halo:color-mix(     in srgb,     var(--uai-border-ring, #242729) calc(var(--uai-opacity-focus-ring, 0.3) * 100%),     transparent   );display:block;width:var(--uai-autocomplete-width, 100%)}:host(.uai-autocomplete--size-short){--input-height:var(--uai-control-height-short, 2rem)}:host(.uai-autocomplete--danger){--input-border:var(--uai-feedback-error, #cf0022);--input-label:var(--uai-feedback-error, #cf0022);--input-message:var(--uai-feedback-error, #cf0022);--input-feedback:var(--uai-feedback-error, #cf0022)}:host(.uai-autocomplete--success){--input-border:var(--uai-feedback-success, #3da329);--input-message:var(--uai-feedback-success, #3da329);--input-feedback:var(--uai-feedback-success, #3da329)}:host(.uai-autocomplete--disabled){--input-background:var(--uai-surface-muted, #f2f3f3);--input-border:var(--uai-border-default, #e4e6e7);--input-content:var(--uai-content-disabled, #848e94);--input-label:var(--uai-content-disabled, #848e94);--input-message:var(--uai-content-disabled, #848e94);--input-feedback:var(--uai-content-disabled, #848e94)}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-2xs, 0.25rem)}.input__label,.input__message,.option,.status,.title{--uai-typo-color:currentColor}.input__label{color:var(--input-label)}.input__message{padding:0 var(--uai-spacing-xs, 0.5rem);color:var(--input-message)}.input__control{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);height:var(--input-height);padding:0 var(--uai-spacing-xs, 0.5rem);border:var(--uai-border-width-default, 1px) solid var(--input-border);border-radius:var(--uai-radius-lg, 0.75rem);background-color:var(--input-background);color:var(--input-content);cursor:text;-webkit-transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.input__control{-webkit-transition:none;transition:none}}.input__control:focus-within,:host(.uai-autocomplete--open) .input__control{--input-border:var(--uai-border-ring, #242729);-webkit-box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo);box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo)}@media (forced-colors: active){.input__control:focus-within{-webkit-box-shadow:none;box-shadow:none;outline:var(--uai-border-width-thick, 2px) solid CanvasText}}:host(.uai-autocomplete--danger) .input__control:focus-within,:host(.uai-autocomplete--danger.uai-autocomplete--open) .input__control{--input-border:var(--uai-feedback-error, #cf0022)}:host(:not(.uai-autocomplete--disabled):not(.uai-autocomplete--danger):not(.uai-autocomplete--success)) .input__control:hover:not(:focus-within){--input-border:var(--uai-content-secondary, #5f676d)}:host(.uai-autocomplete--disabled) .input__control{cursor:not-allowed}.input__icon,.input__feedback,.arrow{-ms-flex:none;flex:none}.input__icon{color:var(--input-content)}.input__feedback{color:var(--input-feedback)}.arrow{cursor:pointer;-webkit-transition:-webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:-webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.arrow{-webkit-transition:none;transition:none}}:host(.uai-autocomplete--open) .arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.input__native{-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0;height:100%;margin:0;padding:0;border:0;outline:none;background:transparent;color:inherit;font-family:var(--uai-font-family-sans, Figtree), sans-serif;font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--uai-body-base-line-height, 1.375rem);text-overflow:ellipsis}.input__native::-webkit-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::-moz-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native:-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native:disabled{cursor:not-allowed;opacity:1;-webkit-text-fill-color:currentColor}.input__native:disabled::-webkit-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::-moz-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled:-ms-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::-ms-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::placeholder{color:var(--uai-content-disabled, #848e94)}.clear{display:-ms-inline-flexbox;display:inline-flex;-ms-flex:none;flex:none;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0;padding:var(--uai-spacing-2xs, 0.25rem);border:0;border-radius:var(--uai-radius-md, 0.5rem);background:transparent;color:var(--input-content);cursor:pointer;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.clear{-webkit-transition:none;transition:none}}.clear:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.clear:hover{background:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08))}@media (forced-colors: active){.clear{border:var(--uai-border-width-default, 1px) solid ButtonText}}.list{--uai-overlay-gap:var(--uai-spacing-2xs, 0.25rem);--uai-overlay-margin:var(--uai-spacing-xs, 0.5rem);position:fixed;inset:auto;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;border:0;overflow:auto;background:transparent;color:inherit;opacity:0;-webkit-transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete;transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete}.list:not(.uai-overlay--open){display:none}.list.uai-overlay--open{opacity:1}@starting-style{.list.uai-overlay--open{opacity:0}}@media (prefers-reduced-motion: reduce){.list{-webkit-transition:none;transition:none}}.list{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-2xs, 0.25rem);max-height:calc(6 * var(--uai-control-height-medium, 2.5rem));margin:0;padding:var(--uai-spacing-xs, 0.5rem);overflow-y:auto;border:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);border-radius:var(--uai-radius-lg, 0.75rem);background:var(--uai-surface-paper, #ffffff);-webkit-box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));color:var(--uai-content-primary, #242729);list-style:none}@media (forced-colors: active){.list{border-color:CanvasText}}.title{padding:var(--uai-spacing-2xs, 0.25rem) var(--uai-spacing-xs, 0.5rem);color:var(--uai-content-secondary, #5f676d)}.status{padding:var(--uai-spacing-xs, 0.5rem);color:var(--uai-content-secondary, #5f676d)}.option{display:-ms-flexbox;display:flex;-ms-flex:none;flex:none;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);padding:var(--uai-spacing-xs, 0.5rem);border-radius:var(--uai-radius-lg, 0.75rem);cursor:pointer}.option[aria-selected=true]:not(.option--all){background:var(--uai-overlay-selected, rgba(0, 0, 0, 0.06))}.option--active{background:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08))}.option--all{border-bottom:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);border-radius:0}.option--disabled{color:var(--uai-content-disabled, #848e94);cursor:not-allowed}@media (forced-colors: active){.option--active{outline:var(--uai-border-width-thick, 2px) solid Highlight}}.option__icon,.option__chosen{-ms-flex:none;flex:none}.option__label{-ms-flex:1 1 auto;flex:1 1 auto;min-width:0}.option__chosen{color:var(--uai-action-primary-default, #242729)}.check{display:-ms-inline-flexbox;display:inline-flex;-ms-flex:none;flex:none;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:var(--uai-sizing-md, 1.25rem);height:var(--uai-sizing-md, 1.25rem);border:var(--uai-border-width-default, 1px) solid var(--uai-border-input, #adb4b8);border-radius:var(--uai-radius-md, 0.5rem);background:var(--uai-surface-paper, #ffffff);color:var(--uai-action-primary-foreground, #ffffff);-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.check{-webkit-transition:none;transition:none}}.check--checked,.check--mixed{border-color:var(--uai-action-primary-default, #242729);background:var(--uai-action-primary-default, #242729)}@media (forced-colors: active){.check{border-color:CanvasText}}.option--disabled .check{border-color:var(--uai-border-default, #e4e6e7);background:var(--uai-surface-muted, #f2f3f3)}`;

const TAG = 'uai-autocomplete';
const SIZES = ['short', 'medium'];
const LANGUAGES = ['pt_BR', 'en_US', 'es_ES'];
const SELECTION_TYPES = ['single', 'multiple'];
const POSITIONS = ['auto', 'top', 'bottom'];
// The "select all" row, first in the list of a multiple choice.
const ALL = '\u0000all';
let instances = 0;
const UaiAutocomplete = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.uaiChange = index.createEvent(this, "uaiChange");
        this.uaiSelectedChange = index.createEvent(this, "uaiSelectedChange");
        this.uaiMultiselectedChange = index.createEvent(this, "uaiMultiselectedChange");
        this.uaiInput = index.createEvent(this, "uaiInput");
        this.uaiCancel = index.createEvent(this, "uaiCancel");
        this.uaiFocus = index.createEvent(this, "uaiFocus");
        this.uaiBlur = index.createEvent(this, "uaiBlur");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
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
            this.formControl = new uaiFormControl.UaiFormControl({
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
    }
    componentDidLoad() {
        if (this.control && this.list) {
            this.overlay = new uaiOverlay.UaiOverlay({
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
                deprecation.warnOnce(TAG, 'options', 'options must be an array or a JSON array of { value, label }.');
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
        return false;
    }
    get languageValue() {
        if (LANGUAGES.includes(this.language))
            return this.language;
        return 'pt_BR';
    }
    get terms() {
        return autocompleteTerms(this.languageValue);
    }
    get sizeValue() {
        if (SIZES.includes(this.size))
            return this.size;
        return 'medium';
    }
    get side() {
        if (!POSITIONS.includes(this.optionsPosition)) {
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
        const status = (text) => (index.h("li", { class: "status", role: "presentation" }, index.h("uai-typo", { variant: "body-base", tag: "span", margin: false }, text)));
        if (this.loading)
            return status(terms.loading);
        const title = this.isMultiple && this.selectionTitle && (index.h("li", { class: "title", role: "presentation" }, index.h("uai-typo", { variant: "caption", bold: "semibold", tag: "span", margin: false }, this.selectionTitle)));
        if (!this.filtered.length)
            return [title, status(terms.empty)];
        const enabled = this.items.filter((item) => !item.disabled);
        const allChecked = enabled.length > 0 && enabled.every((item) => this.checkedValues.includes(item.value));
        const someChecked = enabled.some((item) => this.checkedValues.includes(item.value));
        return [
            title,
            ...rows.map((row, index$1) => {
                var _a;
                const isAll = row.value === ALL;
                const selected = isAll
                    ? allChecked
                    : this.isMultiple
                        ? this.checkedValues.includes(row.value)
                        : row.value === ((_a = this.chosen) === null || _a === void 0 ? void 0 : _a.value);
                const mixed = isAll && !allChecked && someChecked;
                return (index.h("li", { id: this.optionId(index$1), key: row.value, role: "option", part: "option", "aria-selected": selected ? 'true' : 'false', "aria-disabled": row.disabled ? 'true' : null, class: {
                        option: true,
                        'option--active': index$1 === this.activeIndex,
                        'option--disabled': !!row.disabled,
                        'option--all': isAll,
                    }, onClick: () => this.pick(index$1), onPointerMove: () => {
                        if (!row.disabled && this.activeIndex !== index$1)
                            this.activeIndex = index$1;
                    } }, this.isMultiple && (index.h("span", { class: { check: true, 'check--checked': selected, 'check--mixed': mixed }, "aria-hidden": "true" }, (selected || mixed) && index.h("uai-icon", { name: mixed ? 'less' : 'check', size: "small" }))), row.icon && index.h("uai-icon", { class: "option__icon", name: row.icon, size: "medium" }), index.h("uai-typo", { class: "option__label", variant: "body-base", tag: "span", margin: false }, row.label), !this.isMultiple && selected && index.h("uai-icon", { class: "option__chosen", name: "check", size: "medium" })));
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
        return (index.h(index.Host, { key: 'f4e9c6c1bd7cd1a889fb5dcb4b3f74b075de78fd', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-autocomplete--size-${this.sizeValue}`]: true,
                'uai-autocomplete--danger': invalid,
                'uai-autocomplete--success': success,
                'uai-autocomplete--disabled': disabled,
                'uai-autocomplete--open': this.isOpen,
            } }, index.h("div", { key: '23bd493d167c4b67ef8baa5b2fac616bb91d9332', class: "input" }, this.label && (index.h("label", { key: 'fc5334d6d73042519260b950d7fb92ac41283440', class: "input__label", for: this.inputId }, index.h("uai-typo", { key: '315b93e22e60d749b93a5795b0faadddc206ee4f', variant: "caption", bold: "semibold", tag: "span", margin: false }, this.label))), index.h("div", { key: '6fe728e0c5a2936d6e0e5a5cd714e86ae4a3ed2f', class: "input__control", part: "input-container", ref: (control) => (this.control = control), onClick: this.onControlClick }, this.icon && index.h("uai-icon", { key: '76e13d21bbf35b6d215c941b3c0b638b0350a40a', class: "input__icon", name: this.icon, size: "medium" }), index.h("input", { key: '6696857094a0066f27b42a3d4416c874a36b4ee3', id: this.inputId, ref: (input) => (this.nativeInput = input), class: "input__native", part: "input", type: "text", role: "combobox", autocomplete: "off", "aria-autocomplete": "list", "aria-haspopup": "listbox", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-controls": listId, "aria-activedescendant": this.isOpen && this.activeIndex >= 0 ? this.optionId(this.activeIndex) : null, "aria-label": this.label ? null : this.ariaLabel, "aria-invalid": invalid ? 'true' : null, "aria-required": this.required ? 'true' : null, "aria-describedby": message ? `${this.inputId}-message` : null, value: shown, placeholder: this.placeholder, disabled: disabled, "data-test": this.dataTest, onInput: this.onInput, onKeyDown: this.onKeyDown, onFocus: this.onFocus, onBlur: this.onBlur }), invalid && index.h("uai-icon", { key: 'db28767c8462b97d1e12fee445f7d291785cbfd3', class: "input__feedback", name: "error", theme: "outline", size: "medium" }), success && index.h("uai-icon", { key: 'aaa9d6ea595b67078bcb96ffc278a733d9ed279e', class: "input__feedback", name: "checkball", theme: "solid", size: "medium" }), showClear && (index.h("button", { key: '11ad5ae45fa36d87599594fd3424b70fce1c4a0c', type: "button", class: "clear", part: "clear-button", "aria-label": this.terms.clear, onPointerDown: (event) => event.preventDefault(), onClick: this.onClear }, index.h("uai-icon", { key: '08c82f879c77bc9d7b9972e76534133292a56c7f', name: "close", size: "small" }))), index.h("uai-icon", { key: 'c35c6dc149226d3c598c6e29b260ec8e0b13d6c1', class: "arrow", name: "arrow-down", size: "medium", "aria-hidden": "true" })), message && (index.h("div", { key: 'aca0c05b6d90430018b614cd6de9ace5b46a645c', id: `${this.inputId}-message`, class: "input__message", part: "input__message" }, index.h("uai-typo", { key: '80b4c664e579b09ca2e74b2a5c575587ef1dd1c8', variant: "caption", tag: "span", margin: false }, message)))), index.h("ul", { key: 'b69b22e2d7898774f1a77360c08bb35b6b8a440a', id: listId, ref: (list) => (this.list = list), class: "list", part: "list", role: "listbox", "aria-label": this.label || this.ariaLabel || null, "aria-multiselectable": this.isMultiple ? 'true' : null, onPointerDown: (event) => event.preventDefault() }, this.renderRows())));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "options": [{
                "optionsChanged": 0
            }],
        "value": [{
                "valueChanged": 0
            }],
        "optionsPosition": [{
                "positionChanged": 0
            }]
    }; }
};
UaiAutocomplete.style = uaiAutocompleteCss();

exports.uai_autocomplete = UaiAutocomplete;
