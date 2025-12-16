import { newE2EPage } from '@stencil/core/testing';

describe('bds-checkbox e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-checkbox label="Opcao do checkbox" name="check">Checkbox</bds-checkbox>`,
    });
  });

  describe('Properties', () => {
    it('should render checkbox with correct label', async () => {
      const checkbox = await page.find('bds-checkbox');
      const label = await checkbox.getProperty('label');
      expect(label).toBe('Opcao do checkbox');
    });

    it('should render checkbox with correct name', async () => {
      const checkbox = await page.find('bds-checkbox');
      const name = await checkbox.getProperty('name');
      expect(name).toBe('check');
    });
  });

  describe('Events', () => {
    it('should emit bdsChange event when clicked', async () => {
      const checkbox = await page.find('bds-checkbox');
      const bdsChangeEvent = await checkbox.spyOnEvent('bdsChange');

      const labelElement = await page.find('bds-checkbox >>> label');
      await labelElement.click();
      await page.waitForChanges();

      expect(bdsChangeEvent).toHaveReceivedEvent();
    });
  });

  describe('Methods', () => {
    it('should toggle state when toggle method is called', async () => {
      const checkbox = await page.find('bds-checkbox');

      await checkbox.callMethod('toggle');
      await page.waitForChanges();

      const checkboxElement = await page.find('bds-checkbox >>> .checkbox');
      expect(checkboxElement).toHaveClass('checkbox--selected');
    });
  });

  describe('Accessibility', () => {
    it('should be accessible via Tab navigation', async () => {
      page = await newE2EPage({
        html: `
          <button>Previous button</button>
          <bds-checkbox label="Opcao do checkbox" name="check">Checkbox</bds-checkbox>
        `,
      });

      await page.focus('button');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      expect(focusedElement).toBe('BDS-CHECKBOX');
    });
  });

  describe('Indeterminate State', () => {
    it('should render checkbox with indeterminate state', async () => {
      page = await newE2EPage({
        html: `<bds-checkbox label="Opcao do checkbox" name="check" indeterminate>Checkbox</bds-checkbox>`,
      });

      const checkbox = await page.find('bds-checkbox');
      const indeterminate = await checkbox.getProperty('indeterminate');
      expect(indeterminate).toBe(true);

      const checkboxElement = await page.find('bds-checkbox >>> .checkbox');
      expect(checkboxElement).toHaveClass('checkbox--indeterminate');
    });

    it('should transition from indeterminate to checked when clicked', async () => {
      page = await newE2EPage({
        html: `<bds-checkbox label="Opcao do checkbox" name="check" indeterminate>Checkbox</bds-checkbox>`,
      });

      const checkbox = await page.find('bds-checkbox');
      const bdsChangeEvent = await checkbox.spyOnEvent('bdsChange');

      const labelElement = await page.find('bds-checkbox >>> label');
      await labelElement.click();
      await page.waitForChanges();

      const indeterminate = await checkbox.getProperty('indeterminate');
      const checked = await checkbox.getProperty('checked');

      expect(indeterminate).toBe(false);
      expect(checked).toBe(true);
      expect(bdsChangeEvent).toHaveReceivedEventDetail({ checked: true, indeterminate: false });
    });

    it('should transition from indeterminate to checked when toggle method is called', async () => {
      page = await newE2EPage({
        html: `<bds-checkbox label="Opcao do checkbox" name="check" indeterminate>Checkbox</bds-checkbox>`,
      });

      const checkbox = await page.find('bds-checkbox');
      await checkbox.callMethod('toggle');
      await page.waitForChanges();

      const indeterminate = await checkbox.getProperty('indeterminate');
      const checked = await checkbox.getProperty('checked');

      expect(indeterminate).toBe(false);
      expect(checked).toBe(true);

      const checkboxElement = await page.find('bds-checkbox >>> .checkbox');
      expect(checkboxElement).toHaveClass('checkbox--selected');
    });

    it('should display minus icon when indeterminate', async () => {
      page = await newE2EPage({
        html: `<bds-checkbox label="Opcao do checkbox" name="check" indeterminate>Checkbox</bds-checkbox>`,
      });

      const icon = await page.find('bds-checkbox >>> bds-icon');
      const iconName = await icon.getProperty('name');
      expect(iconName).toBe('less');
    });

    it('should render indeterminate-disabled style when both indeterminate and disabled', async () => {
      page = await newE2EPage({
        html: `<bds-checkbox label="Opcao do checkbox" name="check" indeterminate disabled>Checkbox</bds-checkbox>`,
      });

      const checkboxElement = await page.find('bds-checkbox >>> .checkbox');
      expect(checkboxElement).toHaveClass('checkbox--indeterminate-disabled');
    });
  });
});