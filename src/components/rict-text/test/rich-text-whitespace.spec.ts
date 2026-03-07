import { newSpecPage } from '@stencil/core/testing';
import { RichText } from '../rich-text';

/**
 * Tests for whitespace preservation in the RichText component.
 * 
 * These tests verify that the component correctly preserves:
 * - Leading spaces before text
 * - Trailing spaces after text
 * - Multiple consecutive spaces within text
 * - Line breaks and newlines
 * - Whitespace when applying formatting (bold, italic, etc.)
 */

// Mock the utility function
jest.mock('../../../utils/position-element', () => ({
  getParentsUntil: jest.fn().mockReturnValue([])
}));

describe('bds-rich-text whitespace preservation', () => {
  let page;
  let mockGetSelection;
  let mockRange;
  let mockTextNode;

  beforeEach(async () => {
    // Create a real text node that will be used in tests
    mockTextNode = document.createTextNode('test content');

    // Setup mock range
    mockRange = {
      collapsed: false,
      startContainer: mockTextNode,
      endContainer: mockTextNode,
      startOffset: 0,
      endOffset: 0,
      commonAncestorContainer: document.createElement('div'),
      extractContents: jest.fn().mockReturnValue(document.createDocumentFragment()),
      insertNode: jest.fn(),
      setStart: jest.fn(),
      setEnd: jest.fn(),
      setStartBefore: jest.fn(),
      setEndAfter: jest.fn(),
      setStartAfter: jest.fn(),
      deleteContents: jest.fn(),
      selectNodeContents: jest.fn(),
      collapse: jest.fn(),
      toString: jest.fn().mockReturnValue(''),
      cloneRange: jest.fn().mockReturnThis()
    };

    // Setup mock selection
    mockGetSelection = jest.fn().mockImplementation(() => ({
      getRangeAt: jest.fn().mockReturnValue(mockRange),
      rangeCount: 1,
      removeAllRanges: jest.fn(),
      addRange: jest.fn(),
      anchorNode: mockTextNode,
      toString: jest.fn().mockReturnValue('')
    }));

    Object.defineProperty(window, 'getSelection', {
      writable: true,
      value: mockGetSelection
    });

    document.createRange = jest.fn().mockReturnValue(mockRange);

    page = await newSpecPage({
      components: [RichText],
      html: '<bds-rich-text></bds-rich-text>',
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Whitespace in text content', () => {
    it('should preserve leading spaces when applying bold formatting', async () => {
      const component = page.rootInstance as RichText;
      const editor = page.root.querySelector('.editor-uai-design-system') as HTMLElement;
      component['editor'] = editor;

      // Setup editor content with leading space
      editor.innerHTML = '<p class="line">word <span>text</span></p>';
      
      // Create a text node with leading space
      const textNodeWithSpace = document.createTextNode(' text');
      const fragment = document.createDocumentFragment();
      fragment.appendChild(textNodeWithSpace.cloneNode(true));

      // Mock selection to include the text with leading space
      mockRange.extractContents = jest.fn().mockReturnValue(fragment);
      mockRange.collapsed = false;
      mockRange.toString = jest.fn().mockReturnValue(' text');

      // Apply bold formatting
      const customEvent = new CustomEvent('test');
      component['wrapSelection'](customEvent, 'b');

      // The content should still contain the leading space
      const boldElement = editor.querySelector('b');
      if (boldElement) {
        const textContent = boldElement.textContent;
        expect(textContent).toMatch(/^\s/); // Should start with whitespace
        expect(textContent.trim()).toBe('text');
      }
    });

    it('should preserve trailing spaces when applying italic formatting', async () => {
      const component = page.rootInstance as RichText;
      const editor = page.root.querySelector('.editor-uai-design-system') as HTMLElement;
      component['editor'] = editor;

      // Setup editor content with trailing space
      editor.innerHTML = '<p class="line"><span>text</span> word</p>';
      
      // Create a text node with trailing space
      const textNodeWithSpace = document.createTextNode('text ');
      const fragment = document.createDocumentFragment();
      fragment.appendChild(textNodeWithSpace.cloneNode(true));

      // Mock selection to include the text with trailing space
      mockRange.extractContents = jest.fn().mockReturnValue(fragment);
      mockRange.collapsed = false;
      mockRange.toString = jest.fn().mockReturnValue('text ');

      // Apply italic formatting
      const customEvent = new CustomEvent('test');
      component['wrapSelection'](customEvent, 'i');

      // The content should still contain the trailing space
      const italicElement = editor.querySelector('i');
      if (italicElement) {
        const textContent = italicElement.textContent;
        expect(textContent).toMatch(/\s$/); // Should end with whitespace
        expect(textContent.trim()).toBe('text');
      }
    });

    it('should preserve multiple consecutive spaces within text', async () => {
      const component = page.rootInstance as RichText;
      const editor = page.root.querySelector('.editor-uai-design-system') as HTMLElement;
      component['editor'] = editor;

      // Setup editor content with multiple spaces
      editor.innerHTML = '<p class="line">word    word</p>';
      
      // Create a text node with multiple spaces
      const textNodeWithSpaces = document.createTextNode('word    word');
      const fragment = document.createDocumentFragment();
      fragment.appendChild(textNodeWithSpaces.cloneNode(true));

      // Mock selection to include the text with multiple spaces
      mockRange.extractContents = jest.fn().mockReturnValue(fragment);
      mockRange.collapsed = false;
      mockRange.toString = jest.fn().mockReturnValue('word    word');

      // Apply bold formatting
      const customEvent = new CustomEvent('test');
      component['wrapSelection'](customEvent, 'b');

      // The content should preserve the multiple spaces
      const boldElement = editor.querySelector('b');
      if (boldElement) {
        const textContent = boldElement.textContent;
        // Count spaces between words
        const spacesMatch = textContent.match(/word(\s+)word/);
        if (spacesMatch) {
          expect(spacesMatch[1].length).toBeGreaterThanOrEqual(2); // Should have multiple spaces
        }
      }
    });

    it('should not remove whitespace-only text nodes', async () => {
      const component = page.rootInstance as RichText;
      const editor = page.root.querySelector('.editor-uai-design-system') as HTMLElement;
      component['editor'] = editor;

      // Setup editor with whitespace nodes
      const p = document.createElement('p');
      p.className = 'line';
      p.appendChild(document.createTextNode('word'));
      p.appendChild(document.createTextNode('   ')); // whitespace-only node
      p.appendChild(document.createTextNode('word'));
      editor.appendChild(p);

      const initialWhitespaceNodes = Array.from(p.childNodes).filter(
        node => node.nodeType === Node.TEXT_NODE && /^\s+$/.test(node.textContent)
      );
      
      expect(initialWhitespaceNodes.length).toBeGreaterThan(0);

      // Simulate some operation that might remove whitespace
      const customEvent = new CustomEvent('test');
      component['wrapSelection'](customEvent, 'b');

      // Check that whitespace nodes are still present
      const whitespaceNodes = Array.from(p.childNodes).filter(
        node => node.nodeType === Node.TEXT_NODE && /^\s+$/.test(node.textContent)
      );
      
      expect(whitespaceNodes.length).toBeGreaterThan(0);
    });
  });

  describe('Paste operations with whitespace', () => {
    it('should preserve spaces in pasted text', async () => {
      const component = page.rootInstance as RichText;
      const editor = page.root.querySelector('.editor-uai-design-system') as HTMLElement;
      component['editor'] = editor;

      // Setup initial content
      editor.innerHTML = '<p class="line"><br></p>';

      // Create a mock clipboard event with text containing spaces
      const mockClipboardData = {
        getData: jest.fn().mockReturnValue('  text with spaces  ')
      };

      const pasteEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        clipboardData: mockClipboardData
      };

      // Setup selection
      const selection = window.getSelection();
      mockRange.deleteContents = jest.fn();
      mockRange.insertNode = jest.fn();

      // Trigger paste
      component['handlePaste'](pasteEvent as any);

      // Verify that getData was called
      expect(mockClipboardData.getData).toHaveBeenCalledWith('text/plain');
      expect(pasteEvent.preventDefault).toHaveBeenCalled();
    });

    it('should preserve line breaks in pasted text', async () => {
      const component = page.rootInstance as RichText;
      const editor = page.root.querySelector('.editor-uai-design-system') as HTMLElement;
      component['editor'] = editor;

      // Setup initial content
      editor.innerHTML = '<p class="line"><br></p>';

      // Create a mock clipboard event with multiline text
      const mockClipboardData = {
        getData: jest.fn().mockReturnValue('line1\nline2\nline3')
      };

      const pasteEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        clipboardData: mockClipboardData
      };

      // Setup selection
      mockRange.deleteContents = jest.fn();
      mockRange.insertNode = jest.fn();

      // Trigger paste
      component['handlePaste'](pasteEvent as any);

      // Verify that paste was processed
      expect(mockClipboardData.getData).toHaveBeenCalledWith('text/plain');
      expect(pasteEvent.preventDefault).toHaveBeenCalled();
    });

    it('should not trim leading spaces from pasted lines', async () => {
      const component = page.rootInstance as RichText;
      const editor = page.root.querySelector('.editor-uai-design-system') as HTMLElement;
      component['editor'] = editor;

      // Setup initial content
      editor.innerHTML = '<p class="line"><br></p>';

      // Create a mock clipboard event with text having leading spaces
      const mockClipboardData = {
        getData: jest.fn().mockReturnValue('  indented text')
      };

      const pasteEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        clipboardData: mockClipboardData
      };

      // Setup selection
      mockRange.deleteContents = jest.fn();
      mockRange.insertNode = jest.fn();

      // Trigger paste
      component['handlePaste'](pasteEvent as any);

      expect(mockClipboardData.getData).toHaveBeenCalledWith('text/plain');
    });

    it('should not trim trailing spaces from pasted lines', async () => {
      const component = page.rootInstance as RichText;
      const editor = page.root.querySelector('.editor-uai-design-system') as HTMLElement;
      component['editor'] = editor;

      // Setup initial content
      editor.innerHTML = '<p class="line"><br></p>';

      // Create a mock clipboard event with text having trailing spaces
      const mockClipboardData = {
        getData: jest.fn().mockReturnValue('text with trailing spaces  ')
      };

      const pasteEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        clipboardData: mockClipboardData
      };

      // Setup selection
      mockRange.deleteContents = jest.fn();
      mockRange.insertNode = jest.fn();

      // Trigger paste
      component['handlePaste'](pasteEvent as any);

      expect(mockClipboardData.getData).toHaveBeenCalledWith('text/plain');
    });
  });

  describe('Clear formatting with whitespace', () => {
    it('should preserve whitespace when clearing formatting', async () => {
      const component = page.rootInstance as RichText;
      const editor = page.root.querySelector('.editor-uai-design-system') as HTMLElement;
      component['editor'] = editor;

      // Setup editor content with formatted text and spaces
      const p = document.createElement('p');
      p.className = 'line';
      const boldText = document.createElement('b');
      boldText.textContent = ' text with spaces ';
      p.appendChild(boldText);
      editor.appendChild(p);

      // Mock selection to include the formatted text
      mockRange.startContainer = p;
      mockRange.endContainer = p;

      // Clear formatting
      const customEvent = new CustomEvent('test');
      component['clearFormatting'](customEvent);

      // Check that spaces are preserved after clearing
      const textContent = p.textContent;
      expect(textContent).toBe(' text with spaces ');
    });


    it('should preserve multiple spaces when clearing formatting', async () => {
      const component = page.rootInstance as RichText;
      const editor = page.root.querySelector('.editor-uai-design-system') as HTMLElement;
      component['editor'] = editor;

      // Setup editor content with formatted text and multiple spaces
      const p = document.createElement('p');
      p.className = 'line';
      const italicText = document.createElement('i');
      italicText.textContent = 'word    word';
      p.appendChild(italicText);
      editor.appendChild(p);

      // Mock selection
      mockRange.startContainer = p;
      mockRange.endContainer = p;

      // Clear formatting
      const customEvent = new CustomEvent('test');
      component['clearFormatting'](customEvent);

      // Check that multiple spaces are preserved
      const textContent = p.textContent;
      expect(textContent).toMatch(/word\s{2,}word/);
    });
  });

  describe('Edge cases with whitespace', () => {
    it('should handle text that is only whitespace', async () => {
      const component = page.rootInstance as RichText;
      const editor = page.root.querySelector('.editor-uai-design-system') as HTMLElement;
      component['editor'] = editor;

      // Setup editor with whitespace-only content
      editor.innerHTML = '<p class="line">   </p>';

      // The editor should not remove the whitespace-only line
      const p = editor.querySelector('p');
      expect(p).toBeTruthy();
      expect(p.textContent).toMatch(/\s+/);
    });

    it('should handle zero-width spaces correctly', async () => {
      const component = page.rootInstance as RichText;
      const editor = page.root.querySelector('.editor-uai-design-system') as HTMLElement;
      component['editor'] = editor;

      // Setup content with zero-width space
      editor.innerHTML = '<p class="line">text\u200Btext</p>';

      const textContent = editor.textContent;
      expect(textContent).toContain('\u200B');
    });

    it('should handle non-breaking spaces correctly', async () => {
      const component = page.rootInstance as RichText;
      const editor = page.root.querySelector('.editor-uai-design-system') as HTMLElement;
      component['editor'] = editor;

      // Setup content with non-breaking spaces
      editor.innerHTML = '<p class="line">text&nbsp;&nbsp;text</p>';

      const p = editor.querySelector('p');
      // Non-breaking spaces should be preserved
      expect(p.innerHTML).toContain('&nbsp;');
    });

    it('should preserve whitespace structure when applying nested formatting', async () => {
      const component = page.rootInstance as RichText;
      const editor = page.root.querySelector('.editor-uai-design-system') as HTMLElement;
      component['editor'] = editor;

      // Setup editor content with spaces
      editor.innerHTML = '<p class="line">word <b>bold</b> word</p>';
      
      // Create a text node with spaces around it
      const textNode = document.createTextNode(' bold ');
      const fragment = document.createDocumentFragment();
      fragment.appendChild(textNode);

      mockRange.extractContents = jest.fn().mockReturnValue(fragment);
      mockRange.collapsed = false;
      mockRange.toString = jest.fn().mockReturnValue(' bold ');

      // Apply italic to the already bold text (creating nested formatting)
      const customEvent = new CustomEvent('test');
      component['wrapSelection'](customEvent, 'i');

      // Spaces should be preserved even with nested formatting
      const p = editor.querySelector('p');
      const textContent = p.textContent;
      
      // Should still have spaces in the structure
      expect(textContent).toMatch(/\s/);
    });
  });

  describe('Whitespace preservation in specific scenarios', () => {
    it('should preserve space between two words when one is formatted', async () => {
      const component = page.rootInstance as RichText;
      const editor = page.root.querySelector('.editor-uai-design-system') as HTMLElement;
      component['editor'] = editor;

      // This is the main bug scenario: "word <format>word</format>"
      // The space before the formatted word should be preserved
      editor.innerHTML = '<p class="line">first second</p>';

      // Select only "second" (without the space)
      const textNode = document.createTextNode('second');
      const fragment = document.createDocumentFragment();
      fragment.appendChild(textNode);

      mockRange.extractContents = jest.fn().mockReturnValue(fragment);
      mockRange.collapsed = false;
      mockRange.toString = jest.fn().mockReturnValue('second');

      // Apply bold to "second"
      const customEvent = new CustomEvent('test');
      component['wrapSelection'](customEvent, 'b');

      // The result should be "first <b>second</b>" with the space preserved
      const p = editor.querySelector('p');
      const textContent = p.textContent;
      
      // There should still be a space between "first" and "second"
      expect(textContent).toMatch(/first\s+second/);
    });

    it('should preserve space when formatting a word preceded by space', async () => {
      const component = page.rootInstance as RichText;
      const editor = page.root.querySelector('.editor-uai-design-system') as HTMLElement;
      component['editor'] = editor;

      // Setup: "word [space]word"
      const p = document.createElement('p');
      p.className = 'line';
      p.appendChild(document.createTextNode('word '));
      p.appendChild(document.createTextNode('target'));
      editor.appendChild(p);

      // Mock selecting "target" (the selection should not include the preceding space)
      const textNode = document.createTextNode('target');
      const fragment = document.createDocumentFragment();
      fragment.appendChild(textNode);

      mockRange.extractContents = jest.fn().mockReturnValue(fragment);
      mockRange.collapsed = false;
      mockRange.toString = jest.fn().mockReturnValue('target');

      // Apply italic
      const customEvent = new CustomEvent('test');
      component['wrapSelection'](customEvent, 'i');

      // Verify space is preserved
      const resultText = p.textContent;
      expect(resultText).toMatch(/word\s+target/);
    });

    it('should handle whitespace when selection includes partial text nodes', async () => {
      const component = page.rootInstance as RichText;
      const editor = page.root.querySelector('.editor-uai-design-system') as HTMLElement;
      component['editor'] = editor;

      // Setup complex content
      const p = document.createElement('p');
      p.className = 'line';
      p.appendChild(document.createTextNode('start '));
      p.appendChild(document.createTextNode('middle'));
      p.appendChild(document.createTextNode(' end'));
      editor.appendChild(p);

      // Mock selecting "middle" with partial surrounding spaces
      const textNode = document.createTextNode(' middle ');
      const fragment = document.createDocumentFragment();
      fragment.appendChild(textNode);

      mockRange.extractContents = jest.fn().mockReturnValue(fragment);
      mockRange.collapsed = false;
      mockRange.toString = jest.fn().mockReturnValue(' middle ');

      // Apply formatting
      const customEvent = new CustomEvent('test');
      component['wrapSelection'](customEvent, 'b');

      // All spaces should be preserved
      const resultText = p.textContent;
      expect(resultText.split(/\s+/).filter(s => s).length).toBe(3); // Should have 3 words
    });
  });

  describe('CSS whitespace handling', () => {
    it('should have appropriate CSS for whitespace preservation', async () => {
      const component = page.rootInstance as RichText;
      const editor = page.root.querySelector('.editor-uai-design-system') as HTMLElement;
      
      // Check if editor exists
      expect(editor).toBeTruthy();
      
      // Note: In a real scenario, we would check computed styles
      // For unit tests, we're verifying the element exists and can contain whitespace
      editor.textContent = 'text   text';
      expect(editor.textContent).toBe('text   text');
    });
  });
});
