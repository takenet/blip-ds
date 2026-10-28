import { E2EPage, newE2EPage } from '@stencil/core/testing';

const TAG = 'uai-avatar';
const AVATAR = '[part="avatar"]';
const EVENTS = ['uaiClickAvatar', 'uaiImageUpload', 'bdsClickAvatar', 'bdsImageUpload'];

// 1x1 transparent PNG.
const PNG = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
const IMAGE = `data:image/png;base64,${PNG}`;
const BROKEN = 'data:image/png;base64,broken';

const SIZES: [string, string, string][] = [
  ['micro', 'uai-sizing-lg', 'uai-body-sm-font-size'],
  ['extra-small', 'uai-sizing-xl', 'uai-body-base-font-size'],
  ['small', 'uai-sizing-2xl', 'uai-body-lg-font-size'],
  ['standard', 'uai-sizing-3xl', 'uai-heading-md-font-size'],
  ['large', 'uai-sizing-4xl', 'uai-heading-lg-font-size'],
  ['extra-large', 'uai-sizing-5xl', 'uai-heading-xl-font-size'],
];
const PIXELS = { micro: 24, 'extra-small': 32, small: 40, standard: 48, large: 64, 'extra-large': 72 };

const themed = (content: string, theme = 'light') =>
  `<uai-theme-provider theme="${theme}">${content}</uai-theme-provider>`;

const setup = async (content: string, { theme = 'light', reducedMotion = false } = {}) => {
  const page = await newE2EPage();
  const warnings: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'warn' || (message.type() as string) === 'warning') warnings.push(message.text());
  });
  (page as any).warnings = warnings;
  if (reducedMotion) await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await page.setContent(themed(content, theme));
  // Tests run in parallel tabs; keep this page focused so focus comes only from the test.
  const session = await page.target().createCDPSession();
  await session.send('Emulation.setFocusEmulationEnabled', { enabled: true });
  await page.evaluate((names: string[]) => {
    const w = window as any;
    w.events = [];
    w.fileClicks = 0;
    // Counts the file chooser openings without opening a native dialog.
    const original = HTMLInputElement.prototype.click;
    HTMLInputElement.prototype.click = function (this: HTMLInputElement) {
      if (this.type === 'file') {
        w.fileClicks += 1;
        return;
      }
      return original.call(this);
    };
    for (const name of names) {
      document.addEventListener(name, (event: CustomEvent) => {
        const { detail } = event;
        w.events.push([name, detail instanceof Event ? detail.type : (detail ?? null)]);
      });
    }
  }, EVENTS);
  await page.waitForChanges();
  return page;
};

const events = (page: E2EPage, name?: string) =>
  page.evaluate((n: string) => (window as any).events.filter(([event]) => !n || event === n), name);
const details = async (page: E2EPage, name: string) => (await events(page, name)).map(([, detail]) => detail);
const fileClicks = (page: E2EPage) => page.evaluate(() => (window as any).fileClicks as number);
const deprecations = (page: E2EPage, prop: string) =>
  ((page as any).warnings as string[]).filter(
    (text) => new RegExp(`\\b${prop}\\b`).test(text) && /deprecat/i.test(text),
  );
const warningsAbout = (page: E2EPage, pattern: RegExp) =>
  ((page as any).warnings as string[]).filter((text) => pattern.test(text));

// Snapshot of the host and the shadow DOM pieces the contract exposes.
const state = (page: E2EPage, selector = TAG) =>
  page.$eval(selector, (host: HTMLElement) => {
    const root = host.shadowRoot;
    const image = root.querySelector('img.avatar__image') as HTMLImageElement;
    const icon = root.querySelector('uai-icon.avatar__icon');
    const upload = root.querySelector('div.avatar__upload');
    const file = root.querySelector('input.avatar__file') as HTMLInputElement;
    return {
      classes: [...host.classList].filter((c) => c.startsWith('uai-avatar--')).sort(),
      role: host.getAttribute('role'),
      tabindex: host.getAttribute('tabindex'),
      label: host.getAttribute('aria-label'),
      hidden: host.getAttribute('aria-hidden'),
      dataTest: host.getAttribute('data-test'),
      image: image ? { src: image.getAttribute('src'), alt: image.getAttribute('alt') } : null,
      initials: root.querySelector('span.avatar__initials')?.textContent.trim() ?? null,
      icon: icon?.getAttribute('name') ?? null,
      ellipsis: root.querySelector('span.avatar__ellipsis')?.textContent.trim() ?? null,
      upload: upload ? (upload.querySelector('uai-icon')?.getAttribute('name') ?? '') : null,
      file: file
        ? { type: file.getAttribute('type'), accept: file.getAttribute('accept'), shown: file.offsetWidth > 0 }
        : null,
    };
  });

