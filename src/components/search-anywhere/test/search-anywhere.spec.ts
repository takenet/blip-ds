import { newSpecPage } from '@stencil/core/testing';
import { SearchAnywhere } from '../search-anywhere';

describe('bds-search-anywhere', () => {
  describe('Component Creation', () => {
    it('should create component', () => {
      const component = new SearchAnywhere();
      expect(component).toBeTruthy();
    });

    it('should render component with default properties', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      expect(page.root).toBeTruthy();
      const trigger = page.root.shadowRoot.querySelector('.search-trigger');
      expect(trigger).toBeTruthy();
    });
  });

  describe('Props and State', () => {
    it('should have default values', () => {
      const component = new SearchAnywhere();
      expect(component.isOpen).toBe(false);
      expect(component.searchText).toBe('');
      expect(component.placeholder).toBeUndefined(); // Uses translation based on language
      expect(component.triggerPlaceholder).toBeUndefined(); // Uses translation based on language
      expect(component.language).toBe('pt_BR'); // Default language
      expect(component.showShortcut).toBe(true);
      expect(component.maxResults).toBe(10);
    });

    it('should accept options as JSON string', async () => {
      const options = [
        { value: '1', title: 'Option 1', description: 'Description 1' },
        { value: '2', title: 'Option 2', description: 'Description 2' },
      ];

      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere options='${JSON.stringify(options)}'></bds-search-anywhere>`,
      });

      expect(page.root.options).toBeDefined();
    });

    it('should accept options as array', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      const options = [
        { value: '1', title: 'Option 1' },
        { value: '2', title: 'Option 2' },
      ];

      page.root.options = options;
      await page.waitForChanges();

      expect(page.root.options).toEqual(options);
    });

    it('should accept string properties', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere 
          placeholder="Find something..." 
          trigger-placeholder="Quick search"
        ></bds-search-anywhere>`,
      });

      expect(page.root.placeholder).toBe('Find something...');
      expect(page.root.triggerPlaceholder).toBe('Quick search');
    });

    it('should accept boolean properties', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere show-shortcut="false"></bds-search-anywhere>`,
      });

      expect(page.root.showShortcut).toBe(false);
    });

    it('should accept number properties', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere max-results="5"></bds-search-anywhere>`,
      });

      expect(page.root.maxResults).toBe(5);
    });
  });

  describe('Rendering', () => {
    it('should render trigger element', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      const trigger = page.root.shadowRoot.querySelector('.search-trigger');
      expect(trigger).toBeTruthy();
    });

    it('should render keyboard shortcut by default', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      const shortcut = page.root.shadowRoot.querySelector('.keyboard-shortcut');
      expect(shortcut).toBeTruthy();
    });

    it('should not render keyboard shortcut when showShortcut is false', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere show-shortcut="false"></bds-search-anywhere>`,
      });

      const shortcut = page.root.shadowRoot.querySelector('.keyboard-shortcut');
      expect(shortcut).toBeNull();
    });

    it('should not render modal when closed', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      const modal = page.root.shadowRoot.querySelector('.search-modal-overlay');
      expect(modal).toBeNull();
    });

    it('should render modal when open', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      const component = page.root;
      await component.open();
      await page.waitForChanges();

      const modal = page.root.shadowRoot.querySelector('.search-modal-overlay');
      expect(modal).toBeTruthy();
    });

    it('should render search input in modal', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      const component = page.root;
      await component.open();
      await page.waitForChanges();

      const input = page.root.shadowRoot.querySelector('.search-input');
      expect(input).toBeTruthy();
    });

    it('should render results container', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      const component = page.root;
      await component.open();
      await page.waitForChanges();

      const results = page.root.shadowRoot.querySelector('.search-modal-results');
      expect(results).toBeTruthy();
    });

    it('should render footer with keyboard hints', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      const component = page.root;
      await component.open();
      await page.waitForChanges();

      const footer = page.root.shadowRoot.querySelector('.search-modal-footer');
      const hints = page.root.shadowRoot.querySelector('.keyboard-hints');
      expect(footer).toBeTruthy();
      expect(hints).toBeTruthy();
    });
  });

  describe('Options Filtering', () => {
    const options = [
      { value: '1', title: 'Button Component', description: 'A clickable button element' },
      { value: '2', title: 'Input Component', description: 'Text input field' },
      { value: '3', title: 'Modal Component', description: 'Overlay dialog box' },
      { value: '4', title: 'Dropdown Component', description: 'Selection dropdown menu' },
    ];

    it('should display all options when search is empty', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      page.root.options = options;
      await page.waitForChanges();

      const component = page.rootInstance as SearchAnywhere;
      expect(component.filteredOptions.length).toBe(4);
    });

    it('should filter options by title', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      page.root.options = options;
      await page.waitForChanges();

      const component = page.rootInstance as SearchAnywhere;
      component.searchText = 'Button';
      await page.waitForChanges();

      expect(component.filteredOptions.length).toBe(1);
      expect(component.filteredOptions[0].title).toBe('Button Component');
    });

    it('should filter options by description', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      page.root.options = options;
      await page.waitForChanges();

      const component = page.rootInstance as SearchAnywhere;
      component.searchText = 'menu';
      await page.waitForChanges();

      expect(component.filteredOptions.length).toBe(1);
      expect(component.filteredOptions[0].title).toBe('Dropdown Component');
    });

    it('should filter case-insensitively', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      page.root.options = options;
      await page.waitForChanges();

      const component = page.rootInstance as SearchAnywhere;
      component.searchText = 'COMPONENT';
      await page.waitForChanges();

      expect(component.filteredOptions.length).toBe(4);
    });

    it('should handle no matches', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      page.root.options = options;
      await page.waitForChanges();

      const component = page.rootInstance as SearchAnywhere;
      component.searchText = 'nonexistent';
      await page.waitForChanges();

      expect(component.filteredOptions.length).toBe(0);
    });

    it('should limit results to maxResults', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere max-results="2"></bds-search-anywhere>`,
      });

      page.root.options = options;
      await page.waitForChanges();

      await page.root.open();
      await page.waitForChanges();

      const resultItems = page.root.shadowRoot.querySelectorAll('.search-result-item');
      expect(resultItems.length).toBe(2);
    });
  });

  describe('Methods', () => {
    it('should open modal with open method', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      const component = page.root;
      expect(component.shadowRoot.querySelector('.search-modal-overlay')).toBeNull();

      await component.open();
      await page.waitForChanges();

      expect(component.shadowRoot.querySelector('.search-modal-overlay')).toBeTruthy();
    });

    it('should close modal with close method', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      const component = page.root;
      await component.open();
      await page.waitForChanges();

      expect(component.shadowRoot.querySelector('.search-modal-overlay')).toBeTruthy();

      await component.close();
      await page.waitForChanges();

      expect(component.shadowRoot.querySelector('.search-modal-overlay')).toBeNull();
    });

    it('should reset search text on close', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      const component = page.root;
      const instance = page.rootInstance as SearchAnywhere;

      await component.open();
      await page.waitForChanges();

      instance.searchText = 'test search';
      await page.waitForChanges();

      await component.close();
      await page.waitForChanges();

      expect(instance.searchText).toBe('');
    });

    it('should reset selected index on close', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      const component = page.root;
      const instance = page.rootInstance as SearchAnywhere;

      await component.open();
      await page.waitForChanges();

      instance.selectedIndex = 5;
      await page.waitForChanges();

      await component.close();
      await page.waitForChanges();

      expect(instance.selectedIndex).toBe(-1);
    });
  });

  describe('Events', () => {
    it('should emit bdsSearchOpen when modal opens', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      const component = page.root;
      const spy = jest.fn();
      component.addEventListener('bdsSearchOpen', spy);

      await component.open();
      await page.waitForChanges();

      expect(spy).toHaveBeenCalled();
    });

    it('should emit bdsSearchClose when modal closes', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      const component = page.root;
      const spy = jest.fn();
      component.addEventListener('bdsSearchClose', spy);

      await component.open();
      await page.waitForChanges();

      await component.close();
      await page.waitForChanges();

      expect(spy).toHaveBeenCalled();
    });

    it('should emit bdsSearchChange when search text changes', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      const component = page.root;
      const instance = page.rootInstance as SearchAnywhere;
      const spy = jest.fn();
      component.addEventListener('bdsSearchChange', spy);

      instance.searchText = 'test';
      await page.waitForChanges();

      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: { searchText: 'test' },
        })
      );
    });
  });

  describe('Result Rendering', () => {
    const options = [
      { value: '1', title: 'Option 1', description: 'Description 1', icon: 'button' },
      { value: '2', title: 'Option 2', description: 'Description 2' },
      { value: '3', title: 'Option 3' },
    ];

    it('should render result items', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      page.root.options = options;
      await page.waitForChanges();

      await page.root.open();
      await page.waitForChanges();

      const resultItems = page.root.shadowRoot.querySelectorAll('.search-result-item');
      expect(resultItems.length).toBe(3);
    });

    it('should render result with icon', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      page.root.options = options;
      await page.waitForChanges();

      await page.root.open();
      await page.waitForChanges();

      const firstResult = page.root.shadowRoot.querySelector('.search-result-item');
      const icon = firstResult.querySelector('.search-result-icon');
      expect(icon).toBeTruthy();
    });

    it('should render result without icon', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      page.root.options = options;
      await page.waitForChanges();

      await page.root.open();
      await page.waitForChanges();

      const resultItems = page.root.shadowRoot.querySelectorAll('.search-result-item');
      const secondResult = resultItems[1];
      const icon = secondResult.querySelector('.search-result-icon');
      expect(icon).toBeNull();
    });

    it('should render result with description', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      page.root.options = options;
      await page.waitForChanges();

      await page.root.open();
      await page.waitForChanges();

      const firstResult = page.root.shadowRoot.querySelector('.search-result-item');
      const description = firstResult.querySelector('.search-result-description');
      expect(description).toBeTruthy();
    });

    it('should render result without description', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      page.root.options = options;
      await page.waitForChanges();

      await page.root.open();
      await page.waitForChanges();

      const resultItems = page.root.shadowRoot.querySelectorAll('.search-result-item');
      const thirdResult = resultItems[2];
      const description = thirdResult.querySelector('.search-result-description');
      expect(description).toBeNull();
    });

    it('should show no results message when search has no matches', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      page.root.options = options;
      await page.waitForChanges();

      const instance = page.rootInstance as SearchAnywhere;
      await page.root.open();
      instance.searchText = 'nonexistent';
      await page.waitForChanges();

      const noResults = page.root.shadowRoot.querySelector('.no-results');
      expect(noResults).toBeTruthy();
    });

    it('should show start typing message when search is empty', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      page.root.options = [];
      await page.waitForChanges();

      await page.root.open();
      await page.waitForChanges();

      const noResults = page.root.shadowRoot.querySelector('.no-results');
      expect(noResults).toBeTruthy();
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty options array', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      page.root.options = [];
      await page.waitForChanges();

      const instance = page.rootInstance as SearchAnywhere;
      expect(instance.filteredOptions.length).toBe(0);
    });

    it('should handle invalid JSON in options', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere options="invalid json"></bds-search-anywhere>`,
      });

      const instance = page.rootInstance as SearchAnywhere;
      expect(instance.filteredOptions.length).toBe(0);
    });

    it('should handle options with missing properties', async () => {
      const page = await newSpecPage({
        components: [SearchAnywhere],
        html: `<bds-search-anywhere></bds-search-anywhere>`,
      });

      page.root.options = [
        { value: '1', title: 'Complete' },
        { value: '2' } as any, // Missing title
      ];
      await page.waitForChanges();

      await page.root.open();
      await page.waitForChanges();

      // Should still render, just handle gracefully
      const resultItems = page.root.shadowRoot.querySelectorAll('.search-result-item');
      expect(resultItems.length).toBeGreaterThan(0);
    });
  });
});
