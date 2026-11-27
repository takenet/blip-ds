'use strict';

var index = require('./index-JW9Yq-qX.js');
var uaiOverlay = require('./uai-overlay-DRE75ayC.js');

const uaiFilterBarCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.filter-bar{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;max-width:var(--uai-width-content, 69.5rem);padding:var(--uai-spacing-lg, 1.5rem);border:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);border-radius:var(--uai-radius-xl, 1rem);background-color:var(--uai-surface-paper, #ffffff);font-family:var(--uai-font-family-sans, Figtree)}.filter-bar__periods{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;max-width:100%;overflow:hidden;border:var(--uai-border-width-default, 1px) solid var(--uai-border-input, #adb4b8);border-radius:var(--uai-radius-lg, 0.75rem);background-color:var(--uai-surface-paper, #ffffff);-webkit-transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.filter-bar__periods{-webkit-transition:none;transition:none}}.filter-bar__periods:hover{border-color:var(--uai-content-secondary, #5f676d)}.filter-bar__period-btn{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;gap:var(--uai-spacing-xs, 0.5rem);-webkit-box-sizing:border-box;box-sizing:border-box;height:var(--uai-control-height-medium, 2.5rem);margin:0;padding:var(--uai-spacing-xs, 0.5rem) var(--uai-spacing-sm, 0.75rem);border:0;border-left:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);background-color:var(--uai-surface-paper, #ffffff);color:var(--uai-content-primary, #242729);font-family:var(--uai-font-family-sans, Figtree);font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-medium, 500);line-height:var(--uai-body-base-line-height, 1.375rem);letter-spacing:var(--uai-letter-spacing-normal, 0px);white-space:nowrap;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.filter-bar__period-btn{-webkit-transition:none;transition:none}}.filter-bar__period-btn:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.filter-bar__period-btn:first-child{border-left:0}.filter-bar__period-btn:hover{background-color:var(--uai-action-outline-hover, #f2f3f3)}.filter-bar__period-btn--selected{background-color:var(--uai-action-outline-pressed, #e4e6e7)}.filter-bar__search{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;min-width:calc(var(--uai-sizing-5xl, 4.5rem) * 2)}.filter-bar__search>${index.transformTag("uai-input")}{width:100%}.filter-bar__chips{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}.filter-bar__chips:empty{display:none}.filter-bar__chip{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;height:var(--uai-control-height-short, 2rem);border:var(--uai-border-width-default, 1px) solid var(--uai-border-input, #adb4b8);border-radius:var(--uai-radius-lg, 0.75rem);background-color:var(--uai-surface-background, #f2f3f3);overflow:hidden}.filter-bar__chip-edit,.filter-bar__chip-remove{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;gap:var(--uai-spacing-2xs, 0.25rem);height:100%;margin:0;border:0;background-color:transparent;color:var(--uai-content-primary, #242729);font-family:var(--uai-font-family-sans, Figtree);font-size:var(--uai-body-sm-font-size, 0.75rem);font-weight:var(--uai-font-weight-medium, 500);line-height:var(--uai-body-sm-line-height, 1.25rem);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.filter-bar__chip-edit,.filter-bar__chip-remove{-webkit-transition:none;transition:none}}.filter-bar__chip-edit:focus-visible,.filter-bar__chip-remove:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.filter-bar__chip-edit:hover,.filter-bar__chip-remove:hover{background-color:var(--uai-action-outline-hover, #f2f3f3)}.filter-bar__chip-edit{padding:0 var(--uai-spacing-xs, 0.5rem)}.filter-bar__chip-remove{padding:0 var(--uai-spacing-2xs, 0.25rem);border-left:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7)}.filter-bar__chip-count{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:var(--uai-sizing-md, 1.25rem);height:var(--uai-sizing-md, 1.25rem);padding:0 var(--uai-spacing-3xs, 0.125rem);border-radius:var(--uai-radius-full, 624.9375rem);background-color:var(--uai-action-primary-default, #242729);color:var(--uai-action-primary-foreground, #ffffff);font-size:var(--uai-caption-font-size, 0.75rem);font-weight:var(--uai-font-weight-semibold, 600);line-height:var(--uai-caption-line-height, 1.25rem)}.filter-bar__trigger{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0}.filter-panel{--uai-overlay-gap:var(--uai-spacing-2xs, 0.25rem);--uai-overlay-margin:var(--uai-spacing-xs, 0.5rem);position:fixed;inset:auto;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;border:0;overflow:auto;background:transparent;color:inherit;opacity:0;-webkit-transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete;transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete}.filter-panel:not(.uai-overlay--open){display:none}.filter-panel.uai-overlay--open{opacity:1}@starting-style{.filter-panel.uai-overlay--open{opacity:0}}@media (prefers-reduced-motion: reduce){.filter-panel{-webkit-transition:none;transition:none}}.filter-panel{z-index:var(--uai-layer-navigation-overlay, 300)}.filter-panel__surface{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;width:var(--uai-width-panel, 18rem);border:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);border-radius:var(--uai-radius-lg, 0.75rem);background-color:var(--uai-surface-paper, #ffffff);-webkit-box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));color:var(--uai-content-primary, #242729);font-family:var(--uai-font-family-sans, Figtree);overflow:hidden}.filter-panel__header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);padding:var(--uai-spacing-sm, 0.75rem) var(--uai-spacing-md, 1rem);border-bottom:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7)}.filter-panel__back{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:var(--uai-control-height-compact, 1.5rem);height:var(--uai-control-height-compact, 1.5rem);padding:0;border:0;border-radius:var(--uai-radius-md, 0.5rem);background-color:transparent;color:var(--uai-content-primary, #242729);cursor:pointer}.filter-panel__back:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.filter-panel__back:hover{background-color:var(--uai-action-outline-hover, #f2f3f3)}.filter-panel__title{font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-semibold, 600);line-height:var(--uai-body-base-line-height, 1.375rem)}.filter-panel__categories,.filter-panel__options{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-3xs, 0.125rem);padding:var(--uai-spacing-xs, 0.5rem)}.filter-panel__category-row{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;gap:var(--uai-spacing-xs, 0.5rem);width:100%;min-height:var(--uai-control-height-short, 2rem);padding:var(--uai-spacing-2xs, 0.25rem) var(--uai-spacing-xs, 0.5rem);border:0;border-radius:var(--uai-radius-md, 0.5rem);background-color:transparent;color:var(--uai-content-primary, #242729);font-family:var(--uai-font-family-sans, Figtree);font-size:var(--uai-body-base-font-size, 0.875rem);line-height:var(--uai-body-base-line-height, 1.375rem);cursor:pointer;text-align:start}.filter-panel__category-row:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.filter-panel__category-row:hover{background-color:var(--uai-action-outline-hover, #f2f3f3)}.filter-panel__category-meta{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-2xs, 0.25rem)}.filter-panel__search{padding:var(--uai-spacing-xs, 0.5rem) var(--uai-spacing-xs, 0.5rem) 0}.filter-panel__search-input{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:var(--uai-control-height-short, 2rem);padding:0 var(--uai-spacing-xs, 0.5rem);border:var(--uai-border-width-default, 1px) solid var(--uai-border-input, #adb4b8);border-radius:var(--uai-radius-md, 0.5rem);background-color:var(--uai-surface-paper, #ffffff);color:var(--uai-content-primary, #242729);font-family:var(--uai-font-family-sans, Figtree);font-size:var(--uai-body-base-font-size, 0.875rem);line-height:var(--uai-body-base-line-height, 1.375rem)}.filter-panel__search-input:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.filter-panel__option{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);min-height:var(--uai-control-height-short, 2rem);padding:0 var(--uai-spacing-xs, 0.5rem);border-radius:var(--uai-radius-md, 0.5rem);font-size:var(--uai-body-base-font-size, 0.875rem);line-height:var(--uai-body-base-line-height, 1.375rem);cursor:pointer}.filter-panel__option:hover{background-color:var(--uai-action-outline-hover, #f2f3f3)}.filter-panel__empty{margin:0;padding:var(--uai-spacing-sm, 0.75rem);color:var(--uai-content-secondary, #5f676d);font-size:var(--uai-body-sm-font-size, 0.75rem);line-height:var(--uai-body-sm-line-height, 1.25rem);text-align:center}.filter-panel__footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding:var(--uai-spacing-xs, 0.5rem) var(--uai-spacing-sm, 0.75rem);border-top:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7)}.filter-panel__footer-actions{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;gap:var(--uai-spacing-xs, 0.5rem);width:100%}.filter-panel__action{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:var(--uai-control-height-short, 2rem);padding:0 var(--uai-spacing-sm, 0.75rem);border-radius:var(--uai-radius-md, 0.5rem);font-family:var(--uai-font-family-sans, Figtree);font-size:var(--uai-body-sm-font-size, 0.75rem);font-weight:var(--uai-font-weight-medium, 500);line-height:var(--uai-body-sm-line-height, 1.25rem);cursor:pointer}.filter-panel__action:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.filter-panel__action:disabled{opacity:var(--uai-opacity-disabled, 0.5);cursor:not-allowed}.filter-panel__action--secondary{border:var(--uai-border-width-default, 1px) solid var(--uai-border-input, #adb4b8);background-color:var(--uai-surface-paper, #ffffff);color:var(--uai-content-primary, #242729)}.filter-panel__action--secondary:hover:not(:disabled){border-color:var(--uai-content-secondary, #5f676d)}.filter-panel__action--secondary:disabled{border-color:var(--uai-border-default, #e4e6e7)}.filter-panel__action--primary{border:var(--uai-border-width-default, 1px) solid transparent;background-color:var(--uai-action-primary-default, #242729);color:var(--uai-action-primary-foreground, #ffffff)}`;

const FILTER_I18N = {
    pt_BR: {
        periodGroupLabel: 'Período',
        searchPlaceholder: 'Buscar',
        filterButton: 'Filtrar',
        panelTitle: 'Filtrar',
        backLabel: 'Voltar para categorias',
        clearAll: 'Limpar tudo',
        clearCategory: 'Limpar',
        apply: 'Aplicar',
        emptyOptions: 'Nenhuma opção encontrada',
        editChip: (label) => `Editar filtro ${label}`,
        removeChip: (label) => `Remover filtro ${label}`,
        periods: [
            { id: 'custom', label: 'Personalizado', icon: 'calendar' },
            { id: 'yesterday', label: 'Ontem' },
            { id: 'today', label: 'Hoje' },
            { id: '7d', label: '7 dias' },
            { id: '15d', label: '15 dias' },
            { id: '30d', label: '30 dias' },
        ],
    },
    en_US: {
        periodGroupLabel: 'Period',
        searchPlaceholder: 'Search',
        filterButton: 'Filter',
        panelTitle: 'Filter',
        backLabel: 'Back to categories',
        clearAll: 'Clear all',
        clearCategory: 'Clear',
        apply: 'Apply',
        emptyOptions: 'No options found',
        editChip: (label) => `Edit filter ${label}`,
        removeChip: (label) => `Remove filter ${label}`,
        periods: [
            { id: 'custom', label: 'Custom', icon: 'calendar' },
            { id: 'yesterday', label: 'Yesterday' },
            { id: 'today', label: 'Today' },
            { id: '7d', label: '7 days' },
            { id: '15d', label: '15 days' },
            { id: '30d', label: '30 days' },
        ],
    },
    es_ES: {
        periodGroupLabel: 'Período',
        searchPlaceholder: 'Buscar',
        filterButton: 'Filtrar',
        panelTitle: 'Filtrar',
        backLabel: 'Volver a categorías',
        clearAll: 'Limpiar todo',
        clearCategory: 'Limpiar',
        apply: 'Aplicar',
        emptyOptions: 'No se encontraron opciones',
        editChip: (label) => `Editar filtro ${label}`,
        removeChip: (label) => `Quitar filtro ${label}`,
        periods: [
            { id: 'custom', label: 'Personalizado', icon: 'calendar' },
            { id: 'yesterday', label: 'Ayer' },
            { id: 'today', label: 'Hoy' },
            { id: '7d', label: '7 días' },
            { id: '15d', label: '15 días' },
            { id: '30d', label: '30 días' },
        ],
    },
};
function parseJsonOrValue(raw, fallback) {
    if (raw === undefined || raw === null)
        return fallback;
    if (typeof raw !== 'string')
        return raw;
    if (!raw.trim())
        return fallback;
    try {
        return JSON.parse(raw);
    }
    catch (_a) {
        return fallback;
    }
}
function normalizeOption(opt) {
    return typeof opt === 'string' ? { value: opt, label: opt } : opt;
}
const UaiFilterBar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.uaiPeriodChange = index.createEvent(this, "uaiPeriodChange");
        this.uaiSearchChange = index.createEvent(this, "uaiSearchChange");
        this.uaiFilterChange = index.createEvent(this, "uaiFilterChange");
        this.uaiFilterOpenChange = index.createEvent(this, "uaiFilterOpenChange");
        this.isOpen = false;
        this.activeCategoryId = null;
        this.optionQuery = '';
        this.pendingValues = [];
        this.internalFilters = {};
        /**
         * Shows or hides the segmented period preset group.
         * Use `false` when the page has no temporal dimension; pair with `periods`; avoid hiding both periods, search, and filters simultaneously.
         */
        this.showPeriods = true;
        /**
         * Identifier of the currently selected period preset.
         * Use in controlled or uncontrolled mode; pair with `onUaiPeriodChange`; avoid ids absent from `periods`.
         */
        this.selectedPeriod = '7d';
        /**
         * Shows or hides the built-in quick search input.
         * Use `true` to filter metrics or items by text; pair with `searchValue` and `onUaiSearchChange`; avoid duplicating another page-level search right below.
         */
        this.showSearch = true;
        /**
         * Current text value of the quick search input.
         * Use in controlled flows; pair with `onUaiSearchChange`; avoid mutating without updating consumer state.
         */
        this.searchValue = '';
        /**
         * Placeholder override for the quick search input.
         * Use to specify what can be searched (for example campaigns or flows); pair with `language`; avoid long instructions.
         */
        this.searchPlaceholder = '';
        /**
         * Filter categories and options displayed in the two-level popover, as an array or JSON string.
         * Use to let people filter by dimensions such as channel or campaign; pair with `appliedFilters` and `onUaiFilterChange`; avoid empty option lists.
         */
        this.categories = [];
        /**
         * Map of category ids to selected option values, as an object or JSON string.
         * Use to control or seed active filters; pair with `categories` and `onUaiFilterChange`; avoid unknown category keys.
         */
        this.appliedFilters = {};
        /**
         * Shows or hides the trailing filter button.
         * Use `false` when only period and search are needed; pair with `categories`; avoid hiding when `categories` are provided.
         */
        this.showFilterButton = true;
        /**
         * Label override for the filter trigger button.
         * Use concise verbs; pair with `language`; avoid icon-only triggers when space allows text.
         */
        this.filterButtonLabel = '';
        /**
         * Locale for built-in labels and default period presets (`pt_BR`, `en_US`, `es_ES`).
         * Use to match the application language; pair with label override props when needed; avoid mixing locales.
         */
        this.language = 'pt_BR';
        /**
         * Automation selector applied to the toolbar container.
         * Use in automated tests; pair with semantic role queries; avoid styling by this attribute.
         */
        this.dataTest = null;
        this.applyActiveCategory = () => {
            var _a;
            if (!this.activeCategoryId)
                return;
            const next = Object.assign({}, this.internalFilters);
            if (this.pendingValues.length > 0) {
                next[this.activeCategoryId] = [...this.pendingValues];
            }
            else {
                delete next[this.activeCategoryId];
            }
            this.internalFilters = next;
            this.uaiFilterChange.emit({ filters: Object.assign({}, next) });
            (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.close('api');
            this.focusAnchor();
        };
        this.clearActiveCategoryPending = () => {
            this.pendingValues = [];
        };
        this.clearAllFilters = () => {
            var _a;
            this.internalFilters = {};
            this.pendingValues = [];
            this.uaiFilterChange.emit({ filters: {} });
            (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.close('api');
            this.focusAnchor();
        };
        this.handleSearchInput = (event) => {
            var _a;
            const customDetail = event.detail;
            const targetValue = (_a = event.target) === null || _a === void 0 ? void 0 : _a.value;
            const nextValue = (customDetail === null || customDetail === void 0 ? void 0 : customDetail.value) !== undefined ? customDetail.value : targetValue !== null && targetValue !== void 0 ? targetValue : '';
            this.searchValue = nextValue;
            this.uaiSearchChange.emit({ value: nextValue });
        };
    }
    onAppliedFiltersChange() {
        this.syncInternalFilters();
    }
    componentWillLoad() {
        this.syncInternalFilters();
    }
    componentDidLoad() {
        this.setupOverlay();
    }
    disconnectedCallback() {
        var _a;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.destroy();
        this.overlay = undefined;
    }
    /** Opens the filter category popover anchored to the filter trigger. Use for programmatic focus flows; pair with `close()`; avoid opening when `categories` is empty. */
    async open() {
        this.openPopover(null, this.triggerWrapRef);
    }
    /** Closes the filter category popover if open. Use to dismiss programmatically; pair with `open()`; avoid skipping focus restoration on keyboard flows. */
    async close() {
        var _a;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.close('api');
    }
    resolveLanguage() {
        if (this.language === 'pt_BR' || this.language === 'en_US' || this.language === 'es_ES') {
            return this.language;
        }
        return 'pt_BR';
    }
    syncInternalFilters() {
        const parsed = parseJsonOrValue(this.appliedFilters, {});
        const next = {};
        if (parsed && typeof parsed === 'object') {
            Object.entries(parsed).forEach(([key, values]) => {
                if (Array.isArray(values) && values.length > 0) {
                    next[key] = [...values];
                }
            });
        }
        this.internalFilters = next;
    }
    get parsedCategories() {
        const list = parseJsonOrValue(this.categories, []);
        return Array.isArray(list) ? list : [];
    }
    get resolvedPeriods() {
        const i18n = FILTER_I18N[this.resolveLanguage()];
        if (this.periods === undefined || this.periods === null)
            return i18n.periods;
        const parsed = parseJsonOrValue(this.periods, i18n.periods);
        return Array.isArray(parsed) && parsed.length > 0 ? parsed : i18n.periods;
    }
    setupOverlay() {
        if (!this.triggerWrapRef || !this.panelRef || this.overlay)
            return;
        this.overlay = new uaiOverlay.UaiOverlay({
            trigger: this.triggerWrapRef,
            panel: this.panelRef,
            onClose: (reason) => {
                this.isOpen = false;
                this.activeCategoryId = null;
                this.optionQuery = '';
                this.pendingValues = [];
                this.uaiFilterOpenChange.emit({ open: false });
                if (reason === 'escape') {
                    this.focusAnchor();
                }
            },
        });
    }
    focusAnchor() {
        var _a, _b;
        const target = this.activeAnchorEl || this.triggerWrapRef;
        if (!target)
            return;
        const innerBtn = ((_a = target.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('button')) || target.querySelector('button') || target;
        (_b = innerBtn === null || innerBtn === void 0 ? void 0 : innerBtn.focus) === null || _b === void 0 ? void 0 : _b.call(innerBtn, { preventScroll: true });
    }
    openPopover(categoryId, anchor) {
        const categories = this.parsedCategories;
        if (!categories.length)
            return;
        this.setupOverlay();
        if (!this.overlay)
            return;
        if (this.isOpen && categoryId === null && this.activeAnchorEl === anchor) {
            this.overlay.close('api');
            return;
        }
        this.activeAnchorEl = anchor || this.triggerWrapRef;
        if (categoryId) {
            this.activeCategoryId = categoryId;
            this.pendingValues = [...(this.internalFilters[categoryId] || [])];
            this.optionQuery = '';
        }
        else {
            this.activeCategoryId = null;
            this.pendingValues = [];
            this.optionQuery = '';
        }
        if (!this.isOpen) {
            this.isOpen = true;
            this.overlay.open();
            this.uaiFilterOpenChange.emit({ open: true });
        }
        else {
            this.overlay.update();
        }
    }
    selectCategory(categoryId) {
        var _a;
        this.activeCategoryId = categoryId;
        this.pendingValues = [...(this.internalFilters[categoryId] || [])];
        this.optionQuery = '';
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.update();
    }
    togglePendingOption(value) {
        if (this.pendingValues.includes(value)) {
            this.pendingValues = this.pendingValues.filter((item) => item !== value);
        }
        else {
            this.pendingValues = [...this.pendingValues, value];
        }
    }
    removeCategoryChip(categoryId, event) {
        var _a;
        event.stopPropagation();
        const next = Object.assign({}, this.internalFilters);
        delete next[categoryId];
        this.internalFilters = next;
        this.uaiFilterChange.emit({ filters: Object.assign({}, next) });
        if (this.isOpen && this.activeCategoryId === categoryId) {
            (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.close('api');
        }
    }
    handlePeriodSelect(period) {
        this.selectedPeriod = period.id;
        this.uaiPeriodChange.emit({ id: period.id, label: period.label });
    }
    render() {
        var _a, _b;
        const lang = this.resolveLanguage();
        const i18n = FILTER_I18N[lang];
        const periods = this.resolvedPeriods;
        const categories = this.parsedCategories;
        const activeCategory = categories.find((cat) => cat.id === this.activeCategoryId) || null;
        const appliedCategoryEntries = categories.filter((cat) => (this.internalFilters[cat.id] || []).length > 0);
        const hasAnyApplied = Object.keys(this.internalFilters).length > 0;
        const resolvedSearchPlaceholder = ((_a = this.searchPlaceholder) === null || _a === void 0 ? void 0 : _a.trim()) || i18n.searchPlaceholder;
        const resolvedFilterLabel = ((_b = this.filterButtonLabel) === null || _b === void 0 ? void 0 : _b.trim()) || i18n.filterButton;
        const normalizedOptions = activeCategory
            ? activeCategory.options
                .map(normalizeOption)
                .filter((opt) => this.optionQuery.trim()
                ? opt.label.toLowerCase().includes(this.optionQuery.trim().toLowerCase())
                : true)
            : [];
        return (index.h(index.Host, { key: 'ed37b879c715c3056f85de3ef9aee53eb4133213' }, index.h("div", { key: 'f1d9f8e2c2e8c7c860b602c77e6ee809614b7a2d', class: "filter-bar", part: "bar", "data-test": this.dataTest }, this.showPeriods !== false && (index.h("slot", { key: '1948e864ebaed6c8ab61a37fc1457848e7cd6311', name: "period" }, index.h("div", { key: '6912d743fc473a4282e38f1f2ce1fc75b7204246', class: "filter-bar__periods", part: "periods", role: "group", "aria-label": i18n.periodGroupLabel }, periods.map((period) => {
            const selected = this.selectedPeriod === period.id;
            return (index.h("button", { key: period.id, type: "button", "aria-pressed": String(selected), onClick: () => this.handlePeriodSelect(period), class: {
                    'filter-bar__period-btn': true,
                    'filter-bar__period-btn--selected': selected,
                } }, period.icon && index.h("uai-icon", { name: period.icon, size: "medium" }), index.h("span", null, period.label)));
        })))), this.showSearch !== false && (index.h("div", { key: '4516c8c841a0538eca5c4fc3c563bb78e61fa0a6', class: "filter-bar__search", part: "search" }, index.h("slot", { key: 'dc754c1f35ae74874ba1b6069b703bf918d160d2', name: "search" }, index.h("uai-input", { key: '77b6107d1d50b3547e0b389bac89032ac839acbf', size: "medium", icon: "search", value: this.searchValue, placeholder: resolvedSearchPlaceholder, "aria-label": resolvedSearchPlaceholder, onUaiInput: this.handleSearchInput })))), index.h("div", { key: '69db545cb9438e1f0c6d6fcb68faa98d6bba976c', class: "filter-bar__chips", "aria-live": "polite" }, appliedCategoryEntries.map((cat) => {
            const selectedVals = this.internalFilters[cat.id] || [];
            return (index.h("div", { key: cat.id, class: "filter-bar__chip" }, index.h("button", { type: "button", class: "filter-bar__chip-edit", "aria-label": i18n.editChip(cat.label), "aria-expanded": String(this.isOpen && this.activeCategoryId === cat.id), onClick: (ev) => this.openPopover(cat.id, ev.currentTarget) }, index.h("span", { class: "filter-bar__chip-count" }, selectedVals.length), index.h("span", { class: "filter-bar__chip-label" }, cat.label)), index.h("button", { type: "button", class: "filter-bar__chip-remove", "aria-label": i18n.removeChip(cat.label), onClick: (ev) => this.removeCategoryChip(cat.id, ev) }, index.h("uai-icon", { name: "close", size: "x-small" }))));
        }), index.h("slot", { key: '3c9311f947bb11b4904de9adbc903a69bd7ddfba', name: "chips" })), this.showFilterButton !== false && (index.h("div", { key: 'f64406e1ac40dfebf2715abacd129c9652a19895', class: "filter-bar__trigger", ref: (el) => (this.triggerWrapRef = el) }, index.h("uai-button", { key: '08f292ae56fd669f2008fce63ed565c72c817c53', variant: "outline", color: "content", size: "medium", iconLeft: "filter", "aria-haspopup": categories.length > 0 ? 'dialog' : undefined, "aria-expanded": categories.length > 0 ? String(this.isOpen) : undefined, onUaiClick: () => this.openPopover(null, this.triggerWrapRef) }, resolvedFilterLabel))), index.h("slot", { key: 'e251c795ed8bc54d0e8d5509427dc8767645b115', name: "actions" })), index.h("div", { key: '3b11e5ef4bf2b270167d243776497a6fa5a814c5', ref: (el) => (this.panelRef = el), part: "panel", role: "dialog", "aria-label": activeCategory ? activeCategory.label : i18n.panelTitle, class: "filter-panel" }, index.h("div", { key: 'd20d724ec632368b3436383f12ab95f37f02c778', class: "filter-panel__surface" }, index.h("div", { key: 'f4317be8dbc93bf245827191190d3b5b9b00a3c0', class: "filter-panel__header" }, activeCategory && (index.h("button", { key: 'e46784b5f98fc3c78d71543a4529b97d3a50afb9', type: "button", class: "filter-panel__back", "aria-label": i18n.backLabel, onClick: () => {
                this.activeCategoryId = null;
                this.optionQuery = '';
            } }, index.h("uai-icon", { key: '10ba5da6bb43cdbd10365d3e2bdf07e9c97f60cb', name: "arrow-left", size: "small" }))), index.h("span", { key: '340413d6a8430b16e14c639f57d735c557329b61', class: "filter-panel__title" }, activeCategory ? activeCategory.label : i18n.panelTitle)), !activeCategory ? (index.h("div", { class: "filter-panel__categories" }, categories.map((cat) => {
            const count = (this.internalFilters[cat.id] || []).length;
            return (index.h("button", { key: cat.id, type: "button", class: "filter-panel__category-row", onClick: () => this.selectCategory(cat.id) }, index.h("span", { class: "filter-panel__category-name" }, cat.label), index.h("span", { class: "filter-panel__category-meta" }, count > 0 && index.h("span", { class: "filter-bar__chip-count" }, count), index.h("uai-icon", { name: "arrow-right", size: "x-small" }))));
        }))) : (index.h("div", { class: "filter-panel__options-wrap" }, activeCategory.search && (index.h("div", { class: "filter-panel__search" }, index.h("input", { type: "search", class: "filter-panel__search-input", value: this.optionQuery, placeholder: activeCategory.searchPlaceholder || i18n.searchPlaceholder, "aria-label": activeCategory.searchPlaceholder || i18n.searchPlaceholder, onInput: (ev) => (this.optionQuery = ev.target.value) }))), index.h("div", { class: "filter-panel__options", role: "group", "aria-label": activeCategory.label }, normalizedOptions.length === 0 ? (index.h("p", { class: "filter-panel__empty" }, i18n.emptyOptions)) : (normalizedOptions.map((opt) => {
            const checked = this.pendingValues.includes(opt.value);
            return (index.h("label", { key: opt.value, class: "filter-panel__option" }, index.h("input", { type: "checkbox", checked: checked, onChange: () => this.togglePendingOption(opt.value) }), index.h("span", null, opt.label)));
        }))))), index.h("div", { key: '071c9bb6fce50e79e0d6695e64cce3551fbfbb99', class: "filter-panel__footer" }, !activeCategory ? (index.h("button", { type: "button", class: "filter-panel__action filter-panel__action--secondary", disabled: !hasAnyApplied, onClick: this.clearAllFilters }, i18n.clearAll)) : (index.h("div", { class: "filter-panel__footer-actions" }, index.h("button", { type: "button", class: "filter-panel__action filter-panel__action--secondary", disabled: this.pendingValues.length === 0, onClick: this.clearActiveCategoryPending }, i18n.clearCategory), index.h("button", { type: "button", class: "filter-panel__action filter-panel__action--primary", onClick: this.applyActiveCategory }, i18n.apply))))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "appliedFilters": [{
                "onAppliedFiltersChange": 0
            }]
    }; }
};
UaiFilterBar.style = uaiFilterBarCss();

exports.uai_filter_bar = UaiFilterBar;
