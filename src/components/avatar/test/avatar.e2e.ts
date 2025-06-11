import { newE2EPage } from '@stencil/core/testing';

describe('bds-avatar e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-avatar name="Michael Scott"></bds-avatar>`,
    });
  });

  describe('Properties', () => {
    it('should render avatar with correct name', async () => {
      const avatar = await page.find('bds-avatar');
      const name = await avatar.getProperty('name');
      expect(name).toBe('Michael Scott');
    });

    it('should render avatar with correct thumbnail', async () => {
      page = await newE2EPage({
        html: `<bds-avatar thumbnail="https://www.blip.ai/scripts-bot/icons/blipinho-widget.svg"></bds-avatar>`,
      });

      const avatar = await page.find('bds-avatar');
      const thumbnail = await avatar.getProperty('thumbnail');
      expect(thumbnail).toBe('https://www.blip.ai/scripts-bot/icons/blipinho-widget.svg');
    });
  });

  describe('Events', () => {
    it('should emit bdsClickAvatar event when clicked', async () => {
      page = await newE2EPage({
        html: `<bds-avatar name="Michael Scott" upload="true"></bds-avatar>`,
      });

      const avatar = await page.find('bds-avatar');
      const bdsClickAvatarEvent = await avatar.spyOnEvent('bdsClickAvatar');

      await avatar.click();
      await page.waitForChanges();

      expect(bdsClickAvatarEvent).toHaveReceivedEvent();
    });
  });

  describe('Accessibility', () => {
    it('should be accessible via Tab navigation', async () => {
      page = await newE2EPage({
        html: `
          <button>Previous button</button>
          <bds-avatar name="Michael Scott"></bds-avatar>
        `,
      });

      await page.focus('button');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      expect(focusedElement).toBe('BDS-AVATAR');
    });
  });
});