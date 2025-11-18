'use strict';

var index = require('./index-D_zq0Z7d.js');

const ptTerms = [
    {
        search_placeholder: 'Buscar...',
        trigger_placeholder: 'Buscar ou pressione Ctrl+K',
        no_results: 'Nenhum resultado encontrado',
        start_typing: 'Comece a digitar para buscar...',
        to_navigate: 'para navegar',
        to_select: 'para selecionar',
        for_new_tab: 'para nova aba',
        to_close: 'para fechar',
    },
];

const esTerms = [
    {
        search_placeholder: 'Buscar...',
        trigger_placeholder: 'Buscar o presione Ctrl+K',
        no_results: 'No se encontraron resultados',
        start_typing: 'Empiece a escribir para buscar...',
        to_navigate: 'para navegar',
        to_select: 'para seleccionar',
        for_new_tab: 'para nueva pestaña',
        to_close: 'para cerrar',
    },
];

const enTerms = [
    {
        search_placeholder: 'Search...',
        trigger_placeholder: 'Search or press Ctrl+K',
        no_results: 'No results found',
        start_typing: 'Start typing to search...',
        to_navigate: 'to navigate',
        to_select: 'to select',
        for_new_tab: 'for new tab',
        to_close: 'to close',
    },
];

const termTranslate = (lang, string) => {
    let translate;
    switch (lang) {
        case 'pt_BR':
            translate = ptTerms.map((term) => term[string]);
            break;
        case 'es_ES':
            translate = esTerms.map((term) => term[string]);
            break;
        case 'en_US':
            translate = enTerms.map((term) => term[string]);
            break;
        default:
            translate = ptTerms.map((term) => term[string]);
    }
    return translate;
};

