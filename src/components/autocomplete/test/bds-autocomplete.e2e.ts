import { newE2EPage } from '@stencil/core/testing';

describe('autocomplete e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-autocomplete></bds-autocomplete>`,
    });
  });

  it('should be disable', async () => {
    const bdsAutocomplete = await page.find('bds-autocomplete');

    bdsAutocomplete.setProperty('disabled', true);

    await page.waitForChanges();

    const value = await bdsAutocomplete.getProperty('disabled');

    expect(value).toBe(true);
  });

  it('should not be disable', async () => {
    const bdsAutocomplete = await page.find('bds-autocomplete');

    bdsAutocomplete.setProperty('disabled', false);

    await page.waitForChanges();

    const value = await bdsAutocomplete.getProperty('disabled');

    expect(value).toBe(false);
  });

  it('should be danger', async () => {
    const bdsAutocomplete = await page.find('bds-autocomplete');

    bdsAutocomplete.setProperty('danger', true);

    await page.waitForChanges();

    const value = await bdsAutocomplete.getProperty('danger');

    expect(value).toBe(true);
  });

  it('should not be danger', async () => {
    const bdsAutocomplete = await page.find('bds-autocomplete');

    bdsAutocomplete.setProperty('danger', false);

    await page.waitForChanges();

    const value = await bdsAutocomplete.getProperty('danger');

    expect(value).toBe(false);
  });
});
