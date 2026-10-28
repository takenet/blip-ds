import { E2EPage, newE2EPage } from '@stencil/core/testing';

const setup = async (content: string) => {
  const page = await newE2EPage({
    html: `<uai-theme-provider theme="light">${content}</uai-theme-provider>`,
  });
  await page.evaluate(() => {
    (window as any).submissions = [];
    (window as any).submitEvents = 0;
    document.addEventListener('uaiSubmit', () => (window as any).submitEvents++);
    document.querySelectorAll('form').forEach((form) =>
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        (window as any).submissions.push([...new FormData(form).entries()]);
      }),
    );
  });
  return page;
};

const submissions = (page: E2EPage) => page.evaluate(() => (window as any).submissions);
const typeInto = async (page: E2EPage, text: string) => {
  await (await page.find('uai-textarea >>> textarea')).type(text);
  await page.waitForChanges();
};

describe('uai-textarea e2e', () => {
  it('supports short and medium sizes, explicit rows and automatic growth', async () => {
    const page = await setup(`
      <uai-textarea id="short" label="Curto" size="short"></uai-textarea>
      <uai-textarea id="medium" label="Médio"></uai-textarea>
      <uai-textarea id="rows" label="Linhas" size="short" rows="3"></uai-textarea>`);
    const sizes = await page.evaluate(() =>
      ['short', 'medium', 'rows'].map((id) => {
        const field = document.getElementById(id);
        const control = field.shadowRoot.querySelector('.textarea__control');
        return {
          rows: field.shadowRoot.querySelector('textarea').rows,
          height: control.getBoundingClientRect().height,
        };
      }),
    );

    expect(sizes.map(({ rows }) => rows)).toEqual([1, 3, 3]);
    expect(sizes[0].height).toBeLessThan(sizes[1].height);
    expect(sizes[2].height).toBeGreaterThan(sizes[0].height);
  });

  it('submits values by name or inputName, restores the initial value on reset, and follows fieldset disabled', async () => {
    const page = await setup(`
      <form>
        <fieldset id="group">
          <uai-textarea label="Descrição" name="description" value="Inicial"></uai-textarea>
          <uai-textarea label="Resumo" input-name="summary" value="Resumo"></uai-textarea>
        </fieldset>
        <button id="submit">Enviar</button>
        <button id="reset" type="reset">Limpar</button>
      </form>`);

    await typeInto(page, ' alterado');
    await page.click('#submit');
    expect(await submissions(page)).toEqual([[['description', 'Inicial alterado'], ['summary', 'Resumo']]]);

    await page.click('#reset');
    await page.waitForChanges();
    expect(await page.$eval('uai-textarea[name="description"]', (el: any) => el.value)).toBe('Inicial');

    await page.$eval('uai-textarea[input-name="summary"]', (el: any) => (el.inputName = 'notes'));
    await page.waitForChanges();
    await page.click('#submit');
    expect((await submissions(page)).at(-1)).toEqual([['description', 'Inicial'], ['notes', 'Resumo']]);

    await page.$eval('#group', (el: HTMLFieldSetElement) => (el.disabled = true));
    await page.waitForChanges();
    expect(await page.$eval('uai-textarea[name="description"]', (el) =>
      el.shadowRoot.querySelector('textarea').disabled,
    )).toBe(true);
    await page.click('#submit');
    expect((await submissions(page)).at(-1)).toEqual([]);
  });

  it('retains newline on Enter and cancels it only for isSubmit', async () => {
    const page = await setup(`
      <uai-textarea label="Mensagem" name="message"></uai-textarea>
      <uai-textarea label="Busca rápida" is-submit></uai-textarea>`);

    const first = await page.find('uai-textarea >>> textarea');
    await first.type('linha');
    await page.keyboard.press('Enter');
    await page.waitForChanges();
    expect(await page.$eval('uai-textarea[name="message"]', (el: any) => el.value)).toBe('linha\n');

    const second = await page.find('uai-textarea:nth-of-type(2) >>> textarea');
    await second.type('buscar');
    await page.evaluate(() => {
      const field = document.querySelectorAll('uai-textarea')[1].shadowRoot.querySelector('textarea');
      field.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', isComposing: true, bubbles: true }));
    });
    expect(await page.evaluate(() => (window as any).submitEvents)).toBe(1);
    expect(await page.$eval('uai-textarea:nth-of-type(2)', (el: any) => el.value)).toBe('buscar');

    await page.keyboard.press('Enter');
    await page.waitForChanges();
    expect(await page.$eval('uai-textarea:nth-of-type(2)', (el: any) => el.value)).toBe('');
  });

  it('blocks submission for a pattern mismatch and shows the supplied message', async () => {
    const page = await setup(`
      <form>
        <uai-textarea label="Código" name="code" pattern="[A-Z]{2}" pattern-error-message="Use duas letras."></uai-textarea>
        <button id="submit">Enviar</button>
      </form>`);

    await typeInto(page, 'abc');
    await page.click('#submit');
    await page.waitForChanges();
    expect(await submissions(page)).toEqual([]);
    expect(await page.$eval('uai-textarea', (el) => el.shadowRoot.querySelector('.textarea__message').textContent))
      .toBe('Use duas letras.');
  });

  it('blocks an empty required value and allows submission after it is corrected', async () => {
    const page = await setup(`
      <form>
        <uai-textarea label="Descricao" name="description" required required-error-message="Informe a descricao."></uai-textarea>
        <button id="submit">Enviar</button>
      </form>`);

    await page.click('#submit');
    await page.waitForChanges();
    expect(await submissions(page)).toEqual([]);
    expect(
      await page.$eval('uai-textarea', (el) => el.shadowRoot.querySelector('textarea').getAttribute('aria-invalid')),
    ).toBe('true');
    expect(
      await page.$eval('uai-textarea', (el) => el.shadowRoot.querySelector('.textarea__message').textContent),
    ).toBe('Informe a descricao.');

    await typeInto(page, 'descricao');
    await page.click('#submit');
    expect(await submissions(page)).toEqual([[['description', 'descricao']]]);
  });

  it('grows with content and respects configured height limits', async () => {
    const page = await setup('<uai-textarea label="Descrição" max-height="90"></uai-textarea>');
    const before = await page.$eval('uai-textarea', (el) =>
      el.shadowRoot.querySelector('textarea').getBoundingClientRect().height,
    );

    await typeInto(page, 'linha um\nlinha dois\nlinha tres\nlinha quatro\nlinha cinco');
    await page.waitForFunction(
      (initialHeight) =>
        document.querySelector('uai-textarea').shadowRoot.querySelector('textarea').getBoundingClientRect().height >
        initialHeight,
      { timeout: 2000 },
      before,
    );

    const after = await page.$eval('uai-textarea', (el) =>
      el.shadowRoot.querySelector('textarea').getBoundingClientRect().height,
    );
    expect(after).toBeGreaterThan(before);
    expect(after).toBeLessThanOrEqual(90);
  });

  it('restarts observation after reconnection and recalculates for external value and width changes', async () => {
    const page = await setup(`
      <div id="container" style="width: 600px">
        <uai-textarea label="Descrição" rows="2"></uai-textarea>
      </div>`);
    const initialHeight = await page.$eval('uai-textarea', (el) =>
      el.shadowRoot.querySelector('textarea').getBoundingClientRect().height,
    );
    await page.evaluate(() => {
      const field = document.querySelector('uai-textarea');
      field.remove();
      document.querySelector('#container').appendChild(field);
      field.value = 'Texto longo que ocupa mais de uma linha quando o contêiner fica estreito. '.repeat(5);
    });
    await page.waitForFunction(
      (height) =>
        document.querySelector('uai-textarea').shadowRoot.querySelector('textarea').getBoundingClientRect().height >
        height,
      { timeout: 2000 },
      initialHeight,
    );

    const wideHeight = await page.$eval('uai-textarea', (el) =>
      el.shadowRoot.querySelector('textarea').getBoundingClientRect().height,
    );
    await page.$eval('#container', (el: HTMLElement) => (el.style.width = '180px'));
    await page.waitForFunction(
      (initialHeight) =>
        document.querySelector('uai-textarea').shadowRoot.querySelector('textarea').getBoundingClientRect().height >
        initialHeight,
      { timeout: 2000 },
      wideHeight,
    );
  });

  it('prevents manual resizing for readonly controls', async () => {
    const page = await setup(`
      <uai-textarea label="Editável" resizable></uai-textarea>
      <uai-textarea label="Somente leitura" resizable readonly></uai-textarea>`);
    await page.evaluate(() => {
      document.querySelectorAll('uai-textarea').forEach((field) => (field.autoResize = false));
    });
    await page.waitForChanges();
    const resizeModes = await page.$$eval('uai-textarea', (fields) =>
      fields.map((field) => getComputedStyle(field.shadowRoot.querySelector('textarea')).resize),
    );

    expect(resizeModes).toEqual(['vertical', 'none']);
  });
});
