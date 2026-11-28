import { test, expect, Page } from '@playwright/test';

const open = async (page: Page, story: string) => {
  await page.goto(`/iframe.html?id=uai-components-rich-text--${story}&viewMode=story`);
  const editor = page.locator('uai-rich-text .rich-text__content');
  // The first test of a run waits for Storybook to compile and the components to hydrate.
  await expect(editor).toBeVisible({ timeout: 30_000 });
  return editor;
};

const content = (page: Page) => page.locator('uai-rich-text').evaluate((el: any) => el.getContent() as Promise<string>);

const typeAndSelect = async (page: Page, text: string) => {
  await page.locator('uai-rich-text .rich-text__content').click();
  await page.keyboard.type(text);
  await page.keyboard.press('Shift+Home');
};

test.describe('UaiRichText - Storybook', () => {
  test('colors the selected text from the palette', async ({ page }) => {
    await open(page, 'empty');
    await typeAndSelect(page, 'Texto');
    await page.getByRole('button', { name: 'Cor do texto', exact: true }).click();
    await page.getByRole('button', { name: 'Vermelho', exact: true }).click();
    expect(await content(page)).toMatch(/<span style="color: (rgb\(207, 0, 34\)|#cf0022);">Texto<\/span>/);
  });

  test('highlights the selected text and keeps it readable with the dark text color', async ({ page }) => {
    await open(page, 'empty');
    await typeAndSelect(page, 'Destaque');
    await page.getByRole('button', { name: 'Cor de destaque', exact: true }).click();
    await page.getByRole('button', { name: 'Laranja claro', exact: true }).click();
    const html = await content(page);
    expect(html).toMatch(/background-color: (rgb\(255, 247, 237\)|#fff7ed)/);
    expect(html).toMatch(/[^-]color: (rgb\(36, 39, 41\)|#242729)/);
  });

  test('turns the selected text into a link, adding https://', async ({ page }) => {
    await open(page, 'empty');
    await typeAndSelect(page, 'Blip');
    await page.getByRole('button', { name: 'Link', exact: true }).click();
    await page.getByLabel('Endereço do link').fill('blip.ai');
    await page.getByRole('button', { name: 'Aplicar', exact: true }).click();
    expect(await content(page)).toContain('href="https://blip.ai"');
  });

  test('inserts an image by address with its description', async ({ page }) => {
    await (await open(page, 'empty')).click();
    await page.getByRole('button', { name: 'Imagem', exact: true }).click();
    await page.getByLabel('Endereço da imagem').fill('https://cdn.blip.ai/blip-tokens/2.6.0/logos/blip-chat.svg');
    await page.getByLabel('Descrição (texto alternativo)').fill('Logo');
    await page.getByRole('button', { name: 'Inserir imagem', exact: true }).click();
    expect(await content(page)).toContain(
      '<img src="https://cdn.blip.ai/blip-tokens/2.6.0/logos/blip-chat.svg" alt="Logo">',
    );
  });

  test('inserts a table and adds a row from the table menu', async ({ page }) => {
    await (await open(page, 'empty')).click();
    await page.getByRole('button', { name: 'Tabela', exact: true }).click();
    await page.getByRole('button', { name: 'Inserir tabela 3 × 3', exact: true }).click();
    expect((await content(page)).match(/<tr>/g)).toHaveLength(3);
    await page.getByRole('button', { name: 'Tabela', exact: true }).click();
    await page.getByRole('button', { name: 'Linha abaixo', exact: true }).click();
    expect((await content(page)).match(/<tr>/g)).toHaveLength(4);
  });

  test('keeps only safe markup from the value', async ({ page }) => {
    await open(page, 'empty');
    await page.locator('uai-rich-text').evaluate((el: any) => {
      el.value =
        '<p onclick="alert(1)">x<script>alert(2)</script><a href="javascript:alert(3)">y</a><img src="data:image/png;base64,AAAA"></p>';
    });
    await expect.poll(() => content(page)).toBe('<p>xy</p>');
  });
});
