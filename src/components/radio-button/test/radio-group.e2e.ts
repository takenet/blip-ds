import { newE2EPage } from '@stencil/core/testing';

describe('bds-radio-group e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-radio-group value="option1">
          <bds-radio value="option1" name="test-group" label="Option 1"></bds-radio>
          <bds-radio value="option2" name="test-group" label="Option 2"></bds-radio>
        </bds-radio-group>
      `,
    });
  });

  describe('Properties', () => {
    it('should render radio group component', async () => {
      const radioGroup = await page.find('bds-radio-group');
      expect(radioGroup).toBeTruthy();
    });

    it('should accept value property', async () => {
      const radioGroup = await page.find('bds-radio-group');
      const value = await radioGroup.getProperty('value');
      expect(value).toBe('option1');
    });
  });

  describe('Structure', () => {
    it('should render radio components inside group', async () => {
      const radios = await page.findAll('bds-radio');
      expect(radios.length).toBe(2);
    });

    it('should contain radio elements with correct values', async () => {
      const radio1 = await page.find('bds-radio[value="option1"]');
      const radio2 = await page.find('bds-radio[value="option2"]');
      
      expect(radio1).toBeTruthy();
      expect(radio2).toBeTruthy();
    });
  });

  describe('Property Changes', () => {
    it('should update value', async () => {
      const radioGroup = await page.find('bds-radio-group');
      await radioGroup.setProperty('value', 'option2');
      await page.waitForChanges();
      
      const value = await radioGroup.getProperty('value');
      expect(value).toBe('option2');
    });
  });

  describe('Default Properties', () => {
    it('should handle no value set', async () => {
      const page = await newE2EPage({
        html: `
          <bds-radio-group>
            <bds-radio value="option1" name="test" label="Option 1"></bds-radio>
          </bds-radio-group>
        `,
      });
      
      const radioGroup = await page.find('bds-radio-group');
      expect(radioGroup).toBeTruthy();
    });
  });
});