import { h, Host, } from "@stencil/core";
export class SearchAnywhere {
    constructor() {
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
    static get is() { return "bds-search-anywhere"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["search-anywhere.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["search-anywhere.css"]
        };
    }
    static get properties() {
        return {
            "options": {
                "type": "string",
                "attribute": "options",
                "mutable": false,
                "complexType": {
                    "original": "string | SearchAnywhereOption[]",
                    "resolved": "SearchAnywhereOption[] | string",
                    "references": {
                        "SearchAnywhereOption": {
                            "location": "import",
                            "path": "./search-anywhere-interface",
                            "id": "src/components/search-anywhere/search-anywhere-interface.ts::SearchAnywhereOption"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Options to be displayed in the search results.\nCan be passed as JSON string or array of SearchAnywhereOption objects."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "[]"
            },
            "placeholder": {
                "type": "string",
                "attribute": "placeholder",
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
                    "text": "Placeholder text for the search input (when modal is open)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Search...'"
            },
            "triggerPlaceholder": {
                "type": "string",
                "attribute": "trigger-placeholder",
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
                    "text": "Placeholder text for the trigger input (before modal opens)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Search or press Ctrl+K'"
            },
            "showShortcut": {
                "type": "boolean",
                "attribute": "show-shortcut",
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
                    "text": "If true, displays the keyboard shortcut hint on the trigger"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "maxResults": {
                "type": "number",
                "attribute": "max-results",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Maximum number of results to display"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "10"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "searchText": {},
            "selectedIndex": {},
            "filteredOptions": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsSearchChange",
                "name": "bdsSearchChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the search text changes"
                },
                "complexType": {
                    "original": "SearchAnywhereChangeEventDetail",
                    "resolved": "SearchAnywhereChangeEventDetail",
                    "references": {
                        "SearchAnywhereChangeEventDetail": {
                            "location": "import",
                            "path": "./search-anywhere-interface",
                            "id": "src/components/search-anywhere/search-anywhere-interface.ts::SearchAnywhereChangeEventDetail"
                        }
                    }
                }
            }, {
                "method": "bdsSearchSelect",
                "name": "bdsSearchSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when an option is selected"
                },
                "complexType": {
                    "original": "SearchAnywhereSelectEventDetail",
                    "resolved": "SearchAnywhereSelectEventDetail",
                    "references": {
                        "SearchAnywhereSelectEventDetail": {
                            "location": "import",
                            "path": "./search-anywhere-interface",
                            "id": "src/components/search-anywhere/search-anywhere-interface.ts::SearchAnywhereSelectEventDetail"
                        }
                    }
                }
            }, {
                "method": "bdsSearchOpen",
                "name": "bdsSearchOpen",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the modal opens"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bdsSearchClose",
                "name": "bdsSearchClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the modal closes"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
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
                    "text": "Opens the search modal programmatically",
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
                    "text": "Closes the search modal programmatically",
                    "tags": []
                }
            },
            "getIsOpen": {
                "complexType": {
                    "signature": "() => Promise<boolean>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "Gets the current open state (for testing)",
                    "tags": []
                }
            },
            "getSelectedIndex": {
                "complexType": {
                    "signature": "() => Promise<number>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<number>"
                },
                "docs": {
                    "text": "Gets the current selected index (for testing)",
                    "tags": []
                }
            },
            "getSearchText": {
                "complexType": {
                    "signature": "() => Promise<string>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<string>"
                },
                "docs": {
                    "text": "Gets the current search text (for testing)",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "options",
                "methodName": "onOptionsChange"
            }, {
                "propName": "searchText",
                "methodName": "onSearchTextChange"
            }, {
                "propName": "isOpen",
                "methodName": "onIsOpenChange"
            }];
    }
}
//# sourceMappingURL=search-anywhere.js.map
