import { newE2EPage } from '@stencil/core/testing';

describe('bds-toast e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-toast 
          variant="info"
          icon="information"
          toast-title="Test Toast"
        >
          Toast message content
        </bds-toast>
      `,
    });
  });

  describe('Properties', () => {
    it('should render toast component', async () => {
      const toast = await page.find('bds-toast');
      expect(toast).toBeTruthy();
    });

    it('should accept variant property', async () => {
      const toast = await page.find('bds-toast');
      const variant = await toast.getProperty('variant');
      expect(variant).toBe('info');
    });

    it('should accept icon property', async () => {
      const toast = await page.find('bds-toast');
      const icon = await toast.getProperty('icon');
      expect(icon).toBe('information');
    });

    it('should accept toastTitle property', async () => {
      const toast = await page.find('bds-toast');
      const toastTitle = await toast.getProperty('toastTitle');
      expect(toastTitle).toBe('Test Toast');
    });
  });

  describe('Structure', () => {
    it('should have shadow DOM', async () => {
      const toast = await page.find('bds-toast');
      expect(toast.shadowRoot).toBeTruthy();
    });

    it('should display slotted content', async () => {
      const content = await page.evaluate(() => {
        const toast = document.querySelector('bds-toast');
        return toast.textContent;
      });
      expect(content.trim()).toBe('Toast message content');
    });
  });

  describe('Property Changes', () => {
    it('should update variant', async () => {
      const toast = await page.find('bds-toast');
      await toast.setProperty('variant', 'success');
      await page.waitForChanges();
      
      const variant = await toast.getProperty('variant');
      expect(variant).toBe('success');
    });

    it('should update icon', async () => {
      const toast = await page.find('bds-toast');
      await toast.setProperty('icon', 'check');
      await page.waitForChanges();
      
      const icon = await toast.getProperty('icon');
      expect(icon).toBe('check');
    });
  });

  describe('Default Properties', () => {
    it('should handle toast without properties', async () => {
      const page = await newE2EPage({
        html: `<bds-toast>Simple toast</bds-toast>`,
      });
      
      const toast = await page.find('bds-toast');
      expect(toast).toBeTruthy();
    });
  });
});