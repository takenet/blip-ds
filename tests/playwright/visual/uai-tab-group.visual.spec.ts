import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

test.describe('UaiTabGroup — w2-uai-tabs visual', () => {
  for (const story of ['playground', 'states', 'overflow']) {
    for (const theme of ['light', 'dark']) {
      test(`Tokens / tema e estados: ${story} ${theme}`, async ({ page, storybook }) => {
        await gotoStoryUrl(page, `/iframe.html?id=uai-tab-group--${story}&viewMode=story&globals=hasTheme:${theme}`);
        await expect(page.getByRole('tablist').first()).toBeVisible();
        await expect(storybook.root()).toHaveScreenshot(`uai-tab-group-${story}-${theme}.png`);
      });
    }
  }

  test('Tokens / tema e estados: hover e pressed sem trocar seleção', async ({ page, storybook }) => {
    await storybook.goto('uai-tab-group--playground');
    const tab = page.locator('[role="tab"]:not([aria-disabled="true"])').first();
    await tab.hover();
    await expect(storybook.root()).toHaveScreenshot('uai-tab-group-hover.png');
    await page.mouse.down();
    try {
      await expect(storybook.root()).toHaveScreenshot('uai-tab-group-pressed.png');
    } finally {
      await page.mouse.up();
    }
  });

  for (const theme of ['light', 'dark']) {
    test(`Acessibilidade / teclado sem ativação implícita: foco ${theme}`, async ({ page, storybook }) => {
      await gotoStoryUrl(page, `/iframe.html?id=uai-tab-group--playground&viewMode=story&globals=hasTheme:${theme}`);
      const tabs = page.getByRole('tab');
      await tabs.first().focus();
      await page.keyboard.press('ArrowRight');
      await expect(page.locator('[role="tab"]:focus')).toHaveCount(1);
      await expect(storybook.root()).toHaveScreenshot(`uai-tab-group-focus-${theme}.png`);
    });
  }

  test('Tokens / tema e estados: forced colors conserva seleção, erro e foco', async ({ page, storybook }) => {
    await page.emulateMedia({ forcedColors: 'active' });
    await storybook.goto('uai-tab-group--states');
    await page.getByRole('tab').first().focus();
    await page.keyboard.press('ArrowRight');
    await expect(storybook.root()).toHaveScreenshot('uai-tab-group-states-forced-colors.png');
  });

  test('Tokens / movimento reduzido: badges e foco no último item com overflow', async ({ page, storybook }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await storybook.goto('uai-tab-group--overflow');
    await page.getByRole('tab').first().focus();
    await page.keyboard.press('End');
    await page.keyboard.press('Enter');
    const focused = page.locator('[role="tab"]:focus');
    await expect(focused).toHaveAttribute('aria-selected', 'true');
    await expect(focused).toBeInViewport();
    await expect(storybook.root()).toHaveScreenshot('uai-tab-group-overflow-reduced-motion.png');
  });
});
