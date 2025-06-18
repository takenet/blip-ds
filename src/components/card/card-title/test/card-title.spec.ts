import { newSpecPage } from '@stencil/core/testing';
import { CardTitle } from '../card-title';

describe('bds-card-title', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [CardTitle],
      html: `<bds-card-title></bds-card-title>`,
    });

    expect(page.root).toBeTruthy();
    expect(page.root.shadowRoot).toBeTruthy();
    
    const typo = page.root.shadowRoot.querySelector('bds-typo');
    expect(typo).toBeTruthy();
    expect(typo.getAttribute('variant')).toBe('fs-20');
    expect(typo.getAttribute('tag')).toBe('h4');
    expect(typo.getAttribute('bold')).toBe('bold');
    // Boolean false props may not appear as attributes or appear as null/empty
    expect(typo.hasAttribute('margin')).toBe(false);
  });

  it('should render with text prop', async () => {
    const page = await newSpecPage({
      components: [CardTitle],
      html: `<bds-card-title text="Card title text"></bds-card-title>`,
    });

    const typo = page.root.shadowRoot.querySelector('bds-typo');
    expect(typo.textContent).toBe('Card title text');
  });

  it('should render empty when no text provided', async () => {
    const page = await newSpecPage({
      components: [CardTitle],
      html: `<bds-card-title></bds-card-title>`,
    });

    const typo = page.root.shadowRoot.querySelector('bds-typo');
    expect(typo.textContent).toBe('');
  });

  it('should have correct component structure', async () => {
    const page = await newSpecPage({
      components: [CardTitle],
      html: `<bds-card-title></bds-card-title>`,
    });

    expect(page.root.tagName).toBe('BDS-CARD-TITLE');
    
    const typo = page.root.shadowRoot.querySelector('bds-typo');
    expect(typo).toBeTruthy();
    expect(page.root.shadowRoot.children.length).toBe(1);
    expect(page.root.shadowRoot.children[0].tagName).toBe('BDS-TYPO');
  });

  it('should update text prop dynamically', async () => {
    const page = await newSpecPage({
      components: [CardTitle],
      html: `<bds-card-title text="Initial title"></bds-card-title>`,
    });

    let typo = page.root.shadowRoot.querySelector('bds-typo');
    expect(typo.textContent).toBe('Initial title');

    page.root.text = 'Updated title';
    await page.waitForChanges();

    typo = page.root.shadowRoot.querySelector('bds-typo');
    expect(typo.textContent).toBe('Updated title');
  });

  it('should handle undefined text prop', async () => {
    const page = await newSpecPage({
      components: [CardTitle],
      html: `<bds-card-title></bds-card-title>`,
    });

    page.root.text = undefined;
    await page.waitForChanges();

    const typo = page.root.shadowRoot.querySelector('bds-typo');
    expect(typo.textContent).toBe('');
  });

  it('should handle empty string text prop', async () => {
    const page = await newSpecPage({
      components: [CardTitle],
      html: `<bds-card-title text=""></bds-card-title>`,
    });

    const typo = page.root.shadowRoot.querySelector('bds-typo');
    expect(typo.textContent).toBe('');
  });

  it('should handle special characters in text', async () => {
    const specialText = 'Special chars: <>&"\'';
    const page = await newSpecPage({
      components: [CardTitle],
      html: `<bds-card-title></bds-card-title>`,
    });

    page.root.text = specialText;
    await page.waitForChanges();

    const typo = page.root.shadowRoot.querySelector('bds-typo');
    expect(typo.textContent).toBe(specialText);
  });

  it('should have fixed typography configuration', async () => {
    const page = await newSpecPage({
      components: [CardTitle],
      html: `<bds-card-title></bds-card-title>`,
    });

    const typo = page.root.shadowRoot.querySelector('bds-typo');
    // Verify the typography settings are consistent and different from card-subtitle
    expect(typo.getAttribute('variant')).toBe('fs-20');
    expect(typo.getAttribute('tag')).toBe('h4');
    expect(typo.getAttribute('bold')).toBe('bold');
    // Boolean false props may not appear as attributes
    expect(typo.hasAttribute('margin')).toBe(false);
  });

  it('should instantiate component correctly', () => {
    const component = new CardTitle();
    expect(component).toBeTruthy();
    expect(typeof component.render).toBe('function');
  });

  it('should have default text value', () => {
    const component = new CardTitle();
    expect(component.text).toBeUndefined();
  });

  it('should have different typography configuration from card-subtitle', async () => {
    const page = await newSpecPage({
      components: [CardTitle],
      html: `<bds-card-title></bds-card-title>`,
    });

    const typo = page.root.shadowRoot.querySelector('bds-typo');
    // Card title should have fs-20, h4, bold="bold"
    // while card-subtitle has fs-12, p, bold="regular"
    expect(typo.getAttribute('variant')).toBe('fs-20');
    expect(typo.getAttribute('tag')).toBe('h4');
    expect(typo.getAttribute('bold')).toBe('bold');
  });

  it('should handle long text content', async () => {
    const longText = 'This is a very long title that could potentially wrap to multiple lines and should be handled properly by the component';
    const page = await newSpecPage({
      components: [CardTitle],
      html: `<bds-card-title></bds-card-title>`,
    });

    page.root.text = longText;
    await page.waitForChanges();

    const typo = page.root.shadowRoot.querySelector('bds-typo');
    expect(typo.textContent).toBe(longText);
  });
});
