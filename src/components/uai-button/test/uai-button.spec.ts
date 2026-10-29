import { newSpecPage } from '@stencil/core/testing';
import { UaiButton } from '../uai-button';

const render = (html: string) => newSpecPage({ components: [UaiButton], html });

const innerButton = (page) => page.root.shadowRoot.querySelector('button') as HTMLButtonElement;

describe('uai-button', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => {
    warn.mockRestore();
  });

  describe('defaults', () => {
    it('forwards disclosure semantics and focuses through its public method', async () => {
      const page = await render('<uai-button aria-label="Show pages" aria-expanded="false"></uai-button>');
      expect(innerButton(page).getAttribute('aria-expanded')).toBe('false');
      page.root.ariaExpanded = 'true';
      await page.waitForChanges();
      expect(innerButton(page).getAttribute('aria-expanded')).toBe('true');
      const focus = jest.spyOn(innerButton(page), 'focus');
      await page.root.setFocus();
      expect(focus).toHaveBeenCalledTimes(1);
    });

    it('renders a native button with solid, primary and medium classes', async () => {
      const page = await render(`<uai-button>Save</uai-button>`);
      const button = innerButton(page);

      expect(button).not.toBeNull();
      expect(button.getAttribute('type')).toBe('button');
      expect(button.getAttribute('part')).toBe('button');
      expect(button).toHaveClasses(['button', 'button--solid', 'button--color-primary', 'button--size-medium']);
      expect(button).toHaveClass('button--justify-center');
    });

    it('keeps the default prop values of bds-button', async () => {
      const page = await render(`<uai-button>Save</uai-button>`);
      const instance = page.rootInstance as UaiButton;

      expect(instance.variant).toBe('solid');
      expect(instance.color).toBe('primary');
      expect(instance.size).toBe('medium');
      expect(instance.type).toBe('button');
      expect(instance.iconTheme).toBe('outline');
      expect(instance.typeIcon).toBe('icon');
      expect(instance.loading).toBe(false);
      expect(instance.disabled).toBe(false);
    });
  });

  describe('variant, color and size', () => {
    it.each(['solid', 'outline', 'text'])('applies variant %s', async (variant) => {
      const page = await render(`<uai-button variant="${variant}">Save</uai-button>`);
      expect(innerButton(page)).toHaveClass(`button--${variant}`);
    });

    it.each(['primary', 'content', 'negative', 'positive'])('applies color %s', async (color) => {
      const page = await render(`<uai-button color="${color}">Save</uai-button>`);
      expect(innerButton(page)).toHaveClass(`button--color-${color}`);
    });

    it.each(['compact', 'short', 'medium', 'large'])('applies size %s', async (size) => {
      const page = await render(`<uai-button size="${size}">Save</uai-button>`);
      expect(innerButton(page)).toHaveClass(`button--size-${size}`);
    });

    it.each([
      ['variant', 'primary', 'button--solid'],
      ['variant', 'ghost', 'button--solid'],
      ['color', 'brand', 'button--color-primary'],
      ['size', 'standard', 'button--size-medium'],
      ['size', 'tall', 'button--size-medium'],
    ])('falls back to the default when %s="%s" is not supported', async (prop, value, expectedClass) => {
      const page = await render(`<uai-button ${prop}="${value}">Save</uai-button>`);

      expect(innerButton(page)).toHaveClass(expectedClass);
      expect(warn).toHaveBeenCalledWith(expect.stringContaining(`Unsupported ${prop} "${value}"`));
    });

    it('applies justify-content space-between', async () => {
      const page = await render(`<uai-button justify-content="space-between">Save</uai-button>`);
      expect(innerButton(page)).toHaveClass('button--justify-space-between');
    });
  });

  describe('icons', () => {
    it('renders the left icon with the UAI icon font', async () => {
      const page = await render(`<uai-button icon-left="edit" size="short">Save</uai-button>`);
      const icon = page.root.shadowRoot.querySelector('.button__icon--left');

      expect(icon.tagName).toBe('UAI-ICON');
      expect(icon.getAttribute('name')).toBe('edit');
      expect(icon.getAttribute('theme')).toBe('outline');
      expect(icon.getAttribute('aria-hidden')).toBe('true');
      expect(page.root.shadowRoot.querySelector('bds-icon')).toBeNull();
    });

    it('prefers icon over iconLeft', async () => {
      const page = await render(`<uai-button icon="add" icon-left="edit">Save</uai-button>`);
      const icons = page.root.shadowRoot.querySelectorAll('.button__icon--left');

      expect(icons.length).toBe(1);
      expect(icons[0].getAttribute('name')).toBe('add');
    });

    it('renders an arrow-right icon when arrow is set, instead of iconRight', async () => {
      const page = await render(`<uai-button arrow icon-right="edit">Next</uai-button>`);
      const icon = page.root.shadowRoot.querySelector('.button__icon--right');

      expect(icon.getAttribute('name')).toBe('arrow-right');
    });

    it('uses the solid glyph when iconTheme is solid', async () => {
      const page = await render(`<uai-button icon="like" icon-theme="solid">Like</uai-button>`);

      expect(page.root.shadowRoot.querySelector('uai-icon').getAttribute('theme')).toBe('solid');
    });

    it('falls back to bds-icon, with a warning, for names outside the UAI set', async () => {
      const page = await render(`<uai-button icon="not-a-uai-icon">Save</uai-button>`);
      const icon = page.root.shadowRoot.querySelector('bds-icon.button__icon--left');

      expect(icon.getAttribute('name')).toBe('not-a-uai-icon');
      expect(icon.getAttribute('size')).toBe('medium');
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('not-a-uai-icon'));
    });

    it.each([
      ['compact', 'x-small'],
      ['short', 'small'],
      ['medium', 'medium'],
      ['large', 'medium'],
    ])('falls back to a %s bds-icon size of %s', async (size, iconSize) => {
      const page = await render(`<uai-button icon="not-a-uai-icon" size="${size}">Save</uai-button>`);
      expect(page.root.shadowRoot.querySelector('bds-icon').getAttribute('size')).toBe(iconSize);
    });

    it('falls back to bds-icon for the logo and emoji types', async () => {
      const page = await render(`<uai-button icon="like" type-icon="emoji">Like</uai-button>`);
      const icon = page.root.shadowRoot.querySelector('bds-icon');

      expect(icon.getAttribute('type')).toBe('emoji');
    });

    it('marks an icon-only button and forwards aria-label', async () => {
      const page = await render(`<uai-button icon="add" aria-label="Add item"></uai-button>`);
      const button = innerButton(page);

      expect(button).toHaveClass('button--icon-only');
      expect(button.getAttribute('aria-label')).toBe('Add item');
      expect(page.root.shadowRoot.querySelector('.button__label')).toHaveClass('button__label--hidden');
    });

    it('warns when an icon-only button has no accessible name', async () => {
      await render(`<uai-button icon="add"></uai-button>`);

      expect(warn).toHaveBeenCalledWith('[uai-button] Icon-only buttons require an aria-label.');
    });

    it('does not mark a labelled button as icon-only', async () => {
      const page = await render(`<uai-button icon="add">Add</uai-button>`);
      expect(innerButton(page)).not.toHaveClass('button--icon-only');
    });
  });

  describe('states', () => {
    it('disables the native button', async () => {
      const page = await render(`<uai-button disabled>Save</uai-button>`);
      expect(innerButton(page).hasAttribute('disabled')).toBe(true);
    });

    it('shows a spinner in place of the left icon while loading', async () => {
      const page = await render(`<uai-button loading icon-left="edit">Save</uai-button>`);
      const button = innerButton(page);

      expect(button).toHaveClass('button--loading');
      expect(button.getAttribute('aria-busy')).toBe('true');
      expect(button.getAttribute('aria-disabled')).toBe('true');
      expect(page.root.shadowRoot.querySelector('.button__spinner')).not.toBeNull();
      expect(page.root.shadowRoot.querySelector('.button__icon--left')).toBeNull();
    });

    it('applies full width with block or fullWidth', async () => {
      const block = await render(`<uai-button block>Save</uai-button>`);
      const fullWidth = await render(`<uai-button full-width>Save</uai-button>`);

      expect(block.root).toHaveClass('uai-button--block');
      expect(fullWidth.root).toHaveClass('uai-button--block');
    });

    it('sets data-test on the native button', async () => {
      const page = await render(`<uai-button data-test="save-button">Save</uai-button>`);
      expect(innerButton(page).getAttribute('data-test')).toBe('save-button');
    });
  });

  describe('uaiClick', () => {
    it('emits the native click event', async () => {
      const page = await render(`<uai-button>Save</uai-button>`);
      const spy = jest.fn();
      page.root.addEventListener('uaiClick', spy);

      innerButton(page).click();
      await page.waitForChanges();

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy.mock.calls[0][0].detail).toBeDefined();
    });

    it.each(['disabled', 'loading'])('does not emit while %s', async (attr) => {
      const page = await render(`<uai-button ${attr}>Save</uai-button>`);
      const spy = jest.fn();
      page.root.addEventListener('uaiClick', spy);

      (page.rootInstance as any).handleClick(new MouseEvent('click'));
      await page.waitForChanges();

      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('methods used by button groups', () => {
    it('updates variant, color and size', async () => {
      const page = await render(`<uai-button>Save</uai-button>`);

      await page.root.setVariant('outline');
      await page.root.setColor('negative');
      await page.root.setSize('large');
      await page.waitForChanges();

      expect(innerButton(page)).toHaveClasses(['button--outline', 'button--color-negative', 'button--size-large']);
    });

    it('applies position, direction and active state', async () => {
      const page = await render(`<uai-button>Save</uai-button>`);

      await page.root.setDirection('column');
      await page.root.setPosition('first');
      await page.root.isActive(true);
      await page.waitForChanges();

      const button = innerButton(page);
      expect(page.root).toHaveClass('uai-button--group');
      expect(button).toHaveClasses(['button--position-column-first', 'button--active']);
      expect(button.getAttribute('aria-pressed')).toBe('true');
    });
  });

  describe('deprecated props', () => {
    it.each([
      ['group-icon', 'groupIcon'],
      ['bds-loading-variant="secondary"', 'bdsLoadingVariant'],
      ['bds-loading-color="light"', 'bdsLoadingColor'],
    ])('accepts %s and warns that it is deprecated', async (attr, prop) => {
      const page = await render(`<uai-button ${attr}>Save</uai-button>`);

      expect(page.root).not.toBeNull();
      expect(warn).toHaveBeenCalledWith(expect.stringContaining(`"${prop}" is deprecated`));
    });

    it('keeps the left icon with the label when groupIcon is set with space-between', async () => {
      const page = await render(
        `<uai-button group-icon justify-content="space-between" icon-left="edit" icon-right="arrow-right">Save</uai-button>`,
      );
      const group = page.root.shadowRoot.querySelector('.button__group');

      expect(group.querySelector('.button__icon--left')).not.toBeNull();
      expect(group.querySelector('.button__label')).not.toBeNull();
    });
  });
});
