import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('tooltip e2e tests', () => {
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-radio-group>
            <bds-radio value="radio1"></bds-radio>
            <bds-radio value="radio2"></bds-radio>
            <bds-radio value="radio3"></bds-radio>
        </bds-radio-group>
        `,
    });
  });
  it('should have only a single radio checked and the value of last selected radio', async () => {
    await (await page.find('bds-radio[value="radio1"]')).click();
    await (await page.find('bds-radio[value="radio3"]')).click();
    await (await page.find('bds-radio[value="radio2"]')).click();

    expect((await page.findAll('bds-radio[checked]')).length).toBe(1);
    expect(await (await page.find('bds-radio-group')).getProperty('value')).toBe('radio2');
  });
});
