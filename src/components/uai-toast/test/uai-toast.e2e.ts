import { E2EPage, newE2EPage } from '@stencil/core/testing';

const create = (body: string): Promise<E2EPage> =>
  newE2EPage({ html: `<uai-theme-provider theme="light">${body}</uai-theme-provider>` });

const prop = (page: E2EPage, selector: string, name: string) =>
  page.evaluate((s, n) => (document.querySelector(s) as any)?.[n], selector, name);

const closeEvents = async (page: E2EPage) => {
  await page.evaluate(() => {
    (window as any).reasons = [];
    document.addEventListener('uaiToastClose', (event: CustomEvent) =>
      (window as any).reasons.push(event.detail.reason),
    );
  });
  return () => page.evaluate(() => (window as any).reasons as string[]);
};

describe('uai-toast', () => {
  it('opens with show() inside a container created in the theme provider, and leaves the page after closing', async () => {
    const page = await create('<p>Página</p>');
    await page.evaluate(async () => {
      const toast = document.createElement('uai-toast') as any;
      document.body.appendChild(toast);
      await toast.componentOnReady();
      await toast.show({ variant: 'success', heading: 'Salvo', message: 'Alterações salvas', position: 'top-right' });
    });
    await page.waitForChanges();

    const placement = await page.evaluate(() => {
      const toast = document.querySelector('uai-toast') as any;
      const container = toast.parentElement as any;
      return {
        container: container.localName,
        position: container.position,
        inProvider: container.parentElement.localName,
        popoverOpen: container.matches(':popover-open'),
        variant: toast.variant,
        open: toast.open,
      };
    });
    expect(placement).toEqual({
      container: 'uai-toast-container',
      position: 'top-right',
      inProvider: 'uai-theme-provider',
      popoverOpen: true,
      variant: 'success',
      open: true,
    });

    const reasons = await closeEvents(page);
    const close = await page.find('uai-toast >>> .toast__close');
    await close.click();
    await page.waitForChanges();
    expect(await reasons()).toEqual(['close-button']);
    await page.waitForFunction(() => !document.querySelector('uai-toast'));
  });

  it('reuses the container of the same position and stacks the toasts', async () => {
    const page = await create('');
    await page.evaluate(async () => {
      for (const position of ['bottom-left', 'bottom-left', 'top-center']) {
        const toast = document.createElement('uai-toast') as any;
        document.body.appendChild(toast);
        await toast.componentOnReady();
        await toast.show({ message: 'Texto', position });
      }
    });
    const containers = await page.evaluate(() =>
      Array.from(document.querySelectorAll('uai-toast-container')).map((c: any) => [c.position, c.children.length]),
    );
    expect(containers).toEqual([
      ['bottom-left', 2],
      ['top-center', 1],
    ]);
  });

  it('closes by itself after the duration, and the time pauses while the mouse is on it', async () => {
    const page = await create(
      '<uai-toast-container><uai-toast id="toast" message="Texto" duration="600"></uai-toast></uai-toast-container>',
    );
    const reasons = await closeEvents(page);
    await page.evaluate(() => (document.getElementById('toast') as any).show());
    await page.waitForChanges();

    const toast = await page.find('#toast');
    await toast.hover();
    await new Promise((resolve) => setTimeout(resolve, 900));
    expect(await prop(page, '#toast', 'open')).toBe(true);

    await page.mouse.move(0, 0);
    await page.waitForFunction(() => !(document.getElementById('toast') as any).open, { timeout: 2000 });
    expect(await reasons()).toEqual(['timeout']);
    // Declared inside a container, the toast stays in the page, closed.
    expect(await page.evaluate(() => !!document.getElementById('toast'))).toBe(true);
  });

  it('emits uaiToastAction and closes when the action is clicked', async () => {
    const page = await create(
      '<uai-toast-container><uai-toast id="toast" message="Mensagem apagada" action-label="Desfazer" open></uai-toast></uai-toast-container>',
    );
    const action = await page.spyOnEvent('uaiToastAction');
    const reasons = await closeEvents(page);
    const button = await page.find('uai-toast >>> .toast__action');
    await button.click();
    await page.waitForChanges();
    expect(action).toHaveReceivedEventTimes(1);
    expect(await reasons()).toEqual(['action']);
    expect(await prop(page, '#toast', 'open')).toBe(false);
  });

  it('closes with Escape while the focus is on it, and with close()', async () => {
    const page = await create(
      '<uai-toast-container><uai-toast id="a" message="A" action-label="Ver" open></uai-toast><uai-toast id="b" message="B" open></uai-toast></uai-toast-container>',
    );
    const reasons = await closeEvents(page);
    const action = await page.find('#a >>> .toast__action');
    await action.focus();
    await page.keyboard.press('Escape');
    await page.waitForChanges();
    expect(await prop(page, '#a', 'open')).toBe(false);

    await page.evaluate(() => (document.getElementById('b') as any).close());
    await page.waitForChanges();
    expect(await prop(page, '#b', 'open')).toBe(false);
    expect(await reasons()).toEqual(['escape', 'method']);
  });

  it('is announced by the container: polite for info, assertive for errors', async () => {
    const page = await create(
      '<uai-toast-container><uai-toast id="info" variant="info" heading="Novidade" message="Texto"></uai-toast><uai-toast id="error" variant="error" message="Falhou"></uai-toast></uai-toast-container>',
    );
    const regions = () =>
      page.evaluate(() => {
        const shadow = document.querySelector('uai-toast-container').shadowRoot;
        return Array.from(shadow.querySelectorAll('[aria-live]')).map((r) => [
          r.getAttribute('aria-live'),
          r.textContent,
        ]);
      });

    await page.evaluate(() => (document.getElementById('info') as any).show());
    await page.waitForFunction(
      () => document.querySelector('uai-toast-container').shadowRoot.querySelector('[aria-live="polite"]').textContent,
    );
    expect(await regions()).toEqual([
      ['polite', 'Novidade. Texto'],
      ['assertive', ''],
    ]);

    await page.evaluate(() => (document.getElementById('error') as any).show());
    await page.waitForFunction(
      () =>
        document.querySelector('uai-toast-container').shadowRoot.querySelector('[aria-live="assertive"]').textContent,
    );
    expect((await regions())[1]).toEqual(['assertive', 'Falhou']);

    // Inside a container the toast is not a live region itself, so it is not announced twice.
    const role = await page.evaluate(() =>
      document.getElementById('error').shadowRoot.querySelector('.toast').getAttribute('role'),
    );
    expect(role).toBeNull();
  });

  it('names the region and keeps an unknown position on bottom-left', async () => {
    const page = await create('<uai-toast-container position="middle"></uai-toast-container>');
    const container = await page.find('uai-toast-container');
    expect(container.getAttribute('role')).toBe('region');
    expect(container.getAttribute('aria-label')).toBe('Notificações');
    expect(container).toHaveClass('uai-toast-container--bottom-left');
  });
});
