import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$6 } from './p-B97ExyrQ.js';
import { d as defineCustomElement$5 } from './p-19uyXyEx.js';
import { d as defineCustomElement$4 } from './p-Cd70o7AT.js';
import { d as defineCustomElement$3 } from './p-BLWmqqxb.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const searchAnywhereCss = ":host{display:block;width:100%}.search-trigger{width:100%;cursor:pointer}.search-trigger bds-input{cursor:pointer;pointer-events:none}.search-trigger bds-input ::part(native){cursor:pointer}.search-trigger .keyboard-shortcut{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 8px;background-color:var(--color-surface-2, rgb(237, 237, 237));border-radius:4px;height:24px;border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}.search-trigger .keyboard-shortcut bds-typo{color:var(--color-content-ghost, rgb(140, 140, 140))}.search-modal-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0, 0, 0, 0.5);display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center;padding-top:10vh;z-index:80000;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.search-modal{width:90%;max-width:640px;max-height:70vh;border-radius:8px}.search-modal-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;max-height:70vh}.search-modal-header{padding:16px;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}.search-modal-header .search-input-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:12px}.search-modal-header .search-input-wrapper .search-icon{color:var(--color-content-ghost, rgb(140, 140, 140));-ms-flex-negative:0;flex-shrink:0}.search-modal-header .search-input-wrapper bds-input{-ms-flex:1;flex:1}.search-modal-header .search-input-wrapper bds-input ::part(input-container){border:none;background:transparent}.search-modal-header .search-input-wrapper bds-input ::part(native){font-size:1rem;padding:0}.search-modal-results{-ms-flex:1;flex:1;overflow-y:auto;padding:8px}.search-modal-results .search-result-item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:12px;padding:12px 16px;border-radius:8px;cursor:pointer;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;border:1px solid transparent}.search-modal-results .search-result-item:hover{background-color:var(--color-surface-1, rgb(246, 246, 246))}.search-modal-results .search-result-item--selected{background-color:var(--color-surface-2, rgb(237, 237, 237));border-color:var(--color-primary, rgb(30, 107, 241))}.search-modal-results .search-result-item .search-result-icon{-ms-flex-negative:0;flex-shrink:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:32px;height:32px;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246))}.search-modal-results .search-result-item .search-result-icon bds-icon{color:var(--color-content-default, rgb(40, 40, 40))}.search-modal-results .search-result-item .search-result-content{-ms-flex:1;flex:1;min-width:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:4px}.search-modal-results .search-result-item .search-result-content .search-result-title{color:var(--color-content-default, rgb(40, 40, 40));overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.search-modal-results .search-result-item .search-result-content .search-result-description{color:var(--color-content-ghost, rgb(140, 140, 140));overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.search-modal-results .search-result-item .search-result-hint{-ms-flex-negative:0;flex-shrink:0;min-width:80px;text-align:right}.search-modal-results .search-result-item .search-result-hint .keyboard-hint{color:var(--color-content-ghost, rgb(140, 140, 140))}.search-modal-results .no-results{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:24px;text-align:center}.search-modal-results .no-results bds-typo{color:var(--color-content-ghost, rgb(140, 140, 140))}.search-modal-footer{padding:12px 16px;border-top:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));background-color:var(--color-surface-1, rgb(246, 246, 246))}.search-modal-footer .keyboard-hints{display:-ms-flexbox;display:flex;gap:16px;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-wrap:wrap;flex-wrap:wrap}.search-modal-footer .keyboard-hints .hint{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.search-modal-footer .keyboard-hints .hint bds-typo{color:var(--color-content-ghost, rgb(140, 140, 140))}.search-modal-results::-webkit-scrollbar{width:8px}.search-modal-results::-webkit-scrollbar-track{background:transparent}.search-modal-results::-webkit-scrollbar-thumb{background:var(--color-border-2, rgba(0, 0, 0, 0.16));border-radius:4px}.search-modal-results::-webkit-scrollbar-thumb:hover{background:var(--color-border-3, rgba(0, 0, 0, 0.06))}@media (max-width: 768px){.search-modal{width:95%;max-height:80vh}.search-modal-overlay{padding-top:5vh}.search-result-hint{display:none}.keyboard-hints{-ms-flex-pack:center !important;justify-content:center !important}}";

