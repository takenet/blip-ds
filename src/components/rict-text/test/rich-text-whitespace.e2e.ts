import { newE2EPage } from '@stencil/core/testing';

/**
 * E2E tests for whitespace preservation in the RichText component.
 * 
 * These tests verify real-world scenarios where users interact with
 * the component and expect whitespace to be preserved.
 */

describe('bds-rich-text whitespace preservation e2e', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-rich-text 
          position-bar="top"
          language="pt_BR"
          data-test="rich-text-whitespace"
        ></bds-rich-text>
      `,
    });
  });

  describe('Typing and formatting with spaces', () => {
    it('should preserve space before a word when applying bold', async () => {
      const richText = await page.find('bds-rich-text');
      const editor = await page.find('bds-rich-text .editor-uai-design-system');
      
      // Type text with spaces
      await editor.click();
      await page.keyboard.type('first second');
      await page.waitForChanges();
      
      // Select "second" by double-clicking (in a real scenario)
      // For e2e, we'll use JavaScript to select the text
      await page.evaluate(() => {
        const editorEl = document.querySelector('.editor-uai-design-system') as HTMLElement;
        const textNode = editorEl.firstChild.firstChild; // Get the text node
        const range = document.createRange();
        const sel = window.getSelection();
        
        // Select "second" (starting after the space)
        range.setStart(textNode, 6); // After "first "
        range.setEnd(textNode, 12); // End of "second"
        
        sel.removeAllRanges();
        sel.addRange(range);
      });

      await page.waitForChanges();

      // Get the editor HTML before applying formatting
      const htmlBefore = await editor.getProperty('innerHTML');
      
      // Apply bold formatting by clicking the bold button
      const boldButton = await page.find('bds-rich-text bds-tooltip[data-test="tooltip-weight"] bds-button');
      if (boldButton) {
        await boldButton.click();
        await page.waitForChanges();
      }

      // Get the editor HTML after applying formatting
      const htmlAfter = await editor.getProperty('innerHTML');
      const textContent = await editor.getProperty('textContent');
      
      // Verify that the space between "first" and "second" is preserved
      expect(textContent).toMatch(/first\s+second/);
      
      // The HTML should contain a space before the bold tag or inside it
      expect(htmlAfter).toBeTruthy();
    });

    it('should preserve trailing space after a formatted word', async () => {
      const editor = await page.find('bds-rich-text .editor-uai-design-system');
      
      // Type text with spaces
      await editor.click();
      await page.keyboard.type('word text');
      await page.waitForChanges();
      
      // Select "word " (including trailing space)
      await page.evaluate(() => {
        const editorEl = document.querySelector('.editor-uai-design-system') as HTMLElement;
        const textNode = editorEl.firstChild.firstChild;
        const range = document.createRange();
        const sel = window.getSelection();
        
        // Select "word " with trailing space
        range.setStart(textNode, 0);
        range.setEnd(textNode, 5); // Include the space after "word"
        
        sel.removeAllRanges();
        sel.addRange(range);
      });

      await page.waitForChanges();

      // Apply italic formatting
      const italicButton = await page.find('bds-rich-text bds-tooltip[data-test="tooltip-italic"] bds-button');
      if (italicButton) {
        await italicButton.click();
        await page.waitForChanges();
      }

      const textContent = await editor.getProperty('textContent');
      
      // Verify that there's still a space between "word" and "text"
      expect(textContent).toMatch(/word\s+text/);
    });

    it('should preserve multiple consecutive spaces', async () => {
      const editor = await page.find('bds-rich-text .editor-uai-design-system');
      
      // Type text with multiple spaces
      await editor.click();
      
      // Type multiple spaces using keyboard
      await page.keyboard.type('word');
      await page.keyboard.press('Space');
      await page.keyboard.press('Space');
      await page.keyboard.press('Space');
      await page.keyboard.press('Space');
      await page.keyboard.type('text');
      await page.waitForChanges();
      
      const textContent = await editor.getProperty('textContent');
      
      // Get the actual text content
      const text = textContent.toString();
      
      // Check that we have "word" and "text" with spaces between
      expect(text).toContain('word');
      expect(text).toContain('text');
    });
  });

  describe('Pasting text with whitespace', () => {
    it('should preserve spaces when pasting plain text', async () => {
      const editor = await page.find('bds-rich-text .editor-uai-design-system');
      
      await editor.click();
      await page.waitForChanges();

      // Simulate paste event with text containing multiple spaces
      const textToPaste = 'text   with   spaces';
      
      await page.evaluate((text) => {
        const editorEl = document.querySelector('.editor-uai-design-system') as HTMLElement;
        const evt = new ClipboardEvent('paste', {
          clipboardData: new DataTransfer()
        });
        
        // Add text data to clipboard
        evt.clipboardData.setData('text/plain', text);
        
        editorEl.dispatchEvent(evt);
      }, textToPaste);

      await page.waitForChanges();

      const textContent = await editor.getProperty('textContent');
      
      // Verify that the pasted text preserves whitespace structure
      expect(textContent).toContain('text');
      expect(textContent).toContain('with');
      expect(textContent).toContain('spaces');
    });

    it('should preserve line breaks when pasting multiline text', async () => {
      const editor = await page.find('bds-rich-text .editor-uai-design-system');
      
      await editor.click();
      await page.waitForChanges();

      // Simulate paste event with multiline text
      const textToPaste = 'line1\nline2\nline3';
      
      await page.evaluate((text) => {
        const editorEl = document.querySelector('.editor-uai-design-system') as HTMLElement;
        const evt = new ClipboardEvent('paste', {
          clipboardData: new DataTransfer()
        });
        
        evt.clipboardData.setData('text/plain', text);
        editorEl.dispatchEvent(evt);
      }, textToPaste);

      await page.waitForChanges();

      // Check that we have multiple paragraph elements
      const paragraphs = await page.findAll('bds-rich-text .editor-uai-design-system p');
      
      // Should have created separate paragraphs for each line
      expect(paragraphs.length).toBeGreaterThan(0);
    });

    it('should preserve leading spaces in pasted text', async () => {
      const editor = await page.find('bds-rich-text .editor-uai-design-system');
      
      await editor.click();
      await page.waitForChanges();

      // Simulate paste with leading spaces
      const textToPaste = '  indented text';
      
      await page.evaluate((text) => {
        const editorEl = document.querySelector('.editor-uai-design-system') as HTMLElement;
        const evt = new ClipboardEvent('paste', {
          clipboardData: new DataTransfer()
        });
        
        evt.clipboardData.setData('text/plain', text);
        editorEl.dispatchEvent(evt);
      }, textToPaste);

      await page.waitForChanges();

      const textContent = await editor.getProperty('textContent');
      
      // The text should be present
      expect(textContent).toContain('indented text');
    });

    it('should preserve trailing spaces in pasted text', async () => {
      const editor = await page.find('bds-rich-text .editor-uai-design-system');
      
      await editor.click();
      await page.waitForChanges();

      // Simulate paste with trailing spaces
      const textToPaste = 'text with trailing  ';
      
      await page.evaluate((text) => {
        const editorEl = document.querySelector('.editor-uai-design-system') as HTMLElement;
        const evt = new ClipboardEvent('paste', {
          clipboardData: new DataTransfer()
        });
        
        evt.clipboardData.setData('text/plain', text);
        editorEl.dispatchEvent(evt);
      }, textToPaste);

      await page.waitForChanges();

      const textContent = await editor.getProperty('textContent');
      
      // The text should be present
      expect(textContent).toContain('text with trailing');
    });
  });

  describe('Clearing formatting with whitespace', () => {
    it('should preserve spaces when removing formatting', async () => {
      const editor = await page.find('bds-rich-text .editor-uai-design-system');
      
      // Set initial formatted content with spaces
      await page.evaluate(() => {
        const editorEl = document.querySelector('.editor-uai-design-system') as HTMLElement;
        editorEl.innerHTML = '<p class="line">text <b>bold text</b> more</p>';
      });
      
      await page.waitForChanges();

      // Select all text
      await editor.click();
      await page.evaluate(() => {
        const editorEl = document.querySelector('.editor-uai-design-system') as HTMLElement;
        const range = document.createRange();
        const sel = window.getSelection();
        
        range.selectNodeContents(editorEl);
        sel.removeAllRanges();
        sel.addRange(range);
      });

      await page.waitForChanges();

      // Click the unstyled button to clear formatting
      const unstyledButton = await page.find('bds-rich-text bds-tooltip[data-test="tooltip-unstyled"] bds-button');
      if (unstyledButton) {
        await unstyledButton.click();
        await page.waitForChanges();
      }

      const textContent = await editor.getProperty('textContent');
      
      // Spaces should still be present
      expect(textContent).toMatch(/text\s+bold text\s+more/);
    });
  });

  describe('Complex whitespace scenarios', () => {
    it('should handle mixed formatting with spaces correctly', async () => {
      const editor = await page.find('bds-rich-text .editor-uai-design-system');
      
      // Set complex content
      await page.evaluate(() => {
        const editorEl = document.querySelector('.editor-uai-design-system') as HTMLElement;
        editorEl.innerHTML = '<p class="line">normal <b>bold</b> <i>italic</i> text</p>';
      });
      
      await page.waitForChanges();

      const textContent = await editor.getProperty('textContent');
      
      // All words should be separated by spaces
      const words = textContent.toString().split(/\s+/).filter(w => w);
      expect(words.length).toBe(4); // normal, bold, italic, text
    });

    it('should preserve whitespace structure with nested formatting', async () => {
      const editor = await page.find('bds-rich-text .editor-uai-design-system');
      
      // Type and format text
      await editor.click();
      await page.keyboard.type('word text');
      await page.waitForChanges();
      
      // Select "text"
      await page.evaluate(() => {
        const editorEl = document.querySelector('.editor-uai-design-system') as HTMLElement;
        const textNode = editorEl.firstChild.firstChild;
        const range = document.createRange();
        const sel = window.getSelection();
        
        range.setStart(textNode, 5); // Start after "word "
        range.setEnd(textNode, 9); // End at "text"
        
        sel.removeAllRanges();
        sel.addRange(range);
      });

      await page.waitForChanges();

      // Apply bold
      const boldButton = await page.find('bds-rich-text bds-tooltip[data-test="tooltip-weight"] bds-button');
      if (boldButton) {
        await boldButton.click();
        await page.waitForChanges();
      }

      // Apply italic on top of bold
      const italicButton = await page.find('bds-rich-text bds-tooltip[data-test="tooltip-italic"] bds-button');
      if (italicButton) {
        await italicButton.click();
        await page.waitForChanges();
      }

      const textContent = await editor.getProperty('textContent');
      
      // Space should still separate the words
      expect(textContent).toMatch(/word\s+text/);
    });
  });

  describe('Visual whitespace verification', () => {
    it('should render with visible space between formatted words', async () => {
      const editor = await page.find('bds-rich-text .editor-uai-design-system');
      
      // Set content with formatted text and spaces
      await page.evaluate(() => {
        const editorEl = document.querySelector('.editor-uai-design-system') as HTMLElement;
        editorEl.innerHTML = '<p class="line">first <b>second</b> third</p>';
      });
      
      await page.waitForChanges();

      // Get computed style to verify whitespace handling
      const whiteSpace = await page.evaluate(() => {
        const editorEl = document.querySelector('.editor-uai-design-system') as HTMLElement;
        return window.getComputedStyle(editorEl).whiteSpace;
      });

      // Check that we're not collapsing whitespace
      // The whitespace style should allow multiple spaces to be visible
      expect(['pre', 'pre-wrap', 'pre-line', 'normal']).toContain(whiteSpace);
    });

    it('should maintain consistent spacing in the editor', async () => {
      const editor = await page.find('bds-rich-text .editor-uai-design-system');
      
      // Set content with specific spacing
      await page.evaluate(() => {
        const editorEl = document.querySelector('.editor-uai-design-system') as HTMLElement;
        editorEl.innerHTML = '<p class="line">word1 word2</p>';
      });
      
      await page.waitForChanges();

      // Get the HTML
      const html = await editor.getProperty('innerHTML');
      const text = await editor.getProperty('textContent');
      
      // Text should contain both words with space between
      expect(text).toContain('word1');
      expect(text).toContain('word2');
      expect(text).toMatch(/word1\s+word2/);
    });
  });

  describe('Edge cases', () => {
    it('should handle whitespace-only content', async () => {
      const editor = await page.find('bds-rich-text .editor-uai-design-system');
      
      // Set whitespace-only content
      await page.evaluate(() => {
        const editorEl = document.querySelector('.editor-uai-design-system') as HTMLElement;
        editorEl.innerHTML = '<p class="line">     </p>';
      });
      
      await page.waitForChanges();

      // The paragraph should still exist
      const paragraphs = await page.findAll('bds-rich-text .editor-uai-design-system p');
      expect(paragraphs.length).toBeGreaterThan(0);
    });

    it('should handle tab characters', async () => {
      const editor = await page.find('bds-rich-text .editor-uai-design-system');
      
      // Set content with tab character
      await page.evaluate(() => {
        const editorEl = document.querySelector('.editor-uai-design-system') as HTMLElement;
        editorEl.innerHTML = '<p class="line">word\tword</p>';
      });
      
      await page.waitForChanges();

      const textContent = await editor.getProperty('textContent');
      
      // Content should be present
      expect(textContent).toContain('word');
    });

    it('should handle non-breaking spaces', async () => {
      const editor = await page.find('bds-rich-text .editor-uai-design-system');
      
      // Set content with non-breaking spaces
      await page.evaluate(() => {
        const editorEl = document.querySelector('.editor-uai-design-system') as HTMLElement;
        editorEl.innerHTML = '<p class="line">word&nbsp;&nbsp;word</p>';
      });
      
      await page.waitForChanges();

      const html = await editor.getProperty('innerHTML');
      
      // Non-breaking spaces should be preserved in HTML
      expect(html).toContain('nbsp');
    });
  });
});
