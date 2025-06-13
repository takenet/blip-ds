import { newE2EPage } from '@stencil/core/testing';

describe('bds-test-component e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-test-component></bds-test-component>`,
    });
  });

  describe('Basic Rendering', () => {
    it('should render test component', async () => {
      const testComponent = await page.find('bds-test-component');
      expect(testComponent).toBeTruthy();
    });

    it('should not have shadow DOM', async () => {
      const testComponent = await page.find('bds-test-component');
      expect(testComponent.shadowRoot).toBeNull();
    });

    it('should render grid structure', async () => {
      const grids = await page.findAll('bds-test-component bds-grid');
      expect(grids.length).toBeGreaterThan(0);
    });

    it('should render theme providers', async () => {
      const themeProviders = await page.findAll('bds-test-component bds-theme-provider');
      expect(themeProviders.length).toBe(2);
    });

    it('should render paper components', async () => {
      const papers = await page.findAll('bds-test-component bds-paper');
      expect(papers.length).toBe(2);
    });
  });
});