import {
  Component,
  h,
  Host,
  Prop,
  State,
  Event,
  EventEmitter,
  Watch,
  Element,
  Method,
} from '@stencil/core';
import {
  SearchAnywhereOption,
  SearchAnywhereChangeEventDetail,
  SearchAnywhereSelectEventDetail,
} from './search-anywhere-interface';

@Component({
  tag: 'bds-search-anywhere',
  styleUrl: 'search-anywhere.scss',
  shadow: true,
})
export class SearchAnywhere {
  private inputElement?: HTMLInputElement;
  private resultsContainerElement?: HTMLElement;

  @Element() el!: HTMLElement;

  /**
   * Controls whether the search modal is open
   */
  @State() isOpen: boolean = false;

  /**
   * Current search text
   */
  @State() searchText: string = '';

  /**
   * Current selected index for keyboard navigation
   */
  @State() selectedIndex: number = 0;

  /**
   * Internal filtered options for display
   */
  @State() filteredOptions: SearchAnywhereOption[] = [];

  /**
   * Options to be displayed in the search results.
   * Can be passed as JSON string or array of SearchAnywhereOption objects.
   */
  @Prop() options?: string | SearchAnywhereOption[] = [];

  /**
   * Placeholder text for the search input (when modal is open)
   */
  @Prop() placeholder?: string = 'Search...';

  /**
   * Placeholder text for the trigger input (before modal opens)
   */
  @Prop() triggerPlaceholder?: string = 'Search or press Ctrl+K';

  /**
   * If true, displays the keyboard shortcut hint on the trigger
   */
  @Prop() showShortcut?: boolean = true;

  /**
   * Maximum number of results to display
   */
  @Prop() maxResults?: number = 10;

  /**
   * Emitted when the search text changes
   */
  @Event() bdsSearchChange!: EventEmitter<SearchAnywhereChangeEventDetail>;

  /**
   * Emitted when an option is selected
   */
  @Event() bdsSearchSelect!: EventEmitter<SearchAnywhereSelectEventDetail>;

  /**
   * Emitted when the modal opens
   */
  @Event() bdsSearchOpen!: EventEmitter;

  /**
   * Emitted when the modal closes
   */
  @Event() bdsSearchClose!: EventEmitter;

  /**
   * Opens the search modal programmatically
   */
  @Method()
  async open() {
    this.isOpen = true;
    this.bdsSearchOpen.emit();
  }

  /**
   * Closes the search modal programmatically
   */
  @Method()
  async close() {
    this.isOpen = false;
    this.searchText = '';
    this.selectedIndex = 0;
    this.bdsSearchClose.emit();
  }

  /**
   * Gets the current open state (for testing)
   */
  @Method()
  async getIsOpen(): Promise<boolean> {
    return this.isOpen;
  }

  /**
   * Gets the current selected index (for testing)
   */
  @Method()
  async getSelectedIndex(): Promise<number> {
    return this.selectedIndex;
  }

  /**
   * Gets the current search text (for testing)
   */
  @Method()
  async getSearchText(): Promise<string> {
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

  @Watch('options')
  onOptionsChange() {
    this.updateFilteredOptions();
  }

  @Watch('searchText')
  onSearchTextChange() {
    this.selectedIndex = 0;
    this.bdsSearchChange.emit({ searchText: this.searchText });
    this.updateFilteredOptions();
  }

  @Watch('isOpen')
  onIsOpenChange() {
    if (this.isOpen) {
      // Focus input when modal opens
      setTimeout(() => {
        this.inputElement?.focus();
      }, 100);
    }
  }

  private handleGlobalKeydown = (event: KeyboardEvent) => {
    // Ctrl+K or Cmd+K to open
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault();
      this.open();
    }
  };

