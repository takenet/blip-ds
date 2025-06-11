import { newE2EPage } from '@stencil/core/testing';

describe('bds-modal e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-modal open="false">
          <bds-button slot="modal-header">Header Button</bds-button>
          <div slot="modal-body">Modal content goes here</div>
          <bds-button slot="modal-footer">Footer Button</bds-button>
        </bds-modal>
      `,
    });
  });

  describe('Properties', () => {
    it('should render modal with correct open state', async () => {
      const modal = await page.find('bds-modal');
      const open = await modal.getProperty('open');
      expect(open).toBe(false);
    });

    it('should render modal with slotted content', async () => {
      const headerButton = await page.find('bds-button[slot="modal-header"]');
      const bodyContent = await page.find('div[slot="modal-body"]');
      const footerButton = await page.find('bds-button[slot="modal-footer"]');

      expect(headerButton).toBeTruthy();
      expect(bodyContent).toBeTruthy();
      expect(footerButton).toBeTruthy();
    });
  });

  describe('Interactions', () => {
    it('should allow modal to be opened', async () => {
      const modal = await page.find('bds-modal');

      await modal.setProperty('open', true);
      await page.waitForChanges();

      const open = await modal.getProperty('open');
      expect(open).toBe(true);
    });

    it('should allow modal to be closed', async () => {
      const modal = await page.find('bds-modal');

      // First open the modal
      await modal.setProperty('open', true);
      await page.waitForChanges();

      // Then close it
      await modal.setProperty('open', false);
      await page.waitForChanges();

      const open = await modal.getProperty('open');
      expect(open).toBe(false);
    });
  });

  describe('State Changes', () => {
    it('should handle modal open state changes', async () => {
      const modal = await page.find('bds-modal');

      // Check initial state
      let open = await modal.getProperty('open');
      expect(open).toBe(false);

      // Change to open
      await modal.setProperty('open', true);
      await page.waitForChanges();

      open = await modal.getProperty('open');
      expect(open).toBe(true);

      // Change back to closed
      await modal.setProperty('open', false);
      await page.waitForChanges();

      open = await modal.getProperty('open');
      expect(open).toBe(false);
    });
  });
});