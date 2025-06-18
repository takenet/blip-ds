import { newSpecPage } from '@stencil/core/testing';
import { CardSubtitle } from '../card-subtitle';

describe('bds-card-subtitle', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [CardSubtitle],
      html: `<bds-card-subtitle></bds-card-subtitle>`,
    });

    expect(page.root).toBeTruthy();
    expect(page.root.shadowRoot).toBeTruthy();
    
    const typo = page.root.shadowRoot.querySelector('bds-typo');
    expect(typo).toBeTruthy();
    expect(typo.getAttribute('variant')).toBe('fs-12');
    expect(typo.getAttribute('tag')).toBe('p');
    expect(typo.getAttribute('bold')).toBe('regular');
    // Boolean false props may not appear as attributes or appear as null/empty
    expect(typo.hasAttribute('margin')).toBe(false);
  });

  it('should render with text prop', async () => {
    const page = await newSpecPage({
      components: [CardSubtitle],
      html: `<bds-card-subtitle text="Card subtitle text"></bds-card-subtitle>`,
    });

    const typo = page.root.shadowRoot.querySelector('bds-typo');
    expect(typo.textContent).toBe('Card subtitle text');
  });

  it('should render empty when no text provided', async () => {
    const page = await newSpecPage({
      components: [CardSubtitle],
      html: `<bds-card-subtitle></bds-card-subtitle>`,
    });

    const typo = page.root.shadowRoot.querySelector('bds-typo');
    expect(typo.textContent).toBe('');
  });

  it('should have correct component structure', async () => {
    const page = await newSpecPage({
      components: [CardSubtitle],
      html: `<bds-card-subtitle></bds-card-subtitle>`,
    });

    expect(page.root.tagName).toBe('BDS-CARD-SUBTITLE');
    
    const typo = page.root.shadowRoot.querySelector('bds-typo');
    expect(typo).toBeTruthy();
    expect(page.root.shadowRoot.children.length).toBe(1);
    expect(page.root.shadowRoot.children[0].tagName).toBe('BDS-TYPO');
  });

  it('should update text prop dynamically', async () => {
    const page = await newSpecPage({
      components: [CardSubtitle],
      html: `<bds-card-subtitle text="Initial text"></bds-card-subtitle>`,
    });

    let typo = page.root.shadowRoot.querySelector('bds-typo');
    expect(typo.textContent).toBe('Initial text');

    page.root.text = 'Updated text';
    await page.waitForChanges();

    typo = page.root.shadowRoot.querySelector('bds-typo');
    expect(typo.textContent).toBe('Updated text');
  });

  it('should handle undefined text prop', async () => {
    const page = await newSpecPage({
      components: [CardSubtitle],
      html: `<bds-card-subtitle></bds-card-subtitle>`,
    });

    page.root.text = undefined;
    await page.waitForChanges();

    const typo = page.root.shadowRoot.querySelector('bds-typo');
    expect(typo.textContent).toBe('');
  });

  it('should handle empty string text prop', async () => {
    const page = await newSpecPage({
      components: [CardSubtitle],
      html: `<bds-card-subtitle text=""></bds-card-subtitle>`,
    });

    const typo = page.root.shadowRoot.querySelector('bds-typo');
    expect(typo.textContent).toBe('');
  });

  it('should handle special characters in text', async () => {
    const specialText = 'Special chars: <>&"\'';
    const page = await newSpecPage({
      components: [CardSubtitle],
      html: `<bds-card-subtitle></bds-card-subtitle>`,
    });

    page.root.text = specialText;
    await page.waitForChanges();

    const typo = page.root.shadowRoot.querySelector('bds-typo');
    expect(typo.textContent).toBe(specialText);
  });

  it('should have fixed typography configuration', async () => {
    const page = await newSpecPage({
      components: [CardSubtitle],
      html: `<bds-card-subtitle></bds-card-subtitle>`,
    });

    const typo = page.root.shadowRoot.querySelector('bds-typo');
    // Verify the typography settings are consistent
    expect(typo.getAttribute('variant')).toBe('fs-12');
    expect(typo.getAttribute('tag')).toBe('p');
    expect(typo.getAttribute('bold')).toBe('regular');
    // Boolean false props may not appear as attributes
    expect(typo.hasAttribute('margin')).toBe(false);
  });

  it('should instantiate component correctly', () => {
    const component = new CardSubtitle();
    expect(component).toBeTruthy();
    expect(typeof component.render).toBe('function');
  });

  it('should have default text value', () => {
    const component = new CardSubtitle();
    expect(component.text).toBeUndefined();
  });
});
