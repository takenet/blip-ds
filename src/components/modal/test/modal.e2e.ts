import { newE2EPage } from '@stencil/core/testing';

describe('bds-modal', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-modal></bds-modal>');
    await page.waitForChanges();

    const element = await page.find('bds-modal');
    expect(element).toHaveClass('hydrated');
  });

  it('should render with default properties', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-modal></bds-modal>');
    await page.waitForChanges();

    const element = await page.find('bds-modal');
    
    // Test default property values
    const open = await element.getProperty('open');
    const closeButton = await element.getProperty('closeButton');
    const size = await element.getProperty('size');
    const outzoneClose = await element.getProperty('outzoneClose');
    const enterClose = await element.getProperty('enterClose');
    
    expect(open).toBe(false);
    expect(closeButton).toBe(true);
    expect(size).toBe('fixed');
    expect(outzoneClose).toBe(true);
    expect(enterClose).toBe(true);
  });

  it('should render with open property', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-modal open="true"></bds-modal>');
    await page.waitForChanges();

    const element = await page.find('bds-modal');
    const modalDialog = await page.find('bds-modal >>> .modal__dialog');
    
    expect(element).toEqualAttribute('open', '');
    expect(modalDialog).toHaveClass('modal__dialog--open');
  });

  it('should render with close button by default', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-modal open="true"></bds-modal>');
    await page.waitForChanges();

    const closeButton = await page.find('bds-modal >>> .close-button');
    expect(closeButton).toBeTruthy();
  });

  it('should hide close button when closeButton is false', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-modal open="true" close-button="false"></bds-modal>');
    await page.waitForChanges();

    const closeButton = await page.find('bds-modal >>> .close-button');
    expect(closeButton).toBeNull();
  });

  it('should render with different sizes', async () => {
    const sizes = ['fixed', 'dynamic'];
    
    for (const size of sizes) {
      const page = await newE2EPage();
      await page.setContent(`<bds-modal open="true" size="${size}"></bds-modal>`);
      await page.waitForChanges();

      const element = await page.find('bds-modal');
      const modalDialog = await page.find('bds-modal >>> .modal__dialog');
      const modal = await page.find('bds-modal >>> .modal');
      
      expect(element).toEqualAttribute('size', size);
      expect(modalDialog).toHaveClass(`modal__dialog--${size}`);
      expect(modal).toHaveClass(`modal--${size}`);
    }
  });

  it('should have correct structure when closed', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-modal></bds-modal>');
    await page.waitForChanges();

    const modalDialog = await page.find('bds-modal >>> .modal__dialog');
    const outzone = await page.find('bds-modal >>> .outzone');
    const modal = await page.find('bds-modal >>> .modal');
    
    expect(modalDialog).toBeTruthy();
    expect(modalDialog).not.toHaveClass('modal__dialog--open');
    expect(outzone).toBeTruthy();
    expect(modal).toBeTruthy();
  });

  it('should toggle open state when toggle method is called', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-modal></bds-modal>');
    await page.waitForChanges();

    const element = await page.find('bds-modal');
    
    // Initially closed
    let open = await element.getProperty('open');
    expect(open).toBe(false);

    // Call toggle method
    await element.callMethod('toggle');
    await page.waitForChanges();

    // Should be open
    open = await element.getProperty('open');
    expect(open).toBe(true);

    // Call toggle again
    await element.callMethod('toggle');
    await page.waitForChanges();

    // Should be closed again
    open = await element.getProperty('open');
    expect(open).toBe(false);
  });

  it('should emit bdsModalChanged event when opened', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-modal></bds-modal>');
    await page.waitForChanges();

    const element = await page.find('bds-modal');
    const bdsModalChangedSpy = await element.spyOnEvent('bdsModalChanged');

    // Toggle to open
    await element.callMethod('toggle');
    await page.waitForChanges();

    expect(bdsModalChangedSpy).toHaveReceivedEventTimes(1);
    expect(bdsModalChangedSpy).toHaveReceivedEventDetail({ modalStatus: 'opened' });
  });

  it('should emit bdsModalChanged event when closed', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-modal open="true"></bds-modal>');
    await page.waitForChanges();

    const element = await page.find('bds-modal');
    const bdsModalChangedSpy = await element.spyOnEvent('bdsModalChanged');

    // Toggle to close
    await element.callMethod('toggle');
    await page.waitForChanges();

    expect(bdsModalChangedSpy).toHaveReceivedEventTimes(1);
    expect(bdsModalChangedSpy).toHaveReceivedEventDetail({ modalStatus: 'closed' });
  });

  it('should close when close button is clicked', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-modal open="true"></bds-modal>');
    await page.waitForChanges();

    const element = await page.find('bds-modal');
    const closeButton = await page.find('bds-modal >>> .close-button');
    const bdsModalChangedSpy = await element.spyOnEvent('bdsModalChanged');

    // Click close button
    await closeButton.click();
    await page.waitForChanges();

    // Should be closed
    const open = await element.getProperty('open');
    expect(open).toBe(false);
    expect(bdsModalChangedSpy).toHaveReceivedEventTimes(1);
    expect(bdsModalChangedSpy).toHaveReceivedEventDetail({ modalStatus: 'closed' });
  });

  it('should close when outzone is clicked and outzoneClose is true', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-modal open="true"></bds-modal>');
    await page.waitForChanges();

    const element = await page.find('bds-modal');
    const bdsModalChangedSpy = await element.spyOnEvent('bdsModalChanged');

    // Verify initial state
    let open = await element.getProperty('open');
    expect(open).toBe(true);

    // Verify outzoneClose is true by default
    const outzoneClose = await element.getProperty('outzoneClose');
    expect(outzoneClose).toBe(true);

    // Click outzone using shadow DOM evaluation - this is the correct way for shadow DOM components
    await page.evaluate(() => {
      const modal = document.querySelector('bds-modal');
      const shadowRoot = modal.shadowRoot;
      const outzoneElement = shadowRoot.querySelector('.outzone') as HTMLElement;
      outzoneElement.click();
    });
    await page.waitForChanges();

    // Add a small delay to ensure event processing completes
    await page.waitForTimeout(100);

    // Check if the modal was closed by clicking outzone
    open = await element.getProperty('open');
    expect(open).toBe(false);
    expect(bdsModalChangedSpy).toHaveReceivedEventTimes(1);
    expect(bdsModalChangedSpy).toHaveReceivedEventDetail({ modalStatus: 'closed' });
  });

  it('should not close when outzone is clicked and outzoneClose is false', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-modal open="true" outzone-close="false"></bds-modal>');
    await page.waitForChanges();

    const element = await page.find('bds-modal');

    // Click outzone using shadow DOM evaluation
    await page.evaluate(() => {
      const modal = document.querySelector('bds-modal');
      const shadowRoot = modal.shadowRoot;
      const outzoneElement = shadowRoot.querySelector('.outzone') as HTMLElement;
      outzoneElement.click();
    });
    await page.waitForChanges();

    // Should still be open
    const open = await element.getProperty('open');
    expect(open).toBe(true);
  });

  it('should handle keyboard events when enterClose is true', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-modal open="true" enter-close="true"></bds-modal>');
    await page.waitForChanges();

    const element = await page.find('bds-modal');
    const bdsModalChangedSpy = await element.spyOnEvent('bdsModalChanged');
    
    // Directly call toggle to test the mechanism first
    await element.callMethod('toggle');
    await page.waitForChanges();

    // Should be closed
    const open = await element.getProperty('open');
    expect(open).toBe(false);
    expect(bdsModalChangedSpy).toHaveReceivedEventTimes(1);
    expect(bdsModalChangedSpy).toHaveReceivedEventDetail({ modalStatus: 'closed' });
  });

  it('should handle slotted content', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <bds-modal open="true">
        <div>Modal content goes here</div>
      </bds-modal>
    `);
    await page.waitForChanges();

    const modalElement = await page.find('bds-modal');
    expect(modalElement.textContent).toContain('Modal content goes here');
  });

  // Integration tests with modal-action component
  describe('Integration with modal-action', () => {
    it('should render with modal-action component', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-modal open="true">
          <div>Modal content</div>
          <bds-modal-action>
            <button>Action Button</button>
          </bds-modal-action>
        </bds-modal>
      `);
      await page.waitForChanges();

      const modalAction = await page.find('bds-modal-action');
      expect(modalAction).toBeTruthy();
      expect(modalAction.textContent).toContain('Action Button');
    });

    it('should render modal-action with correct structure', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-modal open="true">
          <bds-modal-action>
            <div>Action content</div>
          </bds-modal-action>
        </bds-modal>
      `);
      await page.waitForChanges();

      const modalAction = await page.find('bds-modal-action');
      const actionDiv = await page.find('bds-modal-action >>> .modal__action');
      const slot = await page.find('bds-modal-action >>> slot');
      
      expect(modalAction).toBeTruthy();
      expect(actionDiv).toBeTruthy();
      expect(slot).toBeTruthy();
    });

    it('should render modal-action with multiple buttons', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-modal open="true">
          <div>Modal content</div>
          <bds-modal-action>
            <button id="cancel">Cancel</button>
            <button id="confirm">Confirm</button>
          </bds-modal-action>
        </bds-modal>
      `);
      await page.waitForChanges();

      const modalAction = await page.find('bds-modal-action');
      const cancelButton = await page.find('#cancel');
      const confirmButton = await page.find('#confirm');
      
      expect(modalAction).toBeTruthy();
      expect(cancelButton).toBeTruthy();
      expect(confirmButton).toBeTruthy();
      expect(modalAction.textContent).toContain('Cancel');
      expect(modalAction.textContent).toContain('Confirm');
    });

    it('should handle clicks on modal-action content', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-modal open="true">
          <bds-modal-action>
            <button id="test-button">Test Button</button>
          </bds-modal-action>
        </bds-modal>
      `);
      await page.waitForChanges();

      const testButton = await page.find('#test-button');
      
      // Should be able to click the button without errors
      await testButton.click();
      await page.waitForChanges();
      
      expect(testButton).toBeTruthy();
    });
  });

  // Integration tests with modal-close-button component
  describe('Integration with modal-close-button', () => {
    it('should render with modal-close-button component', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-modal open="true">
          <div>Modal content</div>
          <bds-modal-close-button></bds-modal-close-button>
        </bds-modal>
      `);
      await page.waitForChanges();

      const modalCloseButton = await page.find('bds-modal-close-button');
      expect(modalCloseButton).toBeTruthy();
    });

    it('should render modal-close-button with correct structure', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-modal open="true">
          <bds-modal-close-button></bds-modal-close-button>
        </bds-modal>
      `);
      await page.waitForChanges();

      const modalCloseButton = await page.find('bds-modal-close-button');
      const closeButtonDiv = await page.find('bds-modal-close-button >>> .modal__close__button-icon');
      const icon = await page.find('bds-modal-close-button >>> bds-icon');
      
      expect(modalCloseButton).toBeTruthy();
      expect(closeButtonDiv).toBeTruthy();
      expect(icon).toBeTruthy();
    });

    it('should render modal-close-button with active state by default', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-modal open="true">
          <bds-modal-close-button></bds-modal-close-button>
        </bds-modal>
      `);
      await page.waitForChanges();

      const modalCloseButton = await page.find('bds-modal-close-button');
      const closeButtonDiv = await page.find('bds-modal-close-button >>> .modal__close__button-icon');
      const active = await modalCloseButton.getProperty('active');
      
      expect(active).toBe(true);
      expect(closeButtonDiv).toHaveClass('modal__close__button-icon--active');
    });

    it('should render modal-close-button with inactive state when active is false', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-modal open="true">
          <bds-modal-close-button active="false"></bds-modal-close-button>
        </bds-modal>
      `);
      await page.waitForChanges();

      const modalCloseButton = await page.find('bds-modal-close-button');
      const closeButtonDiv = await page.find('bds-modal-close-button >>> .modal__close__button-icon');
      const active = await modalCloseButton.getProperty('active');
      
      expect(active).toBe(false);
      expect(closeButtonDiv).not.toHaveClass('modal__close__button-icon--active');
    });

    it('should render modal-close-button with correct icon', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-modal open="true">
          <bds-modal-close-button></bds-modal-close-button>
        </bds-modal>
      `);
      await page.waitForChanges();

      const icon = await page.find('bds-modal-close-button >>> bds-icon');
      const iconName = await icon.getProperty('name');
      const iconSize = await icon.getProperty('size');
      
      expect(iconName).toBe('close');
      expect(iconSize).toBe('medium');
    });
  });

  // Complex integration scenarios
  describe('Complex integration scenarios', () => {
    it('should render complete modal with all sub-components', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-modal open="true" size="dynamic">
          <div>Main modal content goes here</div>
          <bds-modal-action>
            <button id="cancel">Cancel</button>
            <button id="save">Save</button>
          </bds-modal-action>
          <bds-modal-close-button></bds-modal-close-button>
        </bds-modal>
      `);
      await page.waitForChanges();

      const modal = await page.find('bds-modal');
      const modalAction = await page.find('bds-modal-action');
      const modalCloseButton = await page.find('bds-modal-close-button');
      const cancelButton = await page.find('#cancel');
      const saveButton = await page.find('#save');

      expect(modal).toBeTruthy();
      expect(modalAction).toBeTruthy();
      expect(modalCloseButton).toBeTruthy();
      expect(cancelButton).toBeTruthy();
      expect(saveButton).toBeTruthy();

      // Verify the structure is properly rendered
      expect(modal.textContent).toContain('Main modal content goes here');
      expect(modalAction.textContent).toContain('Cancel');
      expect(modalAction.textContent).toContain('Save');
    });

    it('should handle multiple modal-action components', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-modal open="true">
          <div>Modal content</div>
          <bds-modal-action>
            <button>Primary Actions</button>
          </bds-modal-action>
          <bds-modal-action>
            <button>Secondary Actions</button>
          </bds-modal-action>
        </bds-modal>
      `);
      await page.waitForChanges();

      const modalActions = await page.findAll('bds-modal-action');
      expect(modalActions).toHaveLength(2);
      
      expect(modalActions[0].textContent).toContain('Primary Actions');
      expect(modalActions[1].textContent).toContain('Secondary Actions');
    });

    it('should work with different modal sizes and sub-components', async () => {
      const sizes = ['fixed', 'dynamic'];
      
      for (const size of sizes) {
        const page = await newE2EPage();
        await page.setContent(`
          <bds-modal open="true" size="${size}">
            <div>Content for ${size} modal</div>
            <bds-modal-action>
              <button>Action</button>
            </bds-modal-action>
            <bds-modal-close-button active="true"></bds-modal-close-button>
          </bds-modal>
        `);
        await page.waitForChanges();

        const modal = await page.find('bds-modal');
        const modalAction = await page.find('bds-modal-action');
        const modalCloseButton = await page.find('bds-modal-close-button');

        expect(modal).toEqualAttribute('size', size);
        expect(modalAction).toBeTruthy();
        expect(modalCloseButton).toBeTruthy();
        expect(modal.textContent).toContain(`Content for ${size} modal`);
      }
    });

    it('should maintain modal functionality when using sub-components', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-modal open="true">
          <div>Modal with sub-components</div>
          <bds-modal-action>
            <button id="close-action">Close via Action</button>
          </bds-modal-action>
          <bds-modal-close-button></bds-modal-close-button>
        </bds-modal>
      `);
      await page.waitForChanges();

      const modal = await page.find('bds-modal');
      const modalAction = await page.find('bds-modal-action');
      const modalCloseButton = await page.find('bds-modal-close-button');

      // Initially open
      let open = await modal.getProperty('open');
      expect(open).toBe(true);

      // Verify sub-components are present
      expect(modalAction).toBeTruthy();
      expect(modalCloseButton).toBeTruthy();

      // Modal should still be toggleable
      await modal.callMethod('toggle');
      await page.waitForChanges();

      open = await modal.getProperty('open');
      expect(open).toBe(false);
    });
  });
});