import { newSpecPage } from '@stencil/core/testing';
import { UaiTypo } from '../uai-typo';

const render = (html: string) => newSpecPage({ components: [UaiTypo], html });

const text = (page) => page.root.shadowRoot.firstElementChild as HTMLElement;

const VARIANTS = [
  'display',
  'heading-xl',
  'heading-lg',
  'heading-md',
  'title-lg',
  'title-md',
  'title-sm',
  'title',
  'body-lg',
  'body-base',
  'body-sm',
  'caption',
  'overline',
];

describe('uai-typo', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => {
    warn.mockRestore();
  });

  // Warnings are emitted once per module, so this must run before any other render.
  describe('theme root', () => {
    it('warns when there is no [data-uai-theme] ancestor', async () => {
      await render(`<uai-typo>Text</uai-typo>`);

      expect(warn).toHaveBeenCalledWith(
        '[uai-typo] No [data-uai-theme] ancestor found. Wrap UAI components in <uai-theme-provider>.',
      );
    });
  });

  describe('defaults', () => {
    it('renders a paragraph with body-base, regular and normal letter spacing', async () => {
      const page = await render(`<uai-typo>Text</uai-typo>`);
      const el = text(page);

      expect(el.tagName).toBe('P');
      expect(el.getAttribute('part')).toBe('uai-typo__text');
      expect(el).toHaveClasses([
        'typo',
        'typo--variant-body-base',
        'typo--bold-regular',
        'typo--letter-spacing-normal',
      ]);
      expect(el).not.toHaveClass('typo--margin');
      expect(el).not.toHaveClass('typo--paragraph');
      expect(el).not.toHaveClass('typo--italic');
      expect(el).not.toHaveClass('typo--no-wrap');
    });

    it('keeps the default values of the props shared with bds-typo', async () => {
      const page = await render(`<uai-typo>Text</uai-typo>`);
      const instance = page.rootInstance as UaiTypo;

      expect(instance.variant).toBe('body-base');
      expect(instance.bold).toBe('regular');
      expect(instance.letterSpacing).toBe('normal');
      expect(instance.italic).toBe(false);
      expect(instance.noWrap).toBe(false);
      expect(instance.paragraph).toBe(false);
      expect(instance.margin).toBe(true);
      expect(instance.tag).toBe('p');
      expect(instance.dataTest).toBeNull();
      expect(instance.lineHeight).toBeUndefined();
    });

    it('renders the slotted content', async () => {
      const page = await render(`<uai-typo>Hello</uai-typo>`);

      expect(text(page).querySelector('slot')).not.toBeNull();
      expect(page.root.textContent).toBe('Hello');
    });
  });

  describe('variant', () => {
    it.each(VARIANTS)('applies the %s class', async (variant) => {
      const page = await render(`<uai-typo variant="${variant}">Text</uai-typo>`);

      expect(text(page)).toHaveClass(`typo--variant-${variant}`);
      expect(warn).not.toHaveBeenCalledWith(expect.stringContaining('Unsupported variant'));
    });

    it.each(['fs-16', 'large'])('falls back to body-base and warns for "%s"', async (variant) => {
      const page = await render(`<uai-typo variant="${variant}">Text</uai-typo>`);

      expect(text(page)).toHaveClass('typo--variant-body-base');
      expect(warn).toHaveBeenCalledWith(`[uai-typo] Unsupported variant "${variant}". Using "body-base".`);
    });

    it.each(['display', 'heading-xl', 'heading-lg', 'heading-md'])('adds the margin to %s', async (variant) => {
      const page = await render(`<uai-typo variant="${variant}">Text</uai-typo>`);

      expect(text(page)).toHaveClass('typo--margin');
    });

    it.each(['title-lg', 'title-md', 'title-sm', 'title', 'body-lg', 'body-base', 'body-sm', 'caption', 'overline'])(
      'does not add the margin to %s',
      async (variant) => {
        const page = await render(`<uai-typo variant="${variant}">Text</uai-typo>`);

        expect(text(page)).not.toHaveClass('typo--margin');
      },
    );

    it('removes the margin when margin is false', async () => {
      const page = await render(`<uai-typo variant="heading-lg" margin="false">Text</uai-typo>`);

      expect(text(page)).not.toHaveClass('typo--margin');
    });

    it('updates the class when the variant changes', async () => {
      const page = await render(`<uai-typo variant="caption">Text</uai-typo>`);
      page.root.setAttribute('variant', 'title');
      await page.waitForChanges();

      expect(text(page)).toHaveClass('typo--variant-title');
      expect(text(page)).not.toHaveClass('typo--variant-caption');
    });
  });

  describe('bold', () => {
    it.each(['regular', 'medium', 'semibold', 'bold'])('applies the %s class', async (bold) => {
      const page = await render(`<uai-typo bold="${bold}">Text</uai-typo>`);

      expect(text(page)).toHaveClass(`typo--bold-${bold}`);
    });

    it.each(['semi-bold', 'extra-bold'])(
      'falls back to regular and warns for the bds-typo value "%s"',
      async (bold) => {
        const page = await render(`<uai-typo bold="${bold}">Text</uai-typo>`);

        expect(text(page)).toHaveClass('typo--bold-regular');
        expect(warn).toHaveBeenCalledWith(`[uai-typo] Unsupported bold "${bold}". Using "regular".`);
      },
    );

    it('accepts any combination with variant', async () => {
      const page = await render(`<uai-typo variant="overline" bold="bold">Text</uai-typo>`);

      expect(text(page)).toHaveClasses(['typo--variant-overline', 'typo--bold-bold']);
    });
  });

  describe('letterSpacing', () => {
    it('applies the expanded class', async () => {
      const page = await render(`<uai-typo letter-spacing="expanded">Text</uai-typo>`);

      expect(text(page)).toHaveClass('typo--letter-spacing-expanded');
    });

    it('falls back to normal and warns for an unsupported value', async () => {
      const page = await render(`<uai-typo letter-spacing="wide">Text</uai-typo>`);

      expect(text(page)).toHaveClass('typo--letter-spacing-normal');
      expect(warn).toHaveBeenCalledWith('[uai-typo] Unsupported letterSpacing "wide". Using "normal".');
    });
  });

  describe('tag', () => {
    it.each(['p', 'h1', 'h2', 'h3', 'h4', 'span'])('renders a %s element', async (tag) => {
      const page = await render(`<uai-typo tag="${tag}">Text</uai-typo>`);

      expect(text(page).tagName).toBe(tag.toUpperCase());
    });

    it('falls back to p and warns for an unsupported tag', async () => {
      const page = await render(`<uai-typo tag="div">Text</uai-typo>`);

      expect(text(page).tagName).toBe('P');
      expect(warn).toHaveBeenCalledWith('[uai-typo] Unsupported tag "div". Using "p".');
    });
  });

  describe('modifiers', () => {
    it('applies italic, no-wrap and paragraph classes', async () => {
      const page = await render(`<uai-typo italic no-wrap paragraph>Text</uai-typo>`);

      expect(text(page)).toHaveClasses(['typo--italic', 'typo--no-wrap', 'typo--paragraph']);
    });

    it('sets data-test on the text element', async () => {
      const page = await render(`<uai-typo data-test="typo-test">Text</uai-typo>`);

      expect(text(page).getAttribute('data-test')).toBe('typo-test');
    });
  });

  describe('deprecated lineHeight', () => {
    it('warns and has no effect', async () => {
      const page = await render(`<uai-typo line-height="double">Text</uai-typo>`);

      expect(warn).toHaveBeenCalledWith(
        '[uai-typo] "lineHeight" is deprecated. It has no effect. The line height comes from the variant.',
      );
      expect(text(page).getAttribute('class')).not.toContain('line-height');
    });
  });
});
