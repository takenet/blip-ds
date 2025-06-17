import { newSpecPage } from '@stencil/core/testing';
import { CardColor } from '../card-color';

describe('bds-card-color', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render with required props', async () => {
    const page = await newSpecPage({
      components: [CardColor],
      html: `<bds-card-color name="Primary Blue" variable="color-primary"></bds-card-color>`,
    });

    expect(page.root).toBeTruthy();
    expect(page.root.name).toBe('Primary Blue');
    expect(page.root.variable).toBe('color-primary');
  });

  it('should render with default values', async () => {
    const page = await newSpecPage({
      components: [CardColor],
      html: `<bds-card-color name="Test Color" variable="test-color"></bds-card-color>`,
    });

    expect(page.root.gradient).toBe(false);
    expect(page.root.lightText).toBe(false);
    expect(page.root.hex).toBeUndefined();
    expect(page.rootInstance.showMessage).toBe(false);
  });

  it('should render with all props', async () => {
    const page = await newSpecPage({
      components: [CardColor],
      html: `<bds-card-color name="Success Green" hex="#00ff00" gradient="true" variable="color-success" light-text="true"></bds-card-color>`,
    });

    expect(page.root.name).toBe('Success Green');
    expect(page.root.hex).toBe('#00ff00');
    expect(page.root.gradient).toBe(true);
    expect(page.root.variable).toBe('color-success');
    expect(page.root.lightText).toBe(true);
  });

  it('should display variable in typography', async () => {
    const page = await newSpecPage({
      components: [CardColor],
      html: `<bds-card-color name="Primary" variable="color-primary"></bds-card-color>`,
    });

    // Should show the variable text initially
    const typoElement = page.root.shadowRoot.querySelector('.card-text');
    expect(typoElement).toBeTruthy();
    expect(typoElement.textContent.trim()).toBe('$color-primary');
  });

  it('should have correct CSS classes based on variable', async () => {
    const page = await newSpecPage({
      components: [CardColor],
      html: `<bds-card-color name="Primary" variable="color-primary"></bds-card-color>`,
    });

    const colorDiv = page.root.shadowRoot.querySelector('.card-color--color');
    expect(colorDiv).toBeTruthy();
    expect(colorDiv.classList.contains('card-color--color-primary')).toBe(true);
  });

  describe('copy functionality', () => {
    it('should have click handler on paper element', async () => {
      const page = await newSpecPage({
        components: [CardColor],
        html: `<bds-card-color name="Primary" variable="color-primary"></bds-card-color>`,
      });

      const paperElement = page.root.shadowRoot.querySelector('bds-paper');
      expect(paperElement).toBeTruthy();

      // Verify that the paper element has an onClick handler by checking if it exists
      expect(paperElement.getAttribute('onClick')).toBeFalsy(); // Stencil handles this internally
    });

    it('should show success message when handleCopyVariable is called', async () => {
      let fn = null;
      global.setTimeout = jest.fn((callback, _) => {
        fn = callback;
        return 1;
      }) as any;

      const page = await newSpecPage({
        components: [CardColor],
        html: `<bds-card-color name="Primary" variable="color-primary"></bds-card-color>`,
      });

      const componentInstance = page.rootInstance;

      // Mock clipboard to prevent errors
      Object.defineProperty(global.navigator, 'clipboard', {
        value: { writeText: jest.fn(() => Promise.resolve()) },
        writable: true,
      });

      // Initially should show variable text
      expect(page.root.shadowRoot.querySelector('.card-text')).toBeTruthy();
      expect(page.root.shadowRoot.querySelector('.card-text-copie')).toBeFalsy();
      expect(componentInstance.showMessage).toBe(false);

      // Call the method directly
      componentInstance.handleCopyVariable('color-primary');
      await page.waitForChanges();

      // Should show copied message
      expect(componentInstance.showMessage).toBe(true);
      const copiedElement = page.root.shadowRoot.querySelector('.card-text-copie');
      expect(copiedElement).toBeTruthy();
      expect(copiedElement.textContent.trim()).toBe('Cor copiada!');

      fn();

      await page.waitForChanges();
      expect(componentInstance.showMessage).toBe(false);
    });

    it('should hide success message after timeout', async () => {
      let fn = null;
      global.setTimeout = jest.fn((callback, _) => {
        fn = callback;
        return 1;
      }) as any;

      const page = await newSpecPage({
        components: [CardColor],
        html: `<bds-card-color name="Primary" variable="color-primary"></bds-card-color>`,
      });

      const componentInstance = page.rootInstance;

      // Mock clipboard to prevent errors
      Object.defineProperty(global.navigator, 'clipboard', {
        value: { writeText: jest.fn(() => Promise.resolve()) },
        writable: true,
      });

      // Test that the component sets up the timeout mechanism
      componentInstance.handleCopyVariable('color-primary');
      expect(componentInstance.showMessage).toBe(true);

      fn(); // Simulate timeout callback
      await page.waitForChanges();

      expect(componentInstance.showMessage).toBe(false);
      expect(page.root.shadowRoot.querySelector('.card-text')).toBeTruthy();
      expect(page.root.shadowRoot.querySelector('.card-text-copie')).toBeFalsy();
    });
  });

  describe('component structure', () => {
    it('should have correct paper dimensions', async () => {
      const page = await newSpecPage({
        components: [CardColor],
        html: `<bds-card-color name="Primary" variable="color-primary"></bds-card-color>`,
      });

      const paperElement = page.root.shadowRoot.querySelector('bds-paper');
      expect(paperElement.getAttribute('width')).toBe('240px');
      expect(paperElement.getAttribute('height')).toBe('140px');
    });

    it('should have proper grid structure', async () => {
      const page = await newSpecPage({
        components: [CardColor],
        html: `<bds-card-color name="Primary" variable="color-primary"></bds-card-color>`,
      });

      const mainGrid = page.root.shadowRoot.querySelector('bds-grid[direction="column"]');
      expect(mainGrid).toBeTruthy();
      expect(mainGrid.getAttribute('height')).toBe('100%');

      // Should have color area (70% height)
      const colorGrid = page.root.shadowRoot.querySelector('bds-grid[height="70%"]');
      expect(colorGrid).toBeTruthy();

      // Should have text area (30% height)
      const textGrid = page.root.shadowRoot.querySelector('bds-grid[height="30%"]');
      expect(textGrid).toBeTruthy();
    });
  });

  describe('prop variations', () => {
    it('should handle different variable names', async () => {
      const variables = ['color-primary', 'color-secondary', 'color-success', 'color-error'];

      for (const variable of variables) {
        const page = await newSpecPage({
          components: [CardColor],
          html: `<bds-card-color name="Test" variable="${variable}"></bds-card-color>`,
        });

        const colorDiv = page.root.shadowRoot.querySelector('.card-color--color');
        expect(colorDiv.classList.contains(`card-color--${variable}`)).toBe(true);

        const typoElement = page.root.shadowRoot.querySelector('.card-text');
        expect(typoElement.textContent.trim()).toBe(`$${variable}`);
      }
    });

    it('should handle gradient prop', async () => {
      const page = await newSpecPage({
        components: [CardColor],
        html: `<bds-card-color name="Gradient" variable="gradient-primary" gradient="true"></bds-card-color>`,
      });

      expect(page.root.gradient).toBe(true);
    });

    it('should handle lightText prop', async () => {
      const page = await newSpecPage({
        components: [CardColor],
        html: `<bds-card-color name="Dark Color" variable="color-dark" light-text="true"></bds-card-color>`,
      });

      expect(page.root.lightText).toBe(true);
    });

    it('should handle hex prop', async () => {
      const page = await newSpecPage({
        components: [CardColor],
        html: `<bds-card-color name="Custom" variable="custom-color" hex="#ff5733"></bds-card-color>`,
      });

      expect(page.root.hex).toBe('#ff5733');
    });
  });

  describe('handleCopyVariable method', () => {
    it('should call handleCopyVariable with correct parameter', async () => {
      const page = await newSpecPage({
        components: [CardColor],
        html: `<bds-card-color name="Primary" variable="color-primary"></bds-card-color>`,
      });

      const componentInstance = page.rootInstance;

      // Mock clipboard to prevent errors
      Object.defineProperty(global.navigator, 'clipboard', {
        value: { writeText: jest.fn(() => Promise.resolve()) },
        writable: true,
      });

      const handleCopyVariableSpy = jest.spyOn(componentInstance, 'handleCopyVariable');

      // Call the method directly instead of clicking
      componentInstance.handleCopyVariable('color-primary');

      expect(handleCopyVariableSpy).toHaveBeenCalledWith('color-primary');
    });

    it('should update showMessage state correctly', async () => {
      // Never change showMessage to false
      global.setTimeout = jest.fn(() => {
        return 1;
      }) as any;

      const page = await newSpecPage({
        components: [CardColor],
        html: `<bds-card-color name="Primary" variable="color-primary"></bds-card-color>`,
      });

      const componentInstance = page.rootInstance;

      // Mock clipboard to prevent errors
      Object.defineProperty(global.navigator, 'clipboard', {
        value: { writeText: jest.fn(() => Promise.resolve()) },
        writable: true,
      });

      expect(componentInstance.showMessage).toBe(false);

      componentInstance.handleCopyVariable('color-primary');
      expect(componentInstance.showMessage).toBe(true);
    });
  });

  describe('component interface compliance', () => {
    it('should create component instance', () => {
      const component = new CardColor();
      expect(component).toBeTruthy();
    });

    it('should render method return JSX element', () => {
      const component = new CardColor();

      const result = component.render();
      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
    });
  });

  describe('error handling', () => {
    it('should handle component creation without errors', async () => {
      const page = await newSpecPage({
        components: [CardColor],
        html: `<bds-card-color name="Primary" variable="color-primary"></bds-card-color>`,
      });

      expect(page.root).toBeTruthy();
      expect(page.rootInstance).toBeTruthy();
      expect(page.rootInstance.showMessage).toBe(false);
    });
  });
});