const SearchAnywhere = /*@__PURE__*/ proxyCustomElement(class SearchAnywhere extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.bdsSearchChange = createEvent(this, "bdsSearchChange");
        this.bdsSearchSelect = createEvent(this, "bdsSearchSelect");
        this.bdsSearchOpen = createEvent(this, "bdsSearchOpen");
        this.bdsSearchClose = createEvent(this, "bdsSearchClose");
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
    }
    /**
     * Opens the search modal programmatically
     */
    async open() {
        this.isOpen = true;
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
        return (h("div", { class: "search-trigger" }, h("bds-input", { icon: "search", placeholder: this.triggerPlaceholder, readonly: true, dataTest: "search-anywhere-trigger", onClick: this.handleTriggerClick }, this.showShortcut && (h("div", { slot: "input-right", class: "keyboard-shortcut" }, h("bds-typo", { variant: "fs-12", bold: "regular" }, "\u2318K"))))));
    }
    renderResults() {
        const displayOptions = this.filteredOptions.slice(0, this.maxResults);
        if (displayOptions.length === 0) {
            return (h("div", { class: "no-results" }, h("bds-typo", { variant: "fs-14", bold: "regular" }, this.searchText.trim() === '' ? 'Start typing to search...' : 'No results found')));
        }
        return displayOptions.map((option, index) => (h("div", { key: option.value, "data-index": index, class: {
                'search-result-item': true,
                'search-result-item--selected': index === this.selectedIndex,
            }, onClick: (event) => this.handleResultClick(option, event) }, option.icon && (h("div", { class: "search-result-icon" }, h("bds-icon", { name: option.icon, size: "medium" }))), h("div", { class: "search-result-content" }, h("bds-typo", { variant: "fs-16", bold: index === this.selectedIndex ? 'bold' : 'regular', class: "search-result-title" }, option.title), option.description && (h("bds-typo", { variant: "fs-12", class: "search-result-description" }, option.description))), h("div", { class: "search-result-hint" }, h("bds-typo", { variant: "fs-10", class: "keyboard-hint" }, index === this.selectedIndex ? '↵ to select' : '')))));
    }
    renderModal() {
        if (!this.isOpen) {
            return null;
        }
        return (h("div", { class: "search-modal-overlay", onClick: (e) => e.target === e.currentTarget && this.close() }, h("bds-paper", { elevation: "primary", class: "search-modal" }, h("div", { class: "search-modal-content", onKeyDown: this.handleModalKeydown }, h("div", { class: "search-modal-header" }, h("div", { class: "search-input-wrapper" }, h("bds-icon", { name: "search", size: "medium", class: "search-icon" }), h("bds-input", { ref: (el) => (this.searchInputComponent = el), type: "text", placeholder: this.placeholder, value: this.searchText, onBdsChange: this.handleInputChange, dataTest: "search-anywhere-input" }))), h("div", { class: "search-modal-results", ref: (el) => (this.resultsContainerElement = el) }, this.renderResults()), h("div", { class: "search-modal-footer" }, h("div", { class: "keyboard-hints" }, h("div", { class: "hint" }, h("bds-typo", { variant: "fs-10" }, "\u2191\u2193 to navigate")), h("div", { class: "hint" }, h("bds-typo", { variant: "fs-10" }, "\u21B5 to select")), h("div", { class: "hint" }, h("bds-typo", { variant: "fs-10" }, "\u2318+\u21B5 for new tab")), h("div", { class: "hint" }, h("bds-typo", { variant: "fs-10" }, "esc to close"))))))));
    }
    render() {
        return (h(Host, { key: '6e15874aaa08b7d2709e0899ed30499363e85243' }, this.renderTrigger(), this.renderModal()));
    }
    get el() { return this; }
    static get watchers() { return {
        "options": ["onOptionsChange"],
        "searchText": ["onSearchTextChange"],
        "isOpen": ["onIsOpenChange"]
    }; }
    static get style() { return searchAnywhereCss; }
}, [1, "bds-search-anywhere", {
        "options": [1],
        "placeholder": [1],
        "triggerPlaceholder": [1, "trigger-placeholder"],
        "showShortcut": [4, "show-shortcut"],
        "maxResults": [2, "max-results"],
        "isOpen": [32],
        "searchText": [32],
        "selectedIndex": [32],
        "filteredOptions": [32],
        "open": [64],
        "close": [64],
        "getIsOpen": [64],
        "getSelectedIndex": [64],
        "getSearchText": [64]
    }, undefined, {
        "options": ["onOptionsChange"],
        "searchText": ["onSearchTextChange"],
        "isOpen": ["onIsOpenChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-search-anywhere", "bds-counter-text", "bds-icon", "bds-input", "bds-paper", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-search-anywhere":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, SearchAnywhere);
            }
            break;
        case "bds-counter-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "bds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "bds-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "bds-paper":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsSearchAnywhere = SearchAnywhere;
const defineCustomElement = defineCustomElement$1;

export { BdsSearchAnywhere, defineCustomElement };
//# sourceMappingURL=bds-search-anywhere.js.map

//# sourceMappingURL=bds-search-anywhere.js.map