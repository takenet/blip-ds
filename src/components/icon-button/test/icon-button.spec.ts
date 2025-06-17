import { newSpecPage } from '@stencil/core/testing';
import { IconButton } from '../icon-button';

describe('bds-button-icon', () => {
  let page;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [IconButton],
      html: `<bds-button-icon></bds-button-icon>`,
    });
  });

  it('should create component', () => {
    const component = new IconButton();
    expect(component).toBeTruthy();
    expect(component).toBeInstanceOf(IconButton);
  });

  it('should have correct default properties', () => {
    const component = new IconButton();
    expect(component.variant).toBe('primary');
    expect(component.size).toBe('standard');
    expect(component.iconTheme).toBe('outline');
    expect(component.disabled).toBe(false);
    expect(component.icon).toBe(null);
    expect(component.dataTest).toBe(null);
  });

  it('should render null when no icon is provided', () => {
    const component = new IconButton();
    const result = component.render();
    expect(result).toBeNull();
  });

  it('should render button when icon is provided', () => {
    const component = new IconButton();
    component.icon = 'user';
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });

  describe('Rendering', () => {
    it('should render basic icon button', async () => {
      page = await newSpecPage({
        components: [IconButton],
        html: `<bds-button-icon icon="user"></bds-button-icon>`,
      });

      expect(page.root).toBeTruthy();
      expect(page.root.shadowRoot.querySelector('button')).toBeTruthy();
      expect(page.root.shadowRoot.querySelector('bds-icon')).toBeTruthy();
    });

    it('should not render anything when icon is not provided', async () => {
      page = await newSpecPage({
        components: [IconButton],
        html: `<bds-button-icon></bds-button-icon>`,
      });

      expect(page.root.shadowRoot.innerHTML.trim()).toBe('');
    });

    it('should apply correct CSS classes', async () => {
      page = await newSpecPage({
        components: [IconButton],
        html: `<bds-button-icon icon="user" variant="primary" size="standard"></bds-button-icon>`,
      });

      const button = page.root.shadowRoot.querySelector('button');
      expect(button).toHaveClass('icon__button');
      expect(button).toHaveClass('icon__button--primary');
      expect(button).toHaveClass('size-standard');
    });

    it('should render with data-test attribute', async () => {
      page = await newSpecPage({
        components: [IconButton],
        html: `<bds-button-icon icon="user" data-test="test-button"></bds-button-icon>`,
      });

      const button = page.root.shadowRoot.querySelector('button');
      expect(button.getAttribute('data-test')).toBe('test-button');
    });

    it('should include bds-icon with correct props', async () => {
      page = await newSpecPage({
        components: [IconButton],
        html: `<bds-button-icon icon="edit" size="tall" icon-theme="solid"></bds-button-icon>`,
      });

      const icon = page.root.shadowRoot.querySelector('bds-icon');
      expect(icon.getAttribute('name')).toBe('edit');
      expect(icon.getAttribute('size')).toBe('xxx-large'); // mapped from 'tall'
      expect(icon.getAttribute('theme')).toBe('solid');
      expect(icon.getAttribute('color')).toBe('inherit');
    });
  });

  describe('Size Variants', () => {
    const sizes = [
      { size: 'tall', expectedIconSize: 'xxx-large' },
      { size: 'standard', expectedIconSize: 'x-large' },
      { size: 'short', expectedIconSize: 'medium' },
    ];

    sizes.forEach(({ size, expectedIconSize }) => {
      it(`should render ${size} size correctly`, async () => {
        page = await newSpecPage({
          components: [IconButton],
          html: `<bds-button-icon icon="user" size="${size}"></bds-button-icon>`,
        });

        const button = page.root.shadowRoot.querySelector('button');
        const icon = page.root.shadowRoot.querySelector('bds-icon');

        expect(button).toHaveClass(`size-${size}`);
        expect(icon.getAttribute('size')).toBe(expectedIconSize);
        expect(page.rootInstance.size).toBe(size);
      });
    });
  });

  describe('Variant Styles', () => {
    const variants = [
      { variant: 'primary', expectedClass: 'icon__button--primary' },
      { variant: 'secondary', expectedClass: 'icon__button--secondary' },
      { variant: 'tertiary', expectedClass: 'icon__button--tertiary' },
      { variant: 'ghost', expectedClass: 'icon__button--ghost' },
      { variant: 'delete', expectedClass: 'icon__button--delete' },
      { variant: 'secondary--white', expectedClass: 'icon__button--secondary-white' },
    ];

    variants.forEach(({ variant, expectedClass }) => {
      it(`should render ${variant} variant correctly`, async () => {
        page = await newSpecPage({
          components: [IconButton],
          html: `<bds-button-icon icon="user" variant="${variant}"></bds-button-icon>`,
        });

        const button = page.root.shadowRoot.querySelector('button');
        expect(button).toHaveClass(expectedClass);
        expect(page.rootInstance.variant).toBe(variant);
      });
    });
  });

  describe('Icon Theme', () => {
    it('should render with outline theme by default', async () => {
      page = await newSpecPage({
        components: [IconButton],
        html: `<bds-button-icon icon="user"></bds-button-icon>`,
      });

      const icon = page.root.shadowRoot.querySelector('bds-icon');
      expect(icon.getAttribute('theme')).toBe('outline');
      expect(page.rootInstance.iconTheme).toBe('outline');
    });

    it('should render with solid theme', async () => {
      page = await newSpecPage({
        components: [IconButton],
        html: `<bds-button-icon icon="user" icon-theme="solid"></bds-button-icon>`,
      });

      const icon = page.root.shadowRoot.querySelector('bds-icon');
      expect(icon.getAttribute('theme')).toBe('solid');
      expect(page.rootInstance.iconTheme).toBe('solid');
    });
  });

  describe('Disabled State', () => {
    it('should not be disabled by default', async () => {
      page = await newSpecPage({
        components: [IconButton],
        html: `<bds-button-icon icon="user"></bds-button-icon>`,
      });

      const button = page.root.shadowRoot.querySelector('button');
      expect(button.hasAttribute('disabled')).toBe(false);
      expect(page.rootInstance.disabled).toBe(false);
    });

    it('should render as disabled when disabled prop is true', async () => {
      page = await newSpecPage({
        components: [IconButton],
        html: `<bds-button-icon icon="user" disabled="true"></bds-button-icon>`,
      });

      const button = page.root.shadowRoot.querySelector('button');
      expect(button.hasAttribute('disabled')).toBe(true);
      expect(page.rootInstance.disabled).toBe(true);
    });

    it('should apply disabled CSS class when disabled', async () => {
      page = await newSpecPage({
        components: [IconButton],
        html: `<bds-button-icon icon="user" variant="primary" disabled="true"></bds-button-icon>`,
      });

      const button = page.root.shadowRoot.querySelector('button');
      expect(button).toHaveClass('icon__button--primary--disabled');
    });
  });

  describe('Accessibility', () => {
    it('should have tabindex="0"', async () => {
      page = await newSpecPage({
        components: [IconButton],
        html: `<bds-button-icon icon="user"></bds-button-icon>`,
      });

      const button = page.root.shadowRoot.querySelector('button');
      expect(button.getAttribute('tabindex')).toBe('0');
    });
  });

  describe('Events', () => {
    it('should emit bdsClick event when clicked and not disabled', async () => {
      const clickHandler = jest.fn();
      page = await newSpecPage({
        components: [IconButton],
        html: `<bds-button-icon icon="user"></bds-button-icon>`,
      });

      page.root.addEventListener('bdsClick', clickHandler);
      const button = page.root.shadowRoot.querySelector('button');
      
      button.click();
      await page.waitForChanges();

      expect(clickHandler).toHaveBeenCalled();
    });

    it('should not emit bdsClick event when clicked and disabled', async () => {
      const clickHandler = jest.fn();
      page = await newSpecPage({
        components: [IconButton],
        html: `<bds-button-icon icon="user" disabled="true"></bds-button-icon>`,
      });

      page.root.addEventListener('bdsClick', clickHandler);
      const button = page.root.shadowRoot.querySelector('button');
      
      button.click();
      await page.waitForChanges();

      expect(clickHandler).not.toHaveBeenCalled();
    });

    it('should handle click with event parameter', async () => {
      page = await newSpecPage({
        components: [IconButton],
        html: `<bds-button-icon icon="user"></bds-button-icon>`,
      });

      const component = page.rootInstance;
      const mockEvent = { target: 'button' };
      const emitSpy = jest.spyOn(component.bdsClick, 'emit');

      (component as any).handleClick(mockEvent);

      expect(emitSpy).toHaveBeenCalledWith(mockEvent);
    });

    it('should not handle click when disabled', async () => {
      page = await newSpecPage({
        components: [IconButton],
        html: `<bds-button-icon icon="user" disabled="true"></bds-button-icon>`,
      });

      const component = page.rootInstance;
      const mockEvent = { target: 'button' };
      const emitSpy = jest.spyOn(component.bdsClick, 'emit');

      (component as any).handleClick(mockEvent);

      expect(emitSpy).not.toHaveBeenCalled();
    });
  });

  describe('Property Updates', () => {
    it('should update icon property', async () => {
      page = await newSpecPage({
        components: [IconButton],
        html: `<bds-button-icon icon="user"></bds-button-icon>`,
      });

      page.rootInstance.icon = 'edit';
      await page.waitForChanges();

      const icon = page.root.shadowRoot.querySelector('bds-icon');
      expect(icon.getAttribute('name')).toBe('edit');
    });

    it('should update variant property', async () => {
      page = await newSpecPage({
        components: [IconButton],
        html: `<bds-button-icon icon="user" variant="primary"></bds-button-icon>`,
      });

      page.rootInstance.variant = 'secondary';
      await page.waitForChanges();

      const button = page.root.shadowRoot.querySelector('button');
      expect(button).toHaveClass('icon__button--secondary');
      expect(button).not.toHaveClass('icon__button--primary');
    });

    it('should update size property', async () => {
      page = await newSpecPage({
        components: [IconButton],
        html: `<bds-button-icon icon="user" size="standard"></bds-button-icon>`,
      });

      page.rootInstance.size = 'tall';
      await page.waitForChanges();

      const button = page.root.shadowRoot.querySelector('button');
      const icon = page.root.shadowRoot.querySelector('bds-icon');
      expect(button).toHaveClass('size-tall');
      expect(icon.getAttribute('size')).toBe('xxx-large');
    });
  });

  describe('Edge Cases', () => {
    it('should handle null icon gracefully', async () => {
      page = await newSpecPage({
        components: [IconButton],
        html: `<bds-button-icon></bds-button-icon>`,
      });

      page.rootInstance.icon = null;
      await page.waitForChanges();

      expect(page.root.shadowRoot.innerHTML.trim()).toBe('');
    });

    it('should handle empty icon string', async () => {
      page = await newSpecPage({
        components: [IconButton],
        html: `<bds-button-icon icon=""></bds-button-icon>`,
      });

      // Empty string is falsy, so should not render
      expect(page.root.shadowRoot.innerHTML.trim()).toBe('');
    });

    it('should handle null dataTest gracefully', async () => {
      page = await newSpecPage({
        components: [IconButton],
        html: `<bds-button-icon icon="user"></bds-button-icon>`,
      });

      const button = page.root.shadowRoot.querySelector('button');
      expect(button.getAttribute('data-test')).toBeNull();
    });
  });
});
