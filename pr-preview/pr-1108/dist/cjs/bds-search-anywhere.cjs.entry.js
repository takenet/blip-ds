'use strict';

var index = require('./index-D_zq0Z7d.js');

const searchAnywhereCss = ":host{display:block;width:100%}.keyboard-shortcut{background-color:var(--color-surface-2, rgb(237, 237, 237));border-radius:4px;border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}.keyboard-shortcut bds-typo{color:var(--color-content-ghost, rgb(140, 140, 140))}.search-modal-content{width:90%;max-width:640px;max-height:70vh}.search-modal-header{border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}.search-modal-header .search-icon{color:var(--color-content-ghost, rgb(140, 140, 140))}.search-modal-header bds-input{-ms-flex:1;flex:1}.search-modal-results{-ms-flex:1;flex:1;overflow-y:auto;max-height:50vh}.search-modal-results .search-result-item{cursor:pointer;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;border:1px solid transparent}.search-modal-results .search-result-item:hover bds-paper{background-color:var(--color-surface-1, rgb(246, 246, 246))}.search-modal-results .search-result-item--selected{border-color:var(--color-primary, rgb(30, 107, 241))}.search-modal-results .search-result-item .search-result-icon{width:32px;height:32px;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.search-modal-results .search-result-item .search-result-icon bds-icon{color:var(--color-content-default, rgb(40, 40, 40))}.search-modal-results .search-result-item .search-result-content{-ms-flex:1;flex:1;min-width:0}.search-modal-results .search-result-item .search-result-content .search-result-title{color:var(--color-content-default, rgb(40, 40, 40));overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.search-modal-results .search-result-item .search-result-content .search-result-description{color:var(--color-content-ghost, rgb(140, 140, 140));overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.search-modal-results .search-result-item .search-result-hint{min-width:80px;text-align:right}.search-modal-results .search-result-item .search-result-hint .keyboard-hint{color:var(--color-content-ghost, rgb(140, 140, 140))}.search-modal-footer{border-top:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));background-color:var(--color-surface-1, rgb(246, 246, 246))}.search-modal-footer .hint bds-typo{color:var(--color-content-ghost, rgb(140, 140, 140))}.search-modal-results::-webkit-scrollbar{width:8px}.search-modal-results::-webkit-scrollbar-track{background:transparent}.search-modal-results::-webkit-scrollbar-thumb{background:var(--color-border-2, rgba(0, 0, 0, 0.16));border-radius:4px}.search-modal-results::-webkit-scrollbar-thumb:hover{background:var(--color-border-3, rgba(0, 0, 0, 0.06))}@media (max-width: 768px){.search-modal-content{width:95%;max-height:80vh}.search-result-hint{display:none}}";

