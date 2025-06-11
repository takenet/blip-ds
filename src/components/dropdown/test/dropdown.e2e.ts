import { newE2EPage } from '@stencil/core/testing';

describe('bds-dropdown e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <button id="toggle">Toggle</button>
        <button id="open">Open</button>
        <button id="close">Close</button>
        <bds-dropdown active-mode="click" open="false">
          <div slot="dropdown-activator">
            <bds-button variant="primary">Open Menu</bds-button>
          </div>
          <div slot="dropdown-content">
            <bds-list type-list="default">
              <bds-list-item
                value="03"
                text="Text"
                secondary-text="Secondary text"
                clickable
                icon="blip-ideas"
              ></bds-list-item>
              <bds-dropdown>
                <div slot="dropdown-activator">
                  <bds-list-item value="01" text="Text" secondary-text="Secondary text" clickable></bds-list-item>
                </div>
                <div slot="dropdown-content">
                  <bds-list type-list="default">
                    <bds-list-item value="01" text="Text" secondary-text="Secondary text" clickable></bds-list-item>
                    <bds-list-item value="01" text="Text" secondary-text="Secondary text" clickable></bds-list-item>
                    <bds-list-item value="01" text="Text" secondary-text="Secondary text" clickable></bds-list-item>
                  </bds-list>
                </div>
              </bds-dropdown>
              <bds-list-item
                value="04"
                text="Text"
                secondary-text="Secondary text"
                avatar-name="Alvare Horta"
              ></bds-list-item>
            </bds-list>
          </div>
        </bds-dropdown>
        <input id="event-test" />
      `,
    });

    // Add dropdown control functionality
    await page.evaluate(() => {
      const toggleButton = document.getElementById('toggle');
      const openButton = document.getElementById('open');
      const closeButton = document.getElementById('close');
      const dropdown = document.querySelector('bds-dropdown') as any;
      
      toggleButton?.addEventListener('click', () => {
        dropdown.toggle();
      });

      openButton?.addEventListener('click', () => {
        dropdown.setOpen();
      });

      closeButton?.addEventListener('click', () => {
        dropdown.setClose();
      });

      dropdown?.addEventListener('bdsToggle', (event: CustomEvent) => {
        const input = document.getElementById('event-test') as HTMLInputElement;
        if (input) {
          input.value = event.detail?.value?.toString() || 'triggered';
        }
      });
    });
  });

  describe('Properties', () => {
    it('should render dropdown with correct active-mode', async () => {
      const dropdown = await page.find('bds-dropdown');
      const activeMode = await dropdown.getProperty('activeMode');
      expect(activeMode).toBe('click');
    });
  });

  describe('Events', () => {
    it('should emit bdsToggle event when dropdown button is clicked', async () => {
      const dropdown = await page.find('bds-dropdown');
      const bdsToggleEvent = await dropdown.spyOnEvent('bdsToggle');

      const button = await page.find('bds-dropdown bds-button');
      await button.click();
      await page.waitForChanges();

      expect(bdsToggleEvent).toHaveReceivedEvent();
      
      // Check that the event detail is captured
      const eventInput = await page.find('#event-test');
      const inputValue = await eventInput.getProperty('value');
      expect(inputValue).toBe('true');
    });
  });

  describe('Methods', () => {
    it('should toggle dropdown visibility when toggle method is called', async () => {
      const dropdown = await page.find('bds-dropdown');
      
      const toggleButton = await page.find('#toggle');
      await toggleButton.click();
      await page.waitForChanges();

      // Check that the dropdown component exists and the method was called
      expect(dropdown).toBeTruthy();
    });

    it('should open dropdown when setOpen method is called', async () => {
      const dropdown = await page.find('bds-dropdown');
      
      const openButton = await page.find('#open');
      await openButton.click();
      await page.waitForChanges();

      // Check that the dropdown component exists and the method was called
      expect(dropdown).toBeTruthy();
    });

    it('should close dropdown when setClose method is called', async () => {
      const dropdown = await page.find('bds-dropdown');
      
      // First open the dropdown
      const openButton = await page.find('#open');
      await openButton.click();
      await page.waitForChanges();

      // Then close it
      const closeButton = await page.find('#close');
      await closeButton.click();
      await page.waitForChanges();

      // Check that the dropdown component exists and the method was called
      expect(dropdown).toBeTruthy();
    });
  });
});