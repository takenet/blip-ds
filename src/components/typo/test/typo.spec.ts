import { newSpecPage } from '@stencil/core/testing';
import { Typo } from '../typo';

describe('bds-typo', () => {
  it('should render with default values', async () => {
    const page = await newSpecPage({
      components: [Typo],
      html: `<bds-typo>Default text</bds-typo>`,
    });

    const typo = page.rootInstance;
    expect(typo.variant).toBe('fs-16');
    expect(typo.tag).toBe('p');
    expect(typo.margin).toBe(true);
    expect(typo.italic).toBe(false);
    expect(typo.noWrap).toBe(false);
    expect(typo.paragraph).toBe(false);
    expect(typo.lineHeight).toBe(null);
    expect(typo.bold).toBe(null);
    expect(typo.dataTest).toBe(null);

    expect(page.root).toEqualHtml(`
      <bds-typo>
        <mock:shadow-root>
          <p class="typo typo__variant--fs-16 typo__margin--fs-16" part="bds-typo__text">
            <slot></slot>
          </p>
        </mock:shadow-root>
        Default text
      </bds-typo>
    `);
  });

  it('should render with custom properties', async () => {
    const page = await newSpecPage({
      components: [Typo],
      html: `
        <bds-typo 
          variant="fs-24" 
          tag="h1" 
          bold="bold" 
          line-height="simple" 
          italic="true" 
          no-wrap="true" 
          paragraph="true" 
          margin="false"
          data-test="custom-typo">
          Custom text
        </bds-typo>
      `,
    });

    const typo = page.rootInstance;
    expect(typo.variant).toBe('fs-24');
    expect(typo.tag).toBe('h1');
    expect(typo.bold).toBe('bold');
    expect(typo.lineHeight).toBe('simple');
    expect(typo.italic).toBe(true);
    expect(typo.noWrap).toBe(true);
    expect(typo.paragraph).toBe(true);
    expect(typo.margin).toBe(false);
    expect(typo.dataTest).toBe('custom-typo');
  });

  it('should accept all valid variants', async () => {
    const validVariants = ['fs-10', 'fs-12', 'fs-14', 'fs-16', 'fs-20', 'fs-24', 'fs-32', 'fs-40'];
    
    for (const variant of validVariants) {
      const page = await newSpecPage({
        components: [Typo],
        html: `<bds-typo variant="${variant}">Text</bds-typo>`,
      });

      const typo = page.rootInstance;
      expect(typo.variant).toBe(variant);
      
      const element = page.root.shadowRoot.querySelector(`.typo__variant--${variant}`);
      expect(element).toBeTruthy();
    }
  });

  it('should accept all valid tags', async () => {
    const validTags = ['p', 'h1', 'h2', 'h3', 'h4', 'span'];
    
    for (const tag of validTags) {
      const page = await newSpecPage({
        components: [Typo],
        html: `<bds-typo tag="${tag}">Text</bds-typo>`,
      });

      const typo = page.rootInstance;
      expect(typo.tag).toBe(tag);
      
      const element = page.root.shadowRoot.querySelector(tag);
      expect(element).toBeTruthy();
    }
  });

  it('should accept all valid line heights', async () => {
    const validLineHeights = ['none', 'small', 'simple', 'plus', 'double'];
    
    for (const lineHeight of validLineHeights) {
      const page = await newSpecPage({
        components: [Typo],
        html: `<bds-typo line-height="${lineHeight}">Text</bds-typo>`,
      });

      const typo = page.rootInstance;
      expect(typo.lineHeight).toBe(lineHeight);
      
      const element = page.root.shadowRoot.querySelector(`.typo__line-height--${lineHeight}`);
      expect(element).toBeTruthy();
    }
  });

  it('should accept all valid bold values', async () => {
    const validBoldValues = ['regular', 'semi-bold', 'bold', 'extra-bold'];
    
    for (const bold of validBoldValues) {
      const page = await newSpecPage({
        components: [Typo],
        html: `<bds-typo bold="${bold}">Text</bds-typo>`,
      });

      const typo = page.rootInstance;
      expect(typo.bold).toBe(bold);
      
      const element = page.root.shadowRoot.querySelector(`.typo__bold--${bold}`);
      expect(element).toBeTruthy();
    }
  });

  it('should handle boolean properties correctly', async () => {
    const page = await newSpecPage({
      components: [Typo],
      html: `<bds-typo italic="true" no-wrap="true" paragraph="true" margin="false">Text</bds-typo>`,
    });

    const element = page.root.shadowRoot.querySelector('p');
    expect(element.classList.contains('typo--italic')).toBe(true);
    expect(element.classList.contains('typo--no-wrap')).toBe(true);
    expect(element.classList.contains('typo--paragraph')).toBe(true);
    expect(element.classList.contains('typo__margin--fs-16')).toBe(false);
  });

  it('should apply margin classes when margin is true', async () => {
    const page = await newSpecPage({
      components: [Typo],
      html: `<bds-typo variant="fs-20" margin="true">Text</bds-typo>`,
    });

    const element = page.root.shadowRoot.querySelector('p');
    expect(element.classList.contains('typo__margin--fs-20')).toBe(true);
  });

  it('should not apply margin classes when margin is false', async () => {
    const page = await newSpecPage({
      components: [Typo],
      html: `<bds-typo variant="fs-20" margin="false">Text</bds-typo>`,
    });

    const element = page.root.shadowRoot.querySelector('p');
    expect(element.classList.contains('typo__margin--fs-20')).toBe(false);
  });

  it('should handle data-test attribute', async () => {
    const page = await newSpecPage({
      components: [Typo],
      html: `<bds-typo data-test="test-typo">Text</bds-typo>`,
    });

    const element = page.root.shadowRoot.querySelector('[data-test="test-typo"]');
    expect(element).toBeTruthy();
  });

  it('should render slot content correctly', async () => {
    const page = await newSpecPage({
      components: [Typo],
      html: `<bds-typo><strong>Bold</strong> and <em>italic</em> text</bds-typo>`,
    });

    expect(page.root.textContent).toContain('Bold');
    expect(page.root.textContent).toContain('italic');
    expect(page.root.querySelector('strong')).toBeTruthy();
    expect(page.root.querySelector('em')).toBeTruthy();
  });

  it('should handle empty content', async () => {
    const page = await newSpecPage({
      components: [Typo],
      html: `<bds-typo></bds-typo>`,
    });

    expect(page.root.textContent).toBe('');
    expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
  });

  it('should apply part attribute for styling', async () => {
    const page = await newSpecPage({
      components: [Typo],
      html: `<bds-typo>Text</bds-typo>`,
    });

    const element = page.root.shadowRoot.querySelector('[part="bds-typo__text"]');
    expect(element).toBeTruthy();
  });

  it('should not apply optional classes when properties are null/false', async () => {
    const page = await newSpecPage({
      components: [Typo],
      html: `<bds-typo line-height="" bold="" italic="false" no-wrap="false" paragraph="false">Text</bds-typo>`,
    });

    const element = page.root.shadowRoot.querySelector('p');
    expect(element.classList.contains('typo__line-height--')).toBe(false);
    expect(element.classList.contains('typo__bold--')).toBe(false);
    expect(element.classList.contains('typo--italic')).toBe(false);
    expect(element.classList.contains('typo--no-wrap')).toBe(false);
    expect(element.classList.contains('typo--paragraph')).toBe(false);
  });

  it('should maintain proper class structure with all options', async () => {
    const page = await newSpecPage({
      components: [Typo],
      html: `
        <bds-typo 
          variant="fs-32" 
          tag="h1" 
          bold="extra-bold" 
          line-height="double" 
          italic="true" 
          no-wrap="true" 
          paragraph="true" 
          margin="true">
          Complex text
        </bds-typo>
      `,
    });

    const element = page.root.shadowRoot.querySelector('h1');
    expect(element.classList.contains('typo')).toBe(true);
    expect(element.classList.contains('typo__variant--fs-32')).toBe(true);
    expect(element.classList.contains('typo__margin--fs-32')).toBe(true);
    expect(element.classList.contains('typo--no-wrap')).toBe(true);
    expect(element.classList.contains('typo--paragraph')).toBe(true);
    expect(element.classList.contains('typo--italic')).toBe(true);
    expect(element.classList.contains('typo__line-height--double')).toBe(true);
    expect(element.classList.contains('typo__bold--extra-bold')).toBe(true);
  });

  it('should handle property changes dynamically', async () => {
    const page = await newSpecPage({
      components: [Typo],
      html: `<bds-typo>Text</bds-typo>`,
    });

    const typo = page.rootInstance;
    
    // Change properties
    typo.variant = 'fs-24';
    typo.bold = 'bold';
    typo.italic = true;
    typo.noWrap = true;
    
    await page.waitForChanges();

    const element = page.root.shadowRoot.querySelector('p');
    expect(element.classList.contains('typo__variant--fs-24')).toBe(true);
    expect(element.classList.contains('typo__bold--bold')).toBe(true);
    expect(element.classList.contains('typo--italic')).toBe(true);
    expect(element.classList.contains('typo--no-wrap')).toBe(true);
  });
});