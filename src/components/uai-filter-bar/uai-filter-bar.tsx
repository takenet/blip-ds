import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { UaiOverlay, UaiOverlayCloseReason } from '../../utils/uai-overlay';
import { warnLegacyValue } from '../../utils/deprecation';

export type UaiFilterBarLanguage = 'pt_BR' | 'en_US' | 'es_ES';

export interface UaiFilterPeriodPreset {
  id: string;
  label: string;
  icon?: string;
}

export interface UaiFilterCategoryOption {
  value: string;
  label: string;
}

export interface UaiFilterCategory {
  id: string;
  label: string;
  search?: boolean;
  searchPlaceholder?: string;
  options: Array<string | UaiFilterCategoryOption>;
}

export type UaiAppliedFilters = Record<string, string[]>;

interface FilterI18n {
  periodGroupLabel: string;
  searchPlaceholder: string;
  filterButton: string;
  panelTitle: string;
  backLabel: string;
  clearAll: string;
  clearCategory: string;
  apply: string;
  emptyOptions: string;
  editChip: (label: string) => string;
  removeChip: (label: string) => string;
  periods: UaiFilterPeriodPreset[];
}

const FILTER_I18N: Record<UaiFilterBarLanguage, FilterI18n> = {
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

function parseJsonOrValue<T>(raw: T | string | undefined, fallback: T): T {
  if (raw === undefined || raw === null) return fallback;
  if (typeof raw !== 'string') return raw;
  if (!raw.trim()) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function normalizeOption(opt: string | UaiFilterCategoryOption): UaiFilterCategoryOption {
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
@Component({
  tag: 'uai-filter-bar',
  styleUrl: 'uai-filter-bar.scss',
  shadow: true,
})
export class UaiFilterBar implements ComponentInterface {
  @Element() el!: HTMLElement;

  @State() isOpen = false;
  @State() activeCategoryId: string | null = null;
  @State() optionQuery = '';
  @State() pendingValues: string[] = [];
  @State() internalFilters: UaiAppliedFilters = {};

  /**
   * Preset periods rendered in the segmented group, as an array or JSON string.
   * Use when customizing available date ranges; pair with `selectedPeriod` and `onUaiPeriodChange`; avoid more than seven presets in one bar.
   */
  @Prop() periods?: UaiFilterPeriodPreset[] | string;

  /**
   * Shows or hides the segmented period preset group.
   * Use `false` when the page has no temporal dimension; pair with `periods`; avoid hiding both periods, search, and filters simultaneously.
   */
  @Prop() showPeriods?: boolean = true;

  /**
   * Identifier of the currently selected period preset.
   * Use in controlled or uncontrolled mode; pair with `onUaiPeriodChange`; avoid ids absent from `periods`.
   */
  @Prop({ mutable: true }) selectedPeriod?: string = '7d';

  /**
   * Shows or hides the built-in quick search input.
   * Use `true` to filter metrics or items by text; pair with `searchValue` and `onUaiSearchChange`; avoid duplicating another page-level search right below.
   */
  @Prop() showSearch?: boolean = true;

  /**
   * Current text value of the quick search input.
   * Use in controlled flows; pair with `onUaiSearchChange`; avoid mutating without updating consumer state.
   */
  @Prop({ mutable: true }) searchValue?: string = '';

  /**
   * Placeholder override for the quick search input.
   * Use to specify what can be searched (for example campaigns or flows); pair with `language`; avoid long instructions.
   */
  @Prop() searchPlaceholder?: string = '';

  /**
   * Filter categories and options displayed in the two-level popover, as an array or JSON string.
   * Use to let people filter by dimensions such as channel or campaign; pair with `appliedFilters` and `onUaiFilterChange`; avoid empty option lists.
   */
  @Prop() categories?: UaiFilterCategory[] | string = [];

  /**
   * Map of category ids to selected option values, as an object or JSON string.
   * Use to control or seed active filters; pair with `categories` and `onUaiFilterChange`; avoid unknown category keys.
   */
  @Prop() appliedFilters?: UaiAppliedFilters | string = {};

  /**
   * Shows or hides the trailing filter button.
   * Use `false` when only period and search are needed; pair with `categories`; avoid hiding when `categories` are provided.
   */
  @Prop() showFilterButton?: boolean = true;

  /**
   * Label override for the filter trigger button.
   * Use concise verbs; pair with `language`; avoid icon-only triggers when space allows text.
   */
  @Prop() filterButtonLabel?: string = '';

  /**
   * Locale for built-in labels and default period presets (`pt_BR`, `en_US`, `es_ES`).
   * Use to match the application language; pair with label override props when needed; avoid mixing locales.
   */
  @Prop() language?: UaiFilterBarLanguage = 'pt_BR';

  /**
   * Automation selector applied to the toolbar container.
   * Use in automated tests; pair with semantic role queries; avoid styling by this attribute.
   */
  @Prop() dataTest?: string = null;

  /**
   * Emitted when the user selects a period preset.
   * Use to update analytical queries; pair with `selectedPeriod`; avoid firing network calls on already-selected presets.
   */
  @Event({ bubbles: true, composed: true }) uaiPeriodChange!: EventEmitter<{ id: string; label: string }>;

  /**
   * Emitted when the quick search value changes.
   * Use to filter visible items or metrics; pair with `searchValue`; avoid blocking typing with synchronous heavy work.
   */
  @Event({ bubbles: true, composed: true }) uaiSearchChange!: EventEmitter<{ value: string }>;

  /**
   * Emitted when category filters are applied, cleared, or removed via chip.
   * Use to refresh analytical cards and charts; pair with `appliedFilters`; avoid mutating the emitted detail object in place.
   */
  @Event({ bubbles: true, composed: true }) uaiFilterChange!: EventEmitter<{ filters: UaiAppliedFilters }>;

  /**
   * Emitted when the filter popover opens or closes.
   * Use for analytics or coordinating external UI; pair with `open()` and `close()`; avoid preventing Escape closure.
   */
  @Event({ bubbles: true, composed: true }) uaiFilterOpenChange!: EventEmitter<{ open: boolean }>;

  private overlay?: UaiOverlay;
  private triggerWrapRef?: HTMLElement;
  private panelRef?: HTMLElement;
  private activeAnchorEl?: HTMLElement;

  @Watch('appliedFilters')
  onAppliedFiltersChange(): void {
    this.syncInternalFilters();
  }

  componentWillLoad(): void {
    this.syncInternalFilters();
  }

  componentDidLoad(): void {
    this.setupOverlay();
  }

  disconnectedCallback(): void {
    this.overlay?.destroy();
    this.overlay = undefined;
  }

  /** Opens the filter category popover anchored to the filter trigger. Use for programmatic focus flows; pair with `close()`; avoid opening when `categories` is empty. */
  @Method()
  async open(): Promise<void> {
    this.openPopover(null, this.triggerWrapRef);
  }

  /** Closes the filter category popover if open. Use to dismiss programmatically; pair with `open()`; avoid skipping focus restoration on keyboard flows. */
  @Method()
  async close(): Promise<void> {
    this.overlay?.close('api');
  }

  private resolveLanguage(): UaiFilterBarLanguage {
    if (this.language === 'pt_BR' || this.language === 'en_US' || this.language === 'es_ES') {
      return this.language;
    }
    warnLegacyValue('uai-filter-bar', 'language', this.language, 'pt_BR');
    return 'pt_BR';
  }

  private syncInternalFilters(): void {
    const parsed = parseJsonOrValue<UaiAppliedFilters>(this.appliedFilters, {});
    const next: UaiAppliedFilters = {};
    if (parsed && typeof parsed === 'object') {
      Object.entries(parsed).forEach(([key, values]) => {
        if (Array.isArray(values) && values.length > 0) {
          next[key] = [...values];
        }
      });
    }
    this.internalFilters = next;
  }

  private get parsedCategories(): UaiFilterCategory[] {
    const list = parseJsonOrValue<UaiFilterCategory[]>(this.categories, []);
    return Array.isArray(list) ? list : [];
  }

  private get resolvedPeriods(): UaiFilterPeriodPreset[] {
    const i18n = FILTER_I18N[this.resolveLanguage()];
    if (this.periods === undefined || this.periods === null) return i18n.periods;
    const parsed = parseJsonOrValue<UaiFilterPeriodPreset[]>(this.periods, i18n.periods);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : i18n.periods;
  }

  private setupOverlay(): void {
    if (!this.triggerWrapRef || !this.panelRef || this.overlay) return;
    this.overlay = new UaiOverlay({
      trigger: this.triggerWrapRef,
      panel: this.panelRef,
      onClose: (reason: UaiOverlayCloseReason) => {
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

  private focusAnchor(): void {
    const target = this.activeAnchorEl || this.triggerWrapRef;
    if (!target) return;
    const innerBtn = target.shadowRoot?.querySelector('button') || target.querySelector('button') || target;
    (innerBtn as HTMLElement)?.focus?.({ preventScroll: true });
  }

  private openPopover(categoryId: string | null, anchor?: HTMLElement): void {
    const categories = this.parsedCategories;
    if (!categories.length) return;
    this.setupOverlay();
    if (!this.overlay) return;

    if (this.isOpen && categoryId === null && this.activeAnchorEl === anchor) {
      this.overlay.close('api');
      return;
    }

    this.activeAnchorEl = anchor || this.triggerWrapRef;
    if (categoryId) {
      this.activeCategoryId = categoryId;
      this.pendingValues = [...(this.internalFilters[categoryId] || [])];
      this.optionQuery = '';
    } else {
      this.activeCategoryId = null;
      this.pendingValues = [];
      this.optionQuery = '';
    }

    if (!this.isOpen) {
      this.isOpen = true;
      this.overlay.open();
      this.uaiFilterOpenChange.emit({ open: true });
    } else {
      this.overlay.update();
    }
  }

  private selectCategory(categoryId: string): void {
    this.activeCategoryId = categoryId;
    this.pendingValues = [...(this.internalFilters[categoryId] || [])];
    this.optionQuery = '';
    this.overlay?.update();
  }

  private togglePendingOption(value: string): void {
    if (this.pendingValues.includes(value)) {
      this.pendingValues = this.pendingValues.filter((item) => item !== value);
    } else {
      this.pendingValues = [...this.pendingValues, value];
    }
  }

  private applyActiveCategory = (): void => {
    if (!this.activeCategoryId) return;
    const next: UaiAppliedFilters = { ...this.internalFilters };
    if (this.pendingValues.length > 0) {
      next[this.activeCategoryId] = [...this.pendingValues];
    } else {
      delete next[this.activeCategoryId];
    }
    this.internalFilters = next;
    this.uaiFilterChange.emit({ filters: { ...next } });
    this.overlay?.close('api');
    this.focusAnchor();
  };

  private clearActiveCategoryPending = (): void => {
    this.pendingValues = [];
  };

  private clearAllFilters = (): void => {
    this.internalFilters = {};
    this.pendingValues = [];
    this.uaiFilterChange.emit({ filters: {} });
    this.overlay?.close('api');
    this.focusAnchor();
  };

  private removeCategoryChip(categoryId: string, event: MouseEvent): void {
    event.stopPropagation();
    const next: UaiAppliedFilters = { ...this.internalFilters };
    delete next[categoryId];
    this.internalFilters = next;
    this.uaiFilterChange.emit({ filters: { ...next } });
    if (this.isOpen && this.activeCategoryId === categoryId) {
      this.overlay?.close('api');
    }
  }

  private handlePeriodSelect(period: UaiFilterPeriodPreset): void {
    this.selectedPeriod = period.id;
    this.uaiPeriodChange.emit({ id: period.id, label: period.label });
  }

  private handleSearchInput = (event: CustomEvent<{ value?: string }> | Event): void => {
    const customDetail = (event as CustomEvent<{ value?: string }>).detail;
    const targetValue = (event.target as HTMLInputElement | null)?.value;
    const nextValue = customDetail?.value !== undefined ? customDetail.value : targetValue ?? '';
    this.searchValue = nextValue;
    this.uaiSearchChange.emit({ value: nextValue });
  };

  render() {
    const lang = this.resolveLanguage();
    const i18n = FILTER_I18N[lang];
    const periods = this.resolvedPeriods;
    const categories = this.parsedCategories;
    const activeCategory = categories.find((cat) => cat.id === this.activeCategoryId) || null;
    const appliedCategoryEntries = categories.filter(
      (cat) => (this.internalFilters[cat.id] || []).length > 0,
    );
    const hasAnyApplied = Object.keys(this.internalFilters).length > 0;
    const resolvedSearchPlaceholder = this.searchPlaceholder?.trim() || i18n.searchPlaceholder;
    const resolvedFilterLabel = this.filterButtonLabel?.trim() || i18n.filterButton;

    const normalizedOptions = activeCategory
      ? activeCategory.options
          .map(normalizeOption)
          .filter((opt) =>
            this.optionQuery.trim()
              ? opt.label.toLowerCase().includes(this.optionQuery.trim().toLowerCase())
              : true,
          )
      : [];

    return (
      <Host>
        <div class="filter-bar" part="bar" data-test={this.dataTest}>
          {this.showPeriods !== false && (
            <slot name="period">
              <div class="filter-bar__periods" part="periods" role="group" aria-label={i18n.periodGroupLabel}>
                {periods.map((period) => {
                  const selected = this.selectedPeriod === period.id;
                  return (
                    <button
                      key={period.id}
                      type="button"
                      aria-pressed={String(selected)}
                      onClick={() => this.handlePeriodSelect(period)}
                      class={{
                        'filter-bar__period-btn': true,
                        'filter-bar__period-btn--selected': selected,
                      }}
                    >
                      {period.icon && <uai-icon name={period.icon} size="medium" />}
                      <span>{period.label}</span>
                    </button>
                  );
                })}
              </div>
            </slot>
          )}

          {this.showSearch !== false && (
            <div class="filter-bar__search" part="search">
              <slot name="search">
                <uai-input
                  size="medium"
                  icon="search"
                  value={this.searchValue}
                  placeholder={resolvedSearchPlaceholder}
                  aria-label={resolvedSearchPlaceholder}
                  onUaiInput={this.handleSearchInput}
                />
              </slot>
            </div>
          )}

          <div class="filter-bar__chips" aria-live="polite">
            {appliedCategoryEntries.map((cat) => {
              const selectedVals = this.internalFilters[cat.id] || [];
              return (
                <div key={cat.id} class="filter-bar__chip">
                  <button
                    type="button"
                    class="filter-bar__chip-edit"
                    aria-label={i18n.editChip(cat.label)}
                    aria-expanded={String(this.isOpen && this.activeCategoryId === cat.id)}
                    onClick={(ev) => this.openPopover(cat.id, ev.currentTarget as HTMLElement)}
                  >
                    <span class="filter-bar__chip-count">{selectedVals.length}</span>
                    <span class="filter-bar__chip-label">{cat.label}</span>
                  </button>
                  <button
                    type="button"
                    class="filter-bar__chip-remove"
                    aria-label={i18n.removeChip(cat.label)}
                    onClick={(ev) => this.removeCategoryChip(cat.id, ev)}
                  >
                    <uai-icon name="close" size="x-small" />
                  </button>
                </div>
              );
            })}
            <slot name="chips" />
          </div>

          {this.showFilterButton !== false && (
            <div
              class="filter-bar__trigger"
              ref={(el) => (this.triggerWrapRef = el)}
            >
              <uai-button
                variant="outline"
                color="content"
                size="medium"
                iconLeft="filter"
                aria-haspopup={categories.length > 0 ? 'dialog' : undefined}
                aria-expanded={categories.length > 0 ? String(this.isOpen) : undefined}
                onUaiClick={() => this.openPopover(null, this.triggerWrapRef)}
              >
                {resolvedFilterLabel}
              </uai-button>
            </div>
          )}

          <slot name="actions" />
        </div>

        <div
          ref={(el) => (this.panelRef = el)}
          part="panel"
          role="dialog"
          aria-label={activeCategory ? activeCategory.label : i18n.panelTitle}
          class="filter-panel"
        >
          <div class="filter-panel__surface">
            <div class="filter-panel__header">
              {activeCategory && (
                <button
                  type="button"
                  class="filter-panel__back"
                  aria-label={i18n.backLabel}
                  onClick={() => {
                    this.activeCategoryId = null;
                    this.optionQuery = '';
                  }}
                >
                  <uai-icon name="arrow-left" size="small" />
                </button>
              )}
              <span class="filter-panel__title">
                {activeCategory ? activeCategory.label : i18n.panelTitle}
              </span>
            </div>

            {!activeCategory ? (
              <div class="filter-panel__categories">
                {categories.map((cat) => {
                  const count = (this.internalFilters[cat.id] || []).length;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      class="filter-panel__category-row"
                      onClick={() => this.selectCategory(cat.id)}
                    >
                      <span class="filter-panel__category-name">{cat.label}</span>
                      <span class="filter-panel__category-meta">
                        {count > 0 && <span class="filter-bar__chip-count">{count}</span>}
                        <uai-icon name="arrow-right" size="x-small" />
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div class="filter-panel__options-wrap">
                {activeCategory.search && (
                  <div class="filter-panel__search">
                    <input
                      type="search"
                      class="filter-panel__search-input"
                      value={this.optionQuery}
                      placeholder={activeCategory.searchPlaceholder || i18n.searchPlaceholder}
                      aria-label={activeCategory.searchPlaceholder || i18n.searchPlaceholder}
                      onInput={(ev) => (this.optionQuery = (ev.target as HTMLInputElement).value)}
                    />
                  </div>
                )}
                <div class="filter-panel__options" role="group" aria-label={activeCategory.label}>
                  {normalizedOptions.length === 0 ? (
                    <p class="filter-panel__empty">{i18n.emptyOptions}</p>
                  ) : (
                    normalizedOptions.map((opt) => {
                      const checked = this.pendingValues.includes(opt.value);
                      return (
                        <label key={opt.value} class="filter-panel__option">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => this.togglePendingOption(opt.value)}
                          />
                          <span>{opt.label}</span>
                        </label>
                      );
                    })
                  )}
                </div>
              </div>
            )}

            <div class="filter-panel__footer">
              {!activeCategory ? (
                <button
                  type="button"
                  class="filter-panel__action filter-panel__action--secondary"
                  disabled={!hasAnyApplied}
                  onClick={this.clearAllFilters}
                >
                  {i18n.clearAll}
                </button>
              ) : (
                <div class="filter-panel__footer-actions">
                  <button
                    type="button"
                    class="filter-panel__action filter-panel__action--secondary"
                    disabled={this.pendingValues.length === 0}
                    onClick={this.clearActiveCategoryPending}
                  >
                    {i18n.clearCategory}
                  </button>
                  <button
                    type="button"
                    class="filter-panel__action filter-panel__action--primary"
                    onClick={this.applyActiveCategory}
                  >
                    {i18n.apply}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