const style = (page: E2EPage, keys: string[], part?: string, selector = TAG) =>
  page.$eval(
    selector,
    (host: HTMLElement, props: string[], p: string) => {
      const el = p ? host.shadowRoot.querySelector(p) : host;
      const computed = getComputedStyle(el);
      return Object.fromEntries(props.map((key) => [key, computed.getPropertyValue(key)]));
    },
    keys,
    part,
  );

// Resolves a UAI token to the computed value of a property, inside the same theme as the avatar.
const token = (page: E2EPage, name: string, property = 'color') =>
  page.evaluate(
    (tokenName: string, p: string) => {
      const probe = document.createElement('div');
      probe.style.setProperty(p, `var(--${tokenName})`);
      document.querySelector('uai-theme-provider').appendChild(probe);
      const value = getComputedStyle(probe).getPropertyValue(p);
      probe.remove();
      return value;
    },
    name,
    property,
  );

const press = async (page: E2EPage, key: string) => {
  await page.keyboard.press(key as any);
  await page.waitForChanges();
};

// Focuses the button placed before the avatar and moves the focus with Tab.
const tabFromBefore = async (page: E2EPage) => {
  await page.$eval('#before', (el: HTMLElement) => el.focus());
  await press(page, 'Tab');
  return page.evaluate(() => document.activeElement?.id || document.activeElement?.tagName.toLowerCase());
};

const uploadShown = (page: E2EPage, selector = TAG) =>
  page.$eval(selector, (host: HTMLElement) => {
    const s = getComputedStyle(host.shadowRoot.querySelector('.avatar__upload'));
    return s.display !== 'none' && s.visibility !== 'hidden' && s.opacity === '1';
  });

const waitUploadShown = (page: E2EPage, selector = TAG) =>
  page.waitForFunction(
    (sel: string) => {
      const s = getComputedStyle(document.querySelector(sel).shadowRoot.querySelector('.avatar__upload'));
      return s.display !== 'none' && s.visibility !== 'hidden' && s.opacity === '1';
    },
    { timeout: 2000 },
    selector,
  );

