import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
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
export declare class UaiFilterBar implements ComponentInterface {
    el: HTMLElement;
    isOpen: boolean;
    activeCategoryId: string | null;
    optionQuery: string;
    pendingValues: string[];
    internalFilters: UaiAppliedFilters;
    /**
     * Preset periods rendered in the segmented group, as an array or JSON string.
     * Use when customizing available date ranges; pair with `selectedPeriod` and `onUaiPeriodChange`; avoid more than seven presets in one bar.
     */
    periods?: UaiFilterPeriodPreset[] | string;
    /**
     * Shows or hides the segmented period preset group.
     * Use `false` when the page has no temporal dimension; pair with `periods`; avoid hiding both periods, search, and filters simultaneously.
     */
    showPeriods?: boolean;
    /**
     * Identifier of the currently selected period preset.
     * Use in controlled or uncontrolled mode; pair with `onUaiPeriodChange`; avoid ids absent from `periods`.
     */
    selectedPeriod?: string;
    /**
     * Shows or hides the built-in quick search input.
     * Use `true` to filter metrics or items by text; pair with `searchValue` and `onUaiSearchChange`; avoid duplicating another page-level search right below.
     */
    showSearch?: boolean;
    /**
     * Current text value of the quick search input.
     * Use in controlled flows; pair with `onUaiSearchChange`; avoid mutating without updating consumer state.
     */
    searchValue?: string;
    /**
     * Placeholder override for the quick search input.
     * Use to specify what can be searched (for example campaigns or flows); pair with `language`; avoid long instructions.
     */
    searchPlaceholder?: string;
    /**
     * Filter categories and options displayed in the two-level popover, as an array or JSON string.
     * Use to let people filter by dimensions such as channel or campaign; pair with `appliedFilters` and `onUaiFilterChange`; avoid empty option lists.
     */
    categories?: UaiFilterCategory[] | string;
    /**
     * Map of category ids to selected option values, as an object or JSON string.
     * Use to control or seed active filters; pair with `categories` and `onUaiFilterChange`; avoid unknown category keys.
     */
    appliedFilters?: UaiAppliedFilters | string;
    /**
     * Shows or hides the trailing filter button.
     * Use `false` when only period and search are needed; pair with `categories`; avoid hiding when `categories` are provided.
     */
    showFilterButton?: boolean;
    /**
     * Label override for the filter trigger button.
     * Use concise verbs; pair with `language`; avoid icon-only triggers when space allows text.
     */
    filterButtonLabel?: string;
    /**
     * Locale for built-in labels and default period presets (`pt_BR`, `en_US`, `es_ES`).
     * Use to match the application language; pair with label override props when needed; avoid mixing locales.
     */
    language?: UaiFilterBarLanguage;
    /**
     * Automation selector applied to the toolbar container.
     * Use in automated tests; pair with semantic role queries; avoid styling by this attribute.
     */
    dataTest?: string;
    /**
     * Emitted when the user selects a period preset.
     * Use to update analytical queries; pair with `selectedPeriod`; avoid firing network calls on already-selected presets.
     */
    uaiPeriodChange: EventEmitter<{
        id: string;
        label: string;
    }>;
    /**
     * Emitted when the quick search value changes.
     * Use to filter visible items or metrics; pair with `searchValue`; avoid blocking typing with synchronous heavy work.
     */
    uaiSearchChange: EventEmitter<{
        value: string;
    }>;
    /**
     * Emitted when category filters are applied, cleared, or removed via chip.
     * Use to refresh analytical cards and charts; pair with `appliedFilters`; avoid mutating the emitted detail object in place.
     */
    uaiFilterChange: EventEmitter<{
        filters: UaiAppliedFilters;
    }>;
    /**
     * Emitted when the filter popover opens or closes.
     * Use for analytics or coordinating external UI; pair with `open()` and `close()`; avoid preventing Escape closure.
     */
    uaiFilterOpenChange: EventEmitter<{
        open: boolean;
    }>;
    private overlay?;
    private triggerWrapRef?;
    private panelRef?;
    private activeAnchorEl?;
    onAppliedFiltersChange(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    /** Opens the filter category popover anchored to the filter trigger. Use for programmatic focus flows; pair with `close()`; avoid opening when `categories` is empty. */
    open(): Promise<void>;
    /** Closes the filter category popover if open. Use to dismiss programmatically; pair with `open()`; avoid skipping focus restoration on keyboard flows. */
    close(): Promise<void>;
    private resolveLanguage;
    private syncInternalFilters;
    private get parsedCategories();
    private get resolvedPeriods();
    private setupOverlay;
    private focusAnchor;
    private openPopover;
    private selectCategory;
    private togglePendingOption;
    private applyActiveCategory;
    private clearActiveCategoryPending;
    private clearAllFilters;
    private removeCategoryChip;
    private handlePeriodSelect;
    private handleSearchInput;
    render(): any;
}
