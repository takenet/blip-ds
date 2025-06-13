import { newE2EPage } from '@stencil/core/testing';

describe('bds-pagination e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-pagination 
          pages="10"
          started-page="1"
        ></bds-pagination>
      `,
    });
  });

  describe('Properties', () => {
    it('should render pagination component', async () => {
      const pagination = await page.find('bds-pagination');
      expect(pagination).toBeTruthy();
    });

    it('should accept pages property', async () => {
      const pagination = await page.find('bds-pagination');
      const pages = await pagination.getProperty('pages');
      expect(pages).toBe(10);
    });

    it('should accept startedPage property', async () => {
      const pagination = await page.find('bds-pagination');
      const startedPage = await pagination.getProperty('startedPage');
      expect(startedPage).toBe(1);
    });
  });

  describe('Structure', () => {
    it('should have shadow DOM', async () => {
      const pagination = await page.find('bds-pagination');
      expect(pagination.shadowRoot).toBeTruthy();
    });
  });

  describe('Default Properties', () => {
    it('should handle default properties', async () => {
      const page = await newE2EPage({
        html: `<bds-pagination></bds-pagination>`,
      });
      
      const pagination = await page.find('bds-pagination');
      expect(pagination).toBeTruthy();
    });
  });
});