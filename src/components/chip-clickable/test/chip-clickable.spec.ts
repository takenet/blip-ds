import { newSpecPage } from '@stencil/core/testing';
import { ChipClickable } from '../chip-clickable';

describe('bds-chip-clickable', () => {
  let page;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [ChipClickable],
      html: `<bds-chip-clickable>Chip Text</bds-chip-clickable>`,
    });
  });

  it('should create and render component', async () => {
    expect(page.root).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.chip_clickable')).toBeTruthy();
  });

  it('should render with default props', async () => {
    expect(page.rootInstance.color).toBe('default');
    expect(page.rootInstance.size).toBe('standard');
    expect(page.rootInstance.clickable).toBe(false);
    expect(page.rootInstance.close).toBe(false);
    expect(page.rootInstance.disabled).toBe(false);
  });

  it('should render with slot content', async () => {
    const textElement = page.root.shadowRoot.querySelector('bds-typo slot');
    expect(textElement).toBeTruthy();
  });

  it('should apply color classes correctly', async () => {
    const colors = ['default', 'info', 'success', 'warning', 'danger', 'outline'];
    
    for (const color of colors) {
      page = await newSpecPage({
        components: [ChipClickable],
        html: `<bds-chip-clickable color="${color}">Test</bds-chip-clickable>`,
      });
      
      const chipElement = page.root.shadowRoot.querySelector('.chip_clickable');
      expect(chipElement.classList.contains(`chip_clickable--${color}`)).toBe(true);
    }
  });

  it('should apply size classes correctly', async () => {
    const sizes = ['standard', 'tall'];
    
    for (const size of sizes) {
      page = await newSpecPage({
        components: [ChipClickable],
        html: `<bds-chip-clickable size="${size}">Test</bds-chip-clickable>`,
      });
      
      const chipElement = page.root.shadowRoot.querySelector('.chip_clickable');
      expect(chipElement.classList.contains(`chip_clickable--${size}`)).toBe(true);
    }
  });

  it('should render as clickable when clickable prop is true', async () => {
    page = await newSpecPage({
      components: [ChipClickable],
      html: `<bds-chip-clickable clickable="true">Test</bds-chip-clickable>`,
    });

    const chipElement = page.root.shadowRoot.querySelector('.chip_clickable');
    const focusElement = page.root.shadowRoot.querySelector('.chip_focus');
    const darkerElement = page.root.shadowRoot.querySelector('.chip_darker');

    expect(chipElement.classList.contains('chip_clickable--click')).toBe(true);
    expect(focusElement).toBeTruthy();
    expect(darkerElement).toBeTruthy();
  });

  it('should not render focus and darker elements when not clickable', async () => {
    const focusElement = page.root.shadowRoot.querySelector('.chip_focus');
    const darkerElement = page.root.shadowRoot.querySelector('.chip_darker');

    expect(focusElement).toBeFalsy();
    expect(darkerElement).toBeFalsy();
  });

  it('should render close button when close prop is true', async () => {
    page = await newSpecPage({
      components: [ChipClickable],
      html: `<bds-chip-clickable close="true">Test</bds-chip-clickable>`,
    });

    const closeElement = page.root.shadowRoot.querySelector('.chip_clickable--close');
    const closeIcon = page.root.shadowRoot.querySelector('.chip_clickable--close bds-icon');

    expect(closeElement).toBeTruthy();
    expect(closeIcon).toBeTruthy();
    expect(closeIcon.getAttribute('name')).toBe('error');
  });

  it('should render icon when icon prop is provided', async () => {
    page = await newSpecPage({
      components: [ChipClickable],
      html: `<bds-chip-clickable icon="user">Test</bds-chip-clickable>`,
    });

    const iconContainer = page.root.shadowRoot.querySelector('.chip_clickable--icon');
    const iconElement = page.root.shadowRoot.querySelector('.chip_clickable--icon bds-icon');

    expect(iconContainer).toBeTruthy();
    expect(iconElement).toBeTruthy();
    expect(iconElement.getAttribute('name')).toBe('user');
  });

  it('should render avatar when avatar prop is provided', async () => {
    page = await newSpecPage({
      components: [ChipClickable],
      html: `<bds-chip-clickable avatar="avatar.jpg">Test</bds-chip-clickable>`,
    });

    const avatarContainer = page.root.shadowRoot.querySelector('.chip_clickable--avatar');
    const avatarElement = page.root.shadowRoot.querySelector('.chip_clickable--avatar bds-avatar');

    expect(avatarContainer).toBeTruthy();
    expect(avatarElement).toBeTruthy();
    expect(avatarElement.getAttribute('thumbnail')).toBe('avatar.jpg');
  });

  it('should prioritize avatar over icon when both are provided', async () => {
    page = await newSpecPage({
      components: [ChipClickable],
      html: `<bds-chip-clickable icon="user" avatar="avatar.jpg">Test</bds-chip-clickable>`,
    });

    const iconContainer = page.root.shadowRoot.querySelector('.chip_clickable--icon');
    const avatarContainer = page.root.shadowRoot.querySelector('.chip_clickable--avatar');

    expect(iconContainer).toBeFalsy();
    expect(avatarContainer).toBeTruthy();
  });

  it('should apply disabled state correctly', async () => {
    page = await newSpecPage({
      components: [ChipClickable],
      html: `<bds-chip-clickable disabled="true" clickable="true">Test</bds-chip-clickable>`,
    });

    const chipElement = page.root.shadowRoot.querySelector('.chip_clickable');
    const focusElement = page.root.shadowRoot.querySelector('.chip_focus');
    const darkerElement = page.root.shadowRoot.querySelector('.chip_darker');

    expect(chipElement.classList.contains('chip_clickable--disabled')).toBe(true);
    expect(focusElement).toBeFalsy();
    expect(darkerElement).toBeFalsy();
  });

  it('should not show color class when disabled', async () => {
    page = await newSpecPage({
      components: [ChipClickable],
      html: `<bds-chip-clickable disabled="true" color="success">Test</bds-chip-clickable>`,
    });

    const chipElement = page.root.shadowRoot.querySelector('.chip_clickable');
    expect(chipElement.classList.contains('chip_clickable--success')).toBe(false);
  });

  it('should apply correct text container class based on content', async () => {
    // Full width (no icon, no avatar, no close)
    page = await newSpecPage({
      components: [ChipClickable],
      html: `<bds-chip-clickable>Test</bds-chip-clickable>`,
    });
    let textContainer = page.root.shadowRoot.querySelector('.chip_clickable--container-text--full');
    expect(textContainer).toBeTruthy();

    // Half width (with icon but no close)
    page = await newSpecPage({
      components: [ChipClickable],
      html: `<bds-chip-clickable icon="user">Test</bds-chip-clickable>`,
    });
    textContainer = page.root.shadowRoot.querySelector('.chip_clickable--container-text--half');
    expect(textContainer).toBeTruthy();

    // Min width (with icon and close)
    page = await newSpecPage({
      components: [ChipClickable],
      html: `<bds-chip-clickable icon="user" close="true">Test</bds-chip-clickable>`,
    });
    textContainer = page.root.shadowRoot.querySelector('.chip_clickable--container-text--min');
    expect(textContainer).toBeTruthy();
  });

  it('should get correct avatar size based on chip size', async () => {
    const component = new ChipClickable();
    
    component.size = 'standard';
    expect(component['getSizeAvatarChip']()).toBe('micro');
    
    component.size = 'tall';
    expect(component['getSizeAvatarChip']()).toBe('extra-small');
  });

  it('should get correct icon size based on chip size', async () => {
    const component = new ChipClickable();
    
    component.size = 'standard';
    expect(component['getSizeIconChip']()).toBe('x-small');
    
    component.size = 'tall';
    expect(component['getSizeIconChip']()).toBe('medium');
  });

  it('should render with data-test attribute', async () => {
    page = await newSpecPage({
      components: [ChipClickable],
      html: `<bds-chip-clickable data-test="chip-test">Test</bds-chip-clickable>`,
    });

    const chipElement = page.root.shadowRoot.querySelector('.chip_clickable');
    expect(chipElement.getAttribute('data-test')).toBe('chip-test');
  });

  it('should render close button with data-test attribute', async () => {
    page = await newSpecPage({
      components: [ChipClickable],
      html: `<bds-chip-clickable close="true" dt-button-close="close-test">Test</bds-chip-clickable>`,
    });

    const closeElement = page.root.shadowRoot.querySelector('.chip_clickable--close');
    expect(closeElement.getAttribute('data-test')).toBe('close-test');
  });

  it('should emit chipClickableClick event on click when clickable and not disabled', async () => {
    page = await newSpecPage({
      components: [ChipClickable],
      html: `<bds-chip-clickable clickable="true">Test</bds-chip-clickable>`,
    });

    const chipClickableClickSpy = jest.fn();
    page.root.addEventListener('chipClickableClick', chipClickableClickSpy);

    const chipElement = page.root.shadowRoot.querySelector('.chip_clickable');
    chipElement.click();

    await page.waitForChanges();
    expect(chipClickableClickSpy).toHaveBeenCalled();
  });

  it('should not emit chipClickableClick event when disabled', async () => {
    page = await newSpecPage({
      components: [ChipClickable],
      html: `<bds-chip-clickable clickable="true" disabled="true">Test</bds-chip-clickable>`,
    });

    const chipClickableClickSpy = jest.fn();
    page.root.addEventListener('chipClickableClick', chipClickableClickSpy);

    const chipElement = page.root.shadowRoot.querySelector('.chip_clickable');
    chipElement.click();

    await page.waitForChanges();
    expect(chipClickableClickSpy).not.toHaveBeenCalled();
  });

  it('should emit chipClickableClose event on close button click', async () => {
    page = await newSpecPage({
      components: [ChipClickable],
      html: `<bds-chip-clickable close="true" id="test-chip">Test</bds-chip-clickable>`,
    });

    const chipClickableCloseSpy = jest.fn();
    page.root.addEventListener('chipClickableClose', chipClickableCloseSpy);

    const closeElement = page.root.shadowRoot.querySelector('.chip_clickable--close');
    closeElement.click();

    await page.waitForChanges();
    expect(chipClickableCloseSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { id: 'test-chip' }
      })
    );
  });

  it('should handle keyboard events on clickable chip', async () => {
    page = await newSpecPage({
      components: [ChipClickable],
      html: `<bds-chip-clickable clickable="true">Test</bds-chip-clickable>`,
    });

    const chipClickableClickSpy = jest.fn();
    page.root.addEventListener('chipClickableClick', chipClickableClickSpy);

    const focusElement = page.root.shadowRoot.querySelector('.chip_focus');
    
    // Test Enter key
    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    Object.defineProperty(enterEvent, 'preventDefault', { value: jest.fn() });
    focusElement.dispatchEvent(enterEvent);

    await page.waitForChanges();
    expect(chipClickableClickSpy).toHaveBeenCalled();

    // Test Space key
    chipClickableClickSpy.mockClear();
    const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });
    Object.defineProperty(spaceEvent, 'preventDefault', { value: jest.fn() });
    focusElement.dispatchEvent(spaceEvent);

    await page.waitForChanges();
    expect(chipClickableClickSpy).toHaveBeenCalled();
  });

  it('should handle keyboard events on close button', async () => {
    page = await newSpecPage({
      components: [ChipClickable],
      html: `<bds-chip-clickable close="true" id="test-chip">Test</bds-chip-clickable>`,
    });

    const chipClickableCloseSpy = jest.fn();
    page.root.addEventListener('chipClickableClose', chipClickableCloseSpy);

    const closeFocusElement = page.root.shadowRoot.querySelector('.close_focus');
    
    // Test Enter key
    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    Object.defineProperty(enterEvent, 'preventDefault', { value: jest.fn() });
    closeFocusElement.dispatchEvent(enterEvent);

    await page.waitForChanges();
    expect(chipClickableCloseSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { id: 'test-chip' }
      })
    );
  });

  it('should not handle keyboard events when disabled', async () => {
    page = await newSpecPage({
      components: [ChipClickable],
      html: `<bds-chip-clickable clickable="true" disabled="true">Test</bds-chip-clickable>`,
    });

    const chipClickableClickSpy = jest.fn();
    page.root.addEventListener('chipClickableClick', chipClickableClickSpy);

    // Since disabled chips don't render focus elements, we need to test the method directly
    const component = page.rootInstance;
    const event = { key: 'Enter', preventDefault: jest.fn() };
    
    component['handleClickKey'](event);
    expect(chipClickableClickSpy).not.toHaveBeenCalled();
  });
});
