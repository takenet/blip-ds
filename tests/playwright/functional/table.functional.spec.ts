import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Data Table - Functional Tests', () => {
  test.beforeEach(async ({ storybook }) => {
    await storybook.goto('components-data-table--properties');
  });

  test('renders correctly', async ({ page }) => {
    const exists = await page.evaluate(() => !!document.querySelector('bds-data-table'));
    expect(exists).toBe(true);
  });

  test('renders table rows', async ({ page }) => {
    const hasRows = await page.evaluate(() => {
      const table = document.querySelector('bds-data-table') as any;
      const rows = table?.shadowRoot?.querySelectorAll('tr, .row, [class*="row"]');
      return rows ? rows.length > 0 : false;
    });
    expect(hasRows).toBe(true);
  });
});
