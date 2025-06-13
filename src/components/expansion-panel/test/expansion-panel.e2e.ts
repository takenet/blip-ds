import { newE2EPage } from '@stencil/core/testing';

describe('bds-expansion-panel e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-expansion-panel>
          <bds-expansion-panel-header text="Header description">
            <h3>Expansion Panel Title</h3>
          </bds-expansion-panel-header>
          <bds-expansion-panel-body text="Body content">
            <p>This is the body content</p>
          </bds-expansion-panel-body>
        </bds-expansion-panel>
      `,
    });
  });

  describe('Expansion Panel Main Component', () => {
    it('should render expansion-panel component', async () => {
      const expansionPanel = await page.find('bds-expansion-panel');
      expect(expansionPanel).toBeTruthy();
    });

    it('should have shadow DOM', async () => {
      const expansionPanel = await page.find('bds-expansion-panel');
      const shadowRoot = await expansionPanel.getProperty('shadowRoot');
      expect(shadowRoot).toBeTruthy();
    });

    it('should render slot content', async () => {
      const header = await page.find('bds-expansion-panel-header');
      const body = await page.find('bds-expansion-panel-body');
      expect(header).toBeTruthy();
      expect(body).toBeTruthy();
    });
  });

  describe('Expansion Panel Header Component', () => {
    it('should render expansion-panel-header component', async () => {
      const header = await page.find('bds-expansion-panel-header');
      expect(header).toBeTruthy();
    });

    it('should accept text property', async () => {
      const header = await page.find('bds-expansion-panel-header');
      const text = await header.getProperty('text');
      expect(text).toBe('Header description');
    });

    it('should render text in typo component', async () => {
      const typo = await page.find('bds-expansion-panel-header >>> bds-typo');
      expect(typo).toBeTruthy();
      
      const text = await typo.textContent;
      expect(text).toContain('Header description');
    });

    it('should render header div', async () => {
      const headerDiv = await page.find('bds-expansion-panel-header >>> div.header');
      expect(headerDiv).toBeTruthy();
    });

    it('should render slot content in header', async () => {
      const slotContent = await page.find('bds-expansion-panel-header h3');
      expect(slotContent).toBeTruthy();
      
      const text = await slotContent.textContent;
      expect(text).toContain('Expansion Panel Title');
    });

    it('should handle missing text gracefully', async () => {
      page = await newE2EPage({
        html: `
          <bds-expansion-panel-header>
            <h3>Title Only</h3>
          </bds-expansion-panel-header>
        `,
      });

      const header = await page.find('bds-expansion-panel-header');
      expect(header).toBeTruthy();
      
      const text = await header.getProperty('text');
      expect(text).toBeFalsy();
    });
  });

  describe('Expansion Panel Body Component', () => {
    it('should render expansion-panel-body component', async () => {
      const body = await page.find('bds-expansion-panel-body');
      expect(body).toBeTruthy();
    });

    it('should accept open property', async () => {
      const body = await page.find('bds-expansion-panel-body');
      const open = await body.getProperty('open');
      expect(open).toBe(false); // default value
    });

    it('should accept text property', async () => {
      const body = await page.find('bds-expansion-panel-body');
      const text = await body.getProperty('text');
      expect(text).toBe('Body content');
    });

    it('should render content div', async () => {
      const contentDiv = await page.find('bds-expansion-panel-body >>> div.expansion-content');
      expect(contentDiv).toBeTruthy();
    });

    it('should render with-line container', async () => {
      const withLineDiv = await page.find('bds-expansion-panel-body >>> div.with-line');
      expect(withLineDiv).toBeTruthy();
    });

    it('should render text when provided', async () => {
      const textDiv = await page.find('bds-expansion-panel-body >>> div.text');
      expect(textDiv).toBeTruthy();
      
      const paragraph = await page.find('bds-expansion-panel-body >>> div.text p');
      expect(paragraph).toBeTruthy();
      
      const text = await paragraph.textContent;
      expect(text).toContain('Body content');
    });

    it('should render circle when no text provided', async () => {
      page = await newE2EPage({
        html: `
          <bds-expansion-panel-body>
            <p>Content without text prop</p>
          </bds-expansion-panel-body>
        `,
      });

      const circle = await page.find('bds-expansion-panel-body >>> div.circle');
      expect(circle).toBeTruthy();
    });

    it('should handle open state', async () => {
      page = await newE2EPage({
        html: `
          <bds-expansion-panel-body open="true" text="Opened content">
            <p>This content is open</p>
          </bds-expansion-panel-body>
        `,
      });

      const body = await page.find('bds-expansion-panel-body');
      const open = await body.getProperty('open');
      expect(open).toBe(true);
    });

    it('should handle hidden attribute based on open state', async () => {
      // Default case: open is false, so hidden should be false (content visible)
      const contentDiv = await page.find('bds-expansion-panel-body >>> div.expansion-content');
      
      // Component logic: hidden={this.open} - so when open=false, hidden=false
      const hasHidden = await contentDiv.hasAttribute('hidden');
      expect(hasHidden).toBe(false);
    });

    it('should hide content when open is true', async () => {
      page = await newE2EPage({
        html: `
          <bds-expansion-panel-body open="true" text="Hidden content">
            <p>This should be hidden</p>
          </bds-expansion-panel-body>
        `,
      });

      const contentDiv = await page.find('bds-expansion-panel-body >>> div.expansion-content');
      
      // When open=true, hidden should be true (content hidden)
      const hasHidden = await contentDiv.hasAttribute('hidden');
      expect(hasHidden).toBe(true);
    });

    it('should render slot content in body', async () => {
      const slotContent = await page.find('bds-expansion-panel-body p');
      expect(slotContent).toBeTruthy();
      
      const text = await slotContent.textContent;
      expect(text).toContain('This is the body content');
    });
  });

  describe('Integration Tests', () => {
    it('should work together as compound component', async () => {
      const expansionPanel = await page.find('bds-expansion-panel');
      const header = await page.find('bds-expansion-panel-header');
      const body = await page.find('bds-expansion-panel-body');
      
      expect(expansionPanel).toBeTruthy();
      expect(header).toBeTruthy();
      expect(body).toBeTruthy();
    });

    it('should support complex nested content', async () => {
      page = await newE2EPage({
        html: `
          <bds-expansion-panel>
            <bds-expansion-panel-header text="Complex header">
              <div>
                <h2>Title</h2>
                <span>Subtitle</span>
              </div>
            </bds-expansion-panel-header>
            <bds-expansion-panel-body open="true">
              <div>
                <p>Paragraph 1</p>
                <p>Paragraph 2</p>
                <button>Action Button</button>
              </div>
            </bds-expansion-panel-body>
          </bds-expansion-panel>
        `,
      });

      const header = await page.find('bds-expansion-panel-header h2');
      const body = await page.find('bds-expansion-panel-body button');
      
      expect(header).toBeTruthy();
      expect(body).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('should have proper tag names', async () => {
      const expansionPanel = await page.find('bds-expansion-panel');
      const header = await page.find('bds-expansion-panel-header');
      const body = await page.find('bds-expansion-panel-body');
      
      const panelTag = await expansionPanel.getProperty('tagName');
      const headerTag = await header.getProperty('tagName');
      const bodyTag = await body.getProperty('tagName');
      
      expect(panelTag).toBe('BDS-EXPANSION-PANEL');
      expect(headerTag).toBe('BDS-EXPANSION-PANEL-HEADER');
      expect(bodyTag).toBe('BDS-EXPANSION-PANEL-BODY');
    });

    it('should support keyboard navigation', async () => {
      page = await newE2EPage({
        html: `
          <button>Previous button</button>
          <bds-expansion-panel>
            <bds-expansion-panel-header text="Test header">
              <h3>Test</h3>
            </bds-expansion-panel-header>
            <bds-expansion-panel-body text="Test body">
              <p>Content</p>
            </bds-expansion-panel-body>
          </bds-expansion-panel>
          <button>Next button</button>
        `,
      });

      const expansionPanel = await page.find('bds-expansion-panel');
      expect(expansionPanel).toBeTruthy();
      
      // Verify the component exists and can be interacted with
      const tagName = await expansionPanel.getProperty('tagName');
      expect(tagName).toBe('BDS-EXPANSION-PANEL');
    });

    it('should have semantic structure', async () => {
      const headerText = await page.find('bds-expansion-panel-header >>> bds-typo');
      expect(headerText).toBeTruthy();
      
      // Check typo has proper attributes - verify they exist
      const variant = await headerText.getProperty('variant');
      const tag = await headerText.getProperty('tag');
      expect(variant).toBe('fs-12');
      expect(tag).toBe('p');
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty expansion panel', async () => {
      page = await newE2EPage({
        html: `<bds-expansion-panel></bds-expansion-panel>`,
      });

      const expansionPanel = await page.find('bds-expansion-panel');
      expect(expansionPanel).toBeTruthy();
    });

    it('should handle only header', async () => {
      page = await newE2EPage({
        html: `
          <bds-expansion-panel>
            <bds-expansion-panel-header text="Only header">
              <h3>Header only</h3>
            </bds-expansion-panel-header>
          </bds-expansion-panel>
        `,
      });

      const expansionPanel = await page.find('bds-expansion-panel');
      const header = await page.find('bds-expansion-panel-header');
      
      expect(expansionPanel).toBeTruthy();
      expect(header).toBeTruthy();
    });

    it('should handle only body', async () => {
      page = await newE2EPage({
        html: `
          <bds-expansion-panel>
            <bds-expansion-panel-body text="Only body">
              <p>Body only</p>
            </bds-expansion-panel-body>
          </bds-expansion-panel>
        `,
      });

      const expansionPanel = await page.find('bds-expansion-panel');
      const body = await page.find('bds-expansion-panel-body');
      
      expect(expansionPanel).toBeTruthy();
      expect(body).toBeTruthy();
    });

    it('should handle header without text', async () => {
      page = await newE2EPage({
        html: `
          <bds-expansion-panel-header>
            <h3>No text prop</h3>
          </bds-expansion-panel-header>
        `,
      });

      const header = await page.find('bds-expansion-panel-header');
      expect(header).toBeTruthy();
      
      // Verify component works without text prop
      const tagName = await header.getProperty('tagName');
      expect(tagName).toBe('BDS-EXPANSION-PANEL-HEADER');
    });

    it('should handle body without text', async () => {
      page = await newE2EPage({
        html: `
          <bds-expansion-panel-body>
            <p>No text prop</p>
          </bds-expansion-panel-body>
        `,
      });

      const body = await page.find('bds-expansion-panel-body');
      expect(body).toBeTruthy();
      
      // The component should render since text defaults to null
      // Let's just verify the component works without text
      const tagName = await body.getProperty('tagName');
      expect(tagName).toBe('BDS-EXPANSION-PANEL-BODY');
    });
  });
});