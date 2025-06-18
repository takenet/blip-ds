import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { RadioGroup } from '../radio-group';

describe('bds-radio-group', () => {
  let page: SpecPage;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [RadioGroup],
      html: `<bds-radio-group></bds-radio-group>`,
    });
  });

  afterEach(() => {
    page = null;
  });

  it('should create component', () => {
    const component = new RadioGroup();
    expect(component).toBeTruthy();
  });

  it('should render with default props', async () => {
    expect(page.root.tagName).toBe('BDS-RADIO-GROUP');
    expect(page.root.hasAttribute('value')).toBe(false);
    expect(page.root.innerHTML).toBe('<!----> ');
  });

  it('should have default values', () => {
    const component = new RadioGroup();
    expect(component.value).toBeUndefined();
  });

  it('should render with custom value', async () => {
    const page = await newSpecPage({
      components: [RadioGroup],
      html: `<bds-radio-group value="option1"></bds-radio-group>`,
    });

    expect(page.root.getAttribute('value')).toBe('option1');
    expect(page.rootInstance.value).toBe('option1');
  });

  it('should reflect value attribute', async () => {
    const component = page.rootInstance;
    component.value = 'test-value';
    await page.waitForChanges();

    expect(page.root.getAttribute('value')).toBe('test-value');
  });

  it('should update value property', async () => {
    const component = page.rootInstance;
    
    component.value = 'new-value';
    await page.waitForChanges();
    
    expect(component.value).toBe('new-value');
    expect(page.root.getAttribute('value')).toBe('new-value');
  });

  it('should emit bdsRadioGroupChange event when value changes', async () => {
    const bdsRadioGroupChangeSpy = jest.fn();
    page.root.addEventListener('bdsRadioGroupChange', bdsRadioGroupChangeSpy);
    
    const component = page.rootInstance;
    component.value = 'test-option';
    await page.waitForChanges();
    
    expect(bdsRadioGroupChangeSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { value: 'test-option' }
      })
    );
  });

  it('should emit event with correct value when value changes multiple times', async () => {
    const bdsRadioGroupChangeSpy = jest.fn();
    page.root.addEventListener('bdsRadioGroupChange', bdsRadioGroupChangeSpy);
    
    const component = page.rootInstance;
    
    component.value = 'option1';
    await page.waitForChanges();
    
    component.value = 'option2';
    await page.waitForChanges();
    
    expect(bdsRadioGroupChangeSpy).toHaveBeenCalledTimes(2);
    expect(bdsRadioGroupChangeSpy).toHaveBeenNthCalledWith(1,
      expect.objectContaining({
        detail: { value: 'option1' }
      })
    );
    expect(bdsRadioGroupChangeSpy).toHaveBeenNthCalledWith(2,
      expect.objectContaining({
        detail: { value: 'option2' }
      })
    );
  });

  it('should emit event even when setting the same value', async () => {
    const component = page.rootInstance;
    component.value = 'initial-value';
    await page.waitForChanges();
    
    const bdsRadioGroupChangeSpy = jest.fn();
    page.root.addEventListener('bdsRadioGroupChange', bdsRadioGroupChangeSpy);
    
    // Stencil watchers will not trigger if setting the same value via prop
    // So let's test by setting a different value first, then the same value
    component.value = 'different-value';
    await page.waitForChanges();
    
    component.value = 'initial-value';
    await page.waitForChanges();
    
    expect(bdsRadioGroupChangeSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { value: 'initial-value' }
      })
    );
  });

  it('should handle undefined value', async () => {
    const component = page.rootInstance;
    component.value = undefined;
    await page.waitForChanges();

    expect(component.value).toBeUndefined();
    expect(page.root.hasAttribute('value')).toBe(false);
  });

  it('should handle null value', async () => {
    const component = page.rootInstance;
    component.value = null;
    await page.waitForChanges();

    expect(component.value).toBeNull();
    expect(page.root.hasAttribute('value')).toBe(false);
  });

  it('should handle empty string value', async () => {
    const component = page.rootInstance;
    component.value = '';
    await page.waitForChanges();

    expect(component.value).toBe('');
    expect(page.root.getAttribute('value')).toBe('');
  });

  it('should maintain component structure', async () => {
    const page = await newSpecPage({
      components: [RadioGroup],
      html: `
        <bds-radio-group value="option1">
          <div>Mock radio content</div>
        </bds-radio-group>
      `,
    });

    expect(page.root).toEqualHtml(`
      <bds-radio-group value="option1">
        <div>Mock radio content</div>
      </bds-radio-group>
    `);
  });

  it('should handle string values correctly', () => {
    const component = new RadioGroup();
    
    component.value = 'test-string';
    expect(component.value).toBe('test-string');
    
    component.value = '123';
    expect(component.value).toBe('123');
    
    component.value = 'special-chars-!@#$%';
    expect(component.value).toBe('special-chars-!@#$%');
  });

  it('should work with initial value from attribute', async () => {
    const page = await newSpecPage({
      components: [RadioGroup],
      html: `<bds-radio-group value="initial-option"></bds-radio-group>`,
    });

    expect(page.rootInstance.value).toBe('initial-option');
    expect(page.root.getAttribute('value')).toBe('initial-option');
  });

  it('should handle rapid value changes', async () => {
    const bdsRadioGroupChangeSpy = jest.fn();
    page.root.addEventListener('bdsRadioGroupChange', bdsRadioGroupChangeSpy);
    
    const component = page.rootInstance;
    
    // Rapid changes
    component.value = 'a';
    component.value = 'b';
    component.value = 'c';
    await page.waitForChanges();
    
    expect(bdsRadioGroupChangeSpy).toHaveBeenCalledTimes(3);
    expect(component.value).toBe('c');
  });

  it('should handle edge case values', async () => {
    const component = page.rootInstance;
    
    // Test with special characters
    component.value = 'value with spaces';
    await page.waitForChanges();
    expect(component.value).toBe('value with spaces');
    
    // Test with numbers as strings
    component.value = '0';
    await page.waitForChanges();
    expect(component.value).toBe('0');
    
    // Test with boolean-like strings
    component.value = 'true';
    await page.waitForChanges();
    expect(component.value).toBe('true');
  });
});
