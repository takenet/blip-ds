import { newE2EPage } from '@stencil/core/testing';

describe('bds-slider e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-slider 
          min="0"
          max="100"
          step="1"
          value="50"
        ></bds-slider>
      `,
    });
  });

  describe('Properties', () => {
    it('should render slider component', async () => {
      const slider = await page.find('bds-slider');
      expect(slider).toBeTruthy();
    });

    it('should accept min property', async () => {
      const slider = await page.find('bds-slider');
      const min = await slider.getProperty('min');
      expect(min).toBe(0);
    });

    it('should accept max property', async () => {
      const slider = await page.find('bds-slider');
      const max = await slider.getProperty('max');
      expect(max).toBe(100);
    });

    it('should accept step property', async () => {
      const slider = await page.find('bds-slider');
      const step = await slider.getProperty('step');
      expect(step).toBe(1);
    });

    it('should accept value property', async () => {
      const slider = await page.find('bds-slider');
      const value = await slider.getProperty('value');
      expect(value).toBe(50);
    });
  });

  describe('Structure', () => {
    it('should have shadow DOM', async () => {
      const slider = await page.find('bds-slider');
      expect(slider.shadowRoot).toBeTruthy();
    });

    it('should render input element', async () => {
      const input = await page.find('bds-slider >>> input[type="range"]');
      expect(input).toBeTruthy();
    });
  });

  describe('Property Changes', () => {
    it('should update value', async () => {
      const slider = await page.find('bds-slider');
      await slider.setProperty('value', 75);
      await page.waitForChanges();
      
      const value = await slider.getProperty('value');
      expect(value).toBe(75);
    });

    it('should update min', async () => {
      const slider = await page.find('bds-slider');
      await slider.setProperty('min', 10);
      await page.waitForChanges();
      
      const min = await slider.getProperty('min');
      expect(min).toBe(10);
    });

    it('should update max', async () => {
      const slider = await page.find('bds-slider');
      await slider.setProperty('max', 200);
      await page.waitForChanges();
      
      const max = await slider.getProperty('max');
      expect(max).toBe(200);
    });
  });

  describe('Default Properties', () => {
    it('should handle default properties', async () => {
      const page = await newE2EPage({
        html: `<bds-slider></bds-slider>`,
      });
      
      const slider = await page.find('bds-slider');
      expect(slider).toBeTruthy();
    });
  });
});