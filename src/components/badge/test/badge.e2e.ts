import { newE2EPage } from '@stencil/core/testing';

describe('bds-badge e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-badge animation="true" shape="circle" color="system" icon="info"></bds-badge>`,
    });
  });

  describe('Properties', () => {
    it('should render badge with correct shape', async () => {
      const badge = await page.find('bds-badge');
      const shape = await badge.getProperty('shape');
      expect(shape).toBe('circle');
    });

    it('should render badge with correct color', async () => {
      const badge = await page.find('bds-badge');
      const color = await badge.getProperty('color');
      expect(color).toBe('system');
    });

    it('should render badge with correct icon', async () => {
      const badge = await page.find('bds-badge');
      const icon = await badge.getProperty('icon');
      expect(icon).toBe('info');
    });

    it('should render badge with correct animation', async () => {
      const badge = await page.find('bds-badge');
      const animation = await badge.getProperty('animation');
      expect(animation).toBe(true);
    });
  });
});