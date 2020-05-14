import { newE2EPage } from '@stencil/core/testing';

describe('toast e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-toast-container><bds-toast button-action="custom"></bds-toast></bds-toast-container>`,
    });
  });

  it('should open the toast', async () => {
    const toast = await page.find('bds-toast');

    toast.setProperty('show', true);

    await page.waitForChanges();

    expect(toast.shadowRoot.querySelector('.toast')).toHaveClass('show');
  });

  it('should hide the toast', async () => {
    const toast = await page.find('bds-toast');

    toast.setProperty('hide', true);

    await page.waitForChanges();

    expect(toast.shadowRoot.querySelector('.toast')).toHaveClass('hide');
  });

  it('should emit a toastButtonClick event if the action is custom', async () => {
    const spy = await page.spyOnEvent('toastButtonClick');

    const button = await page.find('bds-toast >>> button');

    button.click();
    await page.waitForChanges();

    expect(spy).toHaveReceivedEvent();
  });
});
