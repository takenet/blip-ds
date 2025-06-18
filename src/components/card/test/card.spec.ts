import { newSpecPage } from '@stencil/core/testing';
import { Card } from '../card';

describe('bds-card', () => {
  it('should render with default values', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<bds-card></bds-card>`,
    });

    // Test default property values
    expect(page.root.height).toBe(null);
    expect(page.root.width).toBe('fit-content');
    expect(page.root.clickable).toBe(false);
    expect(page.root.bgColor).toBe('surface-1');
    expect(page.root.selectable).toBe(false);
    expect(page.root.borderColor).toBe(null);
    expect(page.root.dataTest).toBe(null);

    // Should render bds-paper component
    expect(page.root.shadowRoot.querySelector('bds-paper')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.card')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
  });

  it('should apply custom width and height', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<bds-card width="300px" height="200px"></bds-card>`,
    });

    // Host should have width style
    expect(page.root.style.width).toBe('300px');

    // Paper should have width and height props
    const paper = page.root.shadowRoot.querySelector('bds-paper');
    expect(paper.getAttribute('width')).toBe('300px');
    expect(paper.getAttribute('height')).toBe('200px');
  });

  it('should apply custom background color', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<bds-card bg-color="surface-2"></bds-card>`,
    });

    const paper = page.root.shadowRoot.querySelector('bds-paper');
    expect(paper.getAttribute('bgcolor')).toBe('surface-2');
  });

  it('should apply custom border color', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<bds-card border-color="border-2"></bds-card>`,
    });

    const paper = page.root.shadowRoot.querySelector('bds-paper');
    expect(paper.getAttribute('border-color')).toBe('border-2');
  });

  it('should use default border color when not specified', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<bds-card></bds-card>`,
    });

    const paper = page.root.shadowRoot.querySelector('bds-paper');
    expect(paper.getAttribute('border-color')).toBe('border-1');
  });

  describe('clickable functionality', () => {
    it('should apply clickable styles when clickable is true', async () => {
      const page = await newSpecPage({
        components: [Card],
        html: `<bds-card clickable="true"></bds-card>`,
      });

      const paper = page.root.shadowRoot.querySelector('bds-paper');
      expect(paper.classList.contains('card_hover')).toBe(true);
    });

    it('should have border when not clickable', async () => {
      const page = await newSpecPage({
        components: [Card],
        html: `<bds-card></bds-card>`,
      });

      const paper = page.root.shadowRoot.querySelector('bds-paper');
      expect(paper.hasAttribute('border')).toBe(true);
    });

    it('should emit bdsClick event when clicked and clickable', async () => {
      const page = await newSpecPage({
        components: [Card],
        html: `<bds-card clickable="true"></bds-card>`,
      });

      const clickHandler = jest.fn();
      page.root.addEventListener('bdsClick', clickHandler);

      // Simulate a mouse click on the card
      const card = page.root.shadowRoot.querySelector('.card');
      card.dispatchEvent(new Event('mousedown'));

      expect(clickHandler).toHaveBeenCalled();
    });
  });

  describe('selectable functionality', () => {
    it('should apply selectable classes when hovered and selectable', async () => {
      const page = await newSpecPage({
        components: [Card],
        html: `<bds-card selectable="true"></bds-card>`,
      });

      // Simulate hover state
      page.rootInstance.isHovered = true;
      await page.waitForChanges();

      const paper = page.root.shadowRoot.querySelector('bds-paper');
      expect(paper.classList.contains('card_hover_selectable')).toBe(true);
      expect(paper.classList.contains('card_hover_pressed')).toBe(true);
    });

    it('should emit bdsClick event when clicked and selectable', async () => {
      const page = await newSpecPage({
        components: [Card],
        html: `<bds-card selectable="true"></bds-card>`,
      });

      const clickHandler = jest.fn();
      page.root.addEventListener('bdsClick', clickHandler);

      // Simulate a mouse click on the card
      const card = page.root.shadowRoot.querySelector('.card');
      card.dispatchEvent(new Event('mousedown'));

      expect(clickHandler).toHaveBeenCalled();
    });
  });

  describe('elevation states', () => {
    it('should have primary elevation by default', async () => {
      const page = await newSpecPage({
        components: [Card],
        html: `<bds-card></bds-card>`,
      });

      const paper = page.root.shadowRoot.querySelector('bds-paper');
      expect(paper.getAttribute('elevation')).toBe('primary');
    });

    it('should change elevation to secondary when hovered', async () => {
      const page = await newSpecPage({
        components: [Card],
        html: `<bds-card clickable="true"></bds-card>`,
      });

      // Simulate hover state
      page.rootInstance.isHovered = true;
      page.rootInstance.componentDidUpdate();
      await page.waitForChanges();

      const paper = page.root.shadowRoot.querySelector('bds-paper');
      expect(paper.getAttribute('elevation')).toBe('secondary');
    });

    it('should change elevation to static when pressed', async () => {
      const page = await newSpecPage({
        components: [Card],
        html: `<bds-card clickable="true"></bds-card>`,
      });

      // Simulate pressed state
      page.rootInstance.isPressed = true;
      page.rootInstance.componentDidUpdate();
      await page.waitForChanges();

      const paper = page.root.shadowRoot.querySelector('bds-paper');
      expect(paper.getAttribute('elevation')).toBe('static');
    });
  });

  describe('keyboard accessibility', () => {
    it('should have focusable element', async () => {
      const page = await newSpecPage({
        components: [Card],
        html: `<bds-card></bds-card>`,
      });

      const focusElement = page.root.shadowRoot.querySelector('.focus');
      expect(focusElement).toBeTruthy();
      expect(focusElement.getAttribute('tabindex')).toBe('0');
    });

    it('should emit bdsClick event on Enter key press', async () => {
      const page = await newSpecPage({
        components: [Card],
        html: `<bds-card clickable="true"></bds-card>`,
      });

      const clickHandler = jest.fn();
      page.root.addEventListener('bdsClick', clickHandler);

      // Simulate Enter key press
      const focusElement = page.root.shadowRoot.querySelector('.focus');
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      focusElement.dispatchEvent(enterEvent);

      expect(clickHandler).toHaveBeenCalled();
    });

    it('should set pressed state on Enter key press', async () => {
      const page = await newSpecPage({
        components: [Card],
        html: `<bds-card clickable="true"></bds-card>`,
      });

      // Simulate Enter key press
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      page.rootInstance.handleKeyDown(enterEvent);

      expect(page.rootInstance.isPressed).toBe(true);
    });
  });

  describe('data attributes', () => {
    it('should render with data-test attribute', async () => {
      const page = await newSpecPage({
        components: [Card],
        html: `<bds-card data-test="card-test"></bds-card>`,
      });

      const paper = page.root.shadowRoot.querySelector('bds-paper');
      expect(paper.getAttribute('data-test')).toBe('card-test');
    });
  });

  describe('content rendering', () => {
    it('should render slotted content within grid layout', async () => {
      const page = await newSpecPage({
        components: [Card],
        html: `<bds-card><span>Test content</span></bds-card>`,
      });

      // Should have grid container with slot
      const grid = page.root.shadowRoot.querySelector('bds-grid');
      expect(grid).toBeTruthy();
      expect(grid.getAttribute('xxs')).toBe('12');
      expect(grid.getAttribute('direction')).toBe('column');
      expect(grid.getAttribute('gap')).toBe('2');
      expect(grid.getAttribute('padding')).toBe('2');

      const slot = page.root.shadowRoot.querySelector('slot');
      expect(slot).toBeTruthy();
    });
  });

  describe('edge cases and property changes', () => {
    it('should handle property changes after initial render', async () => {
      const page = await newSpecPage({
        components: [Card],
        html: `<bds-card></bds-card>`,
      });

      // Change properties
      page.root.width = '400px';
      page.root.height = '300px';
      page.root.bgColor = 'surface-3';
      await page.waitForChanges();

      // Check that changes are reflected
      expect(page.root.style.width).toBe('400px');
      const paper = page.root.shadowRoot.querySelector('bds-paper');
      expect(paper.getAttribute('width')).toBe('400px');
      expect(paper.getAttribute('height')).toBe('300px');
      expect(paper.getAttribute('bgcolor')).toBe('surface-3');
    });

    it('should handle null values gracefully', async () => {
      const page = await newSpecPage({
        components: [Card],
        html: `<bds-card height="" data-test=""></bds-card>`,
      });

      expect(page.root.height).toBe('');
      expect(page.root.dataTest).toBe('');
    });
  });

  describe('component lifecycle', () => {
    it('should initialize state correctly', async () => {
      const page = await newSpecPage({
        components: [Card],
        html: `<bds-card></bds-card>`,
      });

      expect(page.rootInstance.isHovered).toBe(false);
      expect(page.rootInstance.isPressed).toBe(false);
      expect(page.rootInstance.elevation).toBe('primary');
    });
  });
});
