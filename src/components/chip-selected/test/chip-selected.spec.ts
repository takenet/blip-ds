import { newSpecPage } from '@stencil/core/testing';
import { ChipSelected } from '../chip-selected';

describe('bds-chip-selected', () => {
  let page;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [ChipSelected],
      html: `<bds-chip-selected>Chip Text</bds-chip-selected>`,
    });
  });

  it('should create and render component', async () => {
    expect(page.root).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.chip')).toBeTruthy();
  });

  it('should render with default props', async () => {
    expect(page.rootInstance.color).toBe('default');
    expect(page.rootInstance.size).toBe('standard');
    expect(page.rootInstance.selected).toBe(false);
    expect(page.rootInstance.disabled).toBe(false);
  });

  it('should render with slot content', async () => {
    const textElement = page.root.shadowRoot.querySelector('bds-typo slot');
    expect(textElement).toBeTruthy();
  });

  it('should initialize isSelected from selected prop', async () => {
    page = await newSpecPage({
      components: [ChipSelected],
      html: `<bds-chip-selected selected="true">Test</bds-chip-selected>`,
    });

    await page.waitForChanges();
    expect(page.rootInstance.isSelected).toBe(true);
  });

  it('should apply color classes correctly when not selected', async () => {
    const colors = ['default', 'info', 'success', 'warning', 'danger', 'outline'];
    
    for (const color of colors) {
      page = await newSpecPage({
        components: [ChipSelected],
        html: `<bds-chip-selected color="${color}">Test</bds-chip-selected>`,
      });
      
      const chipElement = page.root.shadowRoot.querySelector('.chip');
      expect(chipElement.classList.contains(`chip--${color}`)).toBe(true);
    }
  });

  it('should apply size classes correctly', async () => {
    const sizes = ['standard', 'tall'];
    
    for (const size of sizes) {
      page = await newSpecPage({
        components: [ChipSelected],
        html: `<bds-chip-selected size="${size}">Test</bds-chip-selected>`,
      });
      
      const chipElement = page.root.shadowRoot.querySelector('.chip');
      expect(chipElement.classList.contains(`chip--${size}`)).toBe(true);
    }
  });

  it('should apply selected classes when selected', async () => {
    page = await newSpecPage({
      components: [ChipSelected],
      html: `<bds-chip-selected selected="true">Test</bds-chip-selected>`,
    });

    await page.waitForChanges();
    const chipElement = page.root.shadowRoot.querySelector('.chip');
    expect(chipElement.classList.contains('chip_selected')).toBe(true);
    expect(chipElement.classList.contains('chip_selected--standard')).toBe(true);
  });

  it('should apply disabled classes when disabled', async () => {
    page = await newSpecPage({
      components: [ChipSelected],
      html: `<bds-chip-selected disabled="true">Test</bds-chip-selected>`,
    });

    const chipElement = page.root.shadowRoot.querySelector('.chip');
    expect(chipElement.classList.contains('chip_disabled')).toBe(true);
    expect(chipElement.classList.contains('chip_disabled--standard')).toBe(true);
  });

  it('should not render focus element when disabled', async () => {
    page = await newSpecPage({
      components: [ChipSelected],
      html: `<bds-chip-selected disabled="true">Test</bds-chip-selected>`,
    });

    const focusElement = page.root.shadowRoot.querySelector('.chip_focus');
    expect(focusElement).toBeFalsy();
  });

  it('should render focus element when not disabled', async () => {
    const focusElement = page.root.shadowRoot.querySelector('.chip_focus');
    expect(focusElement).toBeTruthy();
  });

  it('should not render darker element when selected', async () => {
    page = await newSpecPage({
      components: [ChipSelected],
      html: `<bds-chip-selected selected="true">Test</bds-chip-selected>`,
    });

    await page.waitForChanges();
    const darkerElement = page.root.shadowRoot.querySelector('.chip_darker');
    expect(darkerElement).toBeFalsy();
  });

  it('should render darker element when not selected and not disabled', async () => {
    const darkerElement = page.root.shadowRoot.querySelector('.chip_darker');
    expect(darkerElement).toBeTruthy();
  });

  it('should render icon when icon prop is provided and not selected', async () => {
    page = await newSpecPage({
      components: [ChipSelected],
      html: `<bds-chip-selected icon="user">Test</bds-chip-selected>`,
    });

    const iconContainer = page.root.shadowRoot.querySelector('.chip--icon');
    const iconElement = page.root.shadowRoot.querySelector('.chip--icon bds-icon');

    expect(iconContainer).toBeTruthy();
    expect(iconElement).toBeTruthy();
    expect(iconElement.getAttribute('name')).toBe('user');
  });

  it('should not render custom icon when selected', async () => {
    page = await newSpecPage({
      components: [ChipSelected],
      html: `<bds-chip-selected icon="user" selected="true">Test</bds-chip-selected>`,
    });

    await page.waitForChanges();
    const iconContainer = page.root.shadowRoot.querySelector('.chip--icon');
    expect(iconContainer).toBeFalsy();
  });

  it('should render checkball icon when selected', async () => {
    page = await newSpecPage({
      components: [ChipSelected],
      html: `<bds-chip-selected selected="true">Test</bds-chip-selected>`,
    });

    await page.waitForChanges();
    const selectedIconContainer = page.root.shadowRoot.querySelector('.chip_selected--icon');
    const checkballIcon = page.root.shadowRoot.querySelector('.chip_selected--icon bds-icon');

    expect(selectedIconContainer).toBeTruthy();
    expect(checkballIcon).toBeTruthy();
    expect(checkballIcon.getAttribute('name')).toBe('checkball');
  });

  it('should apply correct text container class based on selection state', async () => {
    // Not selected - full width
    let textContainer = page.root.shadowRoot.querySelector('.chip_selected--container-text--full');
    expect(textContainer).toBeTruthy();

    // Selected - half width
    page = await newSpecPage({
      components: [ChipSelected],
      html: `<bds-chip-selected selected="true">Test</bds-chip-selected>`,
    });

    await page.waitForChanges();
    textContainer = page.root.shadowRoot.querySelector('.chip_selected--container-text--half');
    expect(textContainer).toBeTruthy();
  });

  it('should apply selected text styles when selected', async () => {
    page = await newSpecPage({
      components: [ChipSelected],
      html: `<bds-chip-selected selected="true">Test</bds-chip-selected>`,
    });

    await page.waitForChanges();
    const textElement = page.root.shadowRoot.querySelector('bds-typo');
    expect(textElement.classList.contains('chip_selected--text')).toBe(true);
  });

  it('should get correct icon size based on chip size', async () => {
    const component = new ChipSelected();
    
    component.size = 'standard';
    expect(component['getSizeIconChip']()).toBe('x-small');
    
    component.size = 'tall';
    expect(component['getSizeIconChip']()).toBe('medium');
  });

  it('should render with data-test attribute', async () => {
    page = await newSpecPage({
      components: [ChipSelected],
      html: `<bds-chip-selected data-test="chip-test">Test</bds-chip-selected>`,
    });

    const chipElement = page.root.shadowRoot.querySelector('.chip');
    expect(chipElement.getAttribute('data-test')).toBe('chip-test');
  });

  it('should toggle selection state on click when not disabled', async () => {
    const chipClickSpy = jest.fn();
    page.root.addEventListener('chipClick', chipClickSpy);

    const chipElement = page.root.shadowRoot.querySelector('.chip');
    
    // Click to select
    chipElement.click();
    await page.waitForChanges();
    
    expect(page.rootInstance.isSelected).toBe(true);
    expect(chipClickSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { selected: true }
      })
    );

    // Click to deselect
    chipClickSpy.mockClear();
    chipElement.click();
    await page.waitForChanges();
    
    expect(page.rootInstance.isSelected).toBe(false);
    expect(chipClickSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { selected: false }
      })
    );
  });

  it('should not respond to click when disabled', async () => {
    page = await newSpecPage({
      components: [ChipSelected],
      html: `<bds-chip-selected disabled="true">Test</bds-chip-selected>`,
    });

    const chipClickSpy = jest.fn();
    page.root.addEventListener('chipClick', chipClickSpy);

    const chipElement = page.root.shadowRoot.querySelector('.chip');
    chipElement.click();

    await page.waitForChanges();
    expect(chipClickSpy).not.toHaveBeenCalled();
    expect(page.rootInstance.isSelected).toBe(false);
  });

  it('should toggle selection state on keyboard events when not disabled', async () => {
    const chipClickSpy = jest.fn();
    page.root.addEventListener('chipClick', chipClickSpy);

    const focusElement = page.root.shadowRoot.querySelector('.chip_focus');
    
    // Test Enter key
    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    Object.defineProperty(enterEvent, 'preventDefault', { value: jest.fn() });
    focusElement.dispatchEvent(enterEvent);

    await page.waitForChanges();
    expect(page.rootInstance.isSelected).toBe(true);
    expect(chipClickSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { selected: true }
      })
    );

    // Test Space key
    chipClickSpy.mockClear();
    const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });
    Object.defineProperty(spaceEvent, 'preventDefault', { value: jest.fn() });
    focusElement.dispatchEvent(spaceEvent);

    await page.waitForChanges();
    expect(page.rootInstance.isSelected).toBe(false);
    expect(chipClickSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { selected: false }
      })
    );
  });

  it('should not respond to keyboard events when disabled', async () => {
    page = await newSpecPage({
      components: [ChipSelected],
      html: `<bds-chip-selected disabled="true">Test</bds-chip-selected>`,
    });

    const chipClickSpy = jest.fn();
    page.root.addEventListener('chipClick', chipClickSpy);

    // Since disabled chips don't render focus elements, we need to test the method directly
    const component = page.rootInstance;
    const event = { key: 'Enter', preventDefault: jest.fn() };
    
    component['handleKeyDown'](event);
    expect(chipClickSpy).not.toHaveBeenCalled();
    expect(component.isSelected).toBe(false);
  });

  it('should return correct style classes for selected state', async () => {
    const component = new ChipSelected();
    
    // Not selected
    component.isSelected = false;
    component.color = 'info';
    component.size = 'tall';
    
    let styleChip = component['getStyleChip']();
    expect(styleChip).toEqual({
      'chip--info': true,
      'chip--tall': true
    });

    // Selected
    component.isSelected = true;
    styleChip = component['getStyleChip']();
    expect(styleChip).toEqual({
      chip_selected: true,
      'chip_selected--tall': true
    });
  });

  it('should return correct disabled classes', async () => {
    const component = new ChipSelected();
    component.size = 'tall';
    
    // Not disabled
    component.disabled = false;
    let disabledClasses = component['getDisabledChip']();
    expect(disabledClasses).toEqual({});

    // Disabled
    component.disabled = true;
    disabledClasses = component['getDisabledChip']();
    expect(disabledClasses).toEqual({
      chip_disabled: true,
      'chip_disabled--tall': true
    });
  });

  it('should return correct text style for selected state', async () => {
    const component = new ChipSelected();
    
    // Not selected
    component.isSelected = false;
    let textStyle = component['getStyleText']();
    expect(textStyle).toBeUndefined();

    // Selected
    component.isSelected = true;
    textStyle = component['getStyleText']();
    expect(textStyle).toEqual({
      'chip_selected--text': true
    });
  });

  it('should handle initial selection state from props', async () => {
    page = await newSpecPage({
      components: [ChipSelected],
      html: `<bds-chip-selected selected="true">Test</bds-chip-selected>`,
    });

    await page.waitForChanges();
    
    const chipElement = page.root.shadowRoot.querySelector('.chip');
    const checkballIcon = page.root.shadowRoot.querySelector('.chip_selected--icon bds-icon');
    
    expect(page.rootInstance.isSelected).toBe(true);
    expect(chipElement.classList.contains('chip_selected')).toBe(true);
    expect(checkballIcon).toBeTruthy();
    expect(checkballIcon.getAttribute('name')).toBe('checkball');
  });
});
