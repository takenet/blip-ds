import { newE2EPage } from '@stencil/core/testing';

describe('bds-skeleton e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-skeleton 
          shape="square"
          height="100px"
          width="200px"
          data-test="skeleton-test"
        ></bds-skeleton>
      `,
    });
  });

  describe('Properties', () => {
    it('should render skeleton component', async () => {
      const skeleton = await page.find('bds-skeleton');
      expect(skeleton).toBeTruthy();
    });

    it('should accept shape property', async () => {
      const skeleton = await page.find('bds-skeleton');
      const shape = await skeleton.getProperty('shape');
      expect(shape).toBe('square');
    });

    it('should accept height property', async () => {
      const skeleton = await page.find('bds-skeleton');
      const height = await skeleton.getProperty('height');
      expect(height).toBe('100px');
    });

    it('should accept width property', async () => {
      const skeleton = await page.find('bds-skeleton');
      const width = await skeleton.getProperty('width');
      expect(width).toBe('200px');
    });

    it('should accept dataTest property', async () => {
      const skeleton = await page.find('bds-skeleton');
      const dataTest = await skeleton.getProperty('dataTest');
      expect(dataTest).toBe('skeleton-test');
    });
  });

  describe('Structure', () => {
    it('should have shadow DOM', async () => {
      const skeleton = await page.find('bds-skeleton');
      expect(skeleton.shadowRoot).toBeTruthy();
    });

    it('should render grid element', async () => {
      const grid = await page.find('bds-skeleton >>> bds-grid');
      expect(grid).toBeTruthy();
    });

    it('should render animation element', async () => {
      const animation = await page.find('bds-skeleton >>> .animation');
      expect(animation).toBeTruthy();
    });
  });

  describe('Property Changes', () => {
    it('should update shape', async () => {
      const skeleton = await page.find('bds-skeleton');
      await skeleton.setProperty('shape', 'circle');
      await page.waitForChanges();
      
      const shape = await skeleton.getProperty('shape');
      expect(shape).toBe('circle');
    });

    it('should update height', async () => {
      const skeleton = await page.find('bds-skeleton');
      await skeleton.setProperty('height', '150px');
      await page.waitForChanges();
      
      const height = await skeleton.getProperty('height');
      expect(height).toBe('150px');
    });

    it('should update width', async () => {
      const skeleton = await page.find('bds-skeleton');
      await skeleton.setProperty('width', '300px');
      await page.waitForChanges();
      
      const width = await skeleton.getProperty('width');
      expect(width).toBe('300px');
    });
  });

  describe('Default Properties', () => {
    it('should handle default properties', async () => {
      const page = await newE2EPage({
        html: `<bds-skeleton></bds-skeleton>`,
      });
      
      const skeleton = await page.find('bds-skeleton');
      const shape = await skeleton.getProperty('shape');
      const height = await skeleton.getProperty('height');
      const width = await skeleton.getProperty('width');
      const dataTest = await skeleton.getProperty('dataTest');
      
      expect(shape).toBe('square');
      expect(height).toBe('50px');
      expect(width).toBe('100%');
      expect(dataTest).toBeNull();
    });
  });
});