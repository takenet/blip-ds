import { newSpecPage } from '@stencil/core/testing';
import { ChipTag } from '../chip-tag';

describe('bds-chip-tag', () => {
  let page;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [ChipTag],
      html: `<bds-chip-tag>Tag Text</bds-chip-tag>`,
    });
  });

  it('should create and render component', async () => {
    expect(page.root).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.chip_tag')).toBeTruthy();
  });

  it('should render with default props', async () => {
    expect(page.rootInstance.color).toBe('default');
    expect(page.rootInstance.icon).toBeUndefined();
    expect(page.rootInstance.dataTest).toBe(null);
  });

  it('should render with slot content', async () => {
    const textElement = page.root.shadowRoot.querySelector('bds-typo slot');
    expect(textElement).toBeTruthy();
  });

  it('should apply color classes correctly', async () => {
    const colors = ['default', 'info', 'success', 'warning', 'danger', 'outline', 'disabled'];
    
    for (const color of colors) {
      page = await newSpecPage({
        components: [ChipTag],
        html: `<bds-chip-tag color="${color}">Test</bds-chip-tag>`,
      });
      
      const chipElement = page.root.shadowRoot.querySelector('.chip_tag');
      expect(chipElement.classList.contains(`chip_tag--${color}`)).toBe(true);
    }
  });

  it('should render icon when icon prop is provided', async () => {
    page = await newSpecPage({
      components: [ChipTag],
      html: `<bds-chip-tag icon="user">Test</bds-chip-tag>`,
    });

    const iconContainer = page.root.shadowRoot.querySelector('.chip_tag--icon');
    const iconElement = page.root.shadowRoot.querySelector('.chip_tag--icon bds-icon');

    expect(iconContainer).toBeTruthy();
    expect(iconElement).toBeTruthy();
    expect(iconElement.getAttribute('name')).toBe('user');
    expect(iconElement.getAttribute('size')).toBe('x-small');
  });

  it('should not render icon container when icon prop is not provided', async () => {
    const iconContainer = page.root.shadowRoot.querySelector('.chip_tag--icon');
    expect(iconContainer).toBeFalsy();
  });

  it('should apply correct text container class based on icon presence', async () => {
    // Without icon - full width
    let textContainer = page.root.shadowRoot.querySelector('.chip_tag--container-text--full');
    expect(textContainer).toBeTruthy();

    // With icon - half width
    page = await newSpecPage({
      components: [ChipTag],
      html: `<bds-chip-tag icon="user">Test</bds-chip-tag>`,
    });

    textContainer = page.root.shadowRoot.querySelector('.chip_tag--container-text--half');
    expect(textContainer).toBeTruthy();
  });

  it('should render with data-test attribute', async () => {
    page = await newSpecPage({
      components: [ChipTag],
      html: `<bds-chip-tag data-test="tag-test">Test</bds-chip-tag>`,
    });

    const chipElement = page.root.shadowRoot.querySelector('.chip_tag');
    expect(chipElement.getAttribute('data-test')).toBe('tag-test');
  });

  it('should render with data-test attribute set to null by default', async () => {
    const chipElement = page.root.shadowRoot.querySelector('.chip_tag');
    expect(chipElement.getAttribute('data-test')).toBe(null);
  });

  it('should render typo component with correct properties', async () => {
    const typoElement = page.root.shadowRoot.querySelector('bds-typo');
    
    expect(typoElement).toBeTruthy();
    expect(typoElement.getAttribute('no-wrap')).toBe('true');
    expect(typoElement.getAttribute('variant')).toBe('fs-12');
    expect(typoElement.getAttribute('bold')).toBe('bold');
    expect(typoElement.classList.contains('chip_tag--text')).toBe(true);
  });

  it('should handle empty icon prop', async () => {
    page = await newSpecPage({
      components: [ChipTag],
      html: `<bds-chip-tag icon="">Test</bds-chip-tag>`,
    });

    const iconContainer = page.root.shadowRoot.querySelector('.chip_tag--icon');
    expect(iconContainer).toBeFalsy();
  });

  it('should handle different combinations of props', async () => {
    page = await newSpecPage({
      components: [ChipTag],
      html: `<bds-chip-tag color="success" icon="check" data-test="success-tag">Success Tag</bds-chip-tag>`,
    });

    const chipElement = page.root.shadowRoot.querySelector('.chip_tag');
    const iconElement = page.root.shadowRoot.querySelector('.chip_tag--icon bds-icon');
    const textContainer = page.root.shadowRoot.querySelector('.chip_tag--container-text--half');

    expect(chipElement.classList.contains('chip_tag--success')).toBe(true);
    expect(chipElement.getAttribute('data-test')).toBe('success-tag');
    expect(iconElement.getAttribute('name')).toBe('check');
    expect(textContainer).toBeTruthy();
  });

  it('should maintain component structure', async () => {
    const hostElement = page.root;
    const chipElement = page.root.shadowRoot.querySelector('.chip_tag');
    const typoElement = page.root.shadowRoot.querySelector('bds-typo');
    
    expect(hostElement.tagName.toLowerCase()).toBe('bds-chip-tag');
    expect(chipElement).toBeTruthy();
    expect(typoElement).toBeTruthy();
  });

  it('should apply all color variations correctly', async () => {
    const colorTests = [
      { color: 'default', class: 'chip_tag--default' },
      { color: 'info', class: 'chip_tag--info' },
      { color: 'success', class: 'chip_tag--success' },
      { color: 'warning', class: 'chip_tag--warning' },
      { color: 'danger', class: 'chip_tag--danger' },
      { color: 'outline', class: 'chip_tag--outline' },
      { color: 'disabled', class: 'chip_tag--disabled' }
    ];

    for (const { color, class: expectedClass } of colorTests) {
      page = await newSpecPage({
        components: [ChipTag],
        html: `<bds-chip-tag color="${color}">Test</bds-chip-tag>`,
      });
      
      const chipElement = page.root.shadowRoot.querySelector('.chip_tag');
      expect(chipElement.classList.contains(expectedClass)).toBe(true);
      expect(chipElement.classList.contains('chip_tag')).toBe(true);
    }
  });
});
