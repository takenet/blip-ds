import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$8 } from './p-B97ExyrQ.js';
import { d as defineCustomElement$7 } from './p-mCuNr11T.js';
import { d as defineCustomElement$6 } from './p-19uyXyEx.js';
import { d as defineCustomElement$5 } from './p-Cd70o7AT.js';
import { d as defineCustomElement$4 } from './p-BMBTTj9h.js';
import { d as defineCustomElement$3 } from './p-BLWmqqxb.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const searchAnywhereCss = ":host{display:block;width:100%}.keyboard-shortcut{background-color:var(--color-surface-2, rgb(237, 237, 237));border-radius:4px;border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}.keyboard-shortcut bds-typo{color:var(--color-content-ghost, rgb(140, 140, 140))}.search-modal-content{width:90%;max-width:640px;max-height:70vh}.search-modal-header{border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}.search-modal-header .search-icon{color:var(--color-content-ghost, rgb(140, 140, 140))}.search-modal-header bds-input{-ms-flex:1;flex:1}.search-modal-results{-ms-flex:1;flex:1;overflow-y:auto;max-height:50vh}.search-modal-results .search-result-item{cursor:pointer;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;border:1px solid transparent}.search-modal-results .search-result-item:hover bds-paper{background-color:var(--color-surface-1, rgb(246, 246, 246))}.search-modal-results .search-result-item--selected{border-color:var(--color-primary, rgb(30, 107, 241))}.search-modal-results .search-result-item .search-result-icon{width:32px;height:32px;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.search-modal-results .search-result-item .search-result-icon bds-icon{color:var(--color-content-default, rgb(40, 40, 40))}.search-modal-results .search-result-item .search-result-content{-ms-flex:1;flex:1;min-width:0}.search-modal-results .search-result-item .search-result-content .search-result-title{color:var(--color-content-default, rgb(40, 40, 40));overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.search-modal-results .search-result-item .search-result-content .search-result-description{color:var(--color-content-ghost, rgb(140, 140, 140));overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.search-modal-results .search-result-item .search-result-hint{min-width:80px;text-align:right}.search-modal-results .search-result-item .search-result-hint .keyboard-hint{color:var(--color-content-ghost, rgb(140, 140, 140))}.search-modal-footer{border-top:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));background-color:var(--color-surface-1, rgb(246, 246, 246))}.search-modal-footer .hint bds-typo{color:var(--color-content-ghost, rgb(140, 140, 140))}.search-modal-results::-webkit-scrollbar{width:8px}.search-modal-results::-webkit-scrollbar-track{background:transparent}.search-modal-results::-webkit-scrollbar-thumb{background:var(--color-border-2, rgba(0, 0, 0, 0.16));border-radius:4px}.search-modal-results::-webkit-scrollbar-thumb:hover{background:var(--color-border-3, rgba(0, 0, 0, 0.06))}@media (max-width: 768px){.search-modal-content{width:95%;max-height:80vh}.search-result-hint{display:none}}";

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
        return (h("bds-paper", { elevation: "static", "bg-color": "surface-1" }, h("bds-input", { icon: "search", placeholder: this.triggerPlaceholder, readonly: true, dataTest: "search-anywhere-trigger", onClick: this.handleTriggerClick }, this.showShortcut && (h("bds-grid", { slot: "input-right", padding: "x-half", class: "keyboard-shortcut" }, h("bds-typo", { variant: "fs-12", bold: "regular" }, "\u2318K"))))));
    }
    renderResults() {
        const displayOptions = this.filteredOptions.slice(0, this.maxResults);
        if (displayOptions.length === 0) {
            return (h("bds-grid", { direction: "column", "align-items": "center", padding: "4" }, h("bds-typo", { variant: "fs-14", bold: "regular" }, this.searchText.trim() === '' ? 'Start typing to search...' : 'No results found')));
        }
        return displayOptions.map((option, index) => (h("bds-paper", { key: option.value, "data-index": index, elevation: "static", "bg-color": index === this.selectedIndex ? 'surface-2' : 'surface-0', class: {
                'search-result-item': true,
                'search-result-item--selected': index === this.selectedIndex,
            }, onClick: (event) => this.handleResultClick(option, event) }, h("bds-grid", { direction: "row", "align-items": "center", gap: "2", padding: "2" }, option.icon && (h("bds-grid", { class: "search-result-icon" }, h("bds-icon", { name: option.icon, size: "medium" }))), h("bds-grid", { direction: "column", gap: "half", class: "search-result-content" }, h("bds-typo", { variant: "fs-16", bold: index === this.selectedIndex ? 'bold' : 'regular', class: "search-result-title" }, option.title), option.description && (h("bds-typo", { variant: "fs-12", class: "search-result-description" }, option.description))), h("bds-grid", { class: "search-result-hint" }, h("bds-typo", { variant: "fs-10", class: "keyboard-hint" }, index === this.selectedIndex ? '↵ to select' : ''))))));
    }
    renderModal() {
        return (h("bds-modal", { ref: (el) => (this.modalComponent = el), open: this.isOpen, "close-button": false, "outzone-close": true, size: "dynamic", onBdsModalChanged: this.handleModalChanged }, h("bds-grid", { direction: "column", gap: "none", class: "search-modal-content", onKeyDown: this.handleModalKeydown }, h("bds-grid", { direction: "row", "align-items": "center", padding: "3", gap: "2", class: "search-modal-header" }, h("bds-icon", { name: "search", size: "medium", class: "search-icon" }), h("bds-input", { ref: (el) => (this.searchInputComponent = el), type: "text", placeholder: this.placeholder, value: this.searchText, onBdsChange: this.handleInputChange, dataTest: "search-anywhere-input" })), h("bds-grid", { direction: "column", gap: "none", class: "search-modal-results", ref: (el) => (this.resultsContainerElement = el) }, this.renderResults()), h("bds-grid", { direction: "row", "justify-content": "center", gap: "3", padding: "2", class: "search-modal-footer" }, h("bds-grid", { class: "hint" }, h("bds-typo", { variant: "fs-10" }, "\u2191\u2193 to navigate")), h("bds-grid", { class: "hint" }, h("bds-typo", { variant: "fs-10" }, "\u21B5 to select")), h("bds-grid", { class: "hint" }, h("bds-typo", { variant: "fs-10" }, "\u2318+\u21B5 for new tab")), h("bds-grid", { class: "hint" }, h("bds-typo", { variant: "fs-10" }, "esc to close"))))));
    }
    render() {
        return (h(Host, { key: 'f909a5d748f07770c60fe43bcfcce987e264a514' }, this.renderTrigger(), this.renderModal()));
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
    const components = ["bds-search-anywhere", "bds-counter-text", "bds-grid", "bds-icon", "bds-input", "bds-modal", "bds-paper", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-search-anywhere":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, SearchAnywhere);
            }
            break;
        case "bds-counter-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "bds-grid":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "bds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "bds-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "bds-modal":
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