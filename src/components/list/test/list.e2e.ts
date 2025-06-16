import { newE2EPage } from '@stencil/core/testing';

describe('bds-list', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-list></bds-list>');

    const element = await page.find('bds-list');
    expect(element).toHaveClass('hydrated');
  });

  it('should render with default type', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-list type-list="default"></bds-list>');

    const element = await page.find('bds-list');
    expect(element).toEqualAttribute('type-list', 'default');
  });

  it('should render with checkbox type', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-list type-list="checkbox"></bds-list>');

    const element = await page.find('bds-list');
    expect(element).toEqualAttribute('type-list', 'checkbox');
  });

  it('should render with radio type', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-list type-list="radio"></bds-list>');

    const element = await page.find('bds-list');
    expect(element).toEqualAttribute('type-list', 'radio');
  });

  it('should render with switch type', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-list type-list="switch"></bds-list>');

    const element = await page.find('bds-list');
    expect(element).toEqualAttribute('type-list', 'switch');
  });

  it('should render with data as JSON string', async () => {
    const data = JSON.stringify([
      { value: '1', text: 'Item 1', checked: false },
      { value: '2', text: 'Item 2', checked: true }
    ]);
    
    const page = await newE2EPage();
    await page.setContent(`<bds-list type-list="checkbox" data='${data}'></bds-list>`);

    const element = await page.find('bds-list');
    expect(element).toEqualAttribute('data', data);
    
    await page.waitForChanges();
    
    const listItems = await page.findAll('bds-list >>> bds-list-item');
    expect(listItems).toHaveLength(2);
  });

  it('should handle checkbox changes', async () => {
    const data = JSON.stringify([
      { value: '1', text: 'Item 1', checked: false },
      { value: '2', text: 'Item 2', checked: false }
    ]);
    
    const page = await newE2EPage();
    await page.setContent(`<bds-list type-list="checkbox" data='${data}'></bds-list>`);

    const element = await page.find('bds-list');
    const checkboxChangeSpy = await element.spyOnEvent('bdsListCheckboxChange');

    await page.waitForChanges();
    
    const firstCheckbox = await page.find('bds-list >>> bds-list-item bds-checkbox');
    if (firstCheckbox) {
      await firstCheckbox.click();
      expect(checkboxChangeSpy).toHaveReceivedEvent();
    }
  });

  it('should handle radio changes', async () => {
    const data = JSON.stringify([
      { value: '1', text: 'Item 1', checked: false },
      { value: '2', text: 'Item 2', checked: false }
    ]);
    
    const page = await newE2EPage();
    await page.setContent(`<bds-list type-list="radio" data='${data}'></bds-list>`);

    const element = await page.find('bds-list');
    const radioChangeSpy = await element.spyOnEvent('bdsListRadioChange');

    await page.waitForChanges();
    
    const firstRadio = await page.find('bds-list >>> bds-list-item bds-radio');
    if (firstRadio) {
      await firstRadio.click();
      expect(radioChangeSpy).toHaveReceivedEvent();
    }
  });

  it('should handle switch changes', async () => {
    const data = JSON.stringify([
      { value: '1', text: 'Item 1', checked: false },
      { value: '2', text: 'Item 2', checked: false }
    ]);
    
    const page = await newE2EPage();
    await page.setContent(`<bds-list type-list="switch" data='${data}'></bds-list>`);

    const element = await page.find('bds-list');
    const switchChangeSpy = await element.spyOnEvent('bdsListSwitchChange');

    await page.waitForChanges();
    
    const firstSwitch = await page.find('bds-list >>> bds-list-item bds-switch');
    if (firstSwitch) {
      await firstSwitch.click();
      expect(switchChangeSpy).toHaveReceivedEvent();
    }
  });

  it('should render with child list items', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <bds-list type-list="default">
        <bds-list-item text="Item 1"></bds-list-item>
        <bds-list-item text="Item 2"></bds-list-item>
      </bds-list>
    `);

    const element = await page.find('bds-list');
    expect(element).toHaveClass('hydrated');
    
    const listItems = await page.findAll('bds-list-item');
    expect(listItems).toHaveLength(2);
  });

  it('should handle value property for radio type', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-list type-list="radio" value="item1"></bds-list>');

    const element = await page.find('bds-list');
    expect(element).toEqualAttribute('value', 'item1');
  });

  it('should handle all type list variants', async () => {
    const types = ['checkbox', 'radio', 'switch', 'default'];
    
    for (const type of types) {
      const page = await newE2EPage();
      await page.setContent(`<bds-list type-list="${type}"></bds-list>`);
      
      const element = await page.find('bds-list');
      expect(element).toEqualAttribute('type-list', type);
    }
  });

  it('should render list container', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-list></bds-list>');

    await page.waitForChanges();
    
    const container = await page.find('bds-list >>> .list');
    expect(container).toBeTruthy();
  });

  it('should handle empty data gracefully', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-list type-list="checkbox" data="[]"></bds-list>');

    const element = await page.find('bds-list');
    expect(element).toHaveClass('hydrated');
    
    await page.waitForChanges();
    
    const listItems = await page.findAll('bds-list >>> bds-list-item');
    expect(listItems).toHaveLength(0);
  });
});
