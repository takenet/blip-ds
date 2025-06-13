import { newE2EPage } from '@stencil/core/testing';

describe('bds-toast-container e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-toast-container>
          <bds-toast>Toast 1</bds-toast>
          <bds-toast>Toast 2</bds-toast>
        </bds-toast-container>
      `,
    });
  });

  describe('Basic Rendering', () => {
    it('should render toast container component', async () => {
      const toastContainer = await page.find('bds-toast-container');
      expect(toastContainer).toBeTruthy();
    });

    it('should not have shadow DOM', async () => {
      const toastContainer = await page.find('bds-toast-container');
      expect(toastContainer.shadowRoot).toBeNull();
    });

    it('should render slot for toast content', async () => {
      const toasts = await page.findAll('bds-toast-container bds-toast');
      expect(toasts.length).toBe(2);
    });

    it('should display slotted toast content', async () => {
      const toast1 = await page.find('bds-toast-container bds-toast:first-child');
      const toast2 = await page.find('bds-toast-container bds-toast:last-child');
      
      expect(toast1).toBeTruthy();
      expect(toast2).toBeTruthy();
      
      const toast1Text = await toast1.textContent;
      const toast2Text = await toast2.textContent;
      
      expect(toast1Text).toBe('Toast 1');
      expect(toast2Text).toBe('Toast 2');
    });
  });

  describe('Empty Container', () => {
    it('should handle empty toast container', async () => {
      const page = await newE2EPage({
        html: `<bds-toast-container></bds-toast-container>`,
      });
      
      const toastContainer = await page.find('bds-toast-container');
      expect(toastContainer).toBeTruthy();
    });
  });

  describe('Single Toast', () => {
    it('should handle single toast', async () => {
      const page = await newE2EPage({
        html: `
          <bds-toast-container>
            <bds-toast>Single toast</bds-toast>
          </bds-toast-container>
        `,
      });
      
      const toastContainer = await page.find('bds-toast-container');
      const toasts = await page.findAll('bds-toast-container bds-toast');
      
      expect(toastContainer).toBeTruthy();
      expect(toasts.length).toBe(1);
    });
  });
});