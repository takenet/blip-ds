import { newE2EPage } from '@stencil/core/testing';

describe('switch e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-switch></bds-switch>`,
    });
  });

  it('should be disable', async () => {
    const bdsSwitch = await page.find('bds-switch');

    bdsSwitch.setProperty('disabled', true);

    await page.waitForChanges();

    const value = await bdsSwitch.getProperty('disabled');

    expect(value).toBe(true);
  });

  it('should not be disable', async () => {
    const bdsSwitch = await page.find('bds-switch');

    bdsSwitch.setProperty('disabled', false);

    await page.waitForChanges();

    const value = await bdsSwitch.getProperty('disabled');

    expect(value).toBe(false);
  });

  it('should be checked', async () => {
    const bdsSwitch = await page.find('bds-switch');

    bdsSwitch.setProperty('checked', true);

    await page.waitForChanges();

    const value = await bdsSwitch.getProperty('checked');

    expect(value).toBe(true);
  });

  it('should not be checked', async () => {
    const bdsSwitch = await page.find('bds-switch');

    bdsSwitch.setProperty('checked', false);

    await page.waitForChanges();

    const value = await bdsSwitch.getProperty('checked');

    expect(value).toBe(false);
  });
});
