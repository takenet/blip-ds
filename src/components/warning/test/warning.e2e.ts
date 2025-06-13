import { newE2EPage } from '@stencil/core/testing';

describe('bds-warning e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-warning>
          This is a warning message
        </bds-warning>
      `,
    });
  });

  describe('Basic Rendering', () => {
    it('should render warning component', async () => {
      const warning = await page.find('bds-warning');
      expect(warning).toBeTruthy();
    });

    it('should have shadow DOM', async () => {
      const warning = await page.find('bds-warning');
      expect(warning.shadowRoot).toBeTruthy();
    });

    it('should render warning body container', async () => {
      const body = await page.find('bds-warning >>> .warning__body');
      expect(body).toBeTruthy();
    });

    it('should render warning icon', async () => {
      const icon = await page.find('bds-warning >>> bds-icon');
      expect(icon).toBeTruthy();
    });

    it('should render warning message container', async () => {
      const message = await page.find('bds-warning >>> bds-typo');
      expect(message).toBeTruthy();
    });

    it('should render slot for message content', async () => {
      const slot = await page.find('bds-warning >>> slot');
      expect(slot).toBeTruthy();
    });

    it('should display slotted content', async () => {
      const content = await page.evaluate(() => {
        const warning = document.querySelector('bds-warning');
        return warning.textContent;
      });
      expect(content.trim()).toBe('This is a warning message');
    });
  });

  describe('Empty Content', () => {
    it('should handle empty warning message', async () => {
      const page = await newE2EPage({
        html: `<bds-warning></bds-warning>`,
      });
      
      const warning = await page.find('bds-warning');
      expect(warning).toBeTruthy();
      
      const icon = await page.find('bds-warning >>> bds-icon');
      const typo = await page.find('bds-warning >>> bds-typo');
      
      expect(icon).toBeTruthy();
      expect(typo).toBeTruthy();
    });
  });
});