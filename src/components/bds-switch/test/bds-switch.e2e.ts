import { newE2EPage } from '@stencil/core/testing';

describe('switch e2e tests', () => {
  it('should must disable', async () => {
    const page = await newE2EPage({
      html: `<bds-switch></bds-switch>`,
    });

    const bdsSwitch = await page.find('bds-switch');

    bdsSwitch.setProperty('disabled', 'true');

    await page.waitForChanges();

    let value = await bdsSwitch.getProperty('disabled');

    expect(value).toBe('true');

    bdsSwitch.setProperty('disabled', 'false');

    await page.waitForChanges();

    value = await bdsSwitch.getProperty('disabled');

    expect(value).toBe('false');

    bdsSwitch.setProperty('checked', 'false');

    await page.waitForChanges();

    value = await bdsSwitch.getProperty('checked');

    expect(value).toBe('false');

    bdsSwitch.setProperty('checked', 'true');

    await page.waitForChanges();

    value = await bdsSwitch.getProperty('checked');

    expect(value).toBe('true');
  });
});
