import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { UaiModal } from '../uai-modal';

// The stack of open modals and the document scroll lock are module state shared by every modal on the page. They live
// in their own spec file so that only the modals of these tests are registered, and each test removes its own.
describe('uai-modal stack and scroll lock', () => {
  let page: SpecPage;
  const overflow = () => document.body.style.getPropertyValue('overflow');
  const press = (key: string) => document.dispatchEvent(new KeyboardEvent('keydown', { key }));
  const modal = (id: string) => page.body.querySelector(`#${id}`) as HTMLUaiModalElement;

  const create = async (html: string) => {
    page = await newSpecPage({ components: [UaiModal], html });
  };

  afterEach(async () => {
    page.body.querySelectorAll('uai-modal').forEach((element) => element.remove());
    await page.waitForChanges();
  });

  describe('stacked modals', () => {
    it('sends the keyboard only to the top modal', async () => {
      await create('<uai-modal id="below" open="true"></uai-modal><uai-modal id="top" open="true"></uai-modal>');

      press('Enter');
      await page.waitForChanges();
      expect(modal('top').open).toBe(false);
      expect(modal('below').open).toBe(true);

      press('Enter');
      await page.waitForChanges();
      expect(modal('below').open).toBe(false);
    });

    it('hands the keyboard back to the modal below when the top one closes', async () => {
      await create('<uai-modal id="below" open="true"></uai-modal><uai-modal id="top"></uai-modal>');
      modal('top').open = true;
      await page.waitForChanges();
      modal('top').open = false;
      await page.waitForChanges();

      press('Enter');
      await page.waitForChanges();
      expect(modal('below').open).toBe(false);
    });
  });

  describe('document scroll', () => {
    it('locks the scroll while open and restores the previous value on close', async () => {
      await create('<uai-modal id="a"></uai-modal>');
      document.body.style.setProperty('overflow', 'auto');
      modal('a').open = true;
      await page.waitForChanges();
      expect(overflow()).toBe('hidden');
      modal('a').open = false;
      await page.waitForChanges();
      expect(overflow()).toBe('auto');
    });

    it('keeps the scroll locked until the last open modal closes', async () => {
      await create('<uai-modal id="a" open="true"></uai-modal><uai-modal id="b" open="true"></uai-modal>');
      modal('a').open = false;
      await page.waitForChanges();
      expect(overflow()).toBe('hidden');
      modal('b').open = false;
      await page.waitForChanges();
      expect(overflow()).not.toBe('hidden');
    });

    it('releases the lock when a modal is removed while open', async () => {
      await create('<uai-modal id="a" open="true"></uai-modal>');
      expect(overflow()).toBe('hidden');
      modal('a').remove();
      await page.waitForChanges();
      expect(overflow()).not.toBe('hidden');
    });
  });
});
