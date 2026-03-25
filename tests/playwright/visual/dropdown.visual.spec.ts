import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Dropdown - Visual Regression', () => {
  test('default closed state', async ({ storybook }) => {
    await storybook.screenshotStory('components-dropdown--properties', 'dropdown-default');
  });

  test('opened state', async ({ storybook, page }) => {
    await storybook.goto('components-dropdown--properties');

    // Open dropdown via shadow DOM
    await page.evaluate(() => {
      const dropdown = document.querySelector('bds-dropdown') as any;
      if (dropdown?.toggle) dropdown.toggle();
      else if (dropdown?.setOpen) dropdown.setOpen();
      else {
        const trigger = dropdown?.shadowRoot?.querySelector(
          'button, .trigger, [class*="trigger"], [class*="dropdown"]',
        );
        if (trigger) (trigger as HTMLElement).click();
      }
    });
    await page.waitForTimeout(500);

    await expect(page.locator('#storybook-root, #root').first()).toHaveScreenshot('dropdown-opened.png');
  });
});
