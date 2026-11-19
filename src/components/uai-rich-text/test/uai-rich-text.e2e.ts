import { E2EPage, newE2EPage } from '@stencil/core/testing';

const create = async (html: string): Promise<E2EPage> => {
  const page = await newE2EPage({ html: `<uai-theme-provider theme="light">${html}</uai-theme-provider>` });
  await page.waitForChanges();
  return page;
};

const value = (page: E2EPage, selector = 'uai-rich-text') =>
  page.evaluate((sel) => (document.querySelector(sel) as any).getContent(), selector);

const typeInEditor = async (page: E2EPage, text: string, selector = 'uai-rich-text') => {
  await page.evaluate((sel) => (document.querySelector(sel) as any).setFocus(), selector);
  await page.waitForChanges();
  await page.keyboard.type(text);
  await page.waitForChanges();
};

const editable = (page: E2EPage) =>
  page.evaluate(() =>
    document
      .querySelector('uai-rich-text')
      .shadowRoot.querySelector('.rich-text__content')
      .getAttribute('contenteditable'),
  );

describe('uai-rich-text e2e', () => {
  describe('value', () => {
    it('keeps the HTML it receives and returns it', async () => {
      const page = await create(
        '<uai-rich-text label="Texto" bold value="<p>Oi <strong>mundo</strong></p>"></uai-rich-text>',
      );
      expect(await value(page)).toBe('<p>Oi <strong>mundo</strong></p>');
    });

    it('drops unsafe markup from the value', async () => {
      const page = await create('<uai-rich-text label="Texto"></uai-rich-text>');
      await page.evaluate(() => {
        (document.querySelector('uai-rich-text') as any).value =
          '<p onclick="alert(1)">x<script>alert(2)</script><a href="javascript:alert(3)">y</a><img src="data:image/png;base64,AAAA"></p>';
      });
      await page.waitForChanges();
      expect(await value(page)).toBe('<p>xy</p>');
    });

    it('keeps a document with only an empty table (it is not empty)', async () => {
      const page = await create('<uai-rich-text label="Texto" table></uai-rich-text>');
      await page.evaluate(() => {
        (document.querySelector('uai-rich-text') as any).value =
          '<table><tbody><tr><td><p></p></td><td><p></p></td></tr></tbody></table>';
      });
      await page.waitForChanges();
      expect(await value(page)).toContain('<table');
    });

    it('is empty ("") with no content', async () => {
      const page = await create('<uai-rich-text label="Texto"></uai-rich-text>');
      expect(await value(page)).toBe('');
      expect(await page.evaluate(() => (document.querySelector('uai-rich-text') as any).value)).toBe('');
    });

    it('emits uaiInput while typing and uaiChange when leaving after a change', async () => {
      const page = await create('<uai-rich-text label="Texto"></uai-rich-text><button id="out">Fora</button>');
      const input = await page.spyOnEvent('uaiInput');
      const change = await page.spyOnEvent('uaiChange');
      await typeInEditor(page, 'Oi');
      expect(input.length).toBeGreaterThan(0);
      expect(change).toHaveReceivedEventTimes(0);
      await page.focus('#out');
      await page.waitForChanges();
      expect(change).toHaveReceivedEventTimes(1);
      expect(change.firstEvent.detail).toEqual({ value: '<p>Oi</p>' });
    });
  });

  describe('toolbar', () => {
    it('applies bold with the shortcut and shows it pressed', async () => {
      const page = await create('<uai-rich-text label="Texto" bold></uai-rich-text>');
      await typeInEditor(page, 'texto');
      await page.keyboard.down('Shift');
      await page.keyboard.press('Home');
      await page.keyboard.up('Shift');
      await page.keyboard.down('Control');
      await page.keyboard.press('b');
      await page.keyboard.up('Control');
      await page.waitForChanges();
      expect(await value(page)).toBe('<p><strong>texto</strong></p>');
      const pressed = await page.evaluate(() => {
        const button = Array.from(
          document.querySelector('uai-rich-text').shadowRoot.querySelectorAll('uai-button'),
        ).find((element) => element.getAttribute('aria-label') === 'Negrito');
        return button.shadowRoot.querySelector('button').getAttribute('aria-pressed');
      });
      expect(pressed).toBe('true');
    });

    // The buttons of the toolbar: each one sits in a uai-tooltip (menus: the activator inside the dropdown).
    const toolbar = (page: E2EPage) =>
      page.evaluate(() =>
        Array.from(
          document
            .querySelector('uai-rich-text')
            .shadowRoot.querySelectorAll(
              '.rich-text__toolbar uai-tooltip > uai-button, .rich-text__toolbar uai-tooltip > uai-dropdown > uai-button[slot="activator"]',
            ),
        ).map((element) => element.getAttribute('aria-label')),
      );

    it('shows no toolbar when no feature is on', async () => {
      const page = await create('<uai-rich-text label="Texto"></uai-rich-text>');
      expect(
        await page.evaluate(
          () => !!document.querySelector('uai-rich-text').shadowRoot.querySelector('.rich-text__toolbar'),
        ),
      ).toBe(false);
    });

    it('shows only the buttons of the features that are on', async () => {
      const page = await create('<uai-rich-text label="Texto" bold link></uai-rich-text>');
      expect(await toolbar(page)).toEqual(['Negrito', 'Link']);
    });

    it('turns a feature on and off while the field is in use, keeping the content', async () => {
      const page = await create('<uai-rich-text label="Texto" bold value="<p>Oi</p>"></uai-rich-text>');
      expect(await toolbar(page)).toEqual(['Negrito']);
      await page.evaluate(() => ((document.querySelector('uai-rich-text') as any).italic = true));
      await page.waitForChanges();
      expect(await toolbar(page)).toEqual(['Negrito', 'Itálico']);
      expect(await value(page)).toBe('<p>Oi</p>');
      await page.evaluate(() => ((document.querySelector('uai-rich-text') as any).bold = false));
      await page.waitForChanges();
      expect(await toolbar(page)).toEqual(['Itálico']);
    });

    it('drops what a feature that is off would produce, from the value', async () => {
      const page = await create('<uai-rich-text label="Texto" bold></uai-rich-text>');
      await page.evaluate(() => {
        (document.querySelector('uai-rich-text') as any).value =
          '<p><strong>forte</strong> <em>itálico</em> <a href="https://blip.ai">link</a> <u>sub</u></p><h2>título</h2><ul><li><p>item</p></li></ul>';
      });
      await page.waitForChanges();
      expect(await value(page)).toBe('<p><strong>forte</strong> itálico link sub</p><p>título</p><p>item</p>');
    });

    it('does not link an address typed in a field without links, and does link it with links on', async () => {
      const without = await create('<uai-rich-text label="Texto" bold></uai-rich-text>');
      await typeInEditor(without, 'veja https://blip.ai ');
      expect(await value(without)).not.toContain('<a');
      const withLink = await create('<uai-rich-text label="Texto" link></uai-rich-text>');
      await typeInEditor(withLink, 'veja https://blip.ai ');
      expect(await value(withLink)).toContain('<a ');
    });

    const tips = (page: E2EPage) =>
      page.evaluate(() =>
        Array.from(
          document.querySelector('uai-rich-text').shadowRoot.querySelectorAll('.rich-text__toolbar uai-tooltip'),
        ).map((tip: any) => tip.tooltipText as string),
      );

    it('gives every button a tooltip with its name and keyboard shortcut', async () => {
      const page = await create(
        '<uai-rich-text label="Texto" history bold strike bullet-list text-align link></uai-rich-text>',
      );
      const mod = await page.evaluate(() => (/Mac|iPhone|iPad/.test(navigator.platform) ? '⌘' : 'Ctrl'));
      expect(await tips(page)).toEqual([
        `Desfazer (${mod}+Z)`,
        `Refazer (${mod}+Shift+Z)`,
        `Negrito (${mod}+B)`,
        `Tachado (${mod}+Shift+S)`,
        'Link',
        `Lista com marcadores (${mod}+Shift+8)`,
        `Alinhar à esquerda (${mod}+Shift+L)`,
        `Centralizar (${mod}+Shift+E)`,
        `Alinhar à direita (${mod}+Shift+R)`,
      ]);
    });

    it('shows the tooltip on hover and hides the one of a menu while its panel is open', async () => {
      const page = await create('<uai-rich-text label="Texto" bold link></uai-rich-text>');
      const visible = (index: number) =>
        page.evaluate(
          (i) =>
            document
              .querySelector('uai-rich-text')
              .shadowRoot.querySelectorAll('.rich-text__toolbar uai-tooltip')
              [i].shadowRoot.querySelector('.tooltip__tip')
              .classList.contains('tooltip__tip--visible'),
          index,
        );
      await page.evaluate(() =>
        (document.querySelector('uai-rich-text').shadowRoot.querySelector('uai-button') as HTMLElement).dispatchEvent(
          new MouseEvent('mouseenter', { bubbles: true }),
        ),
      );
      await page.waitForChanges();
      expect(await visible(0)).toBe(true);

      // The link menu: while its panel is open, its tooltip is disabled.
      await page.evaluate(() => {
        (document.querySelector('uai-rich-text').shadowRoot.querySelector('uai-dropdown') as any).setOpen();
      });
      await page.waitForChanges();
      const disabled = await page.evaluate(
        () =>
          (
            document
              .querySelector('uai-rich-text')
              .shadowRoot.querySelectorAll('.rich-text__toolbar uai-tooltip')[1] as any
          ).disabled,
      );
      expect(disabled).toBe(true);
    });

    it('keeps undo and redo working without their buttons', async () => {
      const page = await create('<uai-rich-text label="Texto" bold></uai-rich-text>');
      await typeInEditor(page, 'texto');
      await page.keyboard.down('Control');
      await page.keyboard.press('z');
      await page.keyboard.up('Control');
      await page.waitForChanges();
      expect(await value(page)).toBe('');
      expect(await toolbar(page)).toEqual(['Negrito']);
    });
  });

  describe('states', () => {
    it('is not editable when disabled or readonly, and hides the toolbar when readonly', async () => {
      const disabled = await create('<uai-rich-text label="Texto" disabled value="<p>x</p>"></uai-rich-text>');
      expect(await editable(disabled)).toBe('false');

      const readonly = await create('<uai-rich-text label="Texto" readonly value="<p>x</p>"></uai-rich-text>');
      expect(await editable(readonly)).toBe('false');
      expect(
        await readonly.evaluate(
          () => !!document.querySelector('uai-rich-text').shadowRoot.querySelector('.rich-text__toolbar'),
        ),
      ).toBe(false);
    });

    it('names the content area with the label', async () => {
      const page = await create('<uai-rich-text label="Notas"></uai-rich-text>');
      const named = await page.evaluate(() => {
        const root = document.querySelector('uai-rich-text').shadowRoot;
        const content = root.querySelector('.rich-text__content');
        return {
          role: content.getAttribute('role'),
          label: root.getElementById(content.getAttribute('aria-labelledby'))?.textContent,
        };
      });
      expect(named).toEqual({ role: 'textbox', label: 'Notas' });
    });
  });

  describe('form', () => {
    const FORM = `
      <form id="form">
        <uai-rich-text name="page" label="Conteúdo" value="<p>Inicial</p>"></uai-rich-text>
        <uai-rich-text id="required" name="notes" label="Notas" required></uai-rich-text>
      </form>`;

    it('submits the HTML under its name and blocks an empty required field', async () => {
      const page = await create(FORM);
      const result = await page.evaluate(() => {
        const form = document.getElementById('form') as HTMLFormElement;
        return { page: new FormData(form).get('page'), valid: form.checkValidity() };
      });
      expect(result).toEqual({ page: '<p>Inicial</p>', valid: false });

      await typeInEditor(page, 'Nota', '#required');
      expect(await page.evaluate(() => (document.getElementById('form') as HTMLFormElement).checkValidity())).toBe(
        true,
      );
    });

    it('shows the required message when the form reports the field invalid', async () => {
      const page = await create(FORM);
      await page.evaluate(() => (document.getElementById('form') as HTMLFormElement).reportValidity());
      await page.waitForChanges();
      const message = await page.evaluate(
        () => document.getElementById('required').shadowRoot.querySelector('.rich-text__message')?.textContent,
      );
      expect(message).toBe('Este campo é obrigatório.');
    });

    it('goes back to the initial value on form reset', async () => {
      const page = await create(FORM);
      await typeInEditor(page, ' editado');
      expect(await value(page)).not.toBe('<p>Inicial</p>');
      await page.evaluate(() => (document.getElementById('form') as HTMLFormElement).reset());
      await page.waitForChanges();
      expect(await value(page)).toBe('<p>Inicial</p>');
    });
  });
});
