import { newE2EPage } from '@stencil/core/testing';

describe('bds-search-anywhere e2e', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
    await page.waitForChanges();

    const element = await page.find('bds-search-anywhere');
    expect(element).toHaveClass('hydrated');
  });

  it('should render with default properties', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
    await page.waitForChanges();

    const element = await page.find('bds-search-anywhere');
    const isOpen = await element.callMethod('getIsOpen');
    const showShortcut = await element.getProperty('showShortcut');
    const maxResults = await element.getProperty('maxResults');

    expect(isOpen).toBe(false);
    expect(showShortcut).toBe(true);
    expect(maxResults).toBe(10);
  });

  describe('Trigger Behavior', () => {
    it('should render trigger element', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const trigger = await page.find('bds-search-anywhere >>> .search-trigger');
      expect(trigger).toBeTruthy();
    });

    it('should open modal when trigger is clicked', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');

      // Click the trigger
      await page.evaluate(() => {
        const searchAnywhere = document.querySelector('bds-search-anywhere');
        const trigger = searchAnywhere.shadowRoot.querySelector('.search-trigger') as HTMLElement;
        trigger.click();
      });
      await page.waitForChanges();

      const isOpen = await element.callMethod('getIsOpen');
      expect(isOpen).toBe(true);

      const modal = await page.find('bds-search-anywhere >>> .search-modal-overlay');
      expect(modal).toBeTruthy();
    });

    it('should render keyboard shortcut hint', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const shortcut = await page.find('bds-search-anywhere >>> .keyboard-shortcut');
      expect(shortcut).toBeTruthy();
    });

    it('should not render keyboard shortcut when showShortcut is false', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere show-shortcut="false"></bds-search-anywhere>');
      await page.waitForChanges();

      const shortcut = await page.find('bds-search-anywhere >>> .keyboard-shortcut');
      expect(shortcut).toBeNull();
    });
  });

  describe('Modal Behavior', () => {
    it('should not show modal initially', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const modal = await page.find('bds-search-anywhere >>> .search-modal-overlay');
      expect(modal).toBeNull();
    });

    it('should show modal when opened via method', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      await element.callMethod('open');
      await page.waitForChanges();

      const modal = await page.find('bds-search-anywhere >>> .search-modal-overlay');
      expect(modal).toBeTruthy();
    });

    it('should close modal when closed via method', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');

      // Open first
      await element.callMethod('open');
      await page.waitForChanges();

      let modal = await page.find('bds-search-anywhere >>> .search-modal-overlay');
      expect(modal).toBeTruthy();

      // Then close
      await element.callMethod('close');
      await page.waitForChanges();

      modal = await page.find('bds-search-anywhere >>> .search-modal-overlay');
      expect(modal).toBeNull();
    });

    it('should render search input in modal', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      await element.callMethod('open');
      await page.waitForChanges();

      const input = await page.find('bds-search-anywhere >>> .search-input');
      expect(input).toBeTruthy();
    });

    it('should render results container', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      await element.callMethod('open');
      await page.waitForChanges();

      const results = await page.find('bds-search-anywhere >>> .search-modal-results');
      expect(results).toBeTruthy();
    });

    it('should render footer with keyboard hints', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      await element.callMethod('open');
      await page.waitForChanges();

      const footer = await page.find('bds-search-anywhere >>> .search-modal-footer');
      expect(footer).toBeTruthy();
    });

    it('should close modal when backdrop is clicked', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      await element.callMethod('open');
      await page.waitForChanges();

      // Click the overlay backdrop
      await page.evaluate(() => {
        const searchAnywhere = document.querySelector('bds-search-anywhere');
        const overlay = searchAnywhere.shadowRoot.querySelector('.search-modal-overlay') as HTMLElement;
        overlay.click();
      });
      await page.waitForChanges();

      const isOpen = await element.callMethod('getIsOpen');
      expect(isOpen).toBe(false);
    });
  });

  describe('Search Functionality', () => {
    const options = [
      { value: '1', title: 'Button Component', description: 'A clickable button element', icon: 'button' },
      { value: '2', title: 'Input Component', description: 'Text input field', icon: 'input' },
      { value: '3', title: 'Modal Component', description: 'Overlay dialog box', icon: 'modal' },
    ];

    it('should display options when modal is open', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      element.setProperty('options', options);
      await page.waitForChanges();

      await element.callMethod('open');
      await page.waitForChanges();

      const resultItems = await page.findAll('bds-search-anywhere >>> .search-result-item');
      expect(resultItems.length).toBe(3);
    });

    it('should update filtered results when searching', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      element.setProperty('options', options);
      await page.waitForChanges();

      await element.callMethod('open');
      await page.waitForChanges();

      // Type in search input
      const input = await page.find('bds-search-anywhere >>> .search-input');
      await input.type('Button');
      await page.waitForChanges();

      const resultItems = await page.findAll('bds-search-anywhere >>> .search-result-item');
      expect(resultItems.length).toBe(1);
    });

    it('should show no results message when no matches', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      element.setProperty('options', options);
      await page.waitForChanges();

      await element.callMethod('open');
      await page.waitForChanges();

      const input = await page.find('bds-search-anywhere >>> .search-input');
      await input.type('nonexistent');
      await page.waitForChanges();

      const noResults = await page.find('bds-search-anywhere >>> .no-results');
      expect(noResults).toBeTruthy();
    });

    it('should limit results to maxResults', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere max-results="2"></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      element.setProperty('options', options);
      await page.waitForChanges();

      await element.callMethod('open');
      await page.waitForChanges();

      const resultItems = await page.findAll('bds-search-anywhere >>> .search-result-item');
      expect(resultItems.length).toBe(2);
    });
  });

  describe('Events', () => {
    it('should emit bdsSearchOpen when modal opens', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      const spy = await element.spyOnEvent('bdsSearchOpen');

      await element.callMethod('open');
      await page.waitForChanges();

      expect(spy).toHaveReceivedEventTimes(1);
    });

    it('should emit bdsSearchClose when modal closes', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      const spy = await element.spyOnEvent('bdsSearchClose');

      await element.callMethod('open');
      await page.waitForChanges();

      await element.callMethod('close');
      await page.waitForChanges();

      expect(spy).toHaveReceivedEventTimes(1);
    });

    it('should emit bdsSearchChange when search text changes', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      const spy = await element.spyOnEvent('bdsSearchChange');

      await element.callMethod('open');
      await page.waitForChanges();

      const input = await page.find('bds-search-anywhere >>> .search-input');
      await input.type('test');
      await page.waitForChanges();

      expect(spy).toHaveReceivedEventTimes(4); // One for each character typed
    });

    it('should emit bdsSearchSelect when option is clicked', async () => {
      const page = await newE2EPage();
      const options = [{ value: '1', title: 'Test Option', description: 'Test description' }];

      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      element.setProperty('options', options);
      await page.waitForChanges();

      const spy = await element.spyOnEvent('bdsSearchSelect');

      await element.callMethod('open');
      await page.waitForChanges();

      // Click the first result
      await page.evaluate(() => {
        const searchAnywhere = document.querySelector('bds-search-anywhere');
        const firstResult = searchAnywhere.shadowRoot.querySelector('.search-result-item') as HTMLElement;
        firstResult.click();
      });
      await page.waitForChanges();

      expect(spy).toHaveReceivedEventTimes(1);
    });
  });

  describe('Keyboard Navigation', () => {
    const options = [
      { value: '1', title: 'Option 1' },
      { value: '2', title: 'Option 2' },
      { value: '3', title: 'Option 3' },
    ];

    it('should have no selection initially when modal opens', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      element.setProperty('options', options);
      await page.waitForChanges();

      await element.callMethod('open');
      await page.waitForChanges();

      const selectedIndex = await element.callMethod('getSelectedIndex');
      expect(selectedIndex).toBe(-1);
    });

    it('should navigate down with ArrowDown key', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      element.setProperty('options', options);
      await page.waitForChanges();

      await element.callMethod('open');
      await page.waitForChanges();

      // Press ArrowDown - should select first item (index 0)
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();

      const selectedIndex = await element.callMethod('getSelectedIndex');
      expect(selectedIndex).toBe(0);
    });

    it('should start at last item when pressing ArrowUp from no selection', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      element.setProperty('options', options);
      await page.waitForChanges();

      await element.callMethod('open');
      await page.waitForChanges();

      // Press ArrowUp from no selection - should go to last item
      await page.keyboard.press('ArrowUp');
      await page.waitForChanges();

      const selectedIndex = await element.callMethod('getSelectedIndex');
      expect(selectedIndex).toBe(2);
    });

    it('should navigate up with ArrowUp key', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      element.setProperty('options', options);
      await page.waitForChanges();

      await element.callMethod('open');
      await page.waitForChanges();

      // Navigate down first to index 0
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();

      // Then up - should wrap to last item (index 2)
      await page.keyboard.press('ArrowUp');
      await page.waitForChanges();

      const selectedIndex = await element.callMethod('getSelectedIndex');
      expect(selectedIndex).toBe(2);
    });

    it('should wrap around when navigating past end', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      element.setProperty('options', options);
      await page.waitForChanges();

      await element.callMethod('open');
      await page.waitForChanges();

      // Navigate down 4 times (0 -> 1 -> 2 -> 0, wraps to first)
      await page.keyboard.press('ArrowDown'); // 0
      await page.keyboard.press('ArrowDown'); // 1
      await page.keyboard.press('ArrowDown'); // 2
      await page.keyboard.press('ArrowDown'); // wraps to 0
      await page.waitForChanges();

      const selectedIndex = await element.callMethod('getSelectedIndex');
      expect(selectedIndex).toBe(0);
    });

    it('should close modal with Escape key', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      await element.callMethod('open');
      await page.waitForChanges();

      await page.keyboard.press('Escape');
      await page.waitForChanges();

      const isOpen = await element.callMethod('getIsOpen');
      expect(isOpen).toBe(false);
    });

    it('should select option with Enter key', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      element.setProperty('options', options);
      await page.waitForChanges();

      const spy = await element.spyOnEvent('bdsSearchSelect');

      await element.callMethod('open');
      await page.waitForChanges();

      // Press ArrowDown to select first item
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();

      // Then press Enter
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      expect(spy).toHaveReceivedEventTimes(1);
    });

    it('should select first option when pressing Enter without selection', async () => {
      const page = await newE2EPage();
      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      element.setProperty('options', options);
      await page.waitForChanges();

      const spy = await element.spyOnEvent('bdsSearchSelect');

      await element.callMethod('open');
      await page.waitForChanges();

      // Press Enter without selecting any item first
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      expect(spy).toHaveReceivedEventTimes(1);
      const eventDetail = spy.firstEvent.detail;
      expect(eventDetail.option.value).toBe('1'); // Should select first option
    });
  });

  describe('Result Display', () => {
    it('should render result with icon', async () => {
      const page = await newE2EPage();
      const options = [{ value: '1', title: 'Test', icon: 'button' }];

      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      element.setProperty('options', options);
      await page.waitForChanges();

      await element.callMethod('open');
      await page.waitForChanges();

      const icon = await page.find('bds-search-anywhere >>> .search-result-icon');
      expect(icon).toBeTruthy();
    });

    it('should render result without icon', async () => {
      const page = await newE2EPage();
      const options = [{ value: '1', title: 'Test' }];

      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      element.setProperty('options', options);
      await page.waitForChanges();

      await element.callMethod('open');
      await page.waitForChanges();

      const icon = await page.find('bds-search-anywhere >>> .search-result-icon');
      expect(icon).toBeNull();
    });

    it('should render result with description', async () => {
      const page = await newE2EPage();
      const options = [{ value: '1', title: 'Test', description: 'Test description' }];

      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      element.setProperty('options', options);
      await page.waitForChanges();

      await element.callMethod('open');
      await page.waitForChanges();

      const description = await page.find('bds-search-anywhere >>> .search-result-description');
      expect(description).toBeTruthy();
    });

    it('should highlight selected result', async () => {
      const page = await newE2EPage();
      const options = [
        { value: '1', title: 'Option 1' },
        { value: '2', title: 'Option 2' },
      ];

      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      element.setProperty('options', options);
      await page.waitForChanges();

      await element.callMethod('open');
      await page.waitForChanges();

      // Press ArrowDown to select first item
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();

      const firstResult = await page.find('bds-search-anywhere >>> .search-result-item');
      expect(firstResult).toHaveClass('search-result-item--selected');
    });
  });

  describe('Integration Tests', () => {
    it('should handle complete user flow', async () => {
      const page = await newE2EPage();
      const options = [
        { value: '1', title: 'Button Component', description: 'Clickable button' },
        { value: '2', title: 'Input Component', description: 'Text input field' },
      ];

      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      element.setProperty('options', options);
      await page.waitForChanges();

      // Open modal
      await element.callMethod('open');
      await page.waitForChanges();

      // Type search text
      const input = await page.find('bds-search-anywhere >>> .search-input');
      await input.type('Button');
      await page.waitForChanges();

      // Verify filtered results
      const resultItems = await page.findAll('bds-search-anywhere >>> .search-result-item');
      expect(resultItems.length).toBe(1);

      // Press ArrowDown to select the filtered result
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();

      // Select result with Enter
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      // Modal should be closed
      const isOpen = await element.callMethod('getIsOpen');
      expect(isOpen).toBe(false);
    });

    it('should reset state when modal closes and reopens', async () => {
      const page = await newE2EPage();
      const options = [
        { value: '1', title: 'Option 1' },
        { value: '2', title: 'Option 2' },
      ];

      await page.setContent('<bds-search-anywhere></bds-search-anywhere>');
      await page.waitForChanges();

      const element = await page.find('bds-search-anywhere');
      element.setProperty('options', options);
      await page.waitForChanges();

      // Open and type
      await element.callMethod('open');
      await page.waitForChanges();

      const input = await page.find('bds-search-anywhere >>> .search-input');
      await input.type('test');
      await page.waitForChanges();

      // Close
      await element.callMethod('close');
      await page.waitForChanges();

      // Reopen
      await element.callMethod('open');
      await page.waitForChanges();

      // Search text should be reset
      const searchText = await element.callMethod('getSearchText');
      expect(searchText).toBe('');
    });
  });
});
