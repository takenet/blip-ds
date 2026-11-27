import { Host, h } from "@stencil/core";
import { UaiOverlay } from "../../utils/uai-overlay";
import { warnLegacyValue } from "../../utils/deprecation";
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
/**
 * Composite analytical filter toolbar combining period presets, quick search, active filter chips, and a two-level category popover.
 * Use at the top of analytical pages and dashboards; pair with `UaiCard`, `UaiLineChart`, and `UaiBarChart`;
 * avoid embedding backend requests directly inside the toolbar.
 *
 * @slot period - Optional custom period selector replacing the default segmented presets.
 * @slot search - Optional custom search control replacing the built-in `uai-input`.
 * @slot chips - Optional additional chips displayed next to applied category chips.
 * @slot actions - Optional trailing controls displayed after the filter trigger.
 * @part bar - The main filter toolbar surface.
 * @part periods - The segmented period preset group.
 * @part search - The search control container.
 * @part panel - The floating two-level filter popover panel.
 */
export class UaiFilterBar {
    constructor() {
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
        warnLegacyValue('uai-filter-bar', 'language', this.language, 'pt_BR');
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
        this.overlay = new UaiOverlay({
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
        return (h(Host, { key: 'ed37b879c715c3056f85de3ef9aee53eb4133213' }, h("div", { key: 'f1d9f8e2c2e8c7c860b602c77e6ee809614b7a2d', class: "filter-bar", part: "bar", "data-test": this.dataTest }, this.showPeriods !== false && (h("slot", { key: '1948e864ebaed6c8ab61a37fc1457848e7cd6311', name: "period" }, h("div", { key: '6912d743fc473a4282e38f1f2ce1fc75b7204246', class: "filter-bar__periods", part: "periods", role: "group", "aria-label": i18n.periodGroupLabel }, periods.map((period) => {
            const selected = this.selectedPeriod === period.id;
            return (h("button", { key: period.id, type: "button", "aria-pressed": String(selected), onClick: () => this.handlePeriodSelect(period), class: {
                    'filter-bar__period-btn': true,
                    'filter-bar__period-btn--selected': selected,
                } }, period.icon && h("uai-icon", { name: period.icon, size: "medium" }), h("span", null, period.label)));
        })))), this.showSearch !== false && (h("div", { key: '4516c8c841a0538eca5c4fc3c563bb78e61fa0a6', class: "filter-bar__search", part: "search" }, h("slot", { key: 'dc754c1f35ae74874ba1b6069b703bf918d160d2', name: "search" }, h("uai-input", { key: '77b6107d1d50b3547e0b389bac89032ac839acbf', size: "medium", icon: "search", value: this.searchValue, placeholder: resolvedSearchPlaceholder, "aria-label": resolvedSearchPlaceholder, onUaiInput: this.handleSearchInput })))), h("div", { key: '69db545cb9438e1f0c6d6fcb68faa98d6bba976c', class: "filter-bar__chips", "aria-live": "polite" }, appliedCategoryEntries.map((cat) => {
            const selectedVals = this.internalFilters[cat.id] || [];
            return (h("div", { key: cat.id, class: "filter-bar__chip" }, h("button", { type: "button", class: "filter-bar__chip-edit", "aria-label": i18n.editChip(cat.label), "aria-expanded": String(this.isOpen && this.activeCategoryId === cat.id), onClick: (ev) => this.openPopover(cat.id, ev.currentTarget) }, h("span", { class: "filter-bar__chip-count" }, selectedVals.length), h("span", { class: "filter-bar__chip-label" }, cat.label)), h("button", { type: "button", class: "filter-bar__chip-remove", "aria-label": i18n.removeChip(cat.label), onClick: (ev) => this.removeCategoryChip(cat.id, ev) }, h("uai-icon", { name: "close", size: "x-small" }))));
        }), h("slot", { key: '3c9311f947bb11b4904de9adbc903a69bd7ddfba', name: "chips" })), this.showFilterButton !== false && (h("div", { key: 'f64406e1ac40dfebf2715abacd129c9652a19895', class: "filter-bar__trigger", ref: (el) => (this.triggerWrapRef = el) }, h("uai-button", { key: '08f292ae56fd669f2008fce63ed565c72c817c53', variant: "outline", color: "content", size: "medium", iconLeft: "filter", "aria-haspopup": categories.length > 0 ? 'dialog' : undefined, "aria-expanded": categories.length > 0 ? String(this.isOpen) : undefined, onUaiClick: () => this.openPopover(null, this.triggerWrapRef) }, resolvedFilterLabel))), h("slot", { key: 'e251c795ed8bc54d0e8d5509427dc8767645b115', name: "actions" })), h("div", { key: '3b11e5ef4bf2b270167d243776497a6fa5a814c5', ref: (el) => (this.panelRef = el), part: "panel", role: "dialog", "aria-label": activeCategory ? activeCategory.label : i18n.panelTitle, class: "filter-panel" }, h("div", { key: 'd20d724ec632368b3436383f12ab95f37f02c778', class: "filter-panel__surface" }, h("div", { key: 'f4317be8dbc93bf245827191190d3b5b9b00a3c0', class: "filter-panel__header" }, activeCategory && (h("button", { key: 'e46784b5f98fc3c78d71543a4529b97d3a50afb9', type: "button", class: "filter-panel__back", "aria-label": i18n.backLabel, onClick: () => {
                this.activeCategoryId = null;
                this.optionQuery = '';
            } }, h("uai-icon", { key: '10ba5da6bb43cdbd10365d3e2bdf07e9c97f60cb', name: "arrow-left", size: "small" }))), h("span", { key: '340413d6a8430b16e14c639f57d735c557329b61', class: "filter-panel__title" }, activeCategory ? activeCategory.label : i18n.panelTitle)), !activeCategory ? (h("div", { class: "filter-panel__categories" }, categories.map((cat) => {
            const count = (this.internalFilters[cat.id] || []).length;
            return (h("button", { key: cat.id, type: "button", class: "filter-panel__category-row", onClick: () => this.selectCategory(cat.id) }, h("span", { class: "filter-panel__category-name" }, cat.label), h("span", { class: "filter-panel__category-meta" }, count > 0 && h("span", { class: "filter-bar__chip-count" }, count), h("uai-icon", { name: "arrow-right", size: "x-small" }))));
        }))) : (h("div", { class: "filter-panel__options-wrap" }, activeCategory.search && (h("div", { class: "filter-panel__search" }, h("input", { type: "search", class: "filter-panel__search-input", value: this.optionQuery, placeholder: activeCategory.searchPlaceholder || i18n.searchPlaceholder, "aria-label": activeCategory.searchPlaceholder || i18n.searchPlaceholder, onInput: (ev) => (this.optionQuery = ev.target.value) }))), h("div", { class: "filter-panel__options", role: "group", "aria-label": activeCategory.label }, normalizedOptions.length === 0 ? (h("p", { class: "filter-panel__empty" }, i18n.emptyOptions)) : (normalizedOptions.map((opt) => {
            const checked = this.pendingValues.includes(opt.value);
            return (h("label", { key: opt.value, class: "filter-panel__option" }, h("input", { type: "checkbox", checked: checked, onChange: () => this.togglePendingOption(opt.value) }), h("span", null, opt.label)));
        }))))), h("div", { key: '071c9bb6fce50e79e0d6695e64cce3551fbfbb99', class: "filter-panel__footer" }, !activeCategory ? (h("button", { type: "button", class: "filter-panel__action filter-panel__action--secondary", disabled: !hasAnyApplied, onClick: this.clearAllFilters }, i18n.clearAll)) : (h("div", { class: "filter-panel__footer-actions" }, h("button", { type: "button", class: "filter-panel__action filter-panel__action--secondary", disabled: this.pendingValues.length === 0, onClick: this.clearActiveCategoryPending }, i18n.clearCategory), h("button", { type: "button", class: "filter-panel__action filter-panel__action--primary", onClick: this.applyActiveCategory }, i18n.apply))))))));
    }
    static get is() { return "uai-filter-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-filter-bar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-filter-bar.css"]
        };
    }
    static get properties() {
        return {
            "periods": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiFilterPeriodPreset[] | string",
                    "resolved": "UaiFilterPeriodPreset[] | string",
                    "references": {
                        "UaiFilterPeriodPreset": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-filter-bar/uai-filter-bar.tsx",
                            "id": "src/components/uai-filter-bar/uai-filter-bar.tsx::UaiFilterPeriodPreset"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Preset periods rendered in the segmented group, as an array or JSON string.\nUse when customizing available date ranges; pair with `selectedPeriod` and `onUaiPeriodChange`; avoid more than seven presets in one bar."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "periods"
            },
            "showPeriods": {
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
                    "text": "Shows or hides the segmented period preset group.\nUse `false` when the page has no temporal dimension; pair with `periods`; avoid hiding both periods, search, and filters simultaneously."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-periods",
                "defaultValue": "true"
            },
            "selectedPeriod": {
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
                    "text": "Identifier of the currently selected period preset.\nUse in controlled or uncontrolled mode; pair with `onUaiPeriodChange`; avoid ids absent from `periods`."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "selected-period",
                "defaultValue": "'7d'"
            },
            "showSearch": {
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
                    "text": "Shows or hides the built-in quick search input.\nUse `true` to filter metrics or items by text; pair with `searchValue` and `onUaiSearchChange`; avoid duplicating another page-level search right below."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-search",
                "defaultValue": "true"
            },
            "searchValue": {
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
                    "text": "Current text value of the quick search input.\nUse in controlled flows; pair with `onUaiSearchChange`; avoid mutating without updating consumer state."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "search-value",
                "defaultValue": "''"
            },
            "searchPlaceholder": {
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
                    "text": "Placeholder override for the quick search input.\nUse to specify what can be searched (for example campaigns or flows); pair with `language`; avoid long instructions."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "search-placeholder",
                "defaultValue": "''"
            },
            "categories": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiFilterCategory[] | string",
                    "resolved": "UaiFilterCategory[] | string",
                    "references": {
                        "UaiFilterCategory": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-filter-bar/uai-filter-bar.tsx",
                            "id": "src/components/uai-filter-bar/uai-filter-bar.tsx::UaiFilterCategory"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Filter categories and options displayed in the two-level popover, as an array or JSON string.\nUse to let people filter by dimensions such as channel or campaign; pair with `appliedFilters` and `onUaiFilterChange`; avoid empty option lists."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "categories",
                "defaultValue": "[]"
            },
            "appliedFilters": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiAppliedFilters | string",
                    "resolved": "string | { [x: string]: string[]; }",
                    "references": {
                        "UaiAppliedFilters": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-filter-bar/uai-filter-bar.tsx",
                            "id": "src/components/uai-filter-bar/uai-filter-bar.tsx::UaiAppliedFilters"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Map of category ids to selected option values, as an object or JSON string.\nUse to control or seed active filters; pair with `categories` and `onUaiFilterChange`; avoid unknown category keys."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "applied-filters",
                "defaultValue": "{}"
            },
            "showFilterButton": {
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
                    "text": "Shows or hides the trailing filter button.\nUse `false` when only period and search are needed; pair with `categories`; avoid hiding when `categories` are provided."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-filter-button",
                "defaultValue": "true"
            },
            "filterButtonLabel": {
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
                    "text": "Label override for the filter trigger button.\nUse concise verbs; pair with `language`; avoid icon-only triggers when space allows text."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "filter-button-label",
                "defaultValue": "''"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiFilterBarLanguage",
                    "resolved": "\"en_US\" | \"es_ES\" | \"pt_BR\"",
                    "references": {
                        "UaiFilterBarLanguage": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-filter-bar/uai-filter-bar.tsx",
                            "id": "src/components/uai-filter-bar/uai-filter-bar.tsx::UaiFilterBarLanguage"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Locale for built-in labels and default period presets (`pt_BR`, `en_US`, `es_ES`).\nUse to match the application language; pair with label override props when needed; avoid mixing locales."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'pt_BR'"
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
                    "text": "Automation selector applied to the toolbar container.\nUse in automated tests; pair with semantic role queries; avoid styling by this attribute."
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
            "activeCategoryId": {},
            "optionQuery": {},
            "pendingValues": {},
            "internalFilters": {}
        };
    }
    static get events() {
        return [{
                "method": "uaiPeriodChange",
                "name": "uaiPeriodChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the user selects a period preset.\nUse to update analytical queries; pair with `selectedPeriod`; avoid firing network calls on already-selected presets."
                },
                "complexType": {
                    "original": "{ id: string; label: string }",
                    "resolved": "{ id: string; label: string; }",
                    "references": {}
                }
            }, {
                "method": "uaiSearchChange",
                "name": "uaiSearchChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the quick search value changes.\nUse to filter visible items or metrics; pair with `searchValue`; avoid blocking typing with synchronous heavy work."
                },
                "complexType": {
                    "original": "{ value: string }",
                    "resolved": "{ value: string; }",
                    "references": {}
                }
            }, {
                "method": "uaiFilterChange",
                "name": "uaiFilterChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when category filters are applied, cleared, or removed via chip.\nUse to refresh analytical cards and charts; pair with `appliedFilters`; avoid mutating the emitted detail object in place."
                },
                "complexType": {
                    "original": "{ filters: UaiAppliedFilters }",
                    "resolved": "{ filters: UaiAppliedFilters; }",
                    "references": {
                        "UaiAppliedFilters": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-filter-bar/uai-filter-bar.tsx",
                            "id": "src/components/uai-filter-bar/uai-filter-bar.tsx::UaiAppliedFilters"
                        }
                    }
                }
            }, {
                "method": "uaiFilterOpenChange",
                "name": "uaiFilterOpenChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the filter popover opens or closes.\nUse for analytics or coordinating external UI; pair with `open()` and `close()`; avoid preventing Escape closure."
                },
                "complexType": {
                    "original": "{ open: boolean }",
                    "resolved": "{ open: boolean; }",
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
                    "text": "Opens the filter category popover anchored to the filter trigger. Use for programmatic focus flows; pair with `close()`; avoid opening when `categories` is empty.",
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
                    "text": "Closes the filter category popover if open. Use to dismiss programmatically; pair with `open()`; avoid skipping focus restoration on keyboard flows.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "appliedFilters",
                "methodName": "onAppliedFiltersChange"
            }];
    }
}