describe('uai-avatar e2e', () => {
  describe('Requirement: Contrato do bds-avatar', () => {
    it('Scenario: Imagem — shows the thumbnail with alt="" clipped in the radius/full circle', async () => {
      const page = await setup(`<uai-avatar name="Ana Silva" thumbnail="${IMAGE}"></uai-avatar>`);
      const avatar = await state(page);

      expect(avatar.image).toEqual({ src: IMAGE, alt: '' });
      expect(avatar.initials).toBeNull();
      expect(avatar.icon).toBeNull();
      const circle = await style(page, ['border-radius', 'overflow'], AVATAR);
      expect(circle['border-radius']).toBe(await token(page, 'uai-radius-full', 'border-radius'));
      expect(circle.overflow).toBe('hidden');
      expect((await style(page, ['object-fit'], 'img.avatar__image'))['object-fit']).toBe('cover');
    });

    it('falls back to the initials when the image fails to load', async () => {
      const page = await setup(`<uai-avatar name="Ana Silva" thumbnail="${BROKEN}"></uai-avatar>`);
      await page.waitForFunction(
        (sel: string) => document.querySelector(sel).shadowRoot.querySelector('span.avatar__initials') !== null,
        { timeout: 2000 },
        TAG,
      );
      await page.waitForChanges();

      const avatar = await state(page);
      expect(avatar.image).toBeNull();
      expect(avatar.initials).toBe('AS');
    });

    it('Scenario: Clique — clicking the avatar emits uaiClickAvatar and no bds* event', async () => {
      const page = await setup(`<uai-avatar name="Ana Silva"></uai-avatar>`);
      await page.click(TAG);
      await page.waitForChanges();

      expect(await details(page, 'uaiClickAvatar')).toEqual(['click']);
      expect(await events(page, 'bdsClickAvatar')).toEqual([]);
    });

    it('places dataTest on the host', async () => {
      const page = await setup(`<uai-avatar name="Ana" data-test="avatar-test"></uai-avatar>`);
      expect((await state(page)).dataTest).toBe('avatar-test');
    });
  });

  describe('Requirement: Iniciais do nome', () => {
    it.each([
      ['ana maria silva', 'AS'],
      ['Bruno', 'B'],
      ['  carla   souza  ', 'CS'],
    ])('Scenario: Nome completo — name="%s" without image shows %s', async (name, initials) => {
      const page = await setup(`<uai-avatar name="${name}"></uai-avatar>`);
      const avatar = await state(page);

      expect(avatar.initials).toBe(initials);
      expect(avatar.image).toBeNull();
    });

    it('Scenario: Nome longo no menor tamanho — micro shows MA inside the circle', async () => {
      const page = await setup(`<uai-avatar size="micro" name="Maria Eduarda dos Santos Albuquerque"></uai-avatar>`);

      expect((await state(page)).initials).toBe('MA');
      const fit = await page.$eval(TAG, (host: HTMLElement) => {
        const span = host.shadowRoot.querySelector('span.avatar__initials') as HTMLElement;
        const outer = host.getBoundingClientRect();
        const inner = span.getBoundingClientRect();
        return {
          scroll: span.scrollWidth <= host.clientWidth,
          left: inner.left >= outer.left - 0.5,
          right: inner.right <= outer.right + 0.5,
        };
      });
      expect(fit).toEqual({ scroll: true, left: true, right: true });
    });

    it.each(SIZES.map(([size]) => size))('keeps the initials of a long name inside the %s circle', async (size) => {
      const page = await setup(`<uai-avatar size="${size}" name="Wwwwwww Mmmmmmm"></uai-avatar>`);
      const fits = await page.$eval(TAG, (host: HTMLElement) => {
        const span = host.shadowRoot.querySelector('span.avatar__initials') as HTMLElement;
        return span.scrollWidth <= host.clientWidth;
      });
      expect(fits).toBe(true);
    });

    it('shows the avatar-user icon without name and image', async () => {
      const page = await setup(`<uai-avatar></uai-avatar>`);
      const avatar = await state(page);

      expect(avatar.icon).toBe('avatar-user');
      expect(avatar.initials).toBeNull();
      expect(avatar.image).toBeNull();
    });
  });

  describe('Requirement: API anterior do uai-avatar', () => {
    it('Scenario: Initials longas — initials="Ana Silva" without name shows AN and warns once', async () => {
      const page = await setup(`
        <uai-avatar id="a" initials="Ana Silva"></uai-avatar>
        <uai-avatar id="b" initials="bo"></uai-avatar>`);

      expect((await state(page, '#a')).initials).toBe('AN');
      expect((await state(page, '#b')).initials).toBe('BO');
      expect(deprecations(page, 'initials')).toHaveLength(1);
    });

    it('ignores initials when name is given', async () => {
      const page = await setup(`<uai-avatar name="Bruno Lima" initials="ZZ"></uai-avatar>`);
      expect((await state(page)).initials).toBe('BL');
    });

    it('uses src as thumbnail and label as name, warning once for each', async () => {
      const page = await setup(`
        <uai-avatar id="a" src="${IMAGE}" label="Ana Silva"></uai-avatar>
        <uai-avatar id="b" src="${IMAGE}" label="Bruno Lima"></uai-avatar>
        <uai-avatar id="c" label="Carla Souza"></uai-avatar>`);

      const a = await state(page, '#a');
      expect(a.image).toEqual({ src: IMAGE, alt: '' });
      expect(a.label).toBe('Ana Silva');
      expect(a.role).toBe('img');
      expect((await state(page, '#c')).initials).toBe('CS');
      expect(deprecations(page, 'src')).toHaveLength(1);
      expect(deprecations(page, 'label')).toHaveLength(1);
    });
  });

  describe('Requirement: Cores', () => {
    it.each([
      ['Ana', 'info'],
      ['Bruno', 'success'],
      ['Carla', 'warning'],
      ['Diego', 'error'],
      ['Eva', 'info'],
      ['Fabio', 'info'],
      ['gabriel', 'success'],
    ])('colorLetter: name="%s" resolves to --color-%s', async (name, color) => {
      const page = await setup(`<uai-avatar name="${name}"></uai-avatar>`);
      expect((await state(page)).classes).toContain(`uai-avatar--color-${color}`);
    });

    it.each([
      ['system', 'info'],
      ['info', 'info'],
      ['success', 'success'],
      ['warning', 'warning'],
      ['error', 'error'],
      ['surface', 'surface'],
    ])('color="%s" resolves to --color-%s regardless of the name', async (color, resolved) => {
      const page = await setup(`<uai-avatar name="Bruno Lima" color="${color}"></uai-avatar>`);
      const { classes } = await state(page);

      expect(classes).toContain(`uai-avatar--color-${resolved}`);
      expect(classes.filter((c) => c.startsWith('uai-avatar--color-'))).toHaveLength(1);
    });

    it('falls back to colorLetter with a warning for an unknown color', async () => {
      const page = await setup(`<uai-avatar name="Bruno Lima" color="purple"></uai-avatar>`);

      expect((await state(page)).classes).toContain('uai-avatar--color-success');
      expect(warningsAbout(page, /purple/)).toHaveLength(1);
    });

    for (const theme of ['light', 'dark']) {
      describe(theme, () => {
        it('Scenario: Cor por letra — "Bruno Lima" uses feedback/success-subtle with content/primary', async () => {
          const page = await setup(`<uai-avatar name="Bruno Lima"></uai-avatar>`, { theme });
          const host = await style(page, ['background-color', 'color'], AVATAR);

          expect(host['background-color']).toBe(await token(page, 'uai-feedback-success-subtle', 'background-color'));
          expect(host.color).toBe(await token(page, 'uai-content-primary'));
        });

        it.each([
          ['info', 'uai-feedback-info-subtle', 'uai-content-primary'],
          ['warning', 'uai-feedback-warning-subtle', 'uai-content-primary'],
          ['error', 'uai-feedback-error-subtle', 'uai-content-primary'],
          ['surface', 'uai-surface-muted', 'uai-content-secondary'],
        ])('color="%s" uses %s with %s', async (color, background, text) => {
          const page = await setup(`<uai-avatar name="Ana" color="${color}"></uai-avatar>`, { theme });
          const host = await style(page, ['background-color', 'color'], AVATAR);

          expect(host['background-color']).toBe(await token(page, background, 'background-color'));
          expect(host.color).toBe(await token(page, text));
        });
      });
    }
  });

  describe('Requirement: Upload', () => {
    it('Scenario: Ativar pelo teclado — Enter on the focused open-upload avatar opens the file chooser and emits uaiClickAvatar', async () => {
      const page = await setup(
        `<button id="before">Before</button><uai-avatar id="avatar" name="Ana Silva" open-upload></uai-avatar>`,
      );

      expect(await tabFromBefore(page)).toBe('avatar');
      await press(page, 'Enter');

      expect(await fileClicks(page)).toBe(1);
      expect(await details(page, 'uaiClickAvatar')).toEqual(['keydown']);
    });

    it('activates with Space and with a click when open-upload is active', async () => {
      const page = await setup(
        `<button id="before">Before</button><uai-avatar id="avatar" name="Ana Silva" open-upload></uai-avatar>`,
      );

      await tabFromBefore(page);
      await press(page, 'Space');
      expect(await fileClicks(page)).toBe(1);

      await page.click(TAG);
      await page.waitForChanges();
      expect(await fileClicks(page)).toBe(2);
      expect((await details(page, 'uaiClickAvatar')).length).toBe(2);
    });

    it('ignores other keys', async () => {
      const page = await setup(
        `<button id="before">Before</button><uai-avatar id="avatar" name="Ana" open-upload></uai-avatar>`,
      );

      await tabFromBefore(page);
      await press(page, 'a');

      expect(await fileClicks(page)).toBe(0);
      expect(await events(page, 'uaiClickAvatar')).toEqual([]);
    });

    it('with upload only, is a button that emits uaiClickAvatar without opening the file chooser', async () => {
      const page = await setup(
        `<button id="before">Before</button><uai-avatar id="avatar" name="Ana Silva" upload></uai-avatar>`,
      );
      const avatar = await state(page);

      expect(avatar.classes).toContain('uai-avatar--upload');
      expect([avatar.role, avatar.tabindex, avatar.label]).toEqual(['button', '0', 'Ana Silva']);
      expect(avatar.upload).toBe('upload');

      expect(await tabFromBefore(page)).toBe('avatar');
      await press(page, 'Enter');
      expect(await details(page, 'uaiClickAvatar')).toEqual(['keydown']);
      expect(await fileClicks(page)).toBe(0);
    });

    it('names the upload button "Avatar" without a name and renders a hidden image file input', async () => {
      const page = await setup(`<uai-avatar open-upload></uai-avatar>`);
      const avatar = await state(page);

      expect(avatar.classes).toContain('uai-avatar--upload');
      expect([avatar.role, avatar.tabindex, avatar.label, avatar.hidden]).toEqual(['button', '0', 'Avatar', null]);
      expect(avatar.upload).toBe('upload');
      expect(avatar.file).toEqual({ type: 'file', accept: 'image/*', shown: false });
    });

    it('shows the upload icon over overlay/default on hover and on focus', async () => {
      const page = await setup(
        `<button id="before">Before</button><uai-avatar id="avatar" name="Ana" upload></uai-avatar>`,
      );

      expect(await uploadShown(page)).toBe(false);
      await page.hover(TAG);
      await waitUploadShown(page);
      expect((await style(page, ['background-color'], '.avatar__upload'))['background-color']).toBe(
        await token(page, 'uai-overlay-default', 'background-color'),
      );

      await page.mouse.move(0, 400);
      await tabFromBefore(page);
      await waitUploadShown(page);
      expect(await uploadShown(page)).toBe(true);
    });

    it('emits the chosen image as a data URL in uaiImageUpload and shows it as the thumbnail', async () => {
      const page = await setup(`<uai-avatar name="Ana Silva" open-upload></uai-avatar>`);

      await page.$eval(
        TAG,
        (host: HTMLElement, data: string) => {
          const input = host.shadowRoot.querySelector('input.avatar__file') as HTMLInputElement;
          const bytes = Uint8Array.from(atob(data), (c) => c.charCodeAt(0));
          const transfer = new DataTransfer();
          transfer.items.add(new File([bytes], 'photo.png', { type: 'image/png' }));
          input.files = transfer.files;
          input.dispatchEvent(new Event('change', { bubbles: true }));
        },
        PNG,
      );
      await page.waitForFunction(() => (window as any).events.some(([name]) => name === 'uaiImageUpload'), {
        timeout: 2000,
      });
      await page.waitForChanges();

      const [url] = await details(page, 'uaiImageUpload');
      expect(url).toBe(IMAGE);
      expect((await state(page)).image).toEqual({ src: IMAGE, alt: '' });
      expect(await page.$eval(TAG, (el: any) => el.thumbnail)).toBe(IMAGE);
      expect(await events(page, 'bdsImageUpload')).toEqual([]);
    });

    it('Scenario: Avatar estático — not focusable, role="img" named by the name', async () => {
      const page = await setup(`
        <button id="before">Before</button>
        <uai-avatar id="avatar" name="Ana Silva"></uai-avatar>
        <button id="after">After</button>`);
      const avatar = await state(page);

      expect([avatar.role, avatar.label, avatar.tabindex, avatar.hidden]).toEqual(['img', 'Ana Silva', null, null]);
      expect(avatar.classes).not.toContain('uai-avatar--upload');
      expect(avatar.upload).toBeNull();
      expect(await tabFromBefore(page)).toBe('after');
    });

    it('hides the static avatar without a name from assistive technology', async () => {
      const page = await setup(`<uai-avatar></uai-avatar>`);
      const avatar = await state(page);

      expect([avatar.role, avatar.label, avatar.hidden]).toEqual([null, null, 'true']);
    });

    it('transitions the upload layer with a duration token by default', async () => {
      const page = await setup(`<uai-avatar name="Ana" upload></uai-avatar>`);
      const durations = (await style(page, ['transition-duration'], '.avatar__upload'))['transition-duration'];

      expect(durations.split(', ').some((d) => d !== '0s')).toBe(true);
    });

    it('with prefers-reduced-motion: reduce, shows the upload layer without transition', async () => {
      const page = await setup(`<uai-avatar name="Ana" upload></uai-avatar>`, { reducedMotion: true });
      const durations = (await style(page, ['transition-duration'], '.avatar__upload'))['transition-duration'];

      expect(durations.split(', ').every((d) => d === '0s')).toBe(true);
      await page.hover(TAG);
      await page.waitForChanges();
      expect(await uploadShown(page)).toBe(true);
    });
  });

  describe('Requirement: Contador e visibilidade', () => {
    it('Scenario: Contador — ellipsis="5" shows +5', async () => {
      const page = await setup(`<uai-avatar ellipsis="5"></uai-avatar>`);
      expect((await state(page)).ellipsis).toBe('+5');
    });

    it('Scenario: Escondido — the hidden attribute removes the avatar from the page', async () => {
      const page = await setup(`<uai-avatar name="Ana Silva" hidden></uai-avatar>`);
      const shown = await page.$eval(TAG, (el: HTMLElement) => ({
        display: getComputedStyle(el).display,
        width: el.offsetWidth,
      }));

      expect(shown).toEqual({ display: 'none', width: 0 });
    });
  });

  describe('Requirement: Tamanhos e tipografia', () => {
    for (const theme of ['light', 'dark']) {
      describe(theme, () => {
        it('Scenario: Tamanho padrão — without size the avatar uses sizing/3xl (48px)', async () => {
          const page = await setup(`<uai-avatar name="Ana Silva"></uai-avatar>`, { theme });
          const host = await style(page, ['width', 'height']);

          expect((await state(page)).classes).toContain('uai-avatar--size-standard');
          expect(host).toEqual({ width: '48px', height: '48px' });
          expect(host.width).toBe(await token(page, 'uai-sizing-3xl', 'width'));
        });
      });
    }

    it.each(SIZES)('size="%s" uses %s and %s with regular weight', async (size, sizing, fontSize) => {
      const page = await setup(`<uai-avatar size="${size}" name="Ana Silva"></uai-avatar>`);
      const host = await style(page, ['width', 'height']);
      const circle = await style(page, ['border-radius'], AVATAR);
      const initials = await style(page, ['font-size', 'font-weight'], 'span.avatar__initials');

      expect((await state(page)).classes).toContain(`uai-avatar--size-${size}`);
      expect(host.width).toBe(`${PIXELS[size]}px`);
      expect(host.height).toBe(`${PIXELS[size]}px`);
      expect(host.width).toBe(await token(page, sizing, 'width'));
      expect(circle['border-radius']).toBe(await token(page, 'uai-radius-full', 'border-radius'));
      expect(initials['font-size']).toBe(await token(page, fontSize, 'font-size'));
      expect(initials['font-weight']).toBe(await token(page, 'uai-font-weight-regular', 'font-weight'));
    });

    it('falls back to standard with a warning for an unknown size', async () => {
      const page = await setup(`<uai-avatar size="huge" name="Ana"></uai-avatar>`);

      expect((await state(page)).classes).toContain('uai-avatar--size-standard');
      expect(warningsAbout(page, /huge/)).toHaveLength(1);
    });
  });
});