  private handleModalKeydown = (event: KeyboardEvent) => {
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

  private scrollToSelectedOption() {
    setTimeout(() => {
      const selectedElement = this.resultsContainerElement?.querySelector(
        `.search-result-item[data-index="${this.selectedIndex}"]`
      ) as HTMLElement;
      
      if (selectedElement && this.resultsContainerElement) {
        const containerRect = this.resultsContainerElement.getBoundingClientRect();
        const itemRect = selectedElement.getBoundingClientRect();

        if (itemRect.bottom > containerRect.bottom) {
          selectedElement.scrollIntoView({ block: 'end', behavior: 'smooth' });
        } else if (itemRect.top < containerRect.top) {
          selectedElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      }
    }, 0);
  }

  private updateFilteredOptions() {
    let parsedOptions: SearchAnywhereOption[] = [];

    if (typeof this.options === 'string') {
      try {
        parsedOptions = JSON.parse(this.options);
      } catch (e) {
        console.error('Failed to parse options JSON:', e);
        parsedOptions = [];
      }
    } else if (Array.isArray(this.options)) {
      parsedOptions = this.options;
    }

    // Filter options based on search text
    if (this.searchText.trim() === '') {
      this.filteredOptions = parsedOptions;
    } else {
      const searchLower = this.searchText.toLowerCase();
      this.filteredOptions = parsedOptions.filter((option) => {
        const titleMatch = option.title?.toLowerCase().includes(searchLower);
        const descriptionMatch = option.description?.toLowerCase().includes(searchLower);
        return titleMatch || descriptionMatch;
      });
    }
  }

  private handleInputChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.searchText = target.value;
  };

  private handleTriggerClick = () => {
    this.open();
  };

  private selectOption = (option: SearchAnywhereOption, newTab: boolean = false) => {
    this.bdsSearchSelect.emit({ option, newTab });

    // Navigate if URL is provided
    if (option.url) {
      if (newTab) {
        window.open(option.url, '_blank');
      } else {
        window.location.href = option.url;
      }
    }

    this.close();
  };

  private handleResultClick = (option: SearchAnywhereOption, event: MouseEvent) => {
    const newTab = event.ctrlKey || event.metaKey;
    this.selectOption(option, newTab);
  };

  private handleModalClick = (event: MouseEvent) => {
    // Close modal when clicking the backdrop
    if (event.target === event.currentTarget) {
      this.close();
    }
  };

  private renderTrigger() {
    return (
      <div class="search-trigger" onClick={this.handleTriggerClick}>
        <bds-input
          icon="search"
          placeholder={this.triggerPlaceholder}
          readonly={true}
          dataTest="search-anywhere-trigger"
        >
          {this.showShortcut && (
            <div slot="input-right" class="keyboard-shortcut">
              <bds-typo variant="fs-12" bold="regular">
                ⌘K
              </bds-typo>
            </div>
          )}
        </bds-input>
      </div>
    );
  }

  private renderResults() {
    const displayOptions = this.filteredOptions.slice(0, this.maxResults);

    if (displayOptions.length === 0) {
      return (
        <div class="no-results">
          <bds-typo variant="fs-14" bold="regular">
            {this.searchText.trim() === '' ? 'Start typing to search...' : 'No results found'}
          </bds-typo>
        </div>
      );
    }

    return displayOptions.map((option, index) => (
      <div
        key={option.value}
        data-index={index}
        class={{
          'search-result-item': true,
          'search-result-item--selected': index === this.selectedIndex,
        }}
        onClick={(event) => this.handleResultClick(option, event)}
      >
        {option.icon && (
          <div class="search-result-icon">
            <bds-icon name={option.icon} size="medium" />
          </div>
        )}
        <div class="search-result-content">
          <bds-typo
            variant="fs-16"
            bold={index === this.selectedIndex ? 'bold' : 'regular'}
            class="search-result-title"
          >
            {option.title}
          </bds-typo>
          {option.description && (
            <bds-typo variant="fs-12" class="search-result-description">
              {option.description}
            </bds-typo>
          )}
        </div>
        <div class="search-result-hint">
          <bds-typo variant="fs-10" class="keyboard-hint">
            {index === this.selectedIndex ? '↵ to select' : ''}
          </bds-typo>
        </div>
      </div>
    ));
  }

  private renderModal() {
    if (!this.isOpen) {
      return null;
    }

    return (
      <div class="search-modal-overlay" onClick={this.handleModalClick}>
        <div class="search-modal" onKeyDown={this.handleModalKeydown}>
          <div class="search-modal-header">
            <div class="search-input-wrapper">
              <bds-icon name="search" size="medium" class="search-icon" />
              <input
                ref={(el) => (this.inputElement = el)}
                type="text"
                class="search-input"
                placeholder={this.placeholder}
                value={this.searchText}
                onInput={this.handleInputChange}
                data-test="search-anywhere-input"
              />
            </div>
          </div>
          <div class="search-modal-results" ref={(el) => (this.resultsContainerElement = el)}>
            {this.renderResults()}
          </div>
          <div class="search-modal-footer">
            <div class="keyboard-hints">
              <span class="hint">
                <bds-typo variant="fs-10">↑↓ to navigate</bds-typo>
              </span>
              <span class="hint">
                <bds-typo variant="fs-10">↵ to select</bds-typo>
              </span>
              <span class="hint">
                <bds-typo variant="fs-10">⌘+↵ for new tab</bds-typo>
              </span>
              <span class="hint">
                <bds-typo variant="fs-10">esc to close</bds-typo>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Host>
        {this.renderTrigger()}
        {this.renderModal()}
      </Host>
    );
  }
}
