import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Accordion - Visual Regression', () => {
  test('default closed state', async ({ storybook }) => {
    await storybook.screenshotStory('components-accordion--properties', 'accordion-default');
  });

  test('opened state', async ({ storybook, page }) => {
    await storybook.goto('components-accordion--properties');

    // Open accordion via shadow DOM click
    await page.evaluate(() => {
      const accordion = document.querySelector('bds-accordion') as any;
      const header = accordion?.shadowRoot?.querySelector('.accordion__header, .header, [class*="header"], button');
      if (header) (header as HTMLElement).click();
      else if (accordion?.toggle) accordion.toggle();
      else if (accordion?.open) accordion.open();
    });
    await page.waitForTimeout(500);

    await expect(page.locator('#storybook-root, #root').first()).toHaveScreenshot('accordion-opened.png');
  });
});