const SearchAnywhere = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsSearchChange = index.createEvent(this, "bdsSearchChange");
        this.bdsSearchSelect = index.createEvent(this, "bdsSearchSelect");
        this.bdsSearchOpen = index.createEvent(this, "bdsSearchOpen");
        this.bdsSearchClose = index.createEvent(this, "bdsSearchClose");
        /**
         * Controls whether the search modal is open
         */
        this.isOpen = false;
        /**
         * Current search text
         */
        this.searchText = '';
        /**
         * Current selected index for keyboard navigation
         */
        this.selectedIndex = 0;
        /**
         * Internal filtered options for display
         */
        this.filteredOptions = [];
        /**
         * Options to be displayed in the search results.
         * Can be passed as JSON string or array of SearchAnywhereOption objects.
         */
        this.options = [];
        /**
         * Placeholder text for the search input (when modal is open)
         */
        this.placeholder = 'Search...';
        /**
         * Placeholder text for the trigger input (before modal opens)
         */
        this.triggerPlaceholder = 'Search or press Ctrl+K';
        /**
         * If true, displays the keyboard shortcut hint on the trigger
         */
        this.showShortcut = true;
        /**
         * Maximum number of results to display
         */
        this.maxResults = 10;
        this.handleGlobalKeydown = (event) => {
            // Ctrl+K or Cmd+K to open
            if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
                event.preventDefault();
                this.open();
            }
        };
        this.handleModalKeydown = (event) => {
            const resultsCount = Math.min(this.filteredOptions.length, this.maxResults);
            switch (event.key) {
                case 'Escape':
                    event.preventDefault();
                    this.close();
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    if (resultsCount > 0) {
                        this.selectedIndex = (this.selectedIndex + 1) % resultsCount;
                        this.scrollToSelectedOption();
                    }
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    if (resultsCount > 0) {
                        this.selectedIndex = (this.selectedIndex - 1 + resultsCount) % resultsCount;
                        this.scrollToSelectedOption();
                    }
                    break;
                case 'Enter':
                    event.preventDefault();
                    if (resultsCount > 0 && this.selectedIndex < resultsCount) {
                        const option = this.filteredOptions[this.selectedIndex];
                        const newTab = event.ctrlKey || event.metaKey;
                        this.selectOption(option, newTab);
                    }
                    break;
            }
        };
        this.handleInputChange = (event) => {
            this.searchText = event.detail.value || '';
        };
        this.handleTriggerClick = () => {
            this.open();
        };
        this.selectOption = (option, newTab = false) => {
            this.bdsSearchSelect.emit({ option, newTab });
            // Navigate if URL is provided
            if (option.url) {
                if (newTab) {
                    window.open(option.url, '_blank');
                }
                else {
                    window.location.href = option.url;
                }
            }
            this.close();
        };
        this.handleResultClick = (option, event) => {
            const newTab = event.ctrlKey || event.metaKey;
            this.selectOption(option, newTab);
        };
        this.handleModalChanged = (event) => {
            if (event.detail.modalStatus === 'closed' && this.isOpen) {
                this.close();
            }
        };
    }
    /**
     * Opens the search modal programmatically
     */
    async open() {
        this.isOpen = true;
        if (this.modalComponent && typeof this.modalComponent.toggle === 'function') {
            try {
                await this.modalComponent.toggle();
            }
            catch (e) {
                // Silently fail if toggle is not available (e.g., in tests)
            }
        }
        this.bdsSearchOpen.emit();
        // Focus input after modal opens
        setTimeout(async () => {
            if (this.searchInputComponent && typeof this.searchInputComponent.setFocus === 'function') {
                try {
                    await this.searchInputComponent.setFocus();
                }
                catch (e) {
                    // Silently fail if setFocus is not available (e.g., in tests)
                }
            }
        }, 100);
    }
    /**
     * Closes the search modal programmatically
     */
    async close() {
        this.isOpen = false;
        if (this.modalComponent && this.isOpen && typeof this.modalComponent.toggle === 'function') {
            try {
                await this.modalComponent.toggle();
            }
            catch (e) {
                // Silently fail if toggle is not available (e.g., in tests)
            }
        }
        this.searchText = '';
        this.selectedIndex = 0;
        this.bdsSearchClose.emit();
    }
    /**
     * Gets the current open state (for testing)
     */
    async getIsOpen() {
        return this.isOpen;
    }
    /**
     * Gets the current selected index (for testing)
     */
    async getSelectedIndex() {
        return this.selectedIndex;
    }
    /**
     * Gets the current search text (for testing)
     */
    async getSearchText() {
        return this.searchText;
    }
    componentWillLoad() {
        this.updateFilteredOptions();
    }
    componentDidLoad() {
        // Listen for Ctrl+K globally
        document.addEventListener('keydown', this.handleGlobalKeydown);
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this.handleGlobalKeydown);
    }
    onOptionsChange() {
        this.updateFilteredOptions();
    }
    onSearchTextChange() {
        this.selectedIndex = 0;
        this.bdsSearchChange.emit({ searchText: this.searchText });
        this.updateFilteredOptions();
    }
    onIsOpenChange() {
        if (this.isOpen) {
            // Focus input when modal opens
            setTimeout(async () => {
                if (this.searchInputComponent && typeof this.searchInputComponent.setFocus === 'function') {
                    try {
                        await this.searchInputComponent.setFocus();
                    }
                    catch (e) {
                        // Silently fail if setFocus is not available (e.g., in tests)
                    }
                }
            }, 100);
        }
    }
    scrollToSelectedOption() {
        setTimeout(() => {
            var _a;
            const selectedElement = (_a = this.resultsContainerElement) === null || _a === void 0 ? void 0 : _a.querySelector(`.search-result-item[data-index="${this.selectedIndex}"]`);
            if (selectedElement && this.resultsContainerElement) {
                const containerRect = this.resultsContainerElement.getBoundingClientRect();
                const itemRect = selectedElement.getBoundingClientRect();
                if (itemRect.bottom > containerRect.bottom) {
                    selectedElement.scrollIntoView({ block: 'end', behavior: 'smooth' });
                }
                else if (itemRect.top < containerRect.top) {
                    selectedElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
                }
            }
        }, 0);
    }
    updateFilteredOptions() {
        let parsedOptions = [];
        if (typeof this.options === 'string') {
            try {
                parsedOptions = JSON.parse(this.options);
            }
            catch (e) {
                console.error('Failed to parse options JSON:', e);
                parsedOptions = [];
            }
        }
        else if (Array.isArray(this.options)) {
            parsedOptions = this.options;
        }
        // Filter options based on search text
        if (this.searchText.trim() === '') {
            this.filteredOptions = parsedOptions;
        }
        else {
            const searchLower = this.searchText.toLowerCase();
            this.filteredOptions = parsedOptions.filter((option) => {
                var _a, _b;
                const titleMatch = (_a = option.title) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(searchLower);
                const descriptionMatch = (_b = option.description) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(searchLower);
                return titleMatch || descriptionMatch;
            });
        }
    }
    renderTrigger() {
        return (index.h("bds-paper", { elevation: "static", "bg-color": "surface-1" }, index.h("bds-input", { icon: "search", placeholder: this.triggerPlaceholder, readonly: true, dataTest: "search-anywhere-trigger", onClick: this.handleTriggerClick }, this.showShortcut && (index.h("bds-grid", { slot: "input-right", padding: "x-half", class: "keyboard-shortcut" }, index.h("bds-typo", { variant: "fs-12", bold: "regular" }, "\u2318K"))))));
    }
    renderResults() {
        const displayOptions = this.filteredOptions.slice(0, this.maxResults);
        if (displayOptions.length === 0) {
            return (index.h("bds-grid", { direction: "column", "align-items": "center", padding: "4" }, index.h("bds-typo", { variant: "fs-14", bold: "regular" }, this.searchText.trim() === '' ? 'Start typing to search...' : 'No results found')));
        }
        return displayOptions.map((option, index$1) => (index.h("bds-paper", { key: option.value, "data-index": index$1, elevation: "static", "bg-color": index$1 === this.selectedIndex ? 'surface-2' : 'surface-0', class: {
                'search-result-item': true,
                'search-result-item--selected': index$1 === this.selectedIndex,
            }, onClick: (event) => this.handleResultClick(option, event) }, index.h("bds-grid", { direction: "row", "align-items": "center", gap: "2", padding: "2" }, option.icon && (index.h("bds-grid", { class: "search-result-icon" }, index.h("bds-icon", { name: option.icon, size: "medium" }))), index.h("bds-grid", { direction: "column", gap: "half", class: "search-result-content" }, index.h("bds-typo", { variant: "fs-16", bold: index$1 === this.selectedIndex ? 'bold' : 'regular', class: "search-result-title" }, option.title), option.description && (index.h("bds-typo", { variant: "fs-12", class: "search-result-description" }, option.description))), index.h("bds-grid", { class: "search-result-hint" }, index.h("bds-typo", { variant: "fs-10", class: "keyboard-hint" }, index$1 === this.selectedIndex ? '↵ to select' : ''))))));
    }
    renderModal() {
        return (index.h("bds-modal", { ref: (el) => (this.modalComponent = el), open: this.isOpen, "close-button": false, "outzone-close": true, size: "dynamic", onBdsModalChanged: this.handleModalChanged }, index.h("bds-grid", { direction: "column", gap: "none", class: "search-modal-content", onKeyDown: this.handleModalKeydown }, index.h("bds-grid", { direction: "row", "align-items": "center", padding: "3", gap: "2", class: "search-modal-header" }, index.h("bds-icon", { name: "search", size: "medium", class: "search-icon" }), index.h("bds-input", { ref: (el) => (this.searchInputComponent = el), type: "text", placeholder: this.placeholder, value: this.searchText, onBdsChange: this.handleInputChange, dataTest: "search-anywhere-input" })), index.h("bds-grid", { direction: "column", gap: "none", class: "search-modal-results", ref: (el) => (this.resultsContainerElement = el) }, this.renderResults()), index.h("bds-grid", { direction: "row", "justify-content": "center", gap: "3", padding: "2", class: "search-modal-footer" }, index.h("bds-grid", { class: "hint" }, index.h("bds-typo", { variant: "fs-10" }, "\u2191\u2193 to navigate")), index.h("bds-grid", { class: "hint" }, index.h("bds-typo", { variant: "fs-10" }, "\u21B5 to select")), index.h("bds-grid", { class: "hint" }, index.h("bds-typo", { variant: "fs-10" }, "\u2318+\u21B5 for new tab")), index.h("bds-grid", { class: "hint" }, index.h("bds-typo", { variant: "fs-10" }, "esc to close"))))));
    }
    render() {
        return (index.h(index.Host, { key: 'f909a5d748f07770c60fe43bcfcce987e264a514' }, this.renderTrigger(), this.renderModal()));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "options": ["onOptionsChange"],
        "searchText": ["onSearchTextChange"],
        "isOpen": ["onIsOpenChange"]
    }; }
};
SearchAnywhere.style = searchAnywhereCss;

exports.bds_search_anywhere = SearchAnywhere;
//# sourceMappingURL=bds-search-anywhere.entry.cjs.js.map

//# sourceMappingURL=bds-search-anywhere.cjs.entry.js.map