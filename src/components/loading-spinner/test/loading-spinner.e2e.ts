import { newE2EPage } from '@stencil/core/testing';

describe('bds-loading-spinner e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-loading-spinner size="standard" color="main"></bds-loading-spinner>`,
    });
  });

  describe('Properties', () => {
    it('should render loading spinner with correct size', async () => {
      const loadingSpinner = await page.find('bds-loading-spinner');
      const size = await loadingSpinner.getProperty('size');
      expect(size).toBe('standard');
    });

    it('should render loading spinner with correct color', async () => {
      const loadingSpinner = await page.find('bds-loading-spinner');
      const color = await loadingSpinner.getProperty('color');
      expect(color).toBe('main');
    });
  });
});