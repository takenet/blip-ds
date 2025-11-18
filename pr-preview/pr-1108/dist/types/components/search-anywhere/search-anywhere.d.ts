import { EventEmitter } from '../../stencil-public-runtime';
import { SearchAnywhereOption, SearchAnywhereChangeEventDetail, SearchAnywhereSelectEventDetail } from './search-anywhere-interface';
import { languages } from './languages';
export declare class SearchAnywhere {
    private inputElement?;
    private resultsContainerElement?;
    el: HTMLElement;
    /**
     * Controls whether the search modal is open
     */
    isOpen: boolean;
    /**
     * Current search text
     */
    searchText: string;
    /**
     * Current selected index for keyboard navigation (-1 means no selection)
     */
    selectedIndex: number;
    /**
     * Internal filtered options for display
     */
    filteredOptions: SearchAnywhereOption[];
    /**
     * Options to be displayed in the search results.
     * Can be passed as JSON string or array of SearchAnywhereOption objects.
     */
    options?: string | SearchAnywhereOption[];
    /**
     * Language for UI text translations (pt_BR, en_US, es_ES)
     */
    language?: languages;
    /**
     * Placeholder text for the search input (when modal is open)
     * If not provided, uses translated default based on language prop
     */
    placeholder?: string;
    /**
     * Placeholder text for the trigger input (before modal opens)
     * If not provided, uses translated default based on language prop
     */
    triggerPlaceholder?: string;
    /**
     * If true, displays the keyboard shortcut hint on the trigger
     */
    showShortcut?: boolean;
    /**
     * Maximum number of results to display
     */
    maxResults?: number;
    /**
     * Emitted when the search text changes
     */
    bdsSearchChange: EventEmitter<SearchAnywhereChangeEventDetail>;
    /**
     * Emitted when an option is selected
     */
    bdsSearchSelect: EventEmitter<SearchAnywhereSelectEventDetail>;
    /**
     * Emitted when the modal opens
     */
    bdsSearchOpen: EventEmitter;
    /**
     * Emitted when the modal closes
     */
    bdsSearchClose: EventEmitter;
    /**
     * Opens the search modal programmatically
     */
    open(): Promise<void>;
    /**
     * Closes the search modal programmatically
     */
    close(): Promise<void>;
    /**
     * Gets the current open state (for testing)
     */
    getIsOpen(): Promise<boolean>;
    /**
     * Gets the current selected index (for testing)
     */
    getSelectedIndex(): Promise<number>;
    /**
     * Gets the current search text (for testing)
     */
    getSearchText(): Promise<string>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    onOptionsChange(): void;
    onSearchTextChange(): void;
    onIsOpenChange(): void;
    private handleGlobalKeydown;
    private handleModalKeydown;
    private scrollToSelectedOption;
    private updateFilteredOptions;
    /**
     * Performs accent-insensitive substring matching using Intl.Collator
     */
    private fuzzyMatch;
    private handleInputChange;
    private handleTriggerClick;
    private selectOption;
    private handleResultClick;
    private handleModalClick;
    private renderTrigger;
    private renderResults;
    private renderModal;
    render(): any;
}
