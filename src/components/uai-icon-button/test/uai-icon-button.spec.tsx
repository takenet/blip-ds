import { newSpecPage } from '@stencil/core/testing';
import { resetDeprecationWarnings } from '../../../utils/deprecation';
import { UaiIconButton } from '../uai-icon-button';

const render = (html: string) => newSpecPage({ components: [UaiIconButton], html });

const innerButton = (page) => page.root.shadowRoot?.querySelector('button') as HTMLButtonElement | null;

describe('uai-icon-button', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    resetDeprecationWarnings();
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => {
    warn.mockRestore();
  });

  describe('defaults and guard', () => {
    it('renders nothing when icon is omitted', async () => {
      const page = await render('<uai-icon-button aria-label="Fechar"></uai-icon-button>');
      expect(innerButton(page)).toBeNull();
      expect(warn).not.toHaveBeenCalled();
    });

    it('renders a medium solid primary button with uai-icon by default', async () => {
      const page = await render('<uai-icon-button icon="info" aria-label="Informações"></uai-icon-button>');
      const button = innerButton(page);
      const icon = page.root.shadowRoot.querySelector('uai-icon');

      expect(button).not.toBeNull();
      expect(button.getAttribute('part')).toBe('button');
      expect(button.getAttribute('type')).toBe('button');
      expect(button).toHaveClasses([
        'icon-button',
        'icon-button--solid',
        'icon-button--color-primary',
        'icon-button--size-medium',
      ]);
      expect(icon).not.toBeNull();
      expect(icon.getAttribute('name')).toBe('info');
      expect(icon.getAttribute('theme')).toBe('outline');
      expect(icon.getAttribute('size')).toBe('medium');
      expect(warn).not.toHaveBeenCalled();
    });
  });

  describe('variants, colors, sizes and icon mapping', () => {
    it.each(['solid', 'outline', 'ghost'])('applies variant %s', async (variant) => {
      const page = await render(`<uai-icon-button icon="edit" variant="${variant}" aria-label="Editar"></uai-icon-button>`);
      expect(innerButton(page)).toHaveClass(`icon-button--${variant}`);
      expect(warn).not.toHaveBeenCalled();
    });

    it.each(['primary', 'content', 'positive', 'negative'])('applies color %s', async (color) => {
      const page = await render(`<uai-icon-button icon="edit" color="${color}" aria-label="Editar"></uai-icon-button>`);
      expect(innerButton(page)).toHaveClass(`icon-button--color-${color}`);
    });

    it.each([
      ['compact', 'x-small'],
      ['short', 'small'],
      ['medium', 'medium'],
      ['large', 'medium'],
    ])('maps size %s to uai-icon size %s', async (size, expectedIconSize) => {
      const page = await render(`<uai-icon-button icon="edit" size="${size}" aria-label="Editar"></uai-icon-button>`);
      const icon = page.root.shadowRoot.querySelector('uai-icon');

      expect(innerButton(page)).toHaveClass(`icon-button--size-${size}`);
      expect(icon.getAttribute('size')).toBe(expectedIconSize);
    });

    it('supports solid iconTheme', async () => {
      const page = await render(
        '<uai-icon-button icon="info" icon-theme="solid" aria-label="Informações"></uai-icon-button>',
      );
      expect(page.root.shadowRoot.querySelector('uai-icon').getAttribute('theme')).toBe('solid');
    });
  });

  describe('legacy compatibility', () => {
    it.each([
      ['text', 'icon-button--ghost', 'icon-button--color-primary', 'ghost'],
      ['primary', 'icon-button--solid', 'icon-button--color-primary', 'solid'],
      ['secondary', 'icon-button--outline', 'icon-button--color-primary', 'outline'],
      ['secondary--white', 'icon-button--outline', 'icon-button--color-primary', 'outline'],
      ['tertiary', 'icon-button--outline', 'icon-button--color-primary', 'outline'],
      ['delete', 'icon-button--solid', 'icon-button--color-negative', 'solid'],
      ['dashed', 'icon-button--solid', 'icon-button--color-primary', 'solid'],
    ])(
      'maps legacy variant "%s" to %s/%s and emits a single warning',
      async (legacyVariant, expectedVariantClass, expectedColorClass, fallbackName) => {
        const page = await render(
          `<uai-icon-button icon="close" variant="${legacyVariant}" aria-label="Excluir"></uai-icon-button>`,
        );
        const button = innerButton(page);

        expect(button).toHaveClass(expectedVariantClass);
        expect(button).toHaveClass(expectedColorClass);
        expect(warn).toHaveBeenCalledTimes(1);
        expect(warn).toHaveBeenCalledWith(
          `[uai-icon-button] Unsupported variant "${legacyVariant}". Using "${fallbackName}".`,
        );
      },
    );

    it.each([
      ['standard', 'icon-button--size-medium', 'medium'],
      ['tall', 'icon-button--size-large', 'large'],
      ['giant', 'icon-button--size-medium', 'medium'],
    ])('maps legacy size "%s" to %s and emits a single warning', async (legacySize, expectedClass, fallbackName) => {
      const page = await render(
        `<uai-icon-button icon="close" size="${legacySize}" aria-label="Fechar"></uai-icon-button>`,
      );

      expect(innerButton(page)).toHaveClass(expectedClass);
      expect(warn).toHaveBeenCalledTimes(1);
      expect(warn).toHaveBeenCalledWith(`[uai-icon-button] Unsupported size "${legacySize}". Using "${fallbackName}".`);
    });
  });

  describe('accessible name and states', () => {
    it('forwards aria-label and aria-labelledby to the inner button', async () => {
      const withLabel = await render('<uai-icon-button icon="close" aria-label="Fechar painel"></uai-icon-button>');
      expect(innerButton(withLabel).getAttribute('aria-label')).toBe('Fechar painel');

      const withLabelledby = await render(
        '<uai-icon-button icon="close" aria-labelledby="heading-id" data-test="close-btn"></uai-icon-button>',
      );
      expect(innerButton(withLabelledby).getAttribute('aria-labelledby')).toBe('heading-id');
      expect(innerButton(withLabelledby).getAttribute('data-test')).toBe('close-btn');
      expect(warn).not.toHaveBeenCalled();
    });

    it('warns once when neither aria-label nor aria-labelledby is provided', async () => {
      await render('<uai-icon-button icon="close"></uai-icon-button>');
      await render('<uai-icon-button icon="add"></uai-icon-button>');

      expect(warn).toHaveBeenCalledTimes(1);
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('[uai-icon-button]'));
    });

    it('toggles active state through isActive method', async () => {
      const page = await render('<uai-icon-button icon="info" aria-label="Detalhes"></uai-icon-button>');

      await page.root.isActive(true);
      await page.waitForChanges();

      expect(innerButton(page)).toHaveClasses(['icon-button--active', 'active']);
      expect(innerButton(page).getAttribute('aria-pressed')).toBe('true');

      await page.root.isActive(false);
      await page.waitForChanges();

      expect(innerButton(page)).not.toHaveClass('icon-button--active');
      expect(innerButton(page).getAttribute('aria-pressed')).toBe('false');
    });

    it('renders spinner and sets aria-busy when loading', async () => {
      const page = await render('<uai-icon-button icon="info" loading aria-label="Carregando"></uai-icon-button>');
      const button = innerButton(page);

      expect(button).toHaveClass('icon-button--loading');
      expect(button.getAttribute('aria-busy')).toBe('true');
      expect(button.getAttribute('aria-disabled')).toBe('true');
      expect(page.root.shadowRoot.querySelector('.icon-button__spinner')).not.toBeNull();
      expect(page.root.shadowRoot.querySelector('uai-icon')).toBeNull();
    });
  });

  describe('uaiClick', () => {
    it('emits uaiClick once when enabled and not loading', async () => {
      const page = await render('<uai-icon-button icon="add" aria-label="Adicionar"></uai-icon-button>');
      const spy = jest.fn();
      page.root.addEventListener('uaiClick', spy);

      innerButton(page).click();
      await page.waitForChanges();

      expect(spy).toHaveBeenCalledTimes(1);
    });

    it.each(['disabled', 'loading'])('blocks uaiClick when %s is set', async (attr) => {
      const page = await render(`<uai-icon-button icon="add" ${attr} aria-label="Adicionar"></uai-icon-button>`);
      const spy = jest.fn();
      page.root.addEventListener('uaiClick', spy);

      (page.rootInstance as any).handleClick(new MouseEvent('click'));
      await page.waitForChanges();

      expect(spy).not.toHaveBeenCalled();
    });
  });
});