const searchAnywhereCss = ":host{display:block;width:100%}.search-trigger{width:100%;cursor:pointer}.search-trigger bds-input{cursor:pointer;pointer-events:none}.search-trigger bds-input ::part(native){cursor:pointer}.search-trigger .keyboard-shortcut{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 8px;background-color:var(--color-surface-2, rgb(237, 237, 237));border-radius:4px;height:24px;border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}.search-trigger .keyboard-shortcut bds-typo{color:var(--color-content-ghost, rgb(140, 140, 140))}.search-modal-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0, 0, 0, 0.5);display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center;padding-top:10vh;z-index:80000;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.search-modal{background-color:var(--color-surface-0, rgb(255, 255, 255));border-radius:8px;-webkit-box-shadow:0px 4px 10px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 4px 10px var(--color-shadow-1, rgba(0, 0, 0, 0.16));width:90%;max-width:640px;max-height:70vh;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;border:1px solid var(--color-border-2, rgba(0, 0, 0, 0.16))}.search-modal-header{padding:16px;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}.search-modal-header .search-input-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:12px}.search-modal-header .search-input-wrapper .search-icon{color:var(--color-content-ghost, rgb(140, 140, 140));-ms-flex-negative:0;flex-shrink:0}.search-modal-header .search-input-wrapper .search-input{-ms-flex:1;flex:1;border:none;outline:none;background:transparent;font-size:1rem;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;color:var(--color-content-default, rgb(40, 40, 40));padding:0}.search-modal-header .search-input-wrapper .search-input::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140))}.search-modal-header .search-input-wrapper .search-input::-moz-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140))}.search-modal-header .search-input-wrapper .search-input:-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140))}.search-modal-header .search-input-wrapper .search-input::-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140))}.search-modal-header .search-input-wrapper .search-input::placeholder{color:var(--color-content-ghost, rgb(140, 140, 140))}.search-modal-results{-ms-flex:1;flex:1;overflow-y:auto;padding:8px}.search-modal-results .search-result-item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:12px;padding:12px 16px;border-radius:8px;cursor:pointer;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;border:1px solid transparent}.search-modal-results .search-result-item:hover{background-color:var(--color-surface-1, rgb(246, 246, 246))}.search-modal-results .search-result-item--selected{background-color:var(--color-surface-2, rgb(237, 237, 237));border-color:var(--color-primary, rgb(30, 107, 241))}.search-modal-results .search-result-item .search-result-icon{-ms-flex-negative:0;flex-shrink:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:32px;height:32px;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246))}.search-modal-results .search-result-item .search-result-icon bds-icon{color:var(--color-content-default, rgb(40, 40, 40))}.search-modal-results .search-result-item .search-result-content{-ms-flex:1;flex:1;min-width:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:4px}.search-modal-results .search-result-item .search-result-content .search-result-title{color:var(--color-content-default, rgb(40, 40, 40));overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.search-modal-results .search-result-item .search-result-content .search-result-description{color:var(--color-content-ghost, rgb(140, 140, 140));overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.search-modal-results .search-result-item .search-result-hint{-ms-flex-negative:0;flex-shrink:0;min-width:80px;text-align:right}.search-modal-results .search-result-item .search-result-hint .keyboard-hint{color:var(--color-content-ghost, rgb(140, 140, 140))}.search-modal-results .no-results{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:24px;text-align:center}.search-modal-results .no-results bds-typo{color:var(--color-content-ghost, rgb(140, 140, 140))}.search-modal-footer{padding:12px 16px;border-top:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));background-color:var(--color-surface-1, rgb(246, 246, 246))}.search-modal-footer .keyboard-hints{display:-ms-flexbox;display:flex;gap:16px;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-wrap:wrap;flex-wrap:wrap}.search-modal-footer .keyboard-hints .hint{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.search-modal-footer .keyboard-hints .hint bds-typo{color:var(--color-content-ghost, rgb(140, 140, 140))}.search-modal-results::-webkit-scrollbar{width:8px}.search-modal-results::-webkit-scrollbar-track{background:transparent}.search-modal-results::-webkit-scrollbar-thumb{background:var(--color-border-2, rgba(0, 0, 0, 0.16));border-radius:4px}.search-modal-results::-webkit-scrollbar-thumb:hover{background:var(--color-border-3, rgba(0, 0, 0, 0.06))}@media (max-width: 768px){.search-modal{width:95%;max-height:80vh}.search-modal-overlay{padding-top:5vh}.search-result-hint{display:none}.keyboard-hints{-ms-flex-pack:center !important;justify-content:center !important}}";

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
         * Current selected index for keyboard navigation (-1 means no selection)
         */
        this.selectedIndex = -1;
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
         * Language for UI text translations (pt_BR, en_US, es_ES)
         */
        this.language = 'pt_BR';
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
                        // If no selection, start at 0, otherwise move to next
                        if (this.selectedIndex === -1) {
                            this.selectedIndex = 0;
                        }
                        else {
                            this.selectedIndex = (this.selectedIndex + 1) % resultsCount;
                        }
                        this.scrollToSelectedOption();
                    }
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    if (resultsCount > 0) {
                        // If no selection, start at last item, otherwise move to previous
                        if (this.selectedIndex === -1) {
                            this.selectedIndex = resultsCount - 1;
                        }
                        else {
                            this.selectedIndex = (this.selectedIndex - 1 + resultsCount) % resultsCount;
                        }
                        this.scrollToSelectedOption();
                    }
                    break;
                case 'Enter':
                    event.preventDefault();
                    if (resultsCount > 0 && this.selectedIndex >= 0 && this.selectedIndex < resultsCount) {
                        const option = this.filteredOptions[this.selectedIndex];
                        const newTab = event.ctrlKey || event.metaKey;
                        this.selectOption(option, newTab);
                    }
                    break;
            }
        };
        this.handleInputChange = (event) => {
            const target = event.target;
            this.searchText = target.value;
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
        this.handleModalClick = (event) => {
            // Close modal when clicking the backdrop
            if (event.target === event.currentTarget) {
                this.close();
            }
        };
    }
    /**
     * Opens the search modal programmatically
     */
    async open() {
        this.isOpen = true;
        this.bdsSearchOpen.emit();
    }
    /**
     * Closes the search modal programmatically
     */
    async close() {
        this.isOpen = false;
        this.searchText = '';
        this.selectedIndex = -1;
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
        this.selectedIndex = -1;
        this.bdsSearchChange.emit({ searchText: this.searchText });
        this.updateFilteredOptions();
    }
    onIsOpenChange() {
        if (this.isOpen) {
            // Focus input when modal opens
            setTimeout(() => {
                var _a;
                (_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.focus();
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
            // Use Intl.Collator for case and accent-insensitive search
            const collator = new Intl.Collator(undefined, { sensitivity: 'base' });
            const searchLower = this.searchText.toLowerCase();
            this.filteredOptions = parsedOptions.filter((option) => {
                const title = (option.title || '').toLowerCase();
                const description = (option.description || '').toLowerCase();
                // Check if search text is contained in title or description
                // We need to check substring matching, not just equality
                return title.includes(searchLower) || description.includes(searchLower) ||
                    this.fuzzyMatch(title, searchLower, collator) ||
                    this.fuzzyMatch(description, searchLower, collator);
            });
        }
    }
    /**
     * Performs accent-insensitive substring matching using Intl.Collator
     */
    fuzzyMatch(text, search, collator) {
        if (!text || !search)
            return false;
        // Try to find the search string within the text using accent-insensitive comparison
        for (let i = 0; i <= text.length - search.length; i++) {
            const substring = text.substring(i, i + search.length);
            if (collator.compare(substring, search) === 0) {
                return true;
            }
        }
        return false;
    }
    renderTrigger() {
        const placeholderText = this.triggerPlaceholder || termTranslate(this.language, 'trigger_placeholder');
        return (index.h("div", { class: "search-trigger", onClick: this.handleTriggerClick }, index.h("bds-input", { icon: "search", placeholder: placeholderText, readonly: true, dataTest: "search-anywhere-trigger" }, this.showShortcut && (index.h("div", { slot: "input-right", class: "keyboard-shortcut" }, index.h("bds-typo", { variant: "fs-12", bold: "regular" }, "\u2318K"))))));
    }
    renderResults() {
        const displayOptions = this.filteredOptions.slice(0, this.maxResults);
        if (displayOptions.length === 0) {
            const message = this.searchText.trim() === ''
                ? termTranslate(this.language, 'start_typing')
                : termTranslate(this.language, 'no_results');
            return (index.h("div", { class: "no-results" }, index.h("bds-typo", { variant: "fs-14", bold: "regular" }, message)));
        }
        return displayOptions.map((option, index$1) => (index.h("div", { key: option.value, "data-index": index$1, class: {
                'search-result-item': true,
                'search-result-item--selected': index$1 === this.selectedIndex,
            }, onClick: (event) => this.handleResultClick(option, event) }, option.icon && (index.h("div", { class: "search-result-icon" }, index.h("bds-icon", { name: option.icon, size: "medium" }))), index.h("div", { class: "search-result-content" }, index.h("bds-typo", { variant: "fs-16", bold: index$1 === this.selectedIndex ? 'bold' : 'regular', class: "search-result-title" }, option.title), option.description && (index.h("bds-typo", { variant: "fs-12", class: "search-result-description" }, option.description))), index.h("div", { class: "search-result-hint" }, index.h("bds-typo", { variant: "fs-10", class: "keyboard-hint" }, index$1 === this.selectedIndex ? '↵ to select' : '')))));
    }
    renderModal() {
        if (!this.isOpen) {
            return null;
        }
        const placeholderText = this.placeholder || termTranslate(this.language, 'search_placeholder');
        return (index.h("div", { class: "search-modal-overlay", onClick: this.handleModalClick }, index.h("div", { class: "search-modal", onKeyDown: this.handleModalKeydown }, index.h("div", { class: "search-modal-header" }, index.h("div", { class: "search-input-wrapper" }, index.h("bds-icon", { name: "search", size: "medium", class: "search-icon" }), index.h("input", { ref: (el) => (this.inputElement = el), type: "text", class: "search-input", placeholder: placeholderText, value: this.searchText, onInput: this.handleInputChange, "data-test": "search-anywhere-input" }))), index.h("div", { class: "search-modal-results", ref: (el) => (this.resultsContainerElement = el) }, this.renderResults()), index.h("div", { class: "search-modal-footer" }, index.h("div", { class: "keyboard-hints" }, index.h("span", { class: "hint" }, index.h("bds-typo", { variant: "fs-10" }, "\u2191\u2193 ", termTranslate(this.language, 'to_navigate'))), index.h("span", { class: "hint" }, index.h("bds-typo", { variant: "fs-10" }, "\u21B5 ", termTranslate(this.language, 'to_select'))), index.h("span", { class: "hint" }, index.h("bds-typo", { variant: "fs-10" }, "\u2318+\u21B5 ", termTranslate(this.language, 'for_new_tab'))), index.h("span", { class: "hint" }, index.h("bds-typo", { variant: "fs-10" }, "esc ", termTranslate(this.language, 'to_close'))))))));
    }
    render() {
        return (index.h(index.Host, { key: 'b979d1cb7d109e74598af428d4e1036847963e5a' }, this.renderTrigger(), this.renderModal()));
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